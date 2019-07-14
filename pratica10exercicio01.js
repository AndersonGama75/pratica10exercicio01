/* var cont = document.getElementById("contId");
var tabs = document.getElementsByClassName("tab");

escondeTab();

function escondeTab() {

	
	
	var i;
	for (i = 0; i < tabs.length; i++) {
		tabs[i].style.display = "none";
	}
	cont.style.width = "720px";
}

function opcoes(y) {

	if (y == 'btnRio') {

		var k;
		for (k = 0; k < tabs.length; k++) {
			tabs[k].style.display = "block";
		}
	}
	cont.style.width = "1520px";
	console.log("Olá!!..");

} */

escondeTab();
function escondeTab() {
	
	tab01.style.visibility = "hidden";
	tab02.style.visibility = "hidden";
	tab03.style.visibility = "hidden";
	tab04.style.visibility = "hidden";
	tab05.style.visibility = "hidden";
	tab06.style.visibility = "hidden";
	tab07.style.visibility = "hidden";
	tab08.style.visibility = "hidden";
	tab09.style.visibility = "hidden";
	tab10.style.visibility = "hidden";
	tab11.style.visibility = "hidden";
	tab12.style.visibility = "hidden";
	tab13.style.visibility = "hidden";
	tab14.style.visibility = "hidden";
	tab15.style.visibility = "hidden";
	tab16.style.visibility = "hidden";
	tab17.style.visibility = "hidden";
	tab18.style.visibility = "hidden";
	console.log("oiii");
}

var contadorRio = 1;
var contadorJalap = 1;
var contadorBento = 1;
var contadorSerraG = 1;
var contadorRioRastro = 1;
var contadorPomerode = 1;
var contadorVeadeiros = 1;
var contadorPunta = 1;
var contadorMontevideo = 1;
var contadorSacram = 1;
var contadorBuenos = 1;
var contadorMisteriosa = 1;
var contadorArapey = 1;
var contadorDayman = 1;
var contadorPeri = 1;
var contadorSampa = 1;
var contadorJarBot = 1;
var contadorFoz = 1;

function opcoes(y) {

	if (y == 'btnRio') {
		
		contadorRio += 1;
		if (contadorRio % 2 == 0) {
			tab01.style.visibility = "visible";
		}	else {
				tab01.style.visibility = "hidden";
			}
		if (contadorRio == 9) {
			contadorRio = 1;
		}
	}

	if (y == 'btnJalap') {
		
		contadorJalap += 1;
		if (contadorJalap % 2 == 0) {
			tab02.style.visibility = "visible";
		}	else {
				tab02.style.visibility = "hidden";
			}
		if (contadorJalap == 9) {
			contadorJalap = 1;
		}
	}

	if (y == 'btnBento') {
		
		contadorBento += 1;
		if (contadorBento % 2 == 0) {
			tab03.style.visibility = "visible";
		}	else {
				tab03.style.visibility = "hidden";
			}
		if (contadorBento == 9) {
			contadorBento = 1;
		}
	}

	if (y == 'btnSerraG') {
		
		contadorSerraG += 1;
		if (contadorSerraG % 2 == 0) {
			tab04.style.visibility = "visible";
		}	else {
				tab04.style.visibility = "hidden";
			}
		if (contadorSerraG == 9) {
			contadorSerraG = 1;
		}
	}

	if (y == 'btnRioRastro') {
		
		contadorRioRastro += 1;
		if (contadorRioRastro % 2 == 0) {
			tab05.style.visibility = "visible";
		}	else {
				tab05.style.visibility = "hidden";
			}
		if (contadorRioRastro == 9) {
			contadorRioRastro = 1;
		}
	}

	if (y == 'btnPomerode') {
		
		contadorPomerode += 1;
		if (contadorPomerode % 2 == 0) {
			tab06.style.visibility = "visible";
		}	else {
				tab06.style.visibility = "hidden";
			}
		if (contadorPomerode == 9) {
			contadorPomerode = 1;
		}
	}

	if (y == 'btnVeadeiros') {
		
		contadorVeadeiros += 1;
		if (contadorVeadeiros % 2 == 0) {
			tab07.style.visibility = "visible";
		}	else {
				tab07.style.visibility = "hidden";
			}
		if (contadorVeadeiros == 9) {
			contadorVeadeiros = 1;
		}
	}

	if (y == 'btnPunta') {
		
		contadorPunta += 1;
		if (contadorPunta % 2 == 0) {
			tab08.style.visibility = "visible";
		}	else {
				tab08.style.visibility = "hidden";
			}
		if (contadorPunta == 9) {
			contadorPunta = 1;
		}
	}

	if (y == 'btnMontevideo') {
		
		contadorMontevideo += 1;
		if (contadorMontevideo % 2 == 0) {
			tab09.style.visibility = "visible";
		}	else {
				tab09.style.visibility = "hidden";
			}
		if (contadorMontevideo == 9) {
			contadorMontevideo = 1;
		}
	}

	if (y == 'btnSacram') {
		
		contadorSacram += 1;
		if (contadorSacram % 2 == 0) {
			tab10.style.visibility = "visible";
		}	else {
				tab10.style.visibility = "hidden";
			}
		if (contadorSacram == 9) {
			contadorSacram = 1;
		}
	}

	if (y == 'btnBuenos') {
		
		contadorBuenos += 1;
		if (contadorBuenos % 2 == 0) {
			tab11.style.visibility = "visible";
		}	else {
				tab11.style.visibility = "hidden";
			}
		if (contadorBuenos == 9) {
			contadorBuenos = 1;
		}
	}

	if (y == 'btnMisteriosa') {
		
		contadorMisteriosa += 1;
		if (contadorMisteriosa % 2 == 0) {
			tab12.style.visibility = "visible";
		}	else {
				tab12.style.visibility = "hidden";
			}
		if (contadorMisteriosa == 9) {
			contadorMisteriosa = 1;
		}
	}

	if (y == 'btnArapey') {
		
		contadorArapey += 1;
		if (contadorArapey % 2 == 0) {
			tab13.style.visibility = "visible";
		}	else {
				tab13.style.visibility = "hidden";
			}
		if (contadorArapey == 9) {
			contadorArapey = 1;
		}
	}

	if (y == 'btnDayman') {
		
		contadorDayman += 1;
		if (contadorDayman % 2 == 0) {
			tab14.style.visibility = "visible";
		}	else {
				tab14.style.visibility = "hidden";
			}
		if (contadorDayman == 9) {
			contadorDayman = 1;
		}
	}

	if (y == 'btnPeri') {
		
		contadorPeri += 1;
		if (contadorPeri % 2 == 0) {
			tab15.style.visibility = "visible";
		}	else {
				tab15.style.visibility = "hidden";
			}
		if (contadorPeri == 9) {
			contadorPeri = 1;
		}
	}

	if (y == 'btnSampa') {
		
		contadorSampa += 1;
		if (contadorSampa % 2 == 0) {
			tab16.style.visibility = "visible";
		}	else {
				tab16.style.visibility = "hidden";
			}
		if (contadorSampa == 9) {
			contadorSampa = 1;
		}
	}

	if (y == 'btnJarBot') {
		
		contadorJarBot += 1;
		if (contadorJarBot % 2 == 0) {
			tab17.style.visibility = "visible";
		}	else {
				tab17.style.visibility = "hidden";
			}
		if (contadorJarBot == 9) {
			contadorJarBot = 1;
		}
	}

	if (y == 'btnFoz') {
		
		contadorFoz += 1;
		if (contadorFoz % 2 == 0) {
			tab18.style.visibility = "visible";
		}	else {
				tab18.style.visibility = "hidden";
			}
		if (contadorFoz == 9) {
			contadorFoz = 1;
		}
	}

}



