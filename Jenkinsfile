pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Clone') {
            steps {
                git url: 'https://github.com/Mork7/miss-ivy.git', credentialsId: 'github-pat'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'rsync -avz --delete dist/ /var/www/miss-ivy.ca'
            }
        }
    }
}
