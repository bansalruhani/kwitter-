
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAbjBftHlDmIXMEVJDaSRRx-1AMXXP58VE",
      authDomain: "kwitter-ae1c4.firebaseapp.com",
      databaseURL: "https://kwitter-ae1c4-default-rtdb.firebaseio.com",
      projectId: "kwitter-ae1c4",
      storageBucket: "kwitter-ae1c4.appspot.com",
      messagingSenderId: "581437874356",
      appId: "1:581437874356:web:d6a35e8f26b450c0a777e1",
      measurementId: "G-2V85XHS7GH"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addRoom()
    {
          room_name=document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";

    } 


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
  console.log("room Name-"+ Room_name);
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_name+"</div><hr>";
  document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
