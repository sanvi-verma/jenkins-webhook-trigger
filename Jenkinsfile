pipeline {
    agent any

    environment {
        IMAGE_NAME = "weather-monitor"
        CONTAINER_NAME = "weather-monitor"
        PORT = "8000"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Checking out source code from GitHub..."
                git branch: 'main', url: 'https://github.com/sanvi-verma/jenkins-webhook-trigger.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh "docker build -t ${IMAGE_NAME}:latest ."
            }
        }

        stage('Stop Old Container') {
            steps {
                echo "Stopping old container if it exists..."
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm ${CONTAINER_NAME} || true"
            }
        }

        stage('Run New Container') {
            steps {
                echo "Running new container..."
                sh "docker run -d -p ${PORT}:${PORT} --name ${CONTAINER_NAME} ${IMAGE_NAME}:latest"
            }
        }

        stage('Post-Build Verification') {
            steps {
                echo "Container running status:"
                sh "docker ps | grep ${CONTAINER_NAME}"
            }
        }
    }

    post {
        success {
            echo "✅ Weather Monitor deployed successfully!"
        }
        failure {
            echo "❌ Build failed. Check logs."
        }
    }
}
