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
          args '-u 991:991' // Ensure container uses Jenkins UID
        }
      }
      steps {
        deleteDir() // 🧹 Wipe workspace before clone to avoid permission carryover
        git credentialsId: 'github-pat', url: "${REPO_URL}"
        sh 'npm ci || npm install'
        sh 'npm run build'
        sh 'chown -R 991:991 dist' // ✅ Make sure Jenkins owns it
        stash name: 'dist', includes: 'dist/**'
      }
    }

    stage('Deploy') {
      agent { label 'master' }
      steps {
        deleteDir() // 🧹 Clean to avoid conflicts with existing workspace contents
        unstash 'dist'
        sh 'rsync -avz --delete dist/ /var/www/missivy.co'
      }
    }
  }

  post {
    always {
      node {
        cleanWs()
      }
    }
  }
}
