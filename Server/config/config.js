// let rabbitMQ = {
//     host: process.env.RABBITMQ_HOST || '127.0.0.1',
//     port: process.env.RABBITMQ_PORT || 5672
//   };
//   rabbitMQ['rabbitmqURL'] = ('amqp://' + rabbitMQ.host + ':' + rabbitMQ.port);

//   let config = {
//     RABBITMQ: rabbitMQ
//   };

//   module.exports = config;

module.exports = {  
    "connection": {
        // credentials to connecto to rabbitMQ server. 
        "user": "guest",
        "pass": "guest",
        "server": "localhost",
        // if you have virtual hosts configured this is that option 
        "vhost": ""
    },
    // exchanges that we shall be talking to and their type. 
    "exchanges": [
        {
            "name": "savemovie.main",
            "type": "direct"
        }
    ],


    "queues": [
        {
            "name": "savemovie-q.1"
        }
    ],

    // here we bind the exchanges and queues. 
    "bindings": [
        {
            "exchange": "savemovie.main",
            "target": "savemovie-q.1"
        }
    ]
};