let form_login = document.getElementById("form_login")

form_login.onsubmit = (event) => {
    event.preventDefault()

    setTextErr("email_err", "")
    setTextErr("password_err", "")

    let checkCondition = true;
    
    let email = form_login.email.value
    let password = form_login.password.value

    if(!email) {
        checkCondition = false;
        setTextErr("email_err", "Vui lòng nhập email");
    }

    if(!password) {
        checkCondition = false;
        setTextErr("password_err", "Vui lòng nhập password")
    }
    else {
        if(password.length < 8) {
            checkCondition = false;
            setTextErr("password_err", "Password cần đủ 8 kí tự")
        }
    }
}

setTextErr = (id, text) => {
    document.getElementById(id).innerHTML = text;
}