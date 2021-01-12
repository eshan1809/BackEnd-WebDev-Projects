const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Eshan",
    age: 20
});

person.save();

const findDocuments = function(db, callback){
    const collection = db.collection('persons');
    collection.find({}),toArray(function(err, persons){
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(persons);
        callback(persons);
    });
};