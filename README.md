**Laboratorio RIA 2020**

Santiago Chabert
Rodrigo Lame
Alejandro Rodriguez

**Instalacion de Angular**

**Paso 1: Instalar el Angular CLI(Command Line Interface)**

Angular CLI se usa para crear proyectos, generar codigo de libreria y aplicacion, y realizar una variedad de tareas de desarrollo continuo, como pruebas, agrupación e implementación.

Para instalar el CLI usando npm, abrir una terminal/consola y ejecutar el siguiete comando:

| npm install -g @angular/cli | 
| ------ |



**Paso 2: Crear una aplicacion y workspace general**
Las aplicaciones se desarrollan en el contexto del workspace de Angular

Para crear un nuevo workspace y aplicacion inicial:

Correr el comando:


| ng new my-app |
| ------ |

El comando ng new imprime en pantalla informacion acerca de las caracteristicas de la aplicacion inicial. Aceptar todo presionando Enter.

El CLI crea un nuevo workspace y una simple app de bienvenida, lista para correr.

**Paso 3: Correr la aplicacion**

El Angular CLI incluye un servidor, para que tu puedas facilmente buildear y deployar la aplicacion localmente.

En la consola ir a la carpeta donde esta la aplicacion (my-app).

Lanzar el servidor usando el siguiente comando del CLI con la opcion "--open" 

| ng serve --open |
| ------ |

El comando de arriba hace deply del servidor, se fija que todos los archivos esten compilados y reconstruye la aplicacion mientras se van haciendo los cambios

La opcion --open abre el navegador automatcamente en la siguiente pagina 

**http://localhost:4200/**


