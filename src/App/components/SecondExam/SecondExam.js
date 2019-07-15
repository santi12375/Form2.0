import React from 'react'
import imagen1 from '../Pictures/i1.jpg'
import imagen2 from '../Pictures/i2.jpg'
import imagen3 from '../Pictures/i3.jpg'
import imagen4 from '../Pictures/i4.jpg'


const About = () => {
    return (
        <React.Fragment>
            <br></br>
            <h1 className="animated fadeIn fast">Consejos y tips</h1>
            <hr />
            <p className="animated fadeIn">
                <p>Un interior no solo tiene que ser bonito, también funcional y confortable. Estos consejos te ayudarán a conseguir una decoración 10.</p>
                <p><h2 className="animated fadeIn fast">Cuál es el propósito de la habitación:</h2></p>
                <div>
                    
                        
                        <p>Lo primero que debes determinar es cuál es el destino de la habitación en cuestión. Ninguna remodelación costosa o muebles harán tu vivienda acogedora y cómoda para vivir si su diseño está mal pensado. Debes empezar con lo siguiente:</p>
                        <br></br>
                        <b>•</b> Toma en cuenta tu estilo de vida, las costumbres de la familia, su itinerario y
                        actividades.<br></br>
                        <b>•</b> Nombra y anota los espacios que necesitas. A veces un ligero cambio en el plano de
                        la vivienda puede agregarte, por ejemplo, un guardarropas o un estudio.<br></br>
                        <b>•</b> Piensa qué zonas puedes combinar (cocina/comedor, dormitorio/guardarropa, etc.).<br></br>
                        <b>•</b> Dibuja un plano de la habitación y ubica allí los muebles para encontrar la mejor
                        opción.<br></br>
                        <br></br>

                        <img src={imagen1} />
                    
                </div>
                
                <br></br>
                <p><h2 className="animated fadeIn fast">Piensa en el ambiente que quieres crear:</h2></p>
                <div>
                    
                        
                        <p>Antes de empezar a diseñar tu hogar, piensa qué ambiente
                        quieres crear en ese espacio y cómo te gustaría sentirte allí:
                        relajado o lleno de energía. Es muy importante tener en cuenta si ese espacio
                        será solo para ti o también quieres impresionar a tus invitados.</p>
                        <br></br>
                        <b>•</b> Piensa en una gama de colores: tranquila o colorida.<br></br>
                        <b>•</b> ¿Qué materiales y texturas usarás: cálidas y naturales o, al contrario,
                        artificiales y superficies lisas?.<br></br>
                        <b>•</b> Utiliza el contraste de tamaños, es decir, varía objetos grandes y pequeños.
                        Esto ayudará a evitar la monotonía y crear un efecto estimulante.
                        Lo importante es que algo debe unir todos los objetos (forma, color, factura, etc.).<br></br>
                        <br></br>

                        <img src={imagen2} />   
                    
                </div>

                <br></br>
                <p><h2 className="animated fadeIn fast">La simetría y el equilibrio para la armonía:</h2></p>
                <div>
                    
                        
                        <p>Si tienes un espacio asimétrico, tienes dos opciones para hacerlo lucir armonioso:
                        intentar crear una falsa sensación de simetría o acentuar sus peculiaridades.</p>
                        <br></br>
                        <b>•</b> Busca un punto focal en la habitación (por ejemplo, una chimenea, una pintura,
                        una ventana) y crea un interior simétrico alrededor de él.<br></br>
                        <b>•</b> Utiliza líneas verticales, esto hará que el espacio luzca más alto.<br></br>
                        <b>•</b> Agrega algún acento: es decir, primero crea simetría y luego arruínala
                        ligeramente.<br></br>
                        <br></br>

                        <img src={imagen3} />       
                    
                </div>

                <br></br>
                <p><h2 className="animated fadeIn fast">Color y textura siempre juntos:</h2></p>
                <div>
                    
                        
                        <p>Debes analizarlos en conjunto porque una cosa influye en la percepción de la otra.</p>
                        <br></br>
                        <b>•</b> Los colores fríos son buenos para las cálidas zonas costeras.
                        A cambio, en una ciudad norteña lucirían demasiado melancólicos.<br></br>
                        <b>•</b> Los colores cálidos crearán la sensación de que la habitación es un par
                        de grados más calurosa de lo que es en realidad.<br></br>
                        <b>•</b> Los colores vivos son inadecuados para el dormitorio. Es mejor utilizarlos
                        en los espacios en donde no pasas mucho tiempo. <br></br>
                        <b>•</b> Si utilizas un color predominante en tu interior, es importante variar
                        la textura para evitar la monotonía. <br></br>
                        <br></br>

                        <img src={imagen4} />   
                    
                </div>



            </p>

        </React.Fragment>

    )
}

export default About
