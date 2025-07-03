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
        stash name: 'dist', includes: 'dist/**/*', useDefaultExcludes: false
      }
    }

    stage('Deploy') {
  agent none
  steps {
    node('master') {
      unstash 'dist'

      sh 'echo "[DEBUG] Listing root of workspace:" && ls -lah'
      sh 'echo "[DEBUG] Listing dist folder:" && ls -lah dist || echo "dist folder is missing!"'

      sh '''
        if [ ! -d "dist" ]; then
          echo "[ERROR] dist folder not found after unstash"
          exit 1
        fi

        echo "[INFO] Deploying with rsync..."
        rsync -avz --delete dist/ /var/www/missivy.co || {
          echo "[ERROR] rsync failed"
          exit 1
        }
      '''
    }
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
    // always {
    //   echo '🧹 Cleaning up workspace...'
    //   sh 'rm -rf node_modules dist'
    // }
  }
}
