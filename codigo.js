function ocultar()
{
    document.getElementById('correto').style.display = 'none';
}

function digitarResp()
{
    if(document.getElementById('resposta').value != "")
    {
        document.getElementById('btSubmeter').style.display = 'block';   
    }
}

function submeterResp()
{
    if(document.getElementById('resposta').value == 3456)
    {
        alert("Será?");
        document.getElementById('login').style.display = 'none';
        document.getElementById('correto').style.display = 'block';

        document.getElementById("login").style.backgroundColor = "lightblue";
        document.body.style.background = "lightblue";
    }
    else
    {
        alert("Não foi dessa vez!");
    }
}
