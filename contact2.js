const $form = document.querySelector('#formulario')
$form.addEventListener('submit', handleSubmit)

const buttonDiv = document.querySelector("#buttonDiv")

function validarNombre(nombre) {
    console.log("Arranca Validar Nombre")
    if ($form.nombre.value == 0){
        alert("Completa el campo Nombre");
    } else {
        console.log("entrando a validarApellido")
        validarApellido();
    }
};

function validarApellido(apellido) {
    if ($form.apellido.value == 0){
        alert("Completa el campo Apellido");
    } else {
        console.log("entrando a validarMail")
        validarMail()
    }
};

function validarMail(mail) {
    if ($form.mail.value == 0){
        alert("Completa el campo Mail");
    } else {
        console.log("entrando a validarCheckbox")
        validarCheckbox()
    }
};

function validarCheckbox(cursos) {
    if ($form.cursoscheck.checked == false){
        alert("Indica al menos 1 test que hayas tomado");
    } else {
        console.log("entrando a validarLenguajes")
        validarLenguajes()
    }
};

function validarLenguajes(lenguajes){
    if ($form.lenguajes.value == 0){
        alert("Completa con el lenguaje que te gustaria que agreguemos");
    } else {
        console.log("terminando validacion");
        buttonDiv.innerHTML += 
            `
            <input id="btn_submit" type="submit" value="Enviar">
            `
    }
};



async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    console.log("viene el response")
    console.log(response)
    if (response.ok) {
        this.reset()
        alert('Gracias por contactarnos')
    }
}