function handleEditProfile() {
    var name = document.getElementById("name").textContent
    var inputName = document.getElementById('f-name')
    inputName.value = name

    var email = document.getElementById("email").textContent
    var inputEmail = document.getElementById('f-email')
    
    inputEmail.value = email

    var interest = document.getElementById("interest").textContent
    var inputInterest = document.getElementById('f-interest')
    inputInterest.value = interest

    document.getElementById("edit-view").style.display = "block"
    document.getElementById("display-view").style.display = "none"
}

function handleDisplayProfile() {
    var updateName = document.getElementById("f-name").value
    var name = document.getElementById("name")
    name.textContent = updateName

    var updateEmail = document.getElementById("f-email").value
    var name = document.getElementById("email")
    if (validator.isEmail(updateEmail)) {
        email.textContent = updateEmail
    } else {
        alert("Invaid Email address")
        
    }
    

    var updateInterest = document.getElementById("f-interest").value
    var name = document.getElementById("interest")
    interest.textContent = updateInterest

    document.getElementById("display-view").style.display = "block"
    document.getElementById("edit-view").style.display = "none"
}
