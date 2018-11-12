

var testresults
submit = document.getElementById("submit")
submit.addEventListener('click', (e) => {
    testEmpty()
    testmail()
    testpassword()
})
reset = document.getElementById("reset")
reset.addEventListener('click', (e) => {
    clear()
    
})


function testmail() {


    let email = document.getElementById("email").value

    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    if (filter.test(email)) {

        testresults = true
    }
    else {
        alert("Please input a valid email address!")
        testresults = false

    }
}


function testpassword() {
    let pwd = document.getElementById("password")


    if (pwd.value.length < 6) {
        alert("Error: Password must contain at least six characters!");
        pwd.focus();

    }
    re = /[0-9]/;
    if (!re.test(pwd.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        pwd.focus();

    }
    re = /[a-z]/;
    if (!re.test(pwd.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        pwd.focus();

    }
    re = /[A-Z]/;
    if (!re.test(pwd.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        pwd.focus();


    }
}


function testEmpty() {


    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let user = document.getElementById("username").value
    let adress = document.getElementById("adress").value
    let comment = document.getElementById("comment").value
    if (email == "") {
        alert("saisir email");
    }
    if (password == "") {
        alert("saisir password");
    }
    if (user == "") {
        alert("saisir user");
    }
    if (adress == "") {
        alert("saisir adress");
    }
    if (comment == "") {
        alert("saisir comment");
    }

}

function clear() {

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let user = document.getElementById("username").value
    let adress = document.getElementById("adress").value
    let comment = document.getElementById("comment").value
    email = ""
    password = ""
    user = ""
    adress = ""
    comment = ""

}


