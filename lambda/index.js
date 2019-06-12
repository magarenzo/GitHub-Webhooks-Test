'use strict';
const aws = require('aws-sdk');

function isEmpty(object) {
    return !Object.keys(object).length;
}

function pushToS3(event) {
    const s3 = new aws.S3();
    const parameters = {
        Bucket: process.env.BUCKET,
        Key: new Date().toISOString().replace('T', '-').substr(0, 19) + '.json',
        Body: JSON.stringify(event)
    };

    s3.putObject(parameters, function (error, data) {
       if (error) {
           console.log('Error sending message to S3: ' + error);
       } else {
           console.log('Message sent to S3: ' + data);
       }
    });
}

function handleEvent(event) {
    var response = {};

    if (isEmpty(event)) {
        response = {
            statusCode: 400,
            body: 'Event is empty'
        };
    } else {
        pushToS3(event);
        response = {
            statusCode: 200,
            body: JSON.stringify(event)
        };
    }
    
    return response;
}

exports.handler = (event) => {
    return handleEvent(event);
};