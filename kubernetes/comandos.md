# Comandos Básicos

## Verificación de instalación de minikube y kubectl

```
minikube version
```

```
kubect version
```

## Inicialización 

```
minikube start
```

## Aplicar cambios de pods, services y deployments

```
kubectl apply -f postgres-secrets.yml
kubectl apply -f postgres.yml
```

## Revisar la instalacion

```
kubectl get all
```

```
kubectl describe deployment.apps/.....
```

```
kubectl logs pod/.....
```

## Con minikube exponer el servicio 

```
minikube service nombreservicio
```

## Reiniciar un deployment 

```
kubectl rollout restart deployment nombredeldeployment
```