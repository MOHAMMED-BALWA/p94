user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          Name:user_name,
          Message:msg,
          Like:0  
      });

      document.getElementById("msg").value = "";
      

}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
       window.location = "username.html"; 
   }


   room_name = localStorage.getItem("room_name");
document.getElementById("appear").innerHTML = "CLASS CODE -  " + room_name;


var l_array = user_name.length;
console.log(l_array);
document.getElementById("display_length_of_array").innerHTML = l_array;

 