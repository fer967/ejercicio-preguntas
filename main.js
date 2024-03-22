class Pregunta {
    constructor(id, pregunta, respuesta, incorrecta1, incorrecta2, incorrecta3) {
        this.id = id;
        this.pregunta = pregunta;
        this.respuesta = respuesta;
        this.incorrecta1 = incorrecta1;
        this.incorrecta2 = incorrecta2;
        this.incorrecta3 = incorrecta3;
    }
}

let preguntas = [];
pregunta1 = preguntas.push(new Pregunta(1, "cual es la capital de Francia?", "Paris", "Londres", "Berlin", "Roma"));
pregunta2 = preguntas.push(new Pregunta(2, "cual es capital de Colombia?", "Bogota", "Lima", "Quito", "Montevideo"));

let btn_preg = document.getElementById("pregunta");


let posibles_respuestas;
/*btn_correspondiente = [
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
];*/

btn_preg.addEventListener("click", () => {                  // boton pregunta -- evento click
    seleccionar_pregunta();
})


function seleccionar_pregunta() {
    // recorrer con forEach
    let pregunta_seleccionada = preguntas[0];          
    seleccionar_id("pregunta").innerHTML = pregunta_seleccionada.pregunta;     // modifico texto de botones
    seleccionar_id("btn1").innerHTML = pregunta_seleccionada.respuesta;
    seleccionar_id("btn2").innerHTML = pregunta_seleccionada.incorrecta1;
    seleccionar_id("btn3").innerHTML = pregunta_seleccionada.incorrecta2;
    seleccionar_id("btn4").innerHTML = pregunta_seleccionada.incorrecta3;
}


function desordenarRespuestas(pregunta_seleccionada) {
    posibles_respuestas = [                                             // array de respuestas posibles
        pregunta_seleccionada.respuesta,
        pregunta_seleccionada.incorrecta1,
        pregunta_seleccionada.incorrecta2,
        pregunta_seleccionada.incorrecta3
    ];
    posibles_respuestas.sort(() => Math.random() - 0.5);                  // sort ordena posibles_respuestas 
    seleccionar_id("btn1").innerHTML = posibles_respuestas[0];
    seleccionar_idt("btn2").innerHTML = posibles_respuestas[1];
    seleccionar_id("btn3").innerHTML = posibles_respuestas[2];
    seleccionar_id("btn4").innerHTML = posibles_respuestas[3];
}


function pulsar_btn(i) {

    if (posibles_respuestas[i] == pregunta_seleccionada.respuesta) {
        preguntas_correctas++;
        /*btn_correspondiente[i] =  color verde*/
    } else {
        /*btn_correspondiente[i] = color rojo*/
    }
}


function seleccionar_id(id) {
    return document.getElementById(id)
}














let preguntas_hechas = 0;
let preguntas_correctas = 0;




