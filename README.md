
# reto-node-aws

Aplicación API HTTP con Node.js ejecutándose en AWS Lambda y API Gateway utilizando Serverless Framework con conexión a DynamoDB.

### Information
* Serverless: v3
* Plataforma: AWS
* Lenguaje: javascript (nodeJS v18)
* Pruebas Unitarias: Jest
* Fecha Desarrollo: 08/04/2024
* Desarrollador: José Gabriel Ponte Sagastegui

### explanation
* Invoke the endpoint to start registering favorites:
```
  POST - https://waanrj5x37.execute-api.sa-east-1.amazonaws.com/favorites
```

* Use the following scheme

```
{
    "nombre": "",
    "nave_estelar": "",
    "vehiculo": "",
    "pelicula": "",
    "descripcion": "mi episodio favorito"
}
```

* You don't need to assign a value to all fields, I can insert like this:
```
{
    "nombre": "Jorge",
    "nave_estelar": "CR90 corvette",
    "vehiculo": "Snowspeeder",
    "pelicula": "TIE/LN starfighter",
    "descripcion": "mi episodio favorito"
}
```

or 
```
{
    "nombre": "Jorge",
    "nave_estelar": "CR90 corvette",
    "descripcion": "mi episodio favorito"
}
```
The only required field is description.
### Deployment

```
$ serverless deploy
```

After deploying, you should see output similar to:

```bash
Deploying Deploying reto-node-aws to stage dev (sa-east-1)

✔ Service deployed to stack reto-node-aws-dev (80s)

  POST - https://ppkr26shi0.execute-api.sa-east-1.amazonaws.com/personaje
  GET - https://ppkr26shi0.execute-api.sa-east-1.amazonaws.com/personajes/all
  GET - https://ppkr26shi0.execute-api.sa-east-1.amazonaws.com/personaje/{id}
  PUT - https://ppkr26shi0.execute-api.sa-east-1.amazonaws.com/personaje/{id}
  GET - https://ppkr26shi0.execute-api.sa-east-1.amazonaws.com/swapi/films
  GET - https://ppkr26shi0.execute-api.sa-east-1.amazonaws.com/swapi/people
  GET - https://ppkr26shi0.execute-api.sa-east-1.amazonaws.com/swapi/startship
functions:
  createPersonaje: reto-node-aws-dev-createPersonaje (26 MB)                                                 
  getPersonajes: reto-node-aws-dev-getPersonajes (26 MB)
  getPersonaje: reto-node-aws-dev-getPersonaje (26 MB)
  updatePersonaje: reto-node-aws-dev-updatePersonaje (26 MB)
  getSwapiFilms: reto-node-aws-dev-getSwapiFilms (26 MB)
  getSwapiPeople: reto-node-aws-dev-getSwapiPeople (26 MB)
  getSwapiStarships: reto-node-aws-dev-getSwapiStarships (26 MB)
```

### Invocation

After successful deployment, you can change the URL in serverless.yml:

```bash
URL=https://xxxxxxx.execute-api.sa-east-1.amazonaws.com/
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function getFavorites
```

Which should result in response similar to the following:

```
{
    "status": 200,
    "body": {
        "nombre": "Jorge",
        "nave_estelar": "CR90 corvette",
        "vehiculo": "Snowspeeder",
        "pelicula": "TIE/LN starfighter",
        "descripcion": "mi episodio favorito",
        "id": "3123b46f-078e-4456-b5ee-652f45e2c85a",
        "fechaCreacion": "08/04/2024"
    }
}
```

Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

My repository path [GitHub repository](https://github.com/JosePo16/retoTecnico).
