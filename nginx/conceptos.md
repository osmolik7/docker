# nginx

Ejecutar un contenedor de nginx 

```
docker run --name some-nginx -d -p 8080:80 nginx:1.23.3
```

Se puede aacceder al contenedor para revisar las configuraciones de default.conf o el archivo index.html

```
docker exec -it some-nginx bash
``` 
