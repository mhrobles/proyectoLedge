# proyectoLedge

## Funcionalidad

La aplicación permite al usuario elegir entre una colección de 14 videos musicales, los cuales, al elegirlos, entrega la posibilidad de reproducir el video y tener un seguimiento de las visualizaciones que se tengan. 

Por otro lado, si hay otra ventana abierta, donde se tenga puesto el mismo video que se reproduce en otra ventana, incluso si no se está viendo dicho video, se actualizará el numero de visualizaciónes en un rango de tiempo de 10 segundos, por lo que, si bien, no se actualizaría la cantidad de visualizaciones exactamente en el tiempo que se agrega, si se tiene un seguimiento adecuado.

A continuación se muestra como ejecutar tanto el backend como el frontend:

## Backend

### Variables de Entorno (.env)

Para hacer uso del backend, es necesario crear un archivo .env dentro de la carpeta backend. Este debe de tener las siguientes variables:

DB_USER = usuario de postgres
DB_PASS = contraseña del usuario postgres
DB_NAME = nombre de la base de datos
DB_HOST = el host de la base de datos, se recomienda usar localhost

### Ejecución

Primero es necesario instalar todas las dependencias que utiliza node. Esto se hace con el siguiente comando:

``` npm install ```

Luego, es necesario ingresar los comandos para migrar la tabla y base de datos a postgres:

```npx sequelize-cli db:migrate```

```npx sequelize-cli db:seed:all```

En caso de que ocurra algun error al ingresar estas 2 lineas, probablemente se deba a que no se ha iniciado el servicio de postgres.

Para solucionar esto, es necesario ingresar la siguiente linea:

```sudo service postgresql start```

Luego, para iniciar el backend, basta con ingresar la siguiente linea:

```npm start```

## Frontend

El frontend solo requiere el uso de 2 líneas para su ejecución:

- Instalar las dependencias que utiliza react:

```npm install```

- Ejecutar frontend:

```npm start```

## Suposiciones

Se asume que el usuario tiene instalado lo siguiente:

- NodeJS (minimo la versión 12.0.0)

Para revisar la versión de node, se puede ingresar la siguiente linea:

```node -v```

- Postgres

En caso de no tener instalado postgres, ingresar las siguientes lineas:

```sudo apt install postgresql postgresql-contrib```

Para crear usuario postgres:

```sudo -u postgres createuser --superuser username```

Luego, se ingresa a postgres con el siguiente codigo:

```sudo -u postgres psql```

Para asignarle la contraseña al usuario, es necesario haber entrado a postgres e ingresar la siguiente linea:

```ALTER USER username WITH PASSWORD 'password'```

creación de base de datos:

```sudo -u postgres createdb db_name```