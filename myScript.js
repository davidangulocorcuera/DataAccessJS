function cambia(){
	
	var capa = document.getElementById("principal");
		
	borraHijos(capa);
	
	var nodoTexto = document.createTextNode("HAS PULSADO EL BOTON PULSAR Y HAS HECHO MAGIA!!!!");

	var nodoElement = document.createElement("h2");
	
	nodoElement.appendChild(nodoTexto);
	
	capa.appendChild(nodoElement);
	
	console.log("FIN PRUEBA");

}


function borraHijos(elemento){
	
	//alert(elemento.innerHTML);
	
	var hijos = elemento.childNodes;
	
	//alert(hijos.length);
	for(var i=0; i < hijos.length ; i++){
		elemento.removeChild(hijos[i]);
	}
	
}

function cambiaDos(){
	
	var capa = document.getElementById("principal");
	
	borraHijos(capa);
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			pintaTabla(this.responseText);			
		}else{
			console.log(this.readyState + " " + this.status);
		}
	};
	
	xhttp.open("GET", "http://localhost/DavidAngulo/crudJson/readEntity.php", true);
	xhttp.send(); 	
	
	
}

function pintaTabla(respuesta){

	var respuestaJSON = JSON.parse(respuesta);
    console.log(respuesta)

    var capa = document.getElementById("principal");
	
	if(respuestaJSON["estado"] == "ok"){
		console.log("VAMOS BIEN");
		
		var arrJugadores =  respuestaJSON["Personas"];
		
		for(var i = 0; i < arrJugadores.length; i++){
					//console.log(arrJugadores[i])
			var fila = document.createElement("div");
			fila.setAttribute("id","persona_"+ arrJugadores[i].str_mid );
			fila.setAttribute("class","persona");
			fila.setAttribute("onclick","prueba(this)");
			
			var nombre = document.createElement("h2");
			var texto = document.createTextNode(arrJugadores[i].str_mname);
			nombre.appendChild(texto);
			nombre.setAttribute("id","nombrePersona_"+ arrJugadores[i].str_mid );
			
			var caracteristicaUno = document.createElement("h2");
			var textonum = document.createTextNode(arrJugadores[i].str_mfirst_characteristic);
            caracteristicaUno.appendChild(textonum);
            caracteristicaUno.setAttribute("id","primeraCaracteristica_"+ arrJugadores[i].str_mid );

			var caracteristicaDos = document.createElement("h2");
			var textoequipo = document.createTextNode(arrJugadores[i].str_msecond_characteristic);
			caracteristicaDos.appendChild(textoequipo);
            caracteristicaDos.setAttribute("id","segundaCaracteristica__"+ arrJugadores[i].str_mid );

            var caracteristicaTres = document.createElement("h2");
            var textoequipo = document.createTextNode(arrJugadores[i].str_mthird_characteristic);
            caracteristicaTres.appendChild(textoequipo);
            caracteristicaTres.setAttribute("id","segundaCaracteristica__"+ arrJugadores[i].str_mid );
			
			fila.appendChild(nombre);
			fila.appendChild(caracteristicaUno);
			fila.appendChild(caracteristicaDos);
			fila.appendChild(caracteristicaTres)
			
			
			capa.appendChild(fila);
		}
			
	}else{
		console.log("VAMOS MAL");
	}


	
}

function prueba(elemento){
		
	id = elemento.id;
	
	pos = id.indexOf("_");
	
	tam = id.length
	
	idjugador = id.substring(pos+1,tam);
	
	id = document.getElementById("nombrejugador_" + idjugador).innerHTML;
	nombre = document.getElementById("numerojugador_" + idjugador).innerHTML;
    caracteristicaUno = document.getElementById("equipojugador_" + idjugador).innerHTML;
    caracteristicaDos = document.getElementById("equipojugador_" + idjugador).innerHTML;
    caracteristicaDos = document.getElementById("equipojugador_" + idjugador).innerHTML;


    document.getElementById("id").value = id;
	document.getElementById("nombre").value = nombre;
	document.getElementById("caracteristicaUno").value = caracteristicaUno;
    document.getElementById("caracteristicaDos").value = caracteristicaDos;
    document.getElementById("caracteristicaTres").value = equipo;


}

function insertarColega(){
	
	var jugador = {};
	
	jugador.nombre = document.getElementById("id").value;
	jugador.numero = document.getElementById("nombre").value;
	jugador.equipo = document.getElementById("caracteristicaUno").value;
    jugador.equipo = document.getElementById("caracteristicaDos").value;
    jugador.equipo = document.getElementById("caracteristicaTres").value;

	console.log(jugador);
	
	var peticion = {};
	
	peticion.peticion = "add";
	peticion.jugadorAnnadir = jugador;

	console.log(peticion);
	
	peticionJSON = JSON.stringify(peticion);
	
	console.log(peticionJSON);
	
	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
	xmlhttp.open("POST", "http://localhost/davidangulo/crudJson/writeEntity.php");
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {

			var respuestaJSON = JSON.parse(this.responseText);
		
			if(respuestaJSON["estado"] == "ok"){
				
				alert("INSERTADO CORRECTAMENTE. ID: " + respuestaJSON["lastId"] );
					
			}else{
				alert(respuestaJSON["mensaje"]);
			}
		}else{
			console.log(this.readyState + " " + this.status);
			if (this.readyState == 4 && this.status == 404) {
				alert("URL INCORRECTA");
				
			}
		}
	};
	
	xmlhttp.send(peticionJSON);	
	
	
}

console.log("JS CARGADO");









