const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users API',
        description: 'Users API'
    },
    host: 'localhost:3000',
    schemes: ['http', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// this will generate a swagger.json file
swaggerAutogen(outputFile, endpointsFiles, doc);