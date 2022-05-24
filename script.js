const Body = document.querySelector(".body");
const Pantalla = document.querySelector("#pantalla");
const Igual = document.querySelector("#igual");
const Suma = document.querySelector("#suma");
const Resta = document.querySelector("#resta");
const Multiplicacion = document.querySelector("#multiplicacion");
const Division = document.querySelector("#division");
const Limpiar = document.querySelector("#limpiar");
const Mmas = document.querySelector("#mMas");
const Exp = document.querySelector("#exp");
const Borrar = document.querySelector("#borrar")
const Uno = document.querySelector("#uno");
const Dos = document.querySelector("#dos");
const Tres = document.querySelector("#tres");
const Cuatro = document.querySelector("#cuatro");
const Cinco = document.querySelector("#cinco");
const Seis = document.querySelector("#seis");
const Siete = document.querySelector("#siete");
const Ocho = document.querySelector("#ocho");
const Nueve = document.querySelector("#nueve");
const Cero = document.querySelector("#cero");
const Punto = document.querySelector("#punto");

var numero=[];
var total=0;
var signo="";
var operacion;
var operacionModificada=[];
var result;
var tipoDeOperacion=0;
var sumarMemoria=0;
var contador=0;
var num1;
var num2;
var exponente=0;
var varSigno="";
var memoria;
var ultimoCaracter=[];
var contExp=0;


 function resultado(tipo){
    
       
    operacion = Pantalla.value;
      
    separarTerminos();
    
 	
 	if(tipo==1){
 	   
 	  	sumaResultado();
  }

    if(tipo==2){
 	   
      restaResultado();
 	
      }

     if(tipo==3){
 	   
      	multiplicacionResultado();
 	 }

     
     if(tipo==4){
 	   
      	divisionResultado();
 	
      } 

      if(tipo==5){
 	       
 	      
      	expResultado();
 	    return resultado;  
 	    
 	  }  

    total=total.toString();
    result=total.substr(0,15);
 	Pantalla.value="";
 	Pantalla.setAttribute('placeholder',result);
 	memoria=result;
 	numero=[];
    contador=0;
    total=0;
    sumarMemoria=0;
    exponente=0;
    tipoDeOperacion=0;
 }


 function datosIngresados (signoOperacion,click){
  

    

	  if(signoOperacion=="+"){

	     tipoDeOperacion=1;
	     signo=signoOperacion;
	     exponente=0;
	  }

	  if(signoOperacion=="-"){

	     tipoDeOperacion=2;
	     signo=signoOperacion;
	     exponente=0;
	  }
     
     
 	  if(signoOperacion=="*"){

      	tipoDeOperacion=3;
      	signo=signoOperacion;
      	exponente=0;
 	  }

 	  if(signoOperacion=="/"){

      	tipoDeOperacion=4;
      	signo=signoOperacion;
      	exponente=0;
 	  }
      	

      if(signoOperacion=="e"){

      	tipoDeOperacion=5;
      	signo=signoOperacion;
 	  }

      	operacion = Pantalla.value;	
      

      if(click==1){
      	Pantalla.value=operacion+signo;
      	varSigno=signo;	
      }

      
      else{
      	Pantalla.value=operacion;
      	}

      if (exponente==1) {

	      tipoDeOperacion=5;
	      signoOperacion="e";
	  }

      
     separarTerminos();

 }




function separarTerminos(){

	operacionModificada = operacion.split(signo);
      
      for (var i = 0; i < operacionModificada.length; i++) {
     

	     if(exponente==1){
	 			
	 		numero[i]=operacionModificada[i];
	      	 
	      	}
	   	 else{

	      	numero[i]=parseFloat(operacionModificada[i]);
	      }
      }
    
}



function divisionResultado(){

	total=numero[0]/numero[1];
}


function multiplicacionResultado(){

	total=numero[0]*numero[1];

}


function restaResultado(){

    total=numero[0]-numero[1];
}


