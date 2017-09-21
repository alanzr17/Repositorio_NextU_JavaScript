// Funcion Principal de la calculadora que permite hacer las operaciones básicas.
function calculadora(caracter) {

	var mostrar = document.getElementById("display").innerHTML; // Con esto variable controlamos lo que se muestra en Pantalla (Validaciones)
	var numerosValidos = "0123456789";
	var resultado = 0;

	if (mostrar.length < 8) {
		if (numerosValidos.indexOf(caracter) != -1) { // Validamos si el caracter ingresado se encuentra entre los numeros validos, si no  es un signo de operacion
			if (mostrar == "0" && caracter == "0") {
   				document.getElementById("display").innerHTML = "0";
   			} else if (mostrar == "0" && caracter != "0") {
   				document.getElementById("display").innerHTML = caracter;
   			} else if (mostrar != "0" && caracter != "0") {
   				document.getElementById("display").innerHTML = mostrar + caracter;
   			} else if (mostrar != "0" && caracter == "0") {
   				document.getElementById("display").innerHTML = mostrar + caracter;
   			}
    	} else {   // si no es un numero entre el grupo de numeros validos, entonces es un signo de operacion ( + , - , * , / )
    		var signo = caracter;
			var operando1; // Primer Operando de la Calculadora
			var operando2; // Segundo Operando de la Calculadora
    		if (signo == "=" ) {
    			operando2 = document.getElementById("display").innerHTML;
        		operando1 = document.getElementById("almacenamiento").value;
        		if (operando1.indexOf("+") != -1){  // Si se encuentra el signo + en el operando se corre el siguiente codigo que es la suma
        			operando1 = parseFloat(operando1.split("+"));
            		operando2 = parseFloat(operando2);
            		resultado = sumar(operando1,operando2);
            		resultado = resultado.toString();
                		if (resultado.length <= 8) {
                    		document.getElementById("display").innerHTML = resultado;
                    		document.getElementById("almacenamiento").value = operando2 + "+";
                		} else {
                            var valorReducido = resultado.substring(0, 9);
                            document.getElementById("display").innerHTML = valorReducido;
                            document.getElementById("almacenamiento").value = operando2 + "+";
                    		
                		}
        		} else if (operando1.indexOf("-") != -1) {
        			operando1 = parseFloat(operando1.split("-"));
        			operando2 = parseFloat(operando2);
            		resultado = restar(operando1,operando2);
            		resultado = resultado.toString();
            		if (resultado.length <= 8){
                    	document.getElementById("display").innerHTML = resultado;
                    	document.getElementById("almacenamiento").value = operando2 + "-";
            		} else {
                        var valorReducido = resultado.substring(0, 9);
                        document.getElementById("display").innerHTML = valorReducido;
                        document.getElementById("almacenamiento").value = operando2 + "-";
            			
            		} 
        		} else if (operando1.indexOf("*") !=- 1) {
        			operando1 = parseFloat(operando1.split("*"));
            		operando2 = parseFloat(operando2);
            		resultado = multiplicar(operando1,operando2);   
            		resultado = resultado.toString();
            		if (resultado.length <= 8) {
                		document.getElementById("display").innerHTML = resultado;
                		document.getElementById("almacenamiento").value = operando2 + "*";
                	} else {
                        var valorReducido = resultado.substring(0, 9);
                        document.getElementById("display").innerHTML = valorReducido;
                        document.getElementById("almacenamiento").value = operando2 + "*";
                    	
                	}                
            	} else if (operando1.indexOf("/") != -1) {
                	operando1 = parseFloat(operando1.split("/"));
                	operando2 = parseFloat(operando2);
                	resultado = dividir(operando1,operando2);                       
                	resultado = resultado.toString();
                	if (resultado.length <= 8){
                    	document.getElementById("display").innerHTML = resultado;
                    	document.getElementById("almacenamiento").value = operando2 + "/";
                	} else {
                        var valorReducido = resultado.substring(0, 9);
                        document.getElementById("display").innerHTML = valorReducido;
                        document.getElementById("almacenamiento").value = operando2 + "/";
                	}   
            	}
    		} else {
        		operando1 = document.getElementById("display").innerHTML;
        		document.getElementById("display").innerHTML = "";
        		document.getElementById("almacenamiento").value = operando1 + signo;
    		}	
		}
	} else {
		alert("Error, solo se permiten hasta 8 caracteres");
	}
}

// Las funciones básicas de la calculadora

function sumar(numero1, numero2) {
    var resultado = numero1 + numero2;
    return resultado;
}


function restar(numero1, numero2) {
    var resultado = numero1 - numero2;
    return resultado;
}


function multiplicar(numero1, numero2) {
    var resultado = numero1 * numero2;
    return resultado;
}

function dividir(numero1, numero2) {
    var resultado = numero1 / numero2;
    return resultado;
}

// Funcion que permite reiniciar la calculadora
function limpiarTodo() {
    document.getElementById("display").innerHTML="0";
}

// Funciones que cambian el tamaño de las teclas
function aumentarTamaño(id) {
    document.getElementById(id).style.width="80px";
}

function reducirTamaño(id) {
    document.getElementById(id).style.width="70px";
}

// Funcion que nos permite agregar el punto a la operacion si es que no tiene un punto 

function agregarPunto() {
    var cantidadActual = document.getElementById("display").innerHTML;
    if(cantidadActual.indexOf(".") == -1){
        cantidadActual = cantidadActual + ".";    
        document.getElementById("display").innerHTML= cantidadActual;
    }
}

// Funcion que convierte el numero a negativo, o si es negativo lo hace positivo 

function agregarSigno() {
    var cantidadActual = document.getElementById("display").innerHTML;
    if(cantidadActual.indexOf("-") == -1){
        if(cantidadActual != "0"){
            var convertir = parseFloat(cantidadActual);
            var convertido = multiplicar(convertir, -1);
            convertido = convertido.toString();
            document.getElementById("display").innerHTML = convertido;
        }   
    } else {
    cantidadActual = cantidadActual.replace("-","");

    document.getElementById("display").innerHTML = cantidadActual;
    }
}