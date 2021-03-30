class Validation {

    constructor() {
        this.container = document.querySelector('.form-container')
        this.inputFields = document.querySelectorAll('#form-group .form-value')
        this.insertValidationElement()
        this.username = document.querySelector('#username')
        this.username.previousValue = this.username.value
        this.email = document.querySelector('#email')
        this.email.previousValue = this.email.value
        this.tel = document.querySelector('#tel')
        this.tel.previousValue = this.tel.value
        this.password = document.querySelector('#password')
        this.password.previousValue = this.password.value
        this.cnfPassword = document.querySelector('#cnf-password')
        this.cnfPassword.previousValue = this.cnfPassword.value
        this.dob = document.querySelector('#birthday')
        this.textarea = document.querySelector('#textarea')
        this.textarea.previousValue = this.textarea.value
        this.checkbox = document.querySelector('#checkbox')
        this.submit = document.querySelector('#submit')
        this.reset = document.querySelector('#reset')
        this.event()
        this.validateForm()
        this.form = document.querySelector('.form')
    }

    // events
    event() {
        this.username.addEventListener('keyup', (e) => {
            e.preventDefault()
            this.isDifferent(this.username, this.userHandler)
            this.validateForm()
        })
        this.username.addEventListener('blur', (e) => {
            e.preventDefault()
            this.usernameImmediately()
            this.validateForm()
        })
        this.email.addEventListener('keyup', (e) => {
            e.preventDefault()
            this.isDifferent(this.email, this.emailHandler)
            this.validateForm()
        })
        this.email.addEventListener('blur', (e) => {
            e.preventDefault()
            this.emailImmediately()
            this.validateForm()
        })
        this.tel.addEventListener('keyup', (e) => {
            e.preventDefault()
            this.isDifferent(this.tel, this.telHandler)
            this.validateForm()
        })
        this.tel.addEventListener('blur', (e) => {
            e.preventDefault()
            this.telImmediately()
            this.validateForm()
        })
        this.password.addEventListener('keyup', (e) => {
            e.preventDefault()
            this.isDifferent(this.password, this.passwordHandler)
            this.validateForm()
        })
        this.password.addEventListener('blur', (e) => {
            e.preventDefault()
            this.passwordImmediately()
            this.validateForm()
        })
        this.cnfPassword.addEventListener('keyup', (e) => {
            e.preventDefault()
            this.isDifferent(this.cnfPassword, this.cnfPasswordHandler)
            this.validateForm()
        })
        this.cnfPassword.addEventListener('blur', (e) => {
            e.preventDefault()
            this.cnfPasswordImmediately()
            this.validateForm()
        })
        this.cnfPassword.addEventListener('keyup', (e) => {
            e.preventDefault()
            this.isDifferent(this.cnfPassword, this.cnfPasswordHandler)
            this.validateForm()
        })
        this.cnfPassword.addEventListener('blur', (e) => {
            e.preventDefault()
            this.cnfPasswordImmediately()
            this.validateForm()
        })
        this.textarea.addEventListener('keyup', (e) => {
            e.preventDefault()
            this.isDifferent(this.textarea, this.textareaHandler)
            this.validateForm()
        })
        this.textarea.addEventListener('blur', (e) => {
            e.preventDefault()
            this.textareaImmediately()
            this.validateForm()
        })
        this.checkbox.addEventListener('change', (e) => {
            e.preventDefault()
            // this.checkbox.checked = this.checkbox.checked
            this.validateForm()
        })
        this.dob.addEventListener('change', (e) => {
            e.preventDefault()
            console.log(this.dob.value)
            this.dobImmediately()
            this.validateForm()
        })
        this.reset.addEventListener('click', (e) => {
            e.preventDefault()
            this.onReset()
        })

        this.submit.addEventListener('click', (e) => {
            e.preventDefault()
            this.storeValues()
        })
    }

    // methods

    //user input
    userHandler() {
        this.username.error = false
        this.usernameImmediately()
        clearTimeout(this.username.timer)
        this.username.timer = setTimeout(() => this.usernameAfterDelay(), 1000)
    }

    usernameImmediately() {

        if (this.username.value != "" && !/^([a-zA-Z0-9]+)$/.test(this.username.value)) {
            this.showValidationError(this.username, "Username can only contain letters and numbers")
            this.username.error = true
        }

        if (this.username.value.length > 30) {
            this.showValidationError(this.username, "Username can not exceed 30 characters")
            this.username.error = true
        }

        if (this.username.value == "") {
            this.showValidationError(this.username, "Username is required")
            this.username.error = true
        }

        if (!this.username.error) {
            this.hideValidationErrors(this.username)
        }
    }

    usernameAfterDelay() {
        if (this.username.value.length < 3) {
            this.showValidationError(this.username, "Username must be at least 3 letters")
            this.username.error = true
        }
    }

    //email input

    emailHandler() {
        this.email.error = false
        this.emailImmediately()
        clearTimeout(this.email.timer)
        this.email.timer = setTimeout(() => this.emailAfterDelay(), 1000)
    }

    emailImmediately() {
        if (this.email.value == "") {
            this.showValidationError(this.email, "Email is required")
            this.email.error = true
        }

        if (!this.email.error) {
            this.hideValidationErrors(this.email)
        }
    }

    emailAfterDelay() {
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email.value)) {
            this.showValidationError(this.email, "Email id is not valid")
            this.email.error = true
        }
    }

    //tel inpiuts
    telHandler() {
        this.tel.error = false
        this.telImmediately()
        clearTimeout(this.tel.timer)
        this.tel.timer = setTimeout(() => this.telAfterDelay(), 1000)
    }

    telImmediately() {
        if (this.tel.value == "") {
            this.showValidationError(this.tel, "mobile number is required")
            this.tel.error = true
        }
        if (!/^([0-9]+)$/.test(this.tel.value)) {
            this.showValidationError(this.tel, "Not a valid mobile number")
            this.tel.error = true
        }

        if (!this.tel.error) {
            this.hideValidationErrors(this.tel)
        }
    }

    telAfterDelay() {
        if (this.tel.value.length != 10 && /^([0-9]+)$/.test(this.tel.value)) {
            this.showValidationError(this.tel, "Mobile number allowed only 10 digits")
            this.tel.error = true
        }
    }

    //password input
    passwordHandler() {
        this.password.error = false
        this.passwordImmediately()
        clearTimeout(this.password.timer)
        this.password.timer = setTimeout(() => this.passwordAfterDelay(), 1000)
    }

    passwordImmediately() {
        if (this.password.value == "" && !/^([a-zA-Z0-9]+)$/.test(this.password.value)) {
            this.showValidationError(this.password, "password is required")
            this.password.error = true
        }

        // if (this.password.value > 8 && /^([a-zA-Z0-9]+)$/.test(this.password.value)) {
        //     this.showValidationError(this.password, "Password is too week please try different types charcters")
        //     this.password.error = true
        // }

        if (this.password.value.length > 30) {
            this.showValidationError(this.password, "Password must only maximum 30 charecters allowed")
            this.password.error = true
        }

        if (!this.password.error) {
            this.hideValidationErrors(this.password)
        }
    }

    passwordAfterDelay() {
        if (this.password.value.length < 8) {
            this.showValidationError(this.password, "Use 8 characters or more for your password")
            this.password.error = true
        }
    }

    cnfPasswordHandler() {
        this.cnfPassword.error = false
        this.cnfPasswordImmediately()
        clearTimeout(this.cnfPassword.timer)
        this.cnfPassword.timer = setTimeout(() => this.cnfPasswordAfterDelay(), 1000)
    }

    cnfPasswordImmediately() {
        if (this.cnfPassword.value == "") {
            this.showValidationError(this.cnfPassword, "password confirmation is required")
            this.cnfPassword.error = true
        }
        if (!this.cnfPassword.error) {
            this.hideValidationErrors(this.cnfPassword)
        }
    }

    cnfPasswordAfterDelay() {
        if (this.cnfPassword.value != this.password.value) {
            this.showValidationError(this.cnfPassword, "Passwords didn’t match")
            this.cnfPassword.error = true
        }
    }

    //error insert methods
    isDifferent(element, handler) {
        if (element.previousValue != element.value) {
            handler.call(this)
        }
        this.previousValue = element.value
    }

    insertValidationElement() {
        this.inputFields.forEach(inputField => {
            inputField.insertAdjacentHTML('afterend', `<span class="error-message"></span>`)
        })
    }

    showValidationError(el, msg) {
        el.nextElementSibling.innerHTML = msg
        el.parentElement.classList.add('error')
    }

    hideValidationErrors(el) {
        el.nextElementSibling.innerHTML = ''
        el.parentElement.classList.remove('error')
    }

    //textarea

    textareaHandler() {
        this.textarea.error = false
        this.textareaImmediately()
        clearTimeout(this.textarea.timer)
        this.textarea.timer = setTimeout(() => this.textareaAfterDelay(), 1000)
    }

    textareaImmediately() {
        if (this.textarea.value.length > 50) {
            this.showValidationError(this.username, "textarea can not exceed 50 characters")
            this.username.error = true
        }
        if (this.textarea.value == "") {
            this.showValidationError(this.textarea, "Some text is required")
            this.textarea.error = true
        }
        if (!this.textarea.error) {
            this.hideValidationErrors(this.textarea)
        }
    }

    textareaAfterDelay() {
        if (this.textarea.value.length < 5) {
            this.showValidationError(this.textarea, "Text must be at least 5 letters")
            this.textarea.error = true
        }
    }

    dobImmediately() {
        this.dob.error = false
        if (this.dob.value == "") {
            this.showValidationError(this.dob, "date of birth is required")
            this.dob.error = true
        }

        if (new Date().getTime() < new Date(this.dob.value).getTime()) {
            this.showValidationError(this.dob, "date is invalid")
            this.dob.error = true
        }

        if (!this.dob.error) {
            this.hideValidationErrors(this.dob)
        }
    }

    validateForm() {
        if (!this.username.error &&
            !this.email.error &&
            !this.tel.error && !this.password.error &&
            !this.cnfPassword.error &&
            !this.textarea.error &&
            this.checkbox.checked &&
            !this.dob.error &&
            this.username.value != "" &&
            this.email.value != "" &&
            this.email.value != "" &&
            this.tel.value != "" &&
            this.password.value != "" &&
            this.cnfPassword.value != "" &&
            this.dob.value != "" &&
            this.textarea.value != "") {

            this.submit.disabled = false

        } else {
            this.submit.disabled = true
        }
    }

    onReset() {
        this.username.value = "";
        this.email.value = "";
        this.email.value = "";
        this.tel.value = "";
        this.password.value = "";
        this.cnfPassword.value = "";
        this.dob.value = "";
        this.textarea.value = "";
        this.checkbox.checked = false
        this.validateForm()
    }

    storeValues() {
        // this.form.classList.add('form-hide-show-content')
        this.container.innerHTML = `<div class="form">
            <p class="content">Username. ${this.username.value}</p>
            <p class="content">E-mail. ${this.email.value}</p>
            <p class="content">Phone No. ${this.tel.value}</p>
            <p class="content"> About. ${this.textarea.value}</p>  
            <p class="content"> Date of Birth. ${this.dob.value}</p>    
        </div>`
        //     console.log(this.username.value,
        //         this.email.value,
        //         this.email.value,
        //         this.tel.value,
        //         this.password.value,
        //         this.cnfPassword.value,
        //         this.textarea.value,
        //         this.checkbox.checked)
    }

}

//Instantiation.....

new Validation()

