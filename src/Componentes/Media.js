import React from "react";
import '../Hojas-de-estilos/Media.css';
function Media() {

    return (

        <div className="div">
            <h2 className="media-title">Escucha mi musica en YouTube</h2>
            <div className="div-media">
                <div className="media-contenedor">
                    <iframe min-width="125px" width="560" height="315" src="https://www.youtube.com/embed/uakhgPWyedQ?si=0OCaMyFhu9OYWoEy" title="YouTube video player" frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <h2 className="media-title">Escuchame tambien en Spotify</h2>
            <div className="div-media">
                <div className="media-contenedor2">
                    <iframe title="spot" src="https://open.spotify.com/embed/artist/1Ez7Ygqdwsf0eU5fEUdRiB?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </div>

    )



}

export default Media;