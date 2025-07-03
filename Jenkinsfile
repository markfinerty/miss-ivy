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
          args '-u 991:991' // ensure files are owned by Jenkins user
        }
      }
      steps {
        git credentialsId: 'github-pat', url: "${REPO_URL}"
        sh 'npm ci || npm install'
        sh 'npm run build'
        sh 'chown -R 991:991 dist' // ✅ ensure Jenkins can access dist
        stash name: 'dist', includes: 'dist/**' // ✅ stash here
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
      cleanWs()
    }
  }
}
