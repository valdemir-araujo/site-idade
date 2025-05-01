//alert('olá, mundo!')

function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = window.document.getElementById("txtano");
  var res = window.document.querySelector("div#resultado");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("ERRO! verifique os dados e tente novamente");
  } else {
    var fsexo = window.document.getElementsByName("radsexo");
    var genero = "";
    var img = window.document.createElement("img");
    img.setAttribute("id", "foto");

    var idade = ano - Number(fano.value);
    //res.innerHTML = `Idade calculada ${idade}`
  }
  if (fsexo[0].checked) {
    genero = "Uma Criança masculina";
    if (idade >= 0 && idade <= 12) {
      img.setAttribute("src", "img/menino.png");
    } else if (idade < 20) {
      genero = "Um adolecente masculino";
      img.setAttribute("src", "img/adomas.png");
    } else if (idade < 60 ){
      genero = "Um homem masculino";
      img.setAttribute("src", "img/rapaz.png");
    } else {
      genero = "Um idoso masculino";
      img.setAttribute("src", "img/idoso2.png");
      
    }
  }
  if (fsexo[1].checked) {
    genero = "Uma Criança feminina";
    if (idade >= 0 && idade < 12) {
      img.setAttribute("src", "img/menina.png");
    } else if (idade <= 20) {
      genero = "Uma adolecente feminina";
      img.setAttribute("src", "img/adofem.png");
    } else if (idade <= 60 ){
      genero = "Uma mulher feminina";
      img.setAttribute("src", "img/moca.png");
    } else {
      genero = "Uma idosa feminina";
      img.setAttribute("src", "img/idosa.png");
      
    }
  }
  res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
  res.style.textAlign = 'center'
  res.appendChild(img);
}
