var startBtn = document.getElementById("startBtn");
var saniye = 0;
var dakika = 0;
var saat = 0;

function saniyeSay() {
  document.getElementById("div1").innerHTML = saniye + "sec";
  saniye++;

  if (saniye == 60) {
    dakikaSay();
    document.getElementById("div2").innerHTML = dakika+"min:";
    saniye = 0;

    if (dakika == 59) {
      saatSay();
      document.getElementById("div3").innerHTML = saat + "hr:";
      dakika = 0;
    }
  }
}

function dakikaSay() {
  dakika++;
}

function saatSay() {
  saat++;
}


var degisken;
startBtn.addEventListener("click", function () {
  degisken = setInterval(saniyeSay, 1000);
});

var stopBtn = document.getElementById("stopBtn");
stopBtn.addEventListener("click", function () {
  clearInterval(degisken);
});

var resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {
  clearInterval(degisken);
  document.getElementById("div1").innerHTML = "0sec";
  document.getElementById("div2").innerHTML = "0min:";
  document.getElementById("div3").innerHTML = "0hr:";
  saniye = 0;
  dakika = 0;
  saat = 0;
});
