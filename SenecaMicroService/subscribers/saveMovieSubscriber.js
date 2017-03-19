var rabbit = require('wascally');  
var config = require('../config/config');

module.exports = function(req,res,next){
    console.log("Inside subscriber middleware");
rabbit.configure(config).then(processMessage).then(undefined, reportErrors);
}
/**
Sets up a a message handler and a listener.  
*/
function processMessage() {
        console.log("About to start subscription to handle");
    

    // set all the handlers before starting subscription
    rabbit.handle('direct', handleMessage);

    // start subscription
     rabbit.startSubscription(config.queues[0].name);
     console.log("Subscription started for queue");
}

/**
 * Handles incoming messages
 * 
 */
function handleMessage(message) {
    console.log('Received message');

    // here we can do something to the received message.
    // e.g perform database insert
    // send out email
    // bill a person etc etc
    var body = message.body;
    console.log("Inside Subscriber" + body);   
    // after having processed the message we need to acknowledge it.
    message.ack();
}

/**
 * error handling.
 * 
 */
function reportErrors(err) {  
    console.trace(err);
}


