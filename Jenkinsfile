pipeline {
  agent none

  environment {
    REMOTE_PATH = '/var/www/missivy.co'
    REPO_URL = 'https://github.com/Mork7/miss-ivy.git'
  }

  stages {
    stage('Build in Docker') {
      agent {
        docker {
          image 'node:18-alpine'
          args '-u root:root'
        }
      }
      steps {
        git credentialsId: 'github-pat', url: "${REPO_URL}"
        sh 'npm ci || npm install'
        sh 'npm run build'
        // THIS IS THE PROBLEM AREA — MOVE STASH OUTSIDE
      }
    }

    stage('Stash Dist') {
      agent { label 'master' } // OR no label if you want it default
      steps {
        stash name: 'dist', includes: 'dist/**'
      }
    }

    stage('Deploy') {
      agent { label 'master' }
      steps {
        unstash 'dist'
        sh 'rsync -avz --delete dist/ /var/www/missivy.co'
      }
    }
  }

  post {
    always {
      echo '🧹 Cleaning up...'
      // You can safely clean here after this works
    }
  }
}