function sumaResultado(){

	
	for (var i = 0; i < numero.length; i++) {
     
      		total=total+numero[i];
      	
      	}
}

 
 function expResultado(){

 	

 	num1=num1.split("+");
 	
 	numero=[];
 	
 	for (var i = 0; i < num1.length; i++) {
 		numero[i]=parseFloat(num1[i]);
 	}

 	sumaResultado();
 	Pantalla.value="";
 	Pantalla.setAttribute('placeholder',total);
 	memoria=total;
 	numero=[];
    contador=0;
    total=0;
    sumarMemoria=0;
   

}


function exp(){
    
	num1 = Pantalla.value;
	num1 = num1+"e";
	Pantalla.value=num1;
	datosIngresados("e",0);
	exponente=1;
} 

Body.addEventListener("keydown",(e)=>{
    
    let tecla=(e.key);
      
    if (tecla == "+") {
    	datosIngresados("+",0);
    }

      
    if (tecla == "-") {
    	datosIngresados("-");
    }

    if (tecla == "*") {
    	datosIngresados("*");
    }

     if (tecla == "/") {
    	datosIngresados("/");
    }
    
    console.log(tecla);
    
     
    
    if (tecla == "Enter") {
        
        if(Pantalla.value != ""){
    		resultado(tipoDeOperacion);
        }
    	
    	e.preventDefault();
   }


});


Suma.addEventListener("click", (e)=>{

	datosIngresados("+",1);
});

Resta.addEventListener("click", (e)=>{

	if(exponente==1){
		num1=Pantalla.value+"-";
		Pantalla.value=num1;
	}
	else{
	datosIngresados("-",1);
	}
});


Division.addEventListener("click", (e)=>{

	datosIngresados("/",1);
});

Multiplicacion.addEventListener("click", (e)=>{

	datosIngresados("*",1);
});

	

Igual.addEventListener("click", (e)=>{
    
     if(Pantalla.value == "" || tipoDeOperacion==0){
        Pantalla.value=Pantalla.value;
        }
        else{
    		resultado(tipoDeOperacion);
        }
});



Limpiar.addEventListener("click", (e)=>{
 
	numero=[];
    contador=0;
    total=0;
    exponente=0;
	Pantalla.value ="";
	Pantalla.setAttribute('placeholder','');

});


Borrar.addEventListener("click", (e)=>{
        
        num1=Pantalla.value;

       
        	
      if(num1.includes("+")|| num1.includes("-")
         || num1.includes("*") || num1.includes("/")){

      		ultimoCaracter[0]=num1.lastIndexOf(signo);
 		}

       num1= num1.substring(0,(ultimoCaracter[0]+1));
	   Pantalla.value=num1;
	   num1=Pantalla.value;
       num2="";
     	 
});


Mmas.addEventListener("click", (e)=>{

	Pantalla.value=memoria+"+";
	sumarMemoria=1;
});

Exp.addEventListener("click", (e)=>{

	if(Pantalla.value == ""){
    		
	}
    else{exp();}
});



function teclas(tecla,caracter){
 	
	
	tecla.addEventListener("click", (e)=>{
    	
    	if(contador==0 && sumarMemoria==0){	
    		
    		num1=caracter;
    		
    		Pantalla.value=num1;
    		contador++;
    	}

    	else if (contador>0 && Pantalla.value != num1+signo && sumarMemoria==0){	
    		
    		num2=caracter;
    		num1=num1+num2;
    		Pantalla.value=num1;
    		contador++;
    	}

    	
    	else if (contador>0 && Pantalla.value == num1+signo && sumarMemoria==0){

    		num2=caracter;
    		num1=num1+varSigno+num2;
    		Pantalla.value=num1;
    		varSigno="";

    	}

    	else if (contador ==0 && sumarMemoria==1 ){
            
            memoria=Pantalla.value;
    		num2=caracter;
    		num1=memoria+num2;
    		
    		Pantalla.value=num1;
    		datosIngresados("+",0);

    	}



     });
 
}


teclas(Cero,"0");
teclas(Uno,"1");
teclas(Dos,"2");
teclas(Tres,"3");
teclas(Cuatro,"4");
teclas(Cinco,"5");
teclas(Seis,"6");
teclas(Siete,"7");
teclas(Ocho,"8");
teclas(Nueve,"9");
teclas(Punto,".");




