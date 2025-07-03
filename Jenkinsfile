pipeline {
  agent {
    docker {
      image 'node:18-alpine'
      args '-u root:root'
    }
  }

  environment {
    REMOTE_PATH = '/var/www/missivy.co'
    REPO_URL = 'https://github.com/Mork7/miss-ivy.git'
  }

  stages {
    stage('Clone Repo') {
      steps {
        git credentialsId: 'github-pat', url: "${REPO_URL}"
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci || npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deploy') {
        agent { label 'jenkins' } // runs on the host instead
        steps {
            sh 'rsync -avz --delete dist/ /var/www/missivy.co'
        }
    }
  }

  post {
    success {
      echo '🚀 Miss Ivy deployed successfully (in Docker container)!'
    }
    failure {
      echo '❌ Dockerized deployment failed!'
    }
    always {
      echo '🧹 Cleaning up workspace...'
      sh 'rm -rf node_modules dist'
    }
  }
}

