const AWS = require("aws-sdk");

const getPersonajeById = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    const result = await dynamodb
      .get({
        TableName: process.env.PERSONAJE_TABLE,
        Key: {
          id
        },
      })
      .promise();

    const personaje = result.Item;

    return {
      status: 200,
      body: {
        personaje,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    getPersonajeById,
};
