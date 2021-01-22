Instrucciones
=============

Para iniciar el proyecto, primero verifica la versión utilizada de nodejs, la puedes
encontrar en ```package.json``` en la raíz del proyecto, busca la propiedad ```"engines"```, por ejemplo:

``` json
{
  "engines": {
    "node": "^14.15.4"
  }
}
```

Se puede utilizar [nvm](https://github.com/nvm-sh/nvm "nvm") para instalar la versión acorde al proyecto.

# Instalación #

El proyecto utiliza una base de datos mysql o mariadb, asegurate de tener la base de datos correcta.

Clona el proyecto, entra a la carpeta raíz e instala las dependencias ejecutando el siguiente comando (ya que tienes correctamente instalada la versión de nodejs correcta).

``` shell
$ npm install
```

Una vez tienes instaladas las dependencias, asegurate de tener las siguientes variables de entorno en el archivo ```.env``` en ```/```.

``` shell
MYSQL_HOST="host_mariadb"
MYSQL_USER="user_mariadb"
MYSQL_PASSWORD="password_mariadb"
MYSQL_DATABASE="bd_mariadb"
PORT="port"
```
