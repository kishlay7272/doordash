var mongoose = require("mongoose");
var morgan = require("morgan");
const URI = "mongodb+srv://gkchusky:gkcHusky@gkc.b2f0o.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((db) => console.log("DB connected"))
    .catch((err) => console.error(err));
const { Schema } = mongoose;
const OrderSchema = new Schema({}, { strict: false });
var devices = mongoose.model("devices", OrderSchema);
personDocument = {
    "nam": { "first": "Alan", "last": "Turing" },
}
var t=[personDocument]
// Order.insertMany(personDocument);
 devices.insertMany(
    
    [personDocument])
// module.exports=Order;
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://gkchusky:gkcHusky@gkc.b2f0o.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
// //   client.close();
// });
