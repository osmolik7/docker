# GitHub Actions

Hasta el momento se deben realizar demasiadas acciones manuales en las cuales pueden ocurrir errores (build, push, tags, etc)

Jenkins es un servicio popular para la gestion de estas imagenes.

## Pipe Line Básico

Ahora vamos a usar Github Actions para la creación de pipelines (serie de procesos secuenciales). Subiendo el **Dockerfile** se va realizar:

1. tag automatico
2. build en github
3. push a un registro de imagenes
4. deployment. 

## Creacion

1. Creo un repositorio
2. Creo secrets ingresando en Settings -> Security -> Secrets -> Actions -> New repository secret (usuario y token de docker hub)
3. Creación de repositorio de Docker Hub
4. Ingresando a Actions -> Usar Docker image (configure) -> Editar el repositorio/.github/workflows/docker-image.yml
5. Dependiendo de como ser configure se lanza la acción en cada pull o push en el repositorio en la rama main

### Versionamiento automatico 

Se puede hacer uso de la siguiente acción para verionar los tags de nuestras imagenes [Git Semantic Version](https://github.com/marketplace/actions/git-semantic-version)
