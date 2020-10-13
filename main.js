// requisite MongoDB libraries
const express = require('express')
var MongoClient = require('mongodb').MongoClient;
var f = require('util').format;

// Credentials for logging into a MongoDB server
var authMechanism = 'DEFAULT';

var user = process.env.MONGODB_USER;
var password = process.env.MONGODB_PASSWORD;
var encodedPassword = encodeURIComponent(password);


// URL for target MongoDB server, default listening port for Express portion of app
var url = f("mongodb://%s:%s@mongodb.jm-woodside-testing:27017/sampledb?authMechanism=%s", user, encodedPassword, authMechanism);
//console.log(url);
const listenport = 8080 // by default the Route configuration for NJS on OpenShift listens on port 8080
const webapp = express()
var queryresult;

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("sampledb");
//     dbo.collection("car").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         queryresult = result;
//         db.close();
//     });
// });

webapp.get('/', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sampledb");
        dbo.collection("car").find({}).toArray(function(err, result) {
            if (err) throw err;
            // console.log(result);
            queryresult = result;
            db.close();
        });
    });
    res.send(queryresult); // nothing too fancy, just display the contents of the MongoDB database
})

webapp.listen(listenport, () => {
    console.log(`Example app now listening on localhost port ${listenport}`)
})



