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
          args '-u 991:991'
        }
      }
      steps {
        dir('build') {
          deleteDir()
          git credentialsId: 'github-pat', url: "${REPO_URL}"
          sh 'npm ci || npm install'
          sh 'npm run build'
          sh 'chown -R 991:991 dist'
          stash name: 'dist', includes: 'build/dist/**'
        }
      }
    }

    stage('Deploy') {
      agent { label 'master' }
      steps {
        deleteDir()
        unstash 'dist'
        sh 'rsync -avz --delete build/dist/ /var/www/missivy.co'
      }
    }
  }

  post {
    always {
      node('master') {
        echo '🧹 Cleaning up...'
        cleanWs()
      }
    }
  }
}
