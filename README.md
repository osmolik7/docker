# 🐳 Docker - Guía práctica de uso para desarrolladores

Repositorio de apuntes, ejercicios y proyectos realizados durante el curso **Docker - Guía práctica de uso para desarrolladores** de [Fernando Herrera](https://fernando-herrera.com/) ([DevTalles](https://devtalles.com/)).

El recorrido va desde los conceptos básicos de contenedores hasta pipelines de CI/CD con GitHub Actions, despliegues en AWS y orquestación con Kubernetes.

---

## 📚 Contenido

| # | Sección | Carpeta | Temas |
|---|---------|---------|-------|
| 1 | Bases de Docker | [bases/](bases/) | Qué es Docker, contenedores vs. máquinas virtuales, imágenes, diagramas de arquitectura |
| 2 | Volúmenes y redes | [volumenesRedes/](volumenesRedes/) | Named volumes, bind volumes, redes entre contenedores |
| 3 | Docker Compose | [dockerCompose/](dockerCompose/) | `docker-compose.yml`, MongoDB + Mongo Express, PostgreSQL + pgAdmin |
| 4 | Construcción de imágenes | [images/](images/) | `Dockerfile`, `.dockerignore`, Docker Hub, `buildx` multiplataforma, multi-stage build |
| 5 | Registros y despliegue en AWS | [registrosVolumenes/](registrosVolumenes/) | Versionamiento de imágenes, AWS ECS, AWS ECR, AWS CLI |
| 6 | GitHub Actions | [githubActions/](githubActions/) | Pipeline de build, tag y push automático, versionamiento semántico |
| 7 | Nginx | [nginx/](nginx/) | Servir una SPA de React con Nginx, configuración del router |
| 8 | Kubernetes | [kubernetes/](kubernetes/) | Minikube, kubectl, Pods, Services, Deployments, Secrets y ConfigMaps |

📄 Además se incluye una hoja de referencia rápida: [docker-cheat-sheet.pdf](docker-cheat-sheet.pdf).

---

## 🗂️ Proyectos

- **[CRON-TICKER](images/CRON-TICKER/)**: app de Node.js con tareas programadas, usada para aprender a construir imágenes, ejecutar tests dentro del build y publicar en Docker Hub para varias plataformas.
- **[teslo-shop-2](images/teslo-shop-2/)**: API REST en NestJS con PostgreSQL, dockerizada con multi-stage build (etapas de desarrollo y producción).
- **[teslo-testing](registrosVolumenes/teslo-testing/)**: `docker-compose` para probar la imagen publicada de Teslo Shop antes de desplegarla.
- **[graphql-actions](githubActions/graphql-actions/)**: API GraphQL en NestJS con un workflow de GitHub Actions que construye y publica la imagen.
- **[react-heroes](nginx/react-heroes/)**: SPA de React + Vite servida con Nginx.
- **[K8S-Teslo](kubernetes/K8S-Teslo/)**: manifiestos de Kubernetes para levantar PostgreSQL, pgAdmin y el backend de Teslo.

---

## ⚡ Comandos útiles

### Contenedores
```bash
docker container run --name mi-contenedor -dp 8080:80 nginx
docker container ls -a
docker container logs -f mi-contenedor
docker exec -it mi-contenedor /bin/sh
docker container rm -f mi-contenedor
```

### Volúmenes y redes
```bash
docker volume create world-db
docker volume ls
docker network create mi-red
docker network connect mi-red mi-contenedor
docker network inspect mi-red
```

### Docker Compose
```bash
docker compose up -d
docker compose down
docker compose build app
docker compose -f docker-compose.prod.yml up
```

### Imágenes
```bash
docker build -t usuario/imagen:1.0.0 .
docker image tag usuario/imagen:1.0.0 usuario/imagen:latest
docker push usuario/imagen:1.0.0

# Multiplataforma
docker buildx create --name container-builder --driver docker-container --bootstrap --use
docker buildx build --platform linux/amd64,linux/arm64 -t usuario/imagen --push .
```

### Kubernetes (Minikube)
```bash
minikube start
kubectl apply -f postgres-secrets.yml
kubectl get all
kubectl logs pod/<nombre-del-pod>
kubectl rollout restart deployment <nombre-del-deployment>
minikube service <nombre-del-servicio>
```

---

## 🛠️ Requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Node.js](https://nodejs.org/) (para ejecutar los proyectos fuera de Docker)
- [AWS CLI](https://aws.amazon.com/cli/) (sección de registros y despliegue)
- [Minikube](https://minikube.sigs.k8s.io/) y [kubectl](https://kubernetes.io/docs/tasks/tools/) (sección de Kubernetes)

> ⚠️ Los archivos `.env` no se versionan (ver [.gitignore](.gitignore)). Crea el tuyo con las variables que pide cada `docker-compose.yml`.

---

## 🙌 Créditos

Curso impartido por **Fernando Herrera**. Los proyectos base pertenecen al material del curso; este repositorio contiene mis apuntes y prácticas personales con fines de estudio.