function tabela(x) {
	var ident = x;
	
	if (ident == 'orcRio1') {
		document.getElementById("campRio").innerHTML = "Valor da viagem >> R$ 700,00";
		
		document.getElementById("orcRio1").style.borderBottom = "0";   // Redefinindo aspecto do botão ao clicar
		document.getElementById("orcRio2").style.borderBottom = "1px solid black";
		document.getElementById("orcRio3").style.borderBottom = "1px solid black";
		document.getElementById("orcRio4").style.borderBottom = "1px solid black";

		document.getElementById("orcRio1").style.color = "black";   // Redefinindo aspecto da fonte do botão ao clicar
		document.getElementById("orcRio2").style.color = "#7f7f7f";
		document.getElementById("orcRio3").style.color = "#7f7f7f";
		document.getElementById("orcRio4").style.color = "#7f7f7f";
	}
	if (ident == 'orcRio2') {
		document.getElementById("campRio").innerHTML = "Valor da viagem >> R$ 850,00";

		document.getElementById("orcRio2").style.borderBottom = "0";
		document.getElementById("orcRio1").style.borderBottom = "1px solid black";
		document.getElementById("orcRio3").style.borderBottom = "1px solid black";
		document.getElementById("orcRio4").style.borderBottom = "1px solid black";

		document.getElementById("orcRio2").style.color = "black";
		document.getElementById("orcRio1").style.color = "#7f7f7f";
		document.getElementById("orcRio3").style.color = "#7f7f7f";
		document.getElementById("orcRio4").style.color = "#7f7f7f";
	}
	if (ident == 'orcRio3') {
		document.getElementById("campRio").innerHTML = "Valor da viagem >> R$ 910,00";

		document.getElementById("orcRio3").style.borderBottom = "0";
		document.getElementById("orcRio2").style.borderBottom = "1px solid black";
		document.getElementById("orcRio1").style.borderBottom = "1px solid black";
		document.getElementById("orcRio4").style.borderBottom = "1px solid black";

		document.getElementById("orcRio3").style.color = "black";
		document.getElementById("orcRio2").style.color = "#7f7f7f";
		document.getElementById("orcRio1").style.color = "#7f7f7f";
		document.getElementById("orcRio4").style.color = "#7f7f7f";
	}
	if (ident == 'orcRio4') {
		document.getElementById("campRio").innerHTML = "Haverá excursão programada ao Cristo Redentor.";

		document.getElementById("orcRio4").style.borderBottom = "0";
		document.getElementById("orcRio2").style.borderBottom = "1px solid black";
		document.getElementById("orcRio3").style.borderBottom = "1px solid black";
		document.getElementById("orcRio1").style.borderBottom = "1px solid black";

		document.getElementById("orcRio4").style.color = "black";
		document.getElementById("orcRio2").style.color = "#7f7f7f";
		document.getElementById("orcRio3").style.color = "#7f7f7f";
		document.getElementById("orcRio1").style.color = "#7f7f7f";
	}


	if (ident == 'orcJalap1') {
		document.getElementById("campJalap").innerHTML = "Valor da viagem >> R$ 940,00";

		document.getElementById("orcJalap1").style.borderBottom = "0";
		document.getElementById("orcJalap2").style.borderBottom = "1px solid black";
		document.getElementById("orcJalap3").style.borderBottom = "1px solid black";
		document.getElementById("orcJalap4").style.borderBottom = "1px solid black";

		document.getElementById("orcJalap1").style.color = "black";
		document.getElementById("orcJalap2").style.color = "#7f7f7f";
		document.getElementById("orcJalap3").style.color = "#7f7f7f";
		document.getElementById("orcJalap4").style.color = "#7f7f7f";
	}
	if (ident == 'orcJalap2') {
		document.getElementById("campJalap").innerHTML = "Valor da viagem >> R$ 1100,00";
		
		document.getElementById("orcJalap2").style.borderBottom = "0";
		document.getElementById("orcJalap1").style.borderBottom = "1px solid black";
		document.getElementById("orcJalap3").style.borderBottom = "1px solid black";
		document.getElementById("orcJalap4").style.borderBottom = "1px solid black";

		document.getElementById("orcJalap2").style.color = "black";
		document.getElementById("orcJalap1").style.color = "#7f7f7f";
		document.getElementById("orcJalap3").style.color = "#7f7f7f";
		document.getElementById("orcJalap4").style.color = "#7f7f7f";
	}
	if (ident == 'orcJalap3') {
		document.getElementById("campJalap").innerHTML = "Valor da viagem >> R$ 1320,00";

		document.getElementById("orcJalap3").style.borderBottom = "0";
		document.getElementById("orcJalap2").style.borderBottom = "1px solid black";
		document.getElementById("orcJalap1").style.borderBottom = "1px solid black";
		document.getElementById("orcJalap4").style.borderBottom = "1px solid black";

		document.getElementById("orcJalap3").style.color = "black";
		document.getElementById("orcJalap2").style.color = "#7f7f7f";
		document.getElementById("orcJalap1").style.color = "#7f7f7f";
		document.getElementById("orcJalap4").style.color = "#7f7f7f";
	}
	if (ident == 'orcJalap4') {
		document.getElementById("campJalap").innerHTML = "Traga sua roupa de banho.";

		document.getElementById("orcJalap4").style.borderBottom = "0";
		document.getElementById("orcJalap2").style.borderBottom = "1px solid black";
		document.getElementById("orcJalap3").style.borderBottom = "1px solid black";
		document.getElementById("orcJalap1").style.borderBottom = "1px solid black";

		document.getElementById("orcJalap4").style.color = "black";
		document.getElementById("orcJalap2").style.color = "#7f7f7f";
		document.getElementById("orcJalap3").style.color = "#7f7f7f";
		document.getElementById("orcJalap1").style.color = "#7f7f7f";
	}


	if (ident == 'orcBento1') {
		document.getElementById("campBento").innerHTML = "Valor da viagem >> R$ 760,00";

		document.getElementById("orcBento1").style.borderBottom = "0";
		document.getElementById("orcBento2").style.borderBottom = "1px solid black";
		document.getElementById("orcBento3").style.borderBottom = "1px solid black";
		document.getElementById("orcBento4").style.borderBottom = "1px solid black";

		document.getElementById("orcBento1").style.color = "black";
		document.getElementById("orcBento2").style.color = "#7f7f7f";
		document.getElementById("orcBento3").style.color = "#7f7f7f";
		document.getElementById("orcBento4").style.color = "#7f7f7f";
	}
	if (ident == 'orcBento2') {
		document.getElementById("campBento").innerHTML = "Valor da viagem >> R$ 960,00";

		document.getElementById("orcBento2").style.borderBottom = "0";
		document.getElementById("orcBento1").style.borderBottom = "1px solid black";
		document.getElementById("orcBento3").style.borderBottom = "1px solid black";
		document.getElementById("orcBento4").style.borderBottom = "1px solid black";

		document.getElementById("orcBento2").style.color = "black";
		document.getElementById("orcBento1").style.color = "#7f7f7f";
		document.getElementById("orcBento3").style.color = "#7f7f7f";
		document.getElementById("orcBento4").style.color = "#7f7f7f";
	}
	if (ident == 'orcBento3') {
		document.getElementById("campBento").innerHTML = "Valor da viagem >> R$ 1010,00";

		document.getElementById("orcBento3").style.borderBottom = "0";
		document.getElementById("orcBento2").style.borderBottom = "1px solid black";
		document.getElementById("orcBento1").style.borderBottom = "1px solid black";
		document.getElementById("orcBento4").style.borderBottom = "1px solid black";

		document.getElementById("orcBento3").style.color = "black";
		document.getElementById("orcBento2").style.color = "#7f7f7f";
		document.getElementById("orcBento1").style.color = "#7f7f7f";
		document.getElementById("orcBento4").style.color = "#7f7f7f";
	}
	if (ident == 'orcBento4') {
		document.getElementById("campBento").innerHTML = "Belíssima paisagem no passeio de Maria Fumaça.";

		document.getElementById("orcBento4").style.borderBottom = "0";
		document.getElementById("orcBento2").style.borderBottom = "1px solid black";
		document.getElementById("orcBento3").style.borderBottom = "1px solid black";
		document.getElementById("orcBento1").style.borderBottom = "1px solid black";

		document.getElementById("orcBento4").style.color = "black";
		document.getElementById("orcBento2").style.color = "#7f7f7f";
		document.getElementById("orcBento3").style.color = "#7f7f7f";
		document.getElementById("orcBento1").style.color = "#7f7f7f";
	}


	if (ident == 'orcSerraG1') {
		document.getElementById("campSerraG").innerHTML = "Valor da viagem >> R$ 1160,00";

		document.getElementById("orcSerraG1").style.borderBottom = "0";
		document.getElementById("orcSerraG2").style.borderBottom = "1px solid black";
		document.getElementById("orcSerraG3").style.borderBottom = "1px solid black";
		document.getElementById("orcSerraG4").style.borderBottom = "1px solid black";

		document.getElementById("orcSerraG1").style.color = "black";
		document.getElementById("orcSerraG2").style.color = "#7f7f7f";
		document.getElementById("orcSerraG3").style.color = "#7f7f7f";
		document.getElementById("orcSerraG4").style.color = "#7f7f7f";
	}
	if (ident == 'orcSerraG2') {
		document.getElementById("campSerraG").innerHTML = "Valor da viagem >> R$ 1300,00";

		document.getElementById("orcSerraG2").style.borderBottom = "0";
		document.getElementById("orcSerraG1").style.borderBottom = "1px solid black";
		document.getElementById("orcSerraG3").style.borderBottom = "1px solid black";
		document.getElementById("orcSerraG4").style.borderBottom = "1px solid black";

		document.getElementById("orcSerraG2").style.color = "black";
		document.getElementById("orcSerraG1").style.color = "#7f7f7f";
		document.getElementById("orcSerraG3").style.color = "#7f7f7f";
		document.getElementById("orcSerraG4").style.color = "#7f7f7f";
	}
	if (ident == 'orcSerraG3') {
		document.getElementById("campSerraG").innerHTML = "Valor da viagem >> R$ 1500,00";

		document.getElementById("orcSerraG3").style.borderBottom = "0";
		document.getElementById("orcSerraG2").style.borderBottom = "1px solid black";
		document.getElementById("orcSerraG1").style.borderBottom = "1px solid black";
		document.getElementById("orcSerraG4").style.borderBottom = "1px solid black";

		document.getElementById("orcSerraG3").style.color = "black";
		document.getElementById("orcSerraG2").style.color = "#7f7f7f";
		document.getElementById("orcSerraG1").style.color = "#7f7f7f";
		document.getElementById("orcSerraG4").style.color = "#7f7f7f";
	}
	if (ident == 'orcSerraG4') {
		document.getElementById("campSerraG").innerHTML = "Traga seu agasalho.";

		document.getElementById("orcSerraG4").style.borderBottom = "0";
		document.getElementById("orcSerraG2").style.borderBottom = "1px solid black";
		document.getElementById("orcSerraG3").style.borderBottom = "1px solid black";
		document.getElementById("orcSerraG1").style.borderBottom = "1px solid black";

		document.getElementById("orcSerraG4").style.color = "black";
		document.getElementById("orcSerraG2").style.color = "#7f7f7f";
		document.getElementById("orcSerraG3").style.color = "#7f7f7f";
		document.getElementById("orcSerraG1").style.color = "#7f7f7f";
	}


	if (ident == 'orcRioRastro1') {
		document.getElementById("campRioRastro").innerHTML = "Valor da viagem >> R$ 1100,00";

		document.getElementById("orcRioRastro1").style.borderBottom = "0";
		document.getElementById("orcRioRastro2").style.borderBottom = "1px solid black";
		document.getElementById("orcRioRastro3").style.borderBottom = "1px solid black";
		document.getElementById("orcRioRastro4").style.borderBottom = "1px solid black";

		document.getElementById("orcRioRastro1").style.color = "black";
		document.getElementById("orcRioRastro2").style.color = "#7f7f7f";
		document.getElementById("orcRioRastro3").style.color = "#7f7f7f";
		document.getElementById("orcRioRastro4").style.color = "#7f7f7f";
	}
	if (ident == 'orcRioRastro2') {
		document.getElementById("campRioRastro").innerHTML = "Valor da viagem >> R$ 1500,00";

		document.getElementById("orcRioRastro2").style.borderBottom = "0";
		document.getElementById("orcRioRastro1").style.borderBottom = "1px solid black";
		document.getElementById("orcRioRastro3").style.borderBottom = "1px solid black";
		document.getElementById("orcRioRastro4").style.borderBottom = "1px solid black";

		document.getElementById("orcRioRastro2").style.color = "black";
		document.getElementById("orcRioRastro1").style.color = "#7f7f7f";
		document.getElementById("orcRioRastro3").style.color = "#7f7f7f";
		document.getElementById("orcRioRastro4").style.color = "#7f7f7f";
	}
	if (ident == 'orcRioRastro3') {
		document.getElementById("campRioRastro").innerHTML = "Valor da viagem >> R$ 1710,00";

		document.getElementById("orcRioRastro3").style.borderBottom = "0";
		document.getElementById("orcRioRastro2").style.borderBottom = "1px solid black";
		document.getElementById("orcRioRastro1").style.borderBottom = "1px solid black";
		document.getElementById("orcRioRastro4").style.borderBottom = "1px solid black";

		document.getElementById("orcRioRastro3").style.color = "black";
		document.getElementById("orcRioRastro2").style.color = "#7f7f7f";
		document.getElementById("orcRioRastro1").style.color = "#7f7f7f";
		document.getElementById("orcRioRastro4").style.color = "#7f7f7f";
	}
	if (ident == 'orcRioRastro4') {
		document.getElementById("campRioRastro").innerHTML = "Hospedagens bem localizadas, com acesso à trilhas.";

		document.getElementById("orcRioRastro4").style.borderBottom = "0";
		document.getElementById("orcRioRastro2").style.borderBottom = "1px solid black";
		document.getElementById("orcRioRastro3").style.borderBottom = "1px solid black";
		document.getElementById("orcRioRastro1").style.borderBottom = "1px solid black";

		document.getElementById("orcRioRastro4").style.color = "black";
		document.getElementById("orcRioRastro2").style.color = "#7f7f7f";
		document.getElementById("orcRioRastro3").style.color = "#7f7f7f";
		document.getElementById("orcRioRastro1").style.color = "#7f7f7f";
	}


	if (ident == 'orcPomerode1') {
		document.getElementById("campPomerode").innerHTML = "Valor da viagem >> R$ 930,00";

		document.getElementById("orcPomerode1").style.borderBottom = "0";
		document.getElementById("orcPomerode2").style.borderBottom = "1px solid black";
		document.getElementById("orcPomerode3").style.borderBottom = "1px solid black";
		document.getElementById("orcPomerode4").style.borderBottom = "1px solid black";

		document.getElementById("orcPomerode1").style.color = "black";
		document.getElementById("orcPomerode2").style.color = "#7f7f7f";
		document.getElementById("orcPomerode3").style.color = "#7f7f7f";
		document.getElementById("orcPomerode4").style.color = "#7f7f7f";
	}
	if (ident == 'orcPomerode2') {
		document.getElementById("campPomerode").innerHTML = "Valor da viagem >> R$ 1170,00";

		document.getElementById("orcPomerode2").style.borderBottom = "0";
		document.getElementById("orcPomerode1").style.borderBottom = "1px solid black";
		document.getElementById("orcPomerode3").style.borderBottom = "1px solid black";
		document.getElementById("orcPomerode4").style.borderBottom = "1px solid black";

		document.getElementById("orcPomerode2").style.color = "black";
		document.getElementById("orcPomerode1").style.color = "#7f7f7f";
		document.getElementById("orcPomerode3").style.color = "#7f7f7f";
		document.getElementById("orcPomerode4").style.color = "#7f7f7f";
	}
	if (ident == 'orcPomerode3') {
		document.getElementById("campPomerode").innerHTML = "Valor da viagem >> R$ 1490,00";

		document.getElementById("orcPomerode3").style.borderBottom = "0";
		document.getElementById("orcPomerode2").style.borderBottom = "1px solid black";
		document.getElementById("orcPomerode1").style.borderBottom = "1px solid black";
		document.getElementById("orcPomerode4").style.borderBottom = "1px solid black";

		document.getElementById("orcPomerode3").style.color = "black";
		document.getElementById("orcPomerode2").style.color = "#7f7f7f";
		document.getElementById("orcPomerode1").style.color = "#7f7f7f";
		document.getElementById("orcPomerode4").style.color = "#7f7f7f";
	}
	if (ident == 'orcPomerode4') {
		document.getElementById("campPomerode").innerHTML = "Desfrute da hospitalidade do povo catarinense.";

		document.getElementById("orcPomerode4").style.borderBottom = "0";
		document.getElementById("orcPomerode2").style.borderBottom = "1px solid black";
		document.getElementById("orcPomerode3").style.borderBottom = "1px solid black";
		document.getElementById("orcPomerode1").style.borderBottom = "1px solid black";

		document.getElementById("orcPomerode4").style.color = "black";
		document.getElementById("orcPomerode2").style.color = "#7f7f7f";
		document.getElementById("orcPomerode3").style.color = "#7f7f7f";
		document.getElementById("orcPomerode1").style.color = "#7f7f7f";
	}


	if (ident == 'orcVeadeiros1') {
		document.getElementById("campVeadeiros").innerHTML = "Valor da viagem >> R$ 1230,00";

		document.getElementById("orcVeadeiros1").style.borderBottom = "0";
		document.getElementById("orcVeadeiros2").style.borderBottom = "1px solid black";
		document.getElementById("orcVeadeiros3").style.borderBottom = "1px solid black";
		document.getElementById("orcVeadeiros4").style.borderBottom = "1px solid black";

		document.getElementById("orcVeadeiros1").style.color = "black";
		document.getElementById("orcVeadeiros2").style.color = "#7f7f7f";
		document.getElementById("orcVeadeiros3").style.color = "#7f7f7f";
		document.getElementById("orcVeadeiros4").style.color = "#7f7f7f";
	}
	if (ident == 'orcVeadeiros2') {
		document.getElementById("campVeadeiros").innerHTML = "Valor da viagem >> R$ 1580,00";

		document.getElementById("orcVeadeiros2").style.borderBottom = "0";
		document.getElementById("orcVeadeiros1").style.borderBottom = "1px solid black";
		document.getElementById("orcVeadeiros3").style.borderBottom = "1px solid black";
		document.getElementById("orcVeadeiros4").style.borderBottom = "1px solid black";

		document.getElementById("orcVeadeiros2").style.color = "black";
		document.getElementById("orcVeadeiros1").style.color = "#7f7f7f";
		document.getElementById("orcVeadeiros3").style.color = "#7f7f7f";
		document.getElementById("orcVeadeiros4").style.color = "#7f7f7f";
	}
	if (ident == 'orcVeadeiros3') {
		document.getElementById("campVeadeiros").innerHTML = "Valor da viagem >> R$ 1750,00";

		document.getElementById("orcVeadeiros3").style.borderBottom = "0";
		document.getElementById("orcVeadeiros2").style.borderBottom = "1px solid black";
		document.getElementById("orcVeadeiros1").style.borderBottom = "1px solid black";
		document.getElementById("orcVeadeiros4").style.borderBottom = "1px solid black";

		document.getElementById("orcVeadeiros3").style.color = "black";
		document.getElementById("orcVeadeiros2").style.color = "#7f7f7f";
		document.getElementById("orcVeadeiros1").style.color = "#7f7f7f";
		document.getElementById("orcVeadeiros4").style.color = "#7f7f7f";
	}
	if (ident == 'orcVeadeiros4') {
		document.getElementById("campVeadeiros").innerHTML = "Já se imaginou num voou de parapente neste paraíso!?";

		document.getElementById("orcVeadeiros4").style.borderBottom = "0";
		document.getElementById("orcVeadeiros2").style.borderBottom = "1px solid black";
		document.getElementById("orcVeadeiros3").style.borderBottom = "1px solid black";
		document.getElementById("orcVeadeiros1").style.borderBottom = "1px solid black";

		document.getElementById("orcVeadeiros4").style.color = "black";
		document.getElementById("orcVeadeiros2").style.color = "#7f7f7f";
		document.getElementById("orcVeadeiros3").style.color = "#7f7f7f";
		document.getElementById("orcVeadeiros1").style.color = "#7f7f7f";
	}


	if (ident == 'orcPunta1') {
		document.getElementById("campPunta").innerHTML = "Valor da viagem >> R$ 1350,00";

		document.getElementById("orcPunta1").style.borderBottom = "0";
		document.getElementById("orcPunta2").style.borderBottom = "1px solid black";
		document.getElementById("orcPunta3").style.borderBottom = "1px solid black";
		document.getElementById("orcPunta4").style.borderBottom = "1px solid black";

		document.getElementById("orcPunta1").style.color = "black";
		document.getElementById("orcPunta2").style.color = "#7f7f7f";
		document.getElementById("orcPunta3").style.color = "#7f7f7f";
		document.getElementById("orcPunta4").style.color = "#7f7f7f";
	}
	if (ident == 'orcPunta2') {
		document.getElementById("campPunta").innerHTML = "Valor da viagem >> R$ 1650,00";

		document.getElementById("orcPunta2").style.borderBottom = "0";
		document.getElementById("orcPunta1").style.borderBottom = "1px solid black";
		document.getElementById("orcPunta3").style.borderBottom = "1px solid black";
		document.getElementById("orcPunta4").style.borderBottom = "1px solid black";

		document.getElementById("orcPunta2").style.color = "black";
		document.getElementById("orcPunta1").style.color = "#7f7f7f";
		document.getElementById("orcPunta3").style.color = "#7f7f7f";
		document.getElementById("orcPunta4").style.color = "#7f7f7f";
	}
	if (ident == 'orcPunta3') {
		document.getElementById("campPunta").innerHTML = "Valor da viagem >> R$ 2150,00";

		document.getElementById("orcPunta3").style.borderBottom = "0";
		document.getElementById("orcPunta2").style.borderBottom = "1px solid black";
		document.getElementById("orcPunta1").style.borderBottom = "1px solid black";
		document.getElementById("orcPunta4").style.borderBottom = "1px solid black";

		document.getElementById("orcPunta3").style.color = "black";
		document.getElementById("orcPunta2").style.color = "#7f7f7f";
		document.getElementById("orcPunta1").style.color = "#7f7f7f";
		document.getElementById("orcPunta4").style.color = "#7f7f7f";
	}
	if (ident == 'orcPunta4') {
		document.getElementById("campPunta").innerHTML = "Viage para um dos mais fascinantes destinos turísticos do Uruguai.";

		document.getElementById("orcPunta4").style.borderBottom = "0";
		document.getElementById("orcPunta2").style.borderBottom = "1px solid black";
		document.getElementById("orcPunta3").style.borderBottom = "1px solid black";
		document.getElementById("orcPunta1").style.borderBottom = "1px solid black";

		document.getElementById("orcPunta4").style.color = "black";
		document.getElementById("orcPunta2").style.color = "#7f7f7f";
		document.getElementById("orcPunta3").style.color = "#7f7f7f";
		document.getElementById("orcPunta1").style.color = "#7f7f7f";
	}


	if (ident == 'orcMontevideo1') {
		document.getElementById("campMontevideo").innerHTML = "Valor da viagem >> R$ 1110,00";

		document.getElementById("orcMontevideo1").style.borderBottom = "0";
		document.getElementById("orcMontevideo2").style.borderBottom = "1px solid black";
		document.getElementById("orcMontevideo3").style.borderBottom = "1px solid black";
		document.getElementById("orcMontevideo4").style.borderBottom = "1px solid black";

		document.getElementById("orcMontevideo1").style.color = "black";
		document.getElementById("orcMontevideo2").style.color = "#7f7f7f";
		document.getElementById("orcMontevideo3").style.color = "#7f7f7f";
		document.getElementById("orcMontevideo4").style.color = "#7f7f7f";
	}
	if (ident == 'orcMontevideo2') {
		document.getElementById("campMontevideo").innerHTML = "Valor da viagem >> R$ 1410,00";

		document.getElementById("orcMontevideo2").style.borderBottom = "0";
		document.getElementById("orcMontevideo1").style.borderBottom = "1px solid black";
		document.getElementById("orcMontevideo3").style.borderBottom = "1px solid black";
		document.getElementById("orcMontevideo4").style.borderBottom = "1px solid black";

		document.getElementById("orcMontevideo2").style.color = "black";
		document.getElementById("orcMontevideo1").style.color = "#7f7f7f";
		document.getElementById("orcMontevideo3").style.color = "#7f7f7f";
		document.getElementById("orcMontevideo4").style.color = "#7f7f7f";
	}
	if (ident == 'orcMontevideo3') {
		document.getElementById("campMontevideo").innerHTML = "Valor da viagem >> R$ 1720,00";

		document.getElementById("orcMontevideo3").style.borderBottom = "0";
		document.getElementById("orcMontevideo2").style.borderBottom = "1px solid black";
		document.getElementById("orcMontevideo1").style.borderBottom = "1px solid black";
		document.getElementById("orcMontevideo4").style.borderBottom = "1px solid black";

		document.getElementById("orcMontevideo3").style.color = "black";
		document.getElementById("orcMontevideo2").style.color = "#7f7f7f";
		document.getElementById("orcMontevideo1").style.color = "#7f7f7f";
		document.getElementById("orcMontevideo4").style.color = "#7f7f7f";
	}
	if (ident == 'orcMontevideo4') {
		document.getElementById("campMontevideo").innerHTML = "Impressione-se com os balneários e cassinos da capital uruguaia.";

		document.getElementById("orcMontevideo4").style.borderBottom = "0";
		document.getElementById("orcMontevideo2").style.borderBottom = "1px solid black";
		document.getElementById("orcMontevideo3").style.borderBottom = "1px solid black";
		document.getElementById("orcMontevideo1").style.borderBottom = "1px solid black";

		document.getElementById("orcMontevideo4").style.color = "black";
		document.getElementById("orcMontevideo2").style.color = "#7f7f7f";
		document.getElementById("orcMontevideo3").style.color = "#7f7f7f";
		document.getElementById("orcMontevideo1").style.color = "#7f7f7f";
	}


	if (ident == 'orcSacram1') {
		document.getElementById("campSacram").innerHTML = "Valor da viagem >> R$ 980,00";

		document.getElementById("orcSacram1").style.borderBottom = "0";
		document.getElementById("orcSacram2").style.borderBottom = "1px solid black";
		document.getElementById("orcSacram3").style.borderBottom = "1px solid black";
		document.getElementById("orcSacram4").style.borderBottom = "1px solid black";

		document.getElementById("orcSacram1").style.color = "black";
		document.getElementById("orcSacram2").style.color = "#7f7f7f";
		document.getElementById("orcSacram3").style.color = "#7f7f7f";
		document.getElementById("orcSacram4").style.color = "#7f7f7f";
	}
	if (ident == 'orcSacram2') {
		document.getElementById("campSacram").innerHTML = "Valor da viagem >> R$ 1200,00";

		document.getElementById("orcSacram2").style.borderBottom = "0";
		document.getElementById("orcSacram1").style.borderBottom = "1px solid black";
		document.getElementById("orcSacram3").style.borderBottom = "1px solid black";
		document.getElementById("orcSacram4").style.borderBottom = "1px solid black";

		document.getElementById("orcSacram2").style.color = "black";
		document.getElementById("orcSacram1").style.color = "#7f7f7f";
		document.getElementById("orcSacram3").style.color = "#7f7f7f";
		document.getElementById("orcSacram4").style.color = "#7f7f7f";
	}
	if (ident == 'orcSacram3') {
		document.getElementById("campSacram").innerHTML = "Valor da viagem >> R$ 1490,00";

		document.getElementById("orcSacram3").style.borderBottom = "0";
		document.getElementById("orcSacram2").style.borderBottom = "1px solid black";
		document.getElementById("orcSacram1").style.borderBottom = "1px solid black";
		document.getElementById("orcSacram4").style.borderBottom = "1px solid black";

		document.getElementById("orcSacram3").style.color = "black";
		document.getElementById("orcSacram2").style.color = "#7f7f7f";
		document.getElementById("orcSacram1").style.color = "#7f7f7f";
		document.getElementById("orcSacram4").style.color = "#7f7f7f";
	}
	if (ident == 'orcSacram4') {
		document.getElementById("campSacram").innerHTML = "Esbalde-se na delicadeza rústica da 'Paraty do Uruguai'.";

		document.getElementById("orcSacram4").style.borderBottom = "0";
		document.getElementById("orcSacram2").style.borderBottom = "1px solid black";
		document.getElementById("orcSacram3").style.borderBottom = "1px solid black";
		document.getElementById("orcSacram1").style.borderBottom = "1px solid black";

		document.getElementById("orcSacram4").style.color = "black";
		document.getElementById("orcSacram2").style.color = "#7f7f7f";
		document.getElementById("orcSacram3").style.color = "#7f7f7f";
		document.getElementById("orcSacram1").style.color = "#7f7f7f";
	}


	if (ident == 'orcBuenos1') {
		document.getElementById("campBuenos").innerHTML = "Valor da viagem >> R$ 910,00";

		document.getElementById("orcBuenos1").style.borderBottom = "0";
		document.getElementById("orcBuenos2").style.borderBottom = "1px solid black";
		document.getElementById("orcBuenos3").style.borderBottom = "1px solid black";
		document.getElementById("orcBuenos4").style.borderBottom = "1px solid black";

		document.getElementById("orcBuenos1").style.color = "black";
		document.getElementById("orcBuenos2").style.color = "#7f7f7f";
		document.getElementById("orcBuenos3").style.color = "#7f7f7f";
		document.getElementById("orcBuenos4").style.color = "#7f7f7f";
	}
	if (ident == 'orcBuenos2') {
		document.getElementById("campBuenos").innerHTML = "Valor da viagem >> R$ 1150,00";

		document.getElementById("orcBuenos2").style.borderBottom = "0";
		document.getElementById("orcBuenos1").style.borderBottom = "1px solid black";
		document.getElementById("orcBuenos3").style.borderBottom = "1px solid black";
		document.getElementById("orcBuenos4").style.borderBottom = "1px solid black";

		document.getElementById("orcBuenos2").style.color = "black";
		document.getElementById("orcBuenos1").style.color = "#7f7f7f";
		document.getElementById("orcBuenos3").style.color = "#7f7f7f";
		document.getElementById("orcBuenos4").style.color = "#7f7f7f";
	}
	if (ident == 'orcBuenos3') {
		document.getElementById("campBuenos").innerHTML = "Valor da viagem >> R$ 1370,00";

		document.getElementById("orcBuenos3").style.borderBottom = "0";
		document.getElementById("orcBuenos2").style.borderBottom = "1px solid black";
		document.getElementById("orcBuenos1").style.borderBottom = "1px solid black";
		document.getElementById("orcBuenos4").style.borderBottom = "1px solid black";

		document.getElementById("orcBuenos3").style.color = "black";
		document.getElementById("orcBuenos2").style.color = "#7f7f7f";
		document.getElementById("orcBuenos1").style.color = "#7f7f7f";
		document.getElementById("orcBuenos4").style.color = "#7f7f7f";
	}
	if (ident == 'orcBuenos4') {
		document.getElementById("campBuenos").innerHTML = "Divirta-se na receptiva Buenos Aires e faça boas compras.";

		document.getElementById("orcBuenos4").style.borderBottom = "0";
		document.getElementById("orcBuenos2").style.borderBottom = "1px solid black";
		document.getElementById("orcBuenos3").style.borderBottom = "1px solid black";
		document.getElementById("orcBuenos1").style.borderBottom = "1px solid black";

		document.getElementById("orcBuenos4").style.color = "black";
		document.getElementById("orcBuenos2").style.color = "#7f7f7f";
		document.getElementById("orcBuenos3").style.color = "#7f7f7f";
		document.getElementById("orcBuenos1").style.color = "#7f7f7f";
	}


	if (ident == 'orcMisteriosa1') {
		document.getElementById("campMisteriosa").innerHTML = "Valor da viagem >> R$ 1150,00";

		document.getElementById("orcMisteriosa1").style.borderBottom = "0";
		document.getElementById("orcMisteriosa2").style.borderBottom = "1px solid black";
		document.getElementById("orcMisteriosa3").style.borderBottom = "1px solid black";
		document.getElementById("orcMisteriosa4").style.borderBottom = "1px solid black";

		document.getElementById("orcMisteriosa1").style.color = "black";
		document.getElementById("orcMisteriosa2").style.color = "#7f7f7f";
		document.getElementById("orcMisteriosa3").style.color = "#7f7f7f";
		document.getElementById("orcMisteriosa4").style.color = "#7f7f7f";
	}
	if (ident == 'orcMisteriosa2') {
		document.getElementById("campMisteriosa").innerHTML = "Valor da viagem >> R$ 1400,00";

		document.getElementById("orcMisteriosa2").style.borderBottom = "0";
		document.getElementById("orcMisteriosa1").style.borderBottom = "1px solid black";
		document.getElementById("orcMisteriosa3").style.borderBottom = "1px solid black";
		document.getElementById("orcMisteriosa4").style.borderBottom = "1px solid black";

		document.getElementById("orcMisteriosa2").style.color = "black";
		document.getElementById("orcMisteriosa1").style.color = "#7f7f7f";
		document.getElementById("orcMisteriosa3").style.color = "#7f7f7f";
		document.getElementById("orcMisteriosa4").style.color = "#7f7f7f";
	}
	if (ident == 'orcMisteriosa3') {
		document.getElementById("campMisteriosa").innerHTML = "Valor da viagem >> R$ 1860,00";

		document.getElementById("orcMisteriosa3").style.borderBottom = "0";
		document.getElementById("orcMisteriosa2").style.borderBottom = "1px solid black";
		document.getElementById("orcMisteriosa1").style.borderBottom = "1px solid black";
		document.getElementById("orcMisteriosa4").style.borderBottom = "1px solid black";

		document.getElementById("orcMisteriosa3").style.color = "black";
		document.getElementById("orcMisteriosa2").style.color = "#7f7f7f";
		document.getElementById("orcMisteriosa1").style.color = "#7f7f7f";
		document.getElementById("orcMisteriosa4").style.color = "#7f7f7f";
	}
	if (ident == 'orcMisteriosa4') {
		document.getElementById("campMisteriosa").innerHTML = "Vá a bonito e mergulhe na encantadora Lagoa Misteriosa.";

		document.getElementById("orcMisteriosa4").style.borderBottom = "0";
		document.getElementById("orcMisteriosa2").style.borderBottom = "1px solid black";
		document.getElementById("orcMisteriosa3").style.borderBottom = "1px solid black";
		document.getElementById("orcMisteriosa1").style.borderBottom = "1px solid black";

		document.getElementById("orcMisteriosa4").style.color = "black";
		document.getElementById("orcMisteriosa2").style.color = "#7f7f7f";
		document.getElementById("orcMisteriosa3").style.color = "#7f7f7f";
		document.getElementById("orcMisteriosa1").style.color = "#7f7f7f";
	}


	if (ident == 'orcArapey1') {
		document.getElementById("campArapey").innerHTML = "Valor da viagem >> R$ 1100,00";

		document.getElementById("orcArapey1").style.borderBottom = "0";
		document.getElementById("orcArapey2").style.borderBottom = "1px solid black";
		document.getElementById("orcArapey3").style.borderBottom = "1px solid black";
		document.getElementById("orcArapey4").style.borderBottom = "1px solid black";

		document.getElementById("orcArapey1").style.color = "black";
		document.getElementById("orcArapey2").style.color = "#7f7f7f";
		document.getElementById("orcArapey3").style.color = "#7f7f7f";
		document.getElementById("orcArapey4").style.color = "#7f7f7f";
	}
	if (ident == 'orcArapey2') {
		document.getElementById("campArapey").innerHTML = "Valor da viagem >> R$ 1300,00";

		document.getElementById("orcArapey2").style.borderBottom = "0";
		document.getElementById("orcArapey1").style.borderBottom = "1px solid black";
		document.getElementById("orcArapey3").style.borderBottom = "1px solid black";
		document.getElementById("orcArapey4").style.borderBottom = "1px solid black";

		document.getElementById("orcArapey2").style.color = "black";
		document.getElementById("orcArapey1").style.color = "#7f7f7f";
		document.getElementById("orcArapey3").style.color = "#7f7f7f";
		document.getElementById("orcArapey4").style.color = "#7f7f7f";
	}
	if (ident == 'orcArapey3') {
		document.getElementById("campArapey").innerHTML = "Valor da viagem >> R$ 1610,00";

		document.getElementById("orcArapey3").style.borderBottom = "0";
		document.getElementById("orcArapey2").style.borderBottom = "1px solid black";
		document.getElementById("orcArapey1").style.borderBottom = "1px solid black";
		document.getElementById("orcArapey4").style.borderBottom = "1px solid black";

		document.getElementById("orcArapey3").style.color = "black";
		document.getElementById("orcArapey2").style.color = "#7f7f7f";
		document.getElementById("orcArapey1").style.color = "#7f7f7f";
		document.getElementById("orcArapey4").style.color = "#7f7f7f";
	}
	if (ident == 'orcArapey4') {
		document.getElementById("campArapey").innerHTML = "Tire férias relaxantes nas Termas do Arapey.";

		document.getElementById("orcArapey4").style.borderBottom = "0";
		document.getElementById("orcArapey2").style.borderBottom = "1px solid black";
		document.getElementById("orcArapey3").style.borderBottom = "1px solid black";
		document.getElementById("orcArapey1").style.borderBottom = "1px solid black";

		document.getElementById("orcArapey3").style.color = "black";
		document.getElementById("orcArapey2").style.color = "#7f7f7f";
		document.getElementById("orcArapey3").style.color = "#7f7f7f";
		document.getElementById("orcArapey1").style.color = "#7f7f7f";
	}


	if (ident == 'orcDayman1') {
		document.getElementById("campDayman").innerHTML = "Valor da viagem >> R$ 1290,00";

		document.getElementById("orcDayman1").style.borderBottom = "0";
		document.getElementById("orcDayman2").style.borderBottom = "1px solid black";
		document.getElementById("orcDayman3").style.borderBottom = "1px solid black";
		document.getElementById("orcDayman4").style.borderBottom = "1px solid black";

		document.getElementById("orcDayman1").style.color = "black";
		document.getElementById("orcDayman2").style.color = "#7f7f7f";
		document.getElementById("orcDayman3").style.color = "#7f7f7f";
		document.getElementById("orcDayman4").style.color = "#7f7f7f";
	}
	if (ident == 'orcDayman2') {
		document.getElementById("campDayman").innerHTML = "Valor da viagem >> R$ 1710,00";

		document.getElementById("orcDayman2").style.borderBottom = "0";
		document.getElementById("orcDayman1").style.borderBottom = "1px solid black";
		document.getElementById("orcDayman3").style.borderBottom = "1px solid black";
		document.getElementById("orcDayman4").style.borderBottom = "1px solid black";

		document.getElementById("orcDayman2").style.color = "black";
		document.getElementById("orcDayman1").style.color = "#7f7f7f";
		document.getElementById("orcDayman3").style.color = "#7f7f7f";
		document.getElementById("orcDayman4").style.color = "#7f7f7f";
	}
	if (ident == 'orcDayman3') {
		document.getElementById("campDayman").innerHTML = "Valor da viagem >> R$ 2220,00";

		document.getElementById("orcDayman3").style.borderBottom = "0";
		document.getElementById("orcDayman2").style.borderBottom = "1px solid black";
		document.getElementById("orcDayman1").style.borderBottom = "1px solid black";
		document.getElementById("orcDayman4").style.borderBottom = "1px solid black";

		document.getElementById("orcDayman3").style.color = "black";
		document.getElementById("orcDayman2").style.color = "#7f7f7f";
		document.getElementById("orcDayman1").style.color = "#7f7f7f";
		document.getElementById("orcDayman4").style.color = "#7f7f7f";
	}
	if (ident == 'orcDayman4') {
		document.getElementById("campDayman").innerHTML = "Passe tempos inesquecíveis com a família nas Termas do Dayman.";

		document.getElementById("orcDayman4").style.borderBottom = "0";
		document.getElementById("orcDayman2").style.borderBottom = "1px solid black";
		document.getElementById("orcDayman3").style.borderBottom = "1px solid black";
		document.getElementById("orcDayman1").style.borderBottom = "1px solid black";

		document.getElementById("orcDayman4").style.color = "black";
		document.getElementById("orcDayman2").style.color = "#7f7f7f";
		document.getElementById("orcDayman3").style.color = "#7f7f7f";
		document.getElementById("orcDayman1").style.color = "#7f7f7f";
	}


	if (ident == 'orcPeri1') {
		document.getElementById("campPeri").innerHTML = "Valor da viagem >> R$ 1000,00";

		document.getElementById("orcPeri1").style.borderBottom = "0";
		document.getElementById("orcPeri2").style.borderBottom = "1px solid black";
		document.getElementById("orcPeri3").style.borderBottom = "1px solid black";
		document.getElementById("orcPeri4").style.borderBottom = "1px solid black";

		document.getElementById("orcPeri1").style.color = "black";
		document.getElementById("orcPeri2").style.color = "#7f7f7f";
		document.getElementById("orcPeri3").style.color = "#7f7f7f";
		document.getElementById("orcPeri4").style.color = "#7f7f7f";
	}
	if (ident == 'orcPeri2') {
		document.getElementById("campPeri").innerHTML = "Valor da viagem >> R$ 1200,00";

		document.getElementById("orcPeri2").style.borderBottom = "0";
		document.getElementById("orcPeri1").style.borderBottom = "1px solid black";
		document.getElementById("orcPeri3").style.borderBottom = "1px solid black";
		document.getElementById("orcPeri4").style.borderBottom = "1px solid black";

		document.getElementById("orcPeri2").style.color = "black";
		document.getElementById("orcPeri1").style.color = "#7f7f7f";
		document.getElementById("orcPeri3").style.color = "#7f7f7f";
		document.getElementById("orcPeri4").style.color = "#7f7f7f";
	}
	if (ident == 'orcPeri3') {
		document.getElementById("campPeri").innerHTML = "Valor da viagem >> R$ 1540,00";

		document.getElementById("orcPeri3").style.borderBottom = "0";
		document.getElementById("orcPeri2").style.borderBottom = "1px solid black";
		document.getElementById("orcPeri1").style.borderBottom = "1px solid black";
		document.getElementById("orcPeri4").style.borderBottom = "1px solid black";

		document.getElementById("orcPeri3").style.color = "black";
		document.getElementById("orcPeri2").style.color = "#7f7f7f";
		document.getElementById("orcPeri1").style.color = "#7f7f7f";
		document.getElementById("orcPeri4").style.color = "#7f7f7f";
	}
	if (ident == 'orcPeri4') {
		document.getElementById("campPeri").innerHTML = "Imperdível passeio náutico na Lagoa do Peri.";

		document.getElementById("orcPeri4").style.borderBottom = "0";
		document.getElementById("orcPeri2").style.borderBottom = "1px solid black";
		document.getElementById("orcPeri3").style.borderBottom = "1px solid black";
		document.getElementById("orcPeri1").style.borderBottom = "1px solid black";

		document.getElementById("orcPeri4").style.color = "black";
		document.getElementById("orcPeri2").style.color = "#7f7f7f";
		document.getElementById("orcPeri3").style.color = "#7f7f7f";
		document.getElementById("orcPeri1").style.color = "#7f7f7f";
	}


	if (ident == 'orcSampa1') {
		document.getElementById("campSampa").innerHTML = "Valor da viagem >> R$ 980,00";

		document.getElementById("orcSampa1").style.borderBottom = "0";
		document.getElementById("orcSampa2").style.borderBottom = "1px solid black";
		document.getElementById("orcSampa3").style.borderBottom = "1px solid black";
		document.getElementById("orcSampa4").style.borderBottom = "1px solid black";

		document.getElementById("orcSampa1").style.color = "black";
		document.getElementById("orcSampa2").style.color = "#7f7f7f";
		document.getElementById("orcSampa3").style.color = "#7f7f7f";
		document.getElementById("orcSampa4").style.color = "#7f7f7f";
	}
	if (ident == 'orcSampa2') {
		document.getElementById("campSampa").innerHTML = "Valor da viagem >> R$ 1280,00";

		document.getElementById("orcSampa2").style.borderBottom = "0";
		document.getElementById("orcSampa1").style.borderBottom = "1px solid black";
		document.getElementById("orcSampa3").style.borderBottom = "1px solid black";
		document.getElementById("orcSampa4").style.borderBottom = "1px solid black";

		document.getElementById("orcSampa2").style.color = "black";
		document.getElementById("orcSampa1").style.color = "#7f7f7f";
		document.getElementById("orcSampa3").style.color = "#7f7f7f";
		document.getElementById("orcSampa4").style.color = "#7f7f7f";
	}
	if (ident == 'orcSampa3') {
		document.getElementById("campSampa").innerHTML = "Valor da viagem >> R$ 1430,00";

		document.getElementById("orcSampa3").style.borderBottom = "0";
		document.getElementById("orcSampa2").style.borderBottom = "1px solid black";
		document.getElementById("orcSampa1").style.borderBottom = "1px solid black";
		document.getElementById("orcSampa4").style.borderBottom = "1px solid black";

		document.getElementById("orcSampa3").style.color = "black";
		document.getElementById("orcSampa2").style.color = "#7f7f7f";
		document.getElementById("orcSampa1").style.color = "#7f7f7f";
		document.getElementById("orcSampa4").style.color = "#7f7f7f";
	}
	if (ident == 'orcSampa4') {
		document.getElementById("campSampa").innerHTML = "Se jogue na interminável noite paulistana.";

		document.getElementById("orcSampa4").style.borderBottom = "0";
		document.getElementById("orcSampa2").style.borderBottom = "1px solid black";
		document.getElementById("orcSampa3").style.borderBottom = "1px solid black";
		document.getElementById("orcSampa1").style.borderBottom = "1px solid black";

		document.getElementById("orcSampa4").style.color = "black";
		document.getElementById("orcSampa2").style.color = "#7f7f7f";
		document.getElementById("orcSampa3").style.color = "#7f7f7f";
		document.getElementById("orcSampa1").style.color = "#7f7f7f";
	}


	if (ident == 'orcJarBot1') {
		document.getElementById("campJarBot").innerHTML = "Valor da viagem >> R$ 950,00";

		document.getElementById("orcJarBot1").style.borderBottom = "0";
		document.getElementById("orcJarBot2").style.borderBottom = "1px solid black";
		document.getElementById("orcJarBot3").style.borderBottom = "1px solid black";
		document.getElementById("orcJarBot4").style.borderBottom = "1px solid black";

		document.getElementById("orcJarBot1").style.color = "black";
		document.getElementById("orcJarBot2").style.color = "#7f7f7f";
		document.getElementById("orcJarBot3").style.color = "#7f7f7f";
		document.getElementById("orcJarBot4").style.color = "#7f7f7f";
	}
	if (ident == 'orcJarBot2') {
		document.getElementById("campJarBot").innerHTML = "Valor da viagem >> R$ 1170,00";

		document.getElementById("orcJarBot2").style.borderBottom = "0";
		document.getElementById("orcJarBot1").style.borderBottom = "1px solid black";
		document.getElementById("orcJarBot3").style.borderBottom = "1px solid black";
		document.getElementById("orcJarBot4").style.borderBottom = "1px solid black";

		document.getElementById("orcJarBot2").style.color = "black";
		document.getElementById("orcJarBot1").style.color = "#7f7f7f";
		document.getElementById("orcJarBot3").style.color = "#7f7f7f";
		document.getElementById("orcJarBot4").style.color = "#7f7f7f";
	}
	if (ident == 'orcJarBot3') {
		document.getElementById("campJarBot").innerHTML = "Valor da viagem >> R$ 1390,00";

		document.getElementById("orcJarBot3").style.borderBottom = "0";
		document.getElementById("orcJarBot2").style.borderBottom = "1px solid black";
		document.getElementById("orcJarBot1").style.borderBottom = "1px solid black";
		document.getElementById("orcJarBot4").style.borderBottom = "1px solid black";

		document.getElementById("orcJarBot3").style.color = "black";
		document.getElementById("orcJarBot2").style.color = "#7f7f7f";
		document.getElementById("orcJarBot1").style.color = "#7f7f7f";
		document.getElementById("orcJarBot4").style.color = "#7f7f7f";
	}
	if (ident == 'orcJarBot4') {
		document.getElementById("campJarBot").innerHTML = "Dotado de requinte arquitetônico e paisagístico, o Jardim Botânico de Curitiba te marcará para sempre.";

		document.getElementById("orcJarBot4").style.borderBottom = "0";
		document.getElementById("orcJarBot2").style.borderBottom = "1px solid black";
		document.getElementById("orcJarBot3").style.borderBottom = "1px solid black";
		document.getElementById("orcJarBot1").style.borderBottom = "1px solid black";

		document.getElementById("orcJarBot4").style.color = "black";
		document.getElementById("orcJarBot2").style.color = "#7f7f7f";
		document.getElementById("orcJarBot3").style.color = "#7f7f7f";
		document.getElementById("orcJarBot1").style.color = "#7f7f7f";
	}


	if (ident == 'orcFoz1') {
		document.getElementById("campFoz").innerHTML = "Valor da viagem >> R$ 990,00";

		document.getElementById("orcFoz1").style.borderBottom = "0";
		document.getElementById("orcFoz2").style.borderBottom = "1px solid black";
		document.getElementById("orcFoz3").style.borderBottom = "1px solid black";
		document.getElementById("orcFoz4").style.borderBottom = "1px solid black";

		document.getElementById("orcFoz1").style.color = "black";
		document.getElementById("orcFoz2").style.color = "#7f7f7f";
		document.getElementById("orcFoz3").style.color = "#7f7f7f";
		document.getElementById("orcFoz4").style.color = "#7f7f7f";
	}
	if (ident == 'orcFoz2') {
		document.getElementById("campFoz").innerHTML = "Valor da viagem >> R$ 1440,00";

		document.getElementById("orcFoz2").style.borderBottom = "0";
		document.getElementById("orcFoz1").style.borderBottom = "1px solid black";
		document.getElementById("orcFoz3").style.borderBottom = "1px solid black";
		document.getElementById("orcFoz4").style.borderBottom = "1px solid black";

		document.getElementById("orcFoz2").style.color = "black";
		document.getElementById("orcFoz1").style.color = "#7f7f7f";
		document.getElementById("orcFoz3").style.color = "#7f7f7f";
		document.getElementById("orcFoz4").style.color = "#7f7f7f";
	}
	if (ident == 'orcFoz3') {
		document.getElementById("campFoz").innerHTML = "Valor da viagem >> R$ 1850,00";

		document.getElementById("orcFoz3").style.borderBottom = "0";
		document.getElementById("orcFoz2").style.borderBottom = "1px solid black";
		document.getElementById("orcFoz1").style.borderBottom = "1px solid black";
		document.getElementById("orcFoz4").style.borderBottom = "1px solid black";

		document.getElementById("orcFoz3").style.color = "black";
		document.getElementById("orcFoz2").style.color = "#7f7f7f";
		document.getElementById("orcFoz1").style.color = "#7f7f7f";
		document.getElementById("orcFoz4").style.color = "#7f7f7f";
	}
	if (ident == 'orcFoz4') {
		document.getElementById("campFoz").innerHTML = "Sinta-se hipnotizado pelo vapor inebriante das águas mágicas de Foz do Iguaçu.";

		document.getElementById("orcFoz4").style.borderBottom = "0";
		document.getElementById("orcFoz2").style.borderBottom = "1px solid black";
		document.getElementById("orcFoz3").style.borderBottom = "1px solid black";
		document.getElementById("orcFoz1").style.borderBottom = "1px solid black";

		document.getElementById("orcFoz4").style.color = "black";
		document.getElementById("orcFoz2").style.color = "#7f7f7f";
		document.getElementById("orcFoz3").style.color = "#7f7f7f";
		document.getElementById("orcFoz1").style.color = "#7f7f7f";
	}
}