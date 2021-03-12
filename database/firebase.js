const firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyBunhXcF5NO0UEodJRcUMXRbhUwY92rlgI",
    authDomain: "vers-194cc.firebaseapp.com",
    databaseURL: "https://vers-194cc-default-rtdb.firebaseio.com",
    projectId: "vers-194cc",
    storageBucket: "vers-194cc.appspot.com",
    messagingSenderId: "131095434415",
    appId: "1:131095434415:web:53e3dd46831e7ca03c305a",
    measurementId: "G-VB6F7R8MC6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  export default firebase;