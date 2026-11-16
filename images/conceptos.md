# Images
- Sirven para dockerizar una aplicación 
- Son instrucciones que se van realizando por capas 
- Se utiliza el archivo Dockerfile

## Archivo 
- Dockerfile
- .dockerignore

## Comandos
- FROM
- RUN 
- COPY
- WORKDIR
- BUILD 
- BUILDX 

## Construir Imagen
- docker build --tag nombreimagen .(pathdockerfile)
- docker image tag nombreimage:tag nombreimagen:tag

## Subir a repositorio 
- Creo un repositorio en docker hub
- Renombro mi imagen usando el image tag con el nombre que me dio docker hub al crear el repositorio
- En mi equipo tengo que loguarme con docker login
- Luego hago con docker push nombreimagen la subida de mi imagen al repositorio
- docker push idimagen:tag

## .dockerignore
- Al momento de la contrucción de la imagen se toma en cuenta este archivo para ignorar archivos
- Es pareceido al uso del .gitignore de git

## Buildx 

Construcción de imagenes con soporte a diferentes plataformas
`docker buildx ls` 

Crea un contenedor para la creacion de imagenes multiplaforma y establezco como por defecto , docker buildx use container-builder: 
`docker buildx create --name container-builder --driver docker-container --bootstrap --use`

Usa la nueva extensión para crear imagenes multiplaforma
`docker buildx use container-builder`

Comandos útilies
- `docker buildx ls`
- `docker buildx inspec`
- `docker buildx build --platform linux/amd64,linux/arm64 -t osmolik/cron-ticker --push .`