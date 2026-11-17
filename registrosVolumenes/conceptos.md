# Aprovisionar en AWS

Subir imagenes y desplegarlas en digital ocean
uso de registros - subir imagenes de manera privada sin usar el dockerhub
nombres y versionamiento

## Crear la imagen 

```
docker buildx build --platform linux/amd64,linux/arm64 -t osmolik/teslo-shop:1.0.1 .
```

## Subir la imagen 
```
docker push osmolik/teslo-shop:1.0.1
```

## AWS Elastic Container Service 

Con el Express Mode se puede configurar un contenedor haciendo referencia a la imagen subida en dockerHub.

Se deben configurar las variables de entorno con clave-valor. 

Para la api de salud se puede poner alguna API de la aplicación.

## AWS Elastic Container Registry 

Me permite subir las imagenes docker de manera privada para poderlas desplegar en un elastic container service. 


### Creación de usuario en IAM

Se ingresa a IAM y se crea las credenciales de access token para un usuario

### Instalación de CLI Amazon

```
winget install -e --id Amazon.AWSCLI
```

### Verificación
```
aws --version
```

### Se configura  mi session 

```
aws configure
```

AWS Access Key ID y Secret Access Key: se crean en IAM → Users → tu usuario → Security credentials → Create access key.
Default region: us-east-2
Output format: json

### Login 

aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 206255009001.dkr.ecr.us-east-2.amazonaws.com

### Creacion y subida de imagen 

docker build -t courses/teslo-shop .
docker tag courses/teslo-shop:latest 206255009001.dkr.ecr.us-east-2.amazonaws.com/courses/teslo-shop:latest
docker push 206255009001.dkr.ecr.us-east-2.amazonaws.com/courses/teslo-shop:latest