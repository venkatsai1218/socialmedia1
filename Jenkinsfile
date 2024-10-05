pipeline {
    agent any
    // environment {
    //     NODEJS_HOME = tool name: 'NodeJS 16', type: 'NodeJSInstallation' // Set NodeJS version
    //     PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    // }
    environment {
    NODEJS_HOME = tool name: 'NodeJS 16', type: 'NodeJSInstallation'
    PATH = "${NODEJS_HOME}/bin:${env.PATH}"
}
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/saiprasadr870/social-app'
            }
        }
        stage('Check Node.js Version') {
            steps {
                sh 'node --version'
            }
        }
        stage('Check npm Version') {
            steps {
                sh 'npm --version'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm run build' // Optional, based on your project
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Use pm2 for better control over the process
                sh 'pm2 start npm -- start'
            }
        }
    }
    post {
        success {
            echo 'Application deployed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
