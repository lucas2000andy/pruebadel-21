class Palo {
    constructor(figura, color, nombre) {

        this.figura = figura;
        
        this.color = color;

        this.nombre = nombre;
    }
}


class Carta {
    constructor(Palo, valor = [], texto, image) {

        this.Palo = Palo;
        
        this.valor = valor;
        
        this.texto = texto;

        this.image = image;
    }
}



class FabricaCartas {
    mazo = [];
    palos = 
        [new Palo('♥', 'Rojo', 'Corazones'),
        new Palo('♣', 'Negro', 'Treboles'),
        new Palo('♦', 'Rojo', 'Diamantes'),
        new Palo('♠', 'Negro', 'Picas')
    ];

    cartas = ['Ace', 'Dos', 'Tres', 'Cuatro',
     'Cinco', 'Seis', 'Siete', 'Ocho',
     'Nueve', 'Diez', 'Jack', 'Queen',
     'King'];

    Valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    tarjetaImagen = 
    [
//todas las cartas  de  brillo  para coger una por una
        './cartas/brillo/BA.png', './cartas/brillo/B2.png', './cartas/brillo/B3.png', './cartas/brillo/B4.png',
        './cartas/brillo/B5.png', './cartas/brillo/B6.png', './cartas/brillo/B7.png', './cartas/brillo/B8.png', './cartas/brillo/B9.png',
        './cartas/brillo/B10.png', './cartas/brillo/BJ.png', './cartas/brillo/BQ.png', './cartas/brillo/BK.png',

//todas las cartas  de  corazonesnegros para coger una por una

        './cartas/corazonblack/CNA.png', './cartas/corazonblack/CN2.png', './cartas/corazonblack/CN3.png', './cartas/corazonblack/CN4.png',
        './cartas/corazonblack/CN5.png', './cartas/corazonblack/CN6.png', './cartas/corazonblack/CN7.png', './cartas/corazonblack/CN8.png', './cartas/corazonblack/CN9.png',
        './cartas/corazonblack/CN10.png', './cartas/corazonblack/CNJ.png', './cartas/corazonblack/CNQ.png', './cartas/corazonblack/CNK.png',


//todas las cartas  de corazones rojos para coger una por una
        './cartas/corazonred/CRA.png', './cartas/corazonred/CR2.png', './cartas/corazonred/CR3.png', './cartas/corazonred/CR4.png',
        './cartas/corazonred/CR5.png', './cartas/corazonred/CR6.png', './cartas/corazonred/CR7.png', './cartas/corazonred/CR8.png', './cartas/corazonred/CR9.png',
        './cartas/corazonred/CR10.png', './cartas/corazonred/CRJ.png', './cartas/corazonred/CRQ.png', './cartas/corazonred/CRK.png',

//todas las cartas de  trebol para coger una por una

        './cartas/trebol/TA.png', './cartas/trebol/T2.png', './cartas/trebol/T3.png', './cartas/trebol/T4.png',
        './cartas/trebol/T5.png', './cartas/trebol/T6.png', './cartas/trebol/T7.png', './cartas/trebol/T8.png', './cartas/trebol/T9.png',
        './cartas/trebol/T10.png', './cartas/trebol/TJ.png', './cartas/trebol/TQ.png', './cartas/trebol/TK.png'
    ]


    contador = 0;
    
    mezclar() {

        this.mazo = this.mazo.sort(function() 

        { return Math.random() - 0.5 });

    }
    crearMazo() {

        this.palos.forEach(function(valoresactuales) {

            this.cartas.forEach(function(valorActual, index) {

                if (index === 0) {


                    this.mazo.push(new Carta(valoresactuales, [1 , 11], valorActual, this.tarjetaImagen[this.contador]))
                } else if (index > 9) {


                    this.mazo.push(new Carta(valoresactuales, this.Valores[9], valorActual, this.tarjetaImagen[this.contador]))
                } else {

                    this.mazo.push(new Carta(valoresactuales, this.Valores[index], valorActual, this.tarjetaImagen[this.contador]))
                }

                this.contador++;

            }, this)

        }, this)
    }
}

class Juego extends FabricaCartas {

    validar(cubierta) {

        let value = cubierta.reduce(

            function(valorAnterior, valorActual) {

                if (typeof(valorAnterior) == 'object') {


                    if (valorAnterior > 10) {

                        return valorAnterior[0] + valorActual;

                    } else {

                        return valorAnterior[1] + valorActual;
                    }

                } else
                
                
                {

                    return valorAnterior + valorActual;
                }
            })

        if (value == 21) {

            document.getElementById("sumaTot").innerHTML= ("felicidades felicidaes has ganado " + value )
        } else if (value < 21) {

            document.getElementById("sumaTot").innerHTML= ("Por que no  intentas de nuevo vas perdiendo te falta sumar 21: y tu resultado es: " + value )
        } else if (value > 21) {

            document.getElementById("sumaTot").innerHTML= ("Lo siento perdiste sumaste mas de 21 ... "+ value )
        }

        console.log("el valor de la suma es " + value)
    }
}


class Jugador {

    nombre;

    mazoJugador = [];

    mazoValores = [];
    
    pedir(q) {

        this.mazoJugador.push(q);

        this.mazoValores.push(q.valor);

        document.getElementById('cartaJugada').src = q.image;
    }
}

var pajaro = new Jugador();

var andyJ = new Juego();
