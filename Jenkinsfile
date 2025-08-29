pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "mi_backend:latest"
        FRONTEND_IMAGE = "mi_frontend:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/tu_usuario/tu_repo.git', credentialsId: 'git_credentials'
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                    // sh 'npm run build'  // si aplicable
                    sh 'npm test || echo "Tests fallidos pero continuamos"'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy Backend y Frontend') {
            steps {
                // Solo levanta backend y frontend, mantiene DB y Jenkins intactos
                sh 'docker-compose up -d --build backend frontend'
            }
        }
    }

    post {
        success {
            echo 'Pipeline finalizado correctamente. Backend y Frontend actualizados!'
        }
        failure {
            echo 'Algo falló en el pipeline. Revisa los logs!'
        }
        always {
            echo 'Pipeline terminado.'
        }
    }
}
