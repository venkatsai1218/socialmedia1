pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/venkatsai1218/socialmedia1.git'
            }
        }
        stage('Install Node.js') {
            steps {
                // Install Node.js using nvm
                sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash'
                sh '. ~/.nvm/nvm.sh && nvm install 16 && nvm use 16'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Use npm to install the required dependencies from package.json
                sh '. ~/.nvm/nvm.sh && npm install'
            }
        }
        stage('Run App') {
            steps {
                // Start the application
                sh '. ~/.nvm/nvm.sh && npm start'
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
