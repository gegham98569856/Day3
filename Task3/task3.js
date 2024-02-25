function valid(){
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    if(name.value === "" || name.value.length < 3){
        alert("Enter a name")
        document.getElementById("forma").action = "";
        document.getElementById("forma").target = "";
    }
    if(name.value[0] !== name.value[0].toUpperCase()){
        alert("Enter an uppercase value");
        document.getElementById("forma").action = "";
        document.getElementById("forma").target = ""
    }
    if(email.value === ""){
        alert("Enter a email")
        document.getElementById("forma").action = "";
        document.getElementById("forma").target = "";
    }
}