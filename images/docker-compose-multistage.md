# Usando docker compose para multi stage

Se puede generar con un build y con target desde el docker-compose.yml una sección especifica del Dockerfile

docker-compose.yml
``` 
app:
    build:
      context: .
      target: ${STAGE}
      dockerfile: Dockerfile
```
Comando para que se ejecute solo una sección del Dockerfile que tiene codigo para producción y desarrollo.
``` 
docker compose build 
docker compose build app
```

Para ejecutar un archivo diferente al por defecto puedo usar: 

``` 
docker-compose -f docker-compose.prod.yml up 
```

