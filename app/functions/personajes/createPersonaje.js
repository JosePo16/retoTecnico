const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const getDateFormat = require("../../utils/getDateFormat");
const PersonajeInterface = require("../../interfaces/personaje.interface");

const addPersonaje = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const json = JSON.parse(event.body);

  PersonajeInterface.id = v4();
  PersonajeInterface.fechaCreacion = getDateFormat();

  const personaje = { ...json, ...PersonajeInterface };

  await dynamodb
    .put({
      TableName: process.env.PERSONAJE_TABLE,
      Item: personaje,
    })
    .promise();

  return {
    status: 200,
    body: personaje,
  };
};

module.exports = {
  addPersonaje,
};
