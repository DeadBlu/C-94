
var firebaseConfig = {
  apiKey: "AIzaSyBpLztwfN9KLRDSeityLPLAuQUywf-uZvc",
  authDomain: "project-103e3.firebaseapp.com",
  databaseURL: "https://project-103e3-default-rtdb.firebaseio.com",
  projectId: "project-103e3",
  storageBucket: "project-103e3.appspot.com",
  messagingSenderId: "67254334085",
  appId: "1:67254334085:web:5f4259aa4304e72e7fefec",
  measurementId: "G-T5Q9VPTL7K"
};
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

