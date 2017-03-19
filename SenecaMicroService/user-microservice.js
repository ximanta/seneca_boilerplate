const userAddMicroservice = require('seneca')();
const mongoose = require('mongoose');
const User = require('./models/User');
//connection with database
mongoose.connect("mongodb://localhost/userdb");

// assign the mongoose connection to a constiable
const db = mongoose.connection;

//Verify the connection status with the database
db.on('error',
console.error.bind(
  console,'Connection error ...!!!!!'));

db.once('open',function(){
  console.log("Connected to MongoDB successfully");
});

userAddMicroservice.add({role:'usermanagement',cmd:'add'}, function(msg, done) {
 let user = new User();
 user.username = msg.left;
 user.password = msg.right;
 user.save(function(err){
if(err)
{
  done(err);
}
else
{
	done(null, {result:'Added'});
}
}); 
  
});
/*ToDO: Move IP and Port to config*/
userAddMicroservice.listen({host: '127.0.0.1', port: '3000'});