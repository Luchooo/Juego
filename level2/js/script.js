window.onload = function(){

var nombre=prompt("Escribe tu nombre");
alert("Hola "+nombre+" tendras 6 segundos para elegir que color de pelota se ensestara !! GOOD LUCK!!");


var a=0;
var tiempo=6;



var zz=setInterval(function(){

a++;

		if(a>6){
		clearInterval(zz);
    	alert("Has perdido, Tus 6 segundos se han acabado piensa mas rapido.")
		nom_div("boton1").style.visibility= "hidden";
		nom_div("boton2").style.visibility= "hidden";
		nom_div("boton3").style.visibility= "hidden";
};

if (tiempo!=-1) {	
 nom_div("demo").innerHTML = "Tiempo"+tiempo;
 };
 tiempo--;

    }, 1000);
    





		nom_div("boton1").addEventListener('click', function(event){
		clearInterval(zz);
		alert("Has perdido :(")
		
		nom_div("boton2").style.visibility= "hidden";
		nom_div("boton3").style.visibility= "hidden";
		});

		nom_div("boton2").addEventListener('click', function(event){

		clearInterval(zz);
		alert("Has perdido :(");
		nom_div("boton1").style.visibility= "hidden";
		nom_div("boton3").style.visibility= "hidden"
	});


		nom_div("boton3").addEventListener('click', function(event){
		
		clearInterval(zz);
		alert("!!Has ganado Excelente :)!!")
		nom_div("boton1").style.visibility= "hidden";
		nom_div("boton2").style.visibility= "hidden"

	});



	function nom_div(div)
	{
		return document.getElementById(div);
	};

};


