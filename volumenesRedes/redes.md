# Redes

- Me sirve para conectarme desde un contenedor a otro contenedor
- Desde mi local funciona poruqe estoy abriendo un puerto en el contenedor para conectarme desde mi maquina local
- Para poderse conectar deben estar dentro de la misma red que debemos crear.

## Comandos
- docker network create nombre-red
- docker network connect nombre-red nombre-contenedor
- docker network inspect nombre-red
