import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import '../Hojas-de-estilos/Galeria.css';

function Galeria() {

    return (
        <Carousel className="carro">
            <Carousel.Item>
                <div className="carrusel">
                    <img
                        src={require('../Imagenes/Carrusel-lesh.jpeg')}
                        width="auto"
                        height="auto"
                        className="foto-carrusel1"
                        alt="">

                    </img>
                </div>
                <Carousel.Caption>
                    <h3>Andres Albizures</h3>
                    <p>Actualmente soy Musico e Ingeniero en Sistemas</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carrusel">
                    <img
                        src={require('../Imagenes/brand-logo-gray.png')}
                        width="300px"
                        height="300px"
                        className="foto-carrusel"
                        alt="">

                    </img>
                </div>
                <Carousel.Caption>
                    <h3>Logotipo</h3>
                    <p>Logotipo de Lesh AG</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carrusel">
                    <img
                        src={require('../Imagenes/Carrusel-sistemas.jpg')}
                        width="auto"
                        height="auto"
                        className="foto-carrusel1"
                        alt="">

                    </img>
                </div>
                <Carousel.Caption>
                    <h3>Ingeniero en Sistemas</h3>
                    <p>Me dedico al desarrollo de software y de soluciones web.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carrusel">
                    <img
                        src={require('../Imagenes/Carrusel-cancion.jpeg')}
                        width="auto"
                        height="auto"
                        className="foto-carrusel"
                        alt="">

                    </img>
                </div>
                <Carousel.Caption className="letras">
                    <h3>Mi ultimo lanzamiento</h3>
                    <p>Escuchame en Spotify o donde prefieras.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carrusel">
                    <img
                        src={require('../Imagenes/Carrusel-artista.jpeg')}
                        width="auto"
                        height="auto"
                        className="foto-carrusel"
                        alt="">

                    </img>
                </div>
                <Carousel.Caption>
                    <h3>Perfil de Artista</h3>
                    <p>
                        Sigueme en las plataformas de musica.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );


}


export default Galeria