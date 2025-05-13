/* const h1 = document.querySelector(".container h1");
const data = new Date();

function diaSemanaNome(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "Segunda-Feira";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "Terça-Feira";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "Quarta-Feira";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "Quinta-Feira";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "Sexta-Feira";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "Sábado";
      return diaSemanaTexto;
    default:
      diaSemanaTexto = "";
      return diaSemanaTexto;
  }
}

function mudaMes(mes) {
  let numMesTexto;

  switch (mes) {
    case 0:
      numMesTexto = "Janeiro";
      return numMesTexto;
    case 1:
      numMesTexto = "Fevereiro";
      return numMesTexto;
    case 2:
      numMesTexto = "Março";
    case 3:
      numMesTexto = "Abril";
      return numMesTexto;
    case 4:
      numMesTexto = "Maio";
      return numMesTexto;
    case 5:
      numMesTexto = "Junho";
      return numMesTexto;
    case 6:
      numMesTexto = "Julho";
      return numMesTexto;
    case 7:
      numMesTexto = "Agosto";
      return numMesTexto;
    case 8:
      numMesTexto = "Setembro";
      return numMesTexto;
    case 9:
      numMesTexto = "Outubro";
      return numMesTexto;
    case 10:
      numMesTexto = "Novembro";
      return numMesTexto;
    case 11:
      numMesTexto = "Dezembro";
      return numMesTexto;
    default:
      numMesTexto = "";
      return numMesTexto;
  }
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();
  const nomeDia = diaSemanaNome(diaSemana);
  const nomeMes = mudaMes(numeroMes);

  return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(
    data.getHours()
  )}:${zeroAEsquerda(data.getMinutes())}`;
}

h1.innerHTML = criaData(data); */
