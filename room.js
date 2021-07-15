var firebaseConfig = {
  apiKey: "AIzaSyDj0_0uTOz3VxT4vt9iQlBXDqnANZKdFrg",
  authDomain: "your-mobile-school-original.firebaseapp.com",
  databaseURL: "https://your-mobile-school-original-default-rtdb.firebaseio.com",
  projectId: "your-mobile-school-original",
  storageBucket: "your-mobile-school-original.appspot.com",
  messagingSenderId: "806983881654",
  appId: "1:806983881654:web:01f59bb2eaf69d1a516717",
  measurementId: "G-QZFQCH97L7"
};

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Hello " + user_name;

function addRoom() {
   
   room_name = document.getElementById("room_name").value;
   localStorage.setItem("room_name" , room_name);    
   window.location = "main.html";
   

    }
   
 
 function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
     window.location = "username.html"; 
 }
 //End code
 







 
  