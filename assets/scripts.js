var jogador = 0;
var temGanhador = false;
var textButton = "";

function ganhador() {
  if (document.getElementById("bt1").value != "") {
    // Linha
    if (
      document.getElementById("bt1").value ==
        document.getElementById("bt2").value &&
      document.getElementById("bt2").value ==
        document.getElementById("bt3").value
    ) {
      document.getElementById("bt1").style.background = "#00ff00";
      document.getElementById("bt2").style.background = "#00ff00";
      document.getElementById("bt3").style.background = "#00ff00";
      
      return true;
    }

    // Diagonal
    if (
      document.getElementById("bt1").value ==
        document.getElementById("bt4").value &&
      document.getElementById("bt4").value ==
        document.getElementById("bt7").value
    ) {
      document.getElementById("bt1").style.background = "#00ff00";
      document.getElementById("bt4").style.background = "#00ff00";
      document.getElementById("bt7").style.background = "#00ff00";
      return true;
    }

    // Coluna
    if (
      document.getElementById("bt1").value ==
        document.getElementById("bt5").value &&
      document.getElementById("bt5").value ==
        document.getElementById("bt9").value
    ) {
      document.getElementById("bt1").style.background = "#00ff00";
      document.getElementById("bt5").style.background = "#00ff00";
      document.getElementById("bt9").style.background = "#00ff00";
      return true;
    }
  }
  if (document.getElementById("bt5").value != "") {
    // Linha
    if (
      document.getElementById("bt4").value ==
        document.getElementById("bt5").value &&
      document.getElementById("bt5").value ==
        document.getElementById("bt6").value
    ) {
      document.getElementById("bt4").style.background = "#00ff00";
      document.getElementById("bt5").style.background = "#00ff00";
      document.getElementById("bt6").style.background = "#00ff00";
      return true;
    }

    // Diagonal
    if (
      document.getElementById("bt3").value ==
        document.getElementById("bt5").value &&
      document.getElementById("bt5").value ==
        document.getElementById("bt7").value
    ) {
      document.getElementById("bt3").style.background = "#00ff00";
      document.getElementById("bt5").style.background = "#00ff00";
      document.getElementById("bt7").style.background = "#00ff00";
      return true;
    }

    // Coluna
    if (
      document.getElementById("bt2").value ==
        document.getElementById("bt5").value &&
      document.getElementById("bt5").value ==
        document.getElementById("bt8").value
    ) {
      document.getElementById("bt2").style.background = "#00ff00";
      document.getElementById("bt5").style.background = "#00ff00";
      document.getElementById("bt8").style.background = "#00ff00";
      return true;
    }
  }
  if (document.getElementById("bt9").value != "") {
    // Linha
    if (
      document.getElementById("bt7").value ==
        document.getElementById("bt8").value &&
      document.getElementById("bt8").value ==
        document.getElementById("bt9").value
    ) {
      document.getElementById("bt7").style.background = "#00ff00";
      document.getElementById("bt8").style.background = "#00ff00";
      document.getElementById("bt9").style.background = "#00ff00";
      return true;
    }

    // Coluna
    if (
      document.getElementById("bt3").value ==
        document.getElementById("bt6").value &&
      document.getElementById("bt6").value ==
        document.getElementById("bt9").value
    ) {
      document.getElementById("bt3").style.background = "#00ff00";
      document.getElementById("bt6").style.background = "#00ff00";
      document.getElementById("bt9").style.background = "#00ff00";
      return true;
    }
  }
}

function jogada(btn) {
  if (document.getElementById("bt" + btn).value == "") {
    if (jogador == 0) {
      textButton = "O";
      jogador = 1;
    } else {
      textButton = "X";
      jogador = 0;
    }
    document.getElementById("bt" + btn).value = textButton;
    temGanhador = ganhador();
  } else {
    alert("Campo já marcado!!");
  }
}
