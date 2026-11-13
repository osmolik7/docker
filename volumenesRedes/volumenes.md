# Volumenes
- Persistencia de los datos cuando se elimine un contenedor
- Se utiliza comunmente para persistencia de datos en bases de datos

## Tipos de volumenes
### Named Volumes
- Nosotros asignemos un nombre

Crear un espacio en mi computadora que va a ser persistente:
docker volume create worl-db

docker volume ls
docker volume rm 

#### Ejemplo completo de volumen
docker container run --name world-db -dp 3306:3306 -e MARIADB_USER=example-user -e MARIADB_PASSWORD=user-password -e MARIADB_ROOT_PASSWORD=root-secret-password -e MARIADB_DATABASE=world-db  --volume world-db:/var/lib/mysql mariadb:10.6.28-jammy

### Bind Volumes
- Vincular un file system de mi contenedor con el contenedor de mi equipo
- Los cambios de mi sistema de archivos host se syncronizan automaticamente con el filesystem del contenedor y viceversa. El problema es que no es tan rápido.

el volumen ya no se hace dando un nombre al volumen sino que se especifica el directorio local y el directorio del container -v "$(pwd)":/app 




