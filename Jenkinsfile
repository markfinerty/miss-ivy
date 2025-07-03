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
        // Copy dist/ to a shared workspace path
        sh 'cp -r dist $WORKSPACE/dist'
      }
    }

    stage('Deploy') {
      agent { label 'master' } // switch to host node
      steps {
        sh 'rsync -avz --delete $WORKSPACE/dist/ /var/www/missivy.co'
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
    always {
      echo '🧹 Cleaning up workspace...'
      sh 'rm -rf node_modules dist'
    }
  }
}
