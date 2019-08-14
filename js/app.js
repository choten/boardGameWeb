// Initialize Firebase
var config = {
    apiKey: "AIzaSyAhZsxma5bjKBNAVv-USQQ2ifc1SmaKTFE",
    authDomain: "joinboardgame-91903.firebaseapp.com",
    databaseURL: "https://joinboardgame-91903.firebaseio.com",
    projectId: "joinboardgame-91903",
    storageBucket: "joinboardgame-91903.appspot.com",
    messagingSenderId: "400469741806"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.requestPermission()
    .then(function () {
        console.log('¨ú±o±ÂÅv');
        return messaging.getToken();
    })
    .then(function (token) {
        console.log(token);
    })
    .catch(function (err) {
        console.log('¿ù»~');
    });