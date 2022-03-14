import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from "react-router-dom"
import { toast } from "react-toastify";

export let items = [
    {
        id: 1,
        codigo: "LHDH",
        genero: 'fantasia',
        name: "La Hija de los Huesos",
        aut:'Andrea Stewart',
        precio: 2300,
        img: "https://contentv2.tap-commerce.com/cover/large/9789878474120_1.jpg?id_com=1113",
        stock: 14,
        descrip: 'En todas las islas del Imperio, se extrae detrás de la oreja de cada niño un trozo de hueso, durante un ritual que con demasiada frecuencia es fatal. Desde su palacio, el emperador utiliza estos preciosos fragmentos para crear y controlar formidables quimeras animales, los constructos que mantienen la ley y el orden. Pero su autoridad flaquea y la rebelión ruge por todas partes. Lin ha perdido sus recuerdos y pasa sus días en el enorme palacio lleno de puertas cerradas y oscuros secretos. Cuando su padre se niega a reconocerla como heredera del trono, ella promete demostrar su valía dominando el arte prohibido sobre la magia de los huesos. Magia que tiene un precio. Cuando la revolución golpee las puertas del palacio, Lin tendrá que decidir hasta dónde está dispuesta a llegar para reclamar su herencia y salvar a su pueblo.'
    },
    {
        id: 2,
        codigo: "EJDLC",
        genero: 'historico',
        name: "El Jardin de los Ciervos",
        aut: 'Patricio Sturlese',
        precio: 1900,
        img: "https://contentv2.tap-commerce.com/cover/large/9789877253474_1.jpg?id_com=1113",
        stock: 8,
        descrip: 'Martinvast, Francia, 1788. A Simone Belladonna se le ha encomendado una misión, un encargo de la Biblioteca Real de París. Debe verificar la autenticidad de una primera edición de la Commedia de Dante Alighieri, fechada en 1472, que madame d#Estaing ha recibido en herencia de su difunto marido. El tasador, un avezado «cazador de falsos» de cuya mirada escrutadora nada escapa, descubrirá, sin embargo, mucho más en los sótanos del castillo en los que la viuda atesora el libro. Allí se llevan a cabo prácticas libertinas; obscenas tertulias basadas en los nueve anillos del infierno de Dante cuyo objetivo es aún más oscuro: preparar una trampa a la reina María Antonieta y acabar de una vez y para siempre con la monarquía de los borbones. De la noche a la mañana, y en vísperas de la revolución que lo cambiaría todo, Belladonna se verá inmerso en una conspiración entre las más altas esferas de la política y la sociedad francesas sin otra arma y defensa que su ingenio y su coraje. La crítica ha dicho... «Patricio Sturlese es un narrador deslumbrante.» Bogsyn.'
    },
    {
        id: 3,
        codigo: "BS",
        genero: 'policial',
        name: "Billy Summers",
        aut: 'Stephen King',
        precio: 3400,
        img: "https://contentv2.tap-commerce.com/cover/large/9789506445843_1.jpg?id_com=1113",
        stock: 6,
        descrip: 'Billy Summers es un asesino a sueldo y el mejor en lo suyo, pero tiene una norma: solo acepta un encargo si su objetivo es realmente mala persona. Ahora Billy quiere dejarlo, pero todavía le queda un último golpe. Y siendo uno de los mejores francotiradores del mundo, un veterano condecorado de la guerra de Irak, un auténtico Houdini cuando toca desaparecer después de finiquitar un trabajo, ¿qué podría salirle mal? Todo. La crítica ha dicho...: «Billy Summers es un excelente relato de redención que engancha y conmueve.» La Razón «No hay asesinato más criminal ni caos más entretenido. Otra lectura adictiva de un maestro de mente proteica.» Kirkus.'
    },
    {
        id: 4,
        codigo: "EV",
        genero: 'terror',
        name: "El Visitante",
        aut: 'Stephen King',
        precio: 2500,
        img: "https://contentv2.tap-commerce.com/cover/large/9789877254174_1.jpg?id_com=1113",
        stock: 10,
        descrip: 'Un niño de once años ha sido brutalmente asesinado. Todas las pruebas apuntan a uno de los ciudadanos más queridos de Flint City: Terry Maitland, entrenador en la liga infantil, profesor de literatura, marido ejemplar y padre de dos niñas. El detective Ralph Anderson ordena su detención. Maitland tiene una coartada firme que demuestra que estuvo en otra ciudad cuando se cometió el crimen, pero las pruebas de ADN encontradas en el lugar de los hechos confirman que es culpable. Ante la justicia y la opinión pública Terry Maitland es un asesino y el caso está resuelto. Pero el detective Anderson no está satisfecho. Maitland parece un buen tipo, un ciudadano ejemplar, ¿acaso tiene dos caras? Y ¿cómo es posible que estuviera en dos sitios a la vez? La respuesta, como no podría ser de otra forma saliendo de la pluma de Stephen King, te hará desear no haber preguntado. La crítica ha dicho... «¿Puede una persona estar en dos sitios a la vez? Con Stephen King, nunca se sabe...» Woman.'
    },
    {
        id: 5,
        codigo: "LRDT",
        genero: 'fantasia',
        name: "La Rueda del Tiempo",
        aut: 'Jordan Robert',
        precio: 3150,
        img: "https://contentv2.tap-commerce.com/cover/large/9789505472369_1.jpg?id_com=1113",
        stock: 3,
        descrip: 'Rand ha sobrevivido a su primer enfrentamiento con los perversos seguidores del Oscuro, pero ni sus amigos ni él están a salvo, ya que el Señor del mal ha liberado a los Renegados, mientras los héroes de todas las eras se levantan de la tumba cuando el Cuerno de Valere los saca de su sueño. Al verse obligado a enfrentar a las fuerzas de la oscuridad, Rand decide escapar de su destino. Pero la profecía tiene que cumplirse. Cada día que pasa aumenta la fuerza del Oscuro, que lucha con empeño por destruir su arcaica prisión para acabar con la Rueda y poner fin al tiempo. Si nadie se lo impide, hara añicos el Entramado que sustenta la realidad y el mundo estará perdido para siempre. Así pues, mientras Rand huye, el Entramado lo acerca a su sino... Por su calidad literaria, su ambicioso planteamiento y su monumental historia, La Rueda del Tiempo es la saga de fantasía más importante de los ultimos años. El lector que inicie el camino junto a Rand, Mat y Perrin no podrá abandonar el viaje hasta su incierto y sorprendente final.'
    },
    {
        id: 6,
        codigo: "EI",
        genero: 'terror',
        name: "El Inquisidor",
        aut: 'Sturlese Patricio',
        precio: 2849,
        img: "https://contentv2.tap-commerce.com/cover/large/9789870426202_1.jpg?id_com=1113",
        stock: 1,
        descrip: 'Génova, 1597. Angelo DeGrasso, Inquisidor General de Liguria, interroga en los sótanos de su abadía al brujo veneciano Eros Gianmaria mediante salvajes tormentos, en busca de una confesión. El papa Clemente VIII en persona le ha encargado una importante misión y no descansará hasta cumplirla: rastrear la última copia todavía existente del libro prohibido más buscado en tierras cristianas: el Necronomicón. Hombre implacable y de profunda fe, dotado de aguda inteligencia y poder deductivo, el inquisidor DeGrasso es conocido por su crueldad a la hora de tratar con los herejes y su obediencia ciega al Santo Oficio de Roma, pero pronto se ve enfrentado a un destino escabroso. La aparición de una jovencita llamada Raffaella es solo el comienzo dé un intrincado laberinto de misterios. Detrás del libro prohibido y una cofradía satánica se embarcará hasta el Nuevo Mundo donde hallará lo inesperado. Deberá librar una batalla terminal, no sólo contra la herejía y los enemigos de la Iglesia Católica, sino contra sí mismo, las tentaciones, y sus propios hermanos de fe. Una historia apasionante que transcurre entre hogueras y castillos, rodeada de aquelarres y escandalosos romances en el turbulento final del siglo XVI.'
    },
    {
        id: 7,
        codigo: "LOR",
        genero: 'historico',
        name: "La Orquesta Roja",
        aut: 'Perrault Gilles',
        precio: 2300,
        img: "https://contentv2.tap-commerce.com/cover/large/9789874465757_1.jpg?id_com=1113",
        stock: 5,
        descrip: 'En los primeros meses de 1941, el forzado idilio entre el Tercer Reich y la URSS se habia deteriorado a pasos agigantados. Pero Stalin suponia que los nazis aplazarian su incursion al territorio sovietico hasta no tener consolidadas de manera definitiva sus posiciones en el frente occidental. Algo lo disuadio de semejante creencia. Es en este punto donde entra a tallar una red sovietica de espionaje, tal vez la mas espectacular de este conflicto belico, con celulas en las principales ciudades del Viejo Continente, incluida Berlin: La Orquesta Roja. Su jefe, Leopold Trepper, es el gran protagonista de esta trama. Se trata de un judio nacido en la region polaca de Galitzia, cuya militancia comunista lo llevo a ser reclutado por el servicio de inteligencia exterior de la URSS. Es el quien mueve las piezas negras en un contrapunto casi ajedricistico con los esbirros de la Abwehr (la estructura de espionaje y contraespionaje del Reich), de la Funkabwehr (especializada en detectar las emisoras enemigas) y de la Gestapo. Alli tambien es donde empieza la pesadilla de sus cabecillas, Reichsfhrer Heinrich Himmler y el almirante Wihelm Canaris, a sabiendas que tenian enquistado al mal en su propia fortificacion berlinesa. Y ese desvelo se extendio hacia el mismisimo Hitler. Una vez concluida la batalla de Stalingrado, Canaris opino sobre Trepper: Su actuacion le costo 200 mil muertos a Alemania. Para los nazis fue el principio del fin. Aquello es parte de la progresion argumental de este libro. Con ustedes, la hermosa musica de La Orquesta Roja.'
    },
    {
        id: 8,
        codigo: "CLL",
        genero: 'policial',
        name: "Cruzando la Linea",
        aut: 'Patterson James',
        precio: 2450,
        img: "https://contentv2.tap-commerce.com/cover/large/9788417761455_1.jpg?id_com=1113",
        stock: 7,
        descrip: '¿Qué es más peligroso que un asesino? Para el detective Alex Cross, que el asesino sea justo. La ciudad se sume en el caos. Una ola de crímenes la recorre y Cross debe enfrentarse a uno de los enigmas más complejos de su carrera como investigador: un despiadado homicida que deja un rastro de sangre y víctimas a su paso, un asesino que se ha tomado la justicia por su mano.'
    }
]

const ItemListCont = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { genero } = useParams();


    const work = useEffect(()=>{
    
    new Promise ((res, rej) => {
        setTimeout(() => {
            res(items)
        }, 1000)
    })
    .then((res) => {
        if (genero != undefined) {
            const productsFiltered = items.filter(product => product.genero === genero)
            setProducts(productsFiltered)
        } else {
            setProducts(items);
        }
    })
    .catch((rej) => {
        toast.error("Error al cargar los productos!");
        setError(true);
    })
    .finally(()=>{
        setLoading(false)
    })
})

    return(
        <div className="container">
            {loading ? <div id="loading"><Spinner animation="grow" /></div> : null}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListCont
