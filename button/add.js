let form_add = document.getElementById("form_add")

form_add.onsubmit = (event) => {
    event.preventDefault()

    setTextErr("email_err", "")
    setTextErr("passord_err", "")
    setTextErr("confirmPassword_err", "")

    let checkCondition = true;
    
    let email = form_add.email.value
    let password = form_add.password.value
    let confirmPassword = form_add.confirmPassword.value

    if (!email ) {
        checkCondition = false;
        setTextErr("email_err", "Vui lòng điền đầy đủ email")
    }
    if (!password) {
        checkCondition = false;
        setTextErr("passord_err", "Vui lòng passowrd")
    } else{
        if (password.length < 8) {
            checkCondition = false;
            setTextErr("passord_err", "Password phải có đủ 8 ký tự")
        } else{
            if (password != confirmPassword) {
                setTextErr("confirmPassword_err", "Password không trùng")
            }
        }
    }
    if (!confirmPassword) {
        setTextErr("confirmPassword_err", "Vui lòng nhập lại password")
    }
    
    if (checkCondition) {
        console.log("cf");
    }

}

setTextErr = (id, text) => {
    document.getElementById(id).innerHTML = text;
}