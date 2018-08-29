function CBR_XML_Daily_Ru(rates) {
  function trend(current, previous) {
    if (current > previous) return ' ▲';
    if (current < previous) return ' ▼';
    return '';
  }
	
  var USDrate = rates.Valute.USD.Value.toFixed(4).replace('.', ',');
  var USD = document.getElementById('usd');
  USD.innerHTML = USD.innerHTML.replace('00,00', USDrate);
  USD.innerHTML += trend(rates.Valute.USD.Value, rates.Valute.USD.Previous);

  var EURrate = rates.Valute.EUR.Value.toFixed(4).replace('.', ',');
  var EUR = document.getElementById('eur');
  EUR.innerHTML = EUR.innerHTML.replace('00,00', EURrate);
  EUR.innerHTML += trend(rates.Valute.EUR.Value, rates.Valute.EUR.Previous);
  
  var GBPrate = rates.Valute.GBP.Value.toFixed(4).replace('.', ',');
  var GBP = document.getElementById('gbp');
  GBP.innerHTML = GBP.innerHTML.replace('00,00', GBPrate);
  GBP.innerHTML += trend(rates.Valute.GBP.Value, rates.Valute.GBP.Previous);
  
  var CADrate = rates.Valute.CAD.Value.toFixed(4).replace('.', ',');
  var CAD = document.getElementById('cad');
  CAD.innerHTML = CAD.innerHTML.replace('00,00', CADrate);
  CAD.innerHTML += trend(rates.Valute.CAD.Value, rates.Valute.CAD.Previous);
}
