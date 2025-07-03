pipeline {
  agent any

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
      steps {
        sh "rsync -avz --delete dist/ $REMOTE_PATH"
      }
    }
  }

  post {
    success {
      echo '🚀 Miss Ivy deployed successfully!'
    }
    failure {
      echo '❌ Deployment failed!'
    }
  }
}
