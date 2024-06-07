// Program Number 02:
//                     Login Access (OR)

let username = prompt("Enter your username");
let password = prompt("Enter your password");
if (username == "admin" || password == "secret"){
    alert("Access granted");
}
else{
    alert("Access denied");
}