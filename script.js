function botao(){
    alert('Você clicou no botão');
}

function vermelho(){
    document.querySelector('body').style.backgroundColor = 'red';
}

function azul(){
    document.querySelector('body').style.backgroundColor = 'blue';
}

function verde(){
    document.querySelector('body').style.backgroundColor = 'green';
}

function valida(){
    var x = document.forms["formulario"]["nome"].value;
    var y = document.forms["formulario"]["senha"].value;

    if (x == "" || y == ""){
        alert("Existem campos em branco");
    }
    else{
        alert("Cadastro efetuado com sucesso");
    }
}

function calcula (){
    var a =document.getElementById("input1").value;
    var b =document.getElementById("input2").value;

    for (var i = 0; i < document.getElementsByName("op").length; i++)
    {
        if (document.getElementsByName("op")[i].checked)
        {
            var c = document.getElementsByName("op")[i].value;
        

            if(c == 1){document.getElementById("resultado").innerHTML = parseInt(a) + parseInt(b)}
            else if(c == 2){document.getElementById("resultado").innerHTML = parseInt(a) - parseInt(b)}
            else if(c == 3){document.getElementById("resultado").innerHTML = parseInt(a) * parseInt(b)}
            else if(c == 4){document.getElementById("resultado").innerHTML = parseInt(a) / parseInt(b)}
        }
    }
}
