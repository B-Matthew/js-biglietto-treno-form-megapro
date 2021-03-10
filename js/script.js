var generaBtn = document.getElementById("genera");
var annullaBtn = document.getElementById("annulla");
var costo = 0.21;
var costoTotale = 0;

generaBtn.addEventListener('click', function() {

  var nome = document.getElementById("nome").value;
  var distanza = parseInt(document.getElementById("distanza").value);
  var eta = document.getElementById("eta").value;
  if (nome != "" && distanza > 0 && eta != "") {
    // Blocco Nome-biglietto

    document.getElementById("nome-biglietto").innerHTML = nome;

    // Blocco calcolo prezzo + offerta
    costoTotale = costo * distanza;
    if(eta == 2) {

      var sconto = costoTotale * 0.2;
      costoTotale = (costoTotale - sconto).toFixed(2);
      document.getElementById("costo-totale").innerHTML = costoTotale;
      document.getElementById("offerta").innerHTML = "Sconto 20%";
    } else if (eta == 3) {

      var sconto = costoTotale * 0.4;
      costoTotale = (costoTotale - sconto).toFixed(2);
      document.getElementById("offerta").innerHTML = "Sconto 40%";
      document.getElementById("costo-totale").innerHTML = costoTotale;
    } else {

      document.getElementById("offerta").innerHTML = "Nessuno sconto";
      document.getElementById("costo-totale").innerHTML = costoTotale;
    }

    // BLOCCO CARROZZA

    var carrozza = Math.floor(Math.random() * (15-1)) + 1;
    document.getElementById("carrozza").innerHTML = carrozza;
    // BLOCCO CODICECP
    var codiceCP = Math.floor(Math.random() * (100000 - 90000)) + 90000;
    document.getElementById("codiceCP").innerHTML = codiceCP;

  } else {
    alert("Inserisca tutti i dati correttamente");
  }
});

annullaBtn.addEventListener('click' , function(){
  var nome = document.getElementById("nome");
  nome.value = "";
  var distanza = document.getElementById("distanza");
  distanza.value = "";
  var eta = document.getElementById("eta");
  eta.value = "";

  document.getElementById("nome-biglietto").innerHTML = "";
  document.getElementById("offerta").innerHTML = "";
  document.getElementById("costo-totale").innerHTML = "";
  document.getElementById("carrozza").innerHTML = "";
  document.getElementById("codiceCP").innerHTML = "";
})
