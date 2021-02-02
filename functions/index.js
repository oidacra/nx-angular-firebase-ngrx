const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.checkDisponibilidad = functions.https.onRequest((req, res) => {
  var db = admin.firestore();
  var vaki = req.query.vaki;
  var documento = req.query.recompensa;


  var vakisDoc = db.collection('vakis').doc(vaki);
  var docRecompensa = vakisDoc.collection('recompensas').doc(documento);

  docRecompensa.get().then(snapshot => {
      res.send(snapshot.data())
  }).catch(reason => {
      res.send(reason)
  })
});
