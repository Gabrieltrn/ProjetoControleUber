// CRIANDO O EVENTO PARA PEGAR QUANDO FOR FEITO O SUBMIT

document.querySelector('#form__cadastro__usuario').addEventListener('submit',(event) =>{
    
    let userCreat =  new Usuario()
    userCreat.name = document.getElementById('name').value
    userCreat.email = document.getElementById('email').value
    userCreat.password = document.getElementById('password').value
    userCreat.categoriaCarro = document.getElementById('categoriaCarro').value
    userCreat.modeloCarro = document.getElementById('modeloCarro').value

    const listUsuario = JSON.parse(localStorage.getItem('listUsuario')) || []
    listUsuario.push(userCreat)
    localStorage.setItem('listUsuario',JSON.stringify(listUsuario))
})

let listUsuario = JSON.parse(localStorage.getItem('listUsuario'))
listUsuario.map(user => console.log(user))