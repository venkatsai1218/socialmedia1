pipeline {
    agent any
    environment {
        NODEJS_HOME = tool 'NodeJS 16' // Set NodeJS version
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/saiprasadr870/social-app'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        // Commented out the Run Tests stage
        // stage('Run Tests') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }
        stage('Build') {
            steps {
                echo 'Building the application...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                sh 'nohup npm start &'
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
