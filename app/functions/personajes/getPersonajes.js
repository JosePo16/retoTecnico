const AWS = require('aws-sdk')

const getPersonajes = async () =>{
    try{
        const dynamodb = new AWS.DynamoDB.DocumentClient();

        const result = await dynamodb.scan({
            TableName: process.env.PERSONAJE_TABLE,
        }).promise();

        const personajes = result.Items

        return {
            status: 200,
            body: {
                personajes
            }
        }
    }catch(error){
        console.log(error);
    }
};

module.exports = {
    getPersonajes
}