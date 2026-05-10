function calcularTriangulo(){

let base=parseFloat(document.getElementById("base").value);
let altura=parseFloat(document.getElementById("altura").value);

let area=(base*altura)/2;

document.getElementById("resultado").innerHTML=
"Área: "+area;

}

function calcularDolares(){

let pesos=parseFloat(document.getElementById("pesos").value);
let tipo=parseFloat(document.getElementById("tipo").value);

let dolares=pesos/tipo;

document.getElementById("resultado").innerHTML=
"Dólares: "+dolares;

}

function calcularEdad(){

let anio=parseInt(document.getElementById("anio").value);

let edad=2026-anio;

document.getElementById("resultado").innerHTML=
"Edad: "+edad+" años";

}

function calcularEstacionamiento(){

let horas=Math.ceil(parseFloat(document.getElementById("horas").value));
let costo=parseFloat(document.getElementById("costo").value);

let total=horas*costo;

document.getElementById("resultado").innerHTML=
"Total a pagar: $"+total;

}

function calcularPintura(){

let metros=parseFloat(document.getElementById("metros").value);
let costo=parseFloat(document.getElementById("costo").value);

let total=metros*costo;

document.getElementById("resultado").innerHTML=
"Presupuesto: $"+total;

}

function calcularHipotenusa(){

let a=parseFloat(document.getElementById("a").value);
let b=parseFloat(document.getElementById("b").value);

let c=Math.sqrt((a*a)+(b*b));

document.getElementById("resultado").innerHTML=
"Hipotenusa: "+c;

}

function calcularAutobus(){

let km=parseFloat(document.getElementById("km").value);
let costo=parseFloat(document.getElementById("costo").value);

let total=km*costo;

document.getElementById("resultado").innerHTML=
"Costo boleto: $"+total;

}

function calcularBicicleta(){

let distancia=parseFloat(document.getElementById("distancia").value);
let velocidad=parseFloat(document.getElementById("velocidad").value);

let tiempo=distancia/velocidad;

document.getElementById("resultado").innerHTML=
"Tiempo: "+tiempo+" horas";

}

function calcularLlamada(){

let minutos=parseFloat(document.getElementById("minutos").value);
let costo=parseFloat(document.getElementById("costo").value);

let total=minutos*costo;

document.getElementById("resultado").innerHTML=
"Costo llamada: $"+total;

}

function calcularAgua(){

let metros=parseFloat(document.getElementById("metros").value);
let costo=parseFloat(document.getElementById("costo").value);

let total=metros*costo;

document.getElementById("resultado").innerHTML=
"Pago agua: $"+total;

}

function calcularLuz(){

let kw=parseFloat(document.getElementById("kw").value);
let costo=parseFloat(document.getElementById("costo").value);

let total=kw*costo;

document.getElementById("resultado").innerHTML=
"Pago luz: $"+total;

}

function calcularDescuento(){

let precio=parseFloat(document.getElementById("precio").value);

let descuento=precio*0.20;
let subtotal=precio-descuento;

let iva=subtotal*0.15;

let total=subtotal+iva;

document.getElementById("resultado").innerHTML=
"Precio con descuento: $"+subtotal+
"<br>Precio final: $"+total;

}

function calcularAhorro(){

let sueldo=parseFloat(document.getElementById("sueldo").value);

let ahorro=sueldo*0.15;

let anual=ahorro*4*12;

document.getElementById("resultado").innerHTML=
"Ahorro anual: $"+anual;

}

function calcularCheque(){

let dias=parseInt(document.getElementById("dias").value);

let hotel=parseFloat(document.getElementById("hotel").value);

let comida=parseFloat(document.getElementById("comida").value);

let totalHotel=hotel*dias;
let totalComida=comida*dias;
let otros=100*dias;

let total=totalHotel+totalComida+otros;

document.getElementById("resultado").innerHTML=
"Hotel: $"+totalHotel+
"<br>Comida: $"+totalComida+
"<br>Otros gastos: $"+otros+
"<br>Total cheque: $"+total;

}

function calcularPotencia(){

let r=parseFloat(document.getElementById("r").value);

let i=parseFloat(document.getElementById("i").value);

let v=r*i;

let p=v*i;

document.getElementById("resultado").innerHTML=
"Voltaje: "+v+
"<br>Potencia: "+p;

}

function calcularCuadrado(){

let lado=parseFloat(document.getElementById("lado").value);

let area=lado*lado;

document.getElementById("resultado").innerHTML=
"Área: "+area;

}

