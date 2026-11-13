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