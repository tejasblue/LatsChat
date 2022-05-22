var firebaseConfig = {
      apiKey: "AIzaSyA6L-Qaeo3U69cBgF3WLfm7NVgd1tyzwhM",
      authDomain: "kwitter-app-aada4.firebaseapp.com",
      databaseURL: "https://kwitter-app-aada4-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-aada4",
      storageBucket: "kwitter-app-aada4.appspot.com",
      messagingSenderId: "893000919849",
      appId: "1:893000919849:web:d3fe9e4ac48bd6b1192538"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