function calcularPromedio(){

let e1=parseFloat(document.getElementById("e1").value);
let e2=parseFloat(document.getElementById("e2").value);
let e3=parseFloat(document.getElementById("e3").value);

let promedio=(e1*0.25)+(e2*0.25)+(e3*0.50);

document.getElementById("resultado").innerHTML=
"Promedio: "+promedio;

}

function calcularVida(){

let edad=parseInt(document.getElementById("edad").value);

let meses=edad*12;
let semanas=edad*52;
let dias=edad*365;
let horas=dias*24;

document.getElementById("resultado").innerHTML=
"Meses: "+meses+
"<br>Semanas: "+semanas+
"<br>Días: "+dias+
"<br>Horas: "+horas;

}

function calcularLlamada2(){

let minutos=parseFloat(document.getElementById("minutos").value);

let costo=parseFloat(document.getElementById("costo").value);

let total=minutos*costo;

document.getElementById("resultado").innerHTML=
"Costo llamada: $"+total;

}

function calcularHotel(){

let dias=parseInt(document.getElementById("dias").value);

let costo=parseFloat(document.getElementById("costo").value);

let total=dias*costo;

document.getElementById("resultado").innerHTML=
"Total hotel: $"+total;

}
function calcularLuz(){

let kw=parseFloat(document.getElementById("kw").value);
let costo=parseFloat(document.getElementById("costo").value);

let total=kw*costo;

document.getElementById("resultado").innerHTML=
"Pago de luz: $"+total;

}

function calcularDescuento(){

let precio=parseFloat(document.getElementById("precio").value);

let descuento=precio*0.20;

let subtotal=precio-descuento;

let iva=subtotal*0.15;

let total=subtotal+iva;

document.getElementById("resultado").innerHTML=
"Precio con descuento: $"+subtotal+
"<br>Precio final con IVA: $"+total;

}

function calcularAhorro(){

let sueldo=parseFloat(document.getElementById("sueldo").value);

let ahorroSemana=sueldo*0.15;

let ahorroAnual=ahorroSemana*4*12;

document.getElementById("resultado").innerHTML=
"Ahorro anual: $"+ahorroAnual;

}

function calcularCheque(){

let dias=parseInt(document.getElementById("dias").value);

let hotel=parseFloat(document.getElementById("hotel").value);

let comida=parseFloat(document.getElementById("comida").value);

let totalHotel=hotel*dias;

let totalComida=comida*dias;

let otros=100*dias;

let total=totalHotel+totalComida+otros;

document.getElementById("resultado").innerHTML=
"Hotel: $"+totalHotel+
"<br>Comida: $"+totalComida+
"<br>Otros gastos: $"+otros+
"<br>Total cheque: $"+total;

}

function calcularPotencia(){

let r=parseFloat(document.getElementById("r").value);

let i=parseFloat(document.getElementById("i").value);

let v=r*i;

let p=v*i;

document.getElementById("resultado").innerHTML=
"Voltaje: "+v+
"<br>Potencia: "+p;

}

function calcularCuadrado(){

let lado=parseFloat(document.getElementById("lado").value);

let area=lado*lado;

document.getElementById("resultado").innerHTML=
"Área del cuadrado: "+area;

}

function calcularPromedio(){

let e1=parseFloat(document.getElementById("e1").value);

let e2=parseFloat(document.getElementById("e2").value);

let e3=parseFloat(document.getElementById("e3").value);

let promedio=(e1*0.25)+(e2*0.25)+(e3*0.50);

document.getElementById("resultado").innerHTML=
"Promedio final: "+promedio;

}

function calcularVida(){

let edad=parseInt(document.getElementById("edad").value);

let meses=edad*12;

let semanas=edad*52;

let dias=edad*365;

let horas=dias*24;

document.getElementById("resultado").innerHTML=
"Meses: "+meses+
"<br>Semanas: "+semanas+
"<br>Días: "+dias+
"<br>Horas: "+horas;

}

function calcularLlamada2(){

let minutos=parseFloat(document.getElementById("minutos").value);

let costo=parseFloat(document.getElementById("costo").value);

let total=minutos*costo;

document.getElementById("resultado").innerHTML=
"Costo llamada: $"+total;

}

function calcularHotel(){

let dias=parseInt(document.getElementById("dias").value);

let costo=parseFloat(document.getElementById("costo").value);

let total=dias*costo;

document.getElementById("resultado").innerHTML=
"Total hospedaje: $"+total;

}