// function myFunction(){
//     let data = "";  
//     let name = document.getElementById("userName").value
//     let sub = document.getElementById("submit").value
//    data = "User name : "+name+"<br/>"
//    console.log(data);
//    document.getElementById("data").innerHTML = data  // display data to paragraph
//    }


let sub = document.getElementById("submit");

sub.onclick = function myfunction(){
    let data = "";  
    let nam = document.getElementById("userName").value;
    data = "User name : "+nam+"<br/>";
    console.log(data);
    document.getElementById("data").innerHTML = data;  // display data to paragraph
};

