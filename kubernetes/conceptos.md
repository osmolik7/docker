# Kubernetes

Es una platorma para automatizar el despliegue, escala y manejo de contenedores.
Se configura mediante archivos .yml

## Ventajas

- Realizar actualizaciones de versiones en caliente aumentando la disponibilidad de las aplicaciones.
- Sistema tolerante a fallas.
- Escala hacia arriba o abajo segun demanda.
- Fácil manejo de replicas.

## Herramientas

- Minikube: Es una herramienta sencilla que nos crea un cluster local de kubernetes para administrar. Crea un único nodo y todo lo necesario.
- kubectl: Cliente que permite administrar un cluster de kubernetes.

## Componentes principales

- **POD:** Es la unidad minima en kubernetes, capa abstracta que contiene contenedores (uno o mas). Los contenedores tienen una dirección ip volatil dentro del pod.
- **Services:** El servicio se conecta al POD y administra los contenedores dentro del POD. Hay servicios internos y externos con ips permanentes
- **Ingress:** Sirve para exponer el puerto por el cual se va a ingresar a la aplicacion en nuestro cluster(:80 :3000) 
- **Volumes:** Por defecto no se mantiene la persistencia de la data, se le deben agregar volumes. 
- **Secrets & Config Map:** Son key value pairs que se pueden definir como variables de entorno. No se maneja encriptación por defecto. Secrets estan en base64 y los configmap en json
- **Deployments:** Es un plano de como construir los pods y la cantidad de las replicas permitiendo escalar para arriba o abajo.
- **StatefulSet:** Es parecido a los deployments pero especializado para bases de datos. Se utiliza porque en las bases de datos se debe tomar en cuenta temas de consistencia. Adicionalmente no es tan comun realizar la configuración de base de datos en kubernetes.


