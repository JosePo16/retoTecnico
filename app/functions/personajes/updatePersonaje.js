const AWS = require("aws-sdk");

const updatePersonaje = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    const { descripcion } = JSON.parse(event.body);

    const result = await dynamodb
      .update({
        TableName: process.env.PERSONAJE_TABLE,
        UpdateExpression: "set descripcion = :descripcion",
        ExpressionAttributeValues: {
          ":descripcion": descripcion,
        },
        Key: {
          id,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return {
      status: 200,
      body: JSON.stringify({
        message: "personaje updated",
      }),
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    updatePersonaje,
};
