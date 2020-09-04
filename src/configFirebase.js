const admin = require("firebase-admin");
const firebase = require('firebase')


const serviceAccount = require("./parcial2-55099-firebase-adminsdk-3egf7-8dbd1b835c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://parcial2-55099.firebaseio.com"
});

var firebaseConfig = {
  apiKey: "AIzaSyDvNZv56a920E8tRp-4wBnsk2RIflbLJV4",
  authDomain: "parcial2-55099.firebaseapp.com",
  databaseURL: "https://parcial2-55099.firebaseio.com",
  projectId: "parcial2-55099",
  storageBucket: "parcial2-55099.appspot.com",
  messagingSenderId: "675453721572",
  appId: "1:675453721572:web:439f0a9902d6debadb45f1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
module.exports = { admin, firebase };