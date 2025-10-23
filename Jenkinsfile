pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git url: 'https://github.com/markfinerty/miss-ivy.git', credentialsId: 'github-pat'
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
                sh 'rsync -avz --delete dist/ /var/www/missivy.co'
            }
        }
    }
}
