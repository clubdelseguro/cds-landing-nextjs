import React from 'react';
import './index.css';
import { Code } from 'react-content-loader'

export const NuestraHistoria = ({ data }) => {

    /*     const mostrartexto = () => {
            let elemento = document.getElementById('texto');
            elemento.style.display = 'flex'
            let boton = document.getElementById('boton');
            boton.style.display = 'none'
        } */
    return (
        <div className="root-nuestra-historia">
            <h2 className="title-nuestra-historia">{data ? data?.title : <Code
                width={100}
                height={100}
                viewBox="0 0 300 100"
                style={{ width: '300px', height: '60px' }}
            />}</h2>
            <div className="container-nuestra-historia">
                <div className="content-nuestra-historia">
                    <img loading="lazy" className="img-nuestra-historia" src="/assets/quienes-somos/img-content-quienes-somos.svg" alt="Img Nuestra Historia" />
                </div>
                <div className="description-nuestra-historia">
                    {/* {data ? data?.content1 : <Code
                        width={100}
                        height={100}
                        viewBox="0 0 200 100"
                        style={{ width: '517px', height: '230px' }}
                    />} */}
                    <span>
                        Somos Corredores de Seguros regulados por la CMF y respaldados por las principales compañías aseguradoras del país.
                    </span>
                    <span>
                        Como corredores de seguros, tenemos como objetivo asesorar a las personas que deseen asegurarse, ofreciéndoles el mejor seguro de acuerdo a sus requerimientos.
                    </span>
                    <span>
                        Contamos con más de 5 años de experiencia en el sector automotriz y actualmente más de 20.000 clientes ya confían en nuestros servicios.
                    </span>
                </div>
            </div>
            <div id="texto" className="desarrollo-nuestra-historia">
                {/* {data ? data?.content2 : <Code
                    width={100}
                    height={100}
                    viewBox="0 0 400 100"
                    style={{ width: '1060px', height: '230px' }}
                />} */}
                <h3>¿Por Qué asegurar tu auto con Club del Seguro?</h3>
                <p>
                    ✔ Porque contamos con la confianza y respaldo de las principales compañías de seguro del país.
                </p>
                <p>
                    ✔ Porque nos preocupamos de que siempre tengas las mejores condiciones en tu Seguro Automotriz.
                </p>
                <p>
                    ✔ Porque las compañías con las que trabajamos cuentan con las mejores asistencias del mercado para nuestros clientes y sus vehículos.
                </p>
                <p>
                    ✔ Porque puedes contratar tu seguro en nuestro sitio web en forma simple, rápida y segura.
                </p>
            </div>
            {/*     <div id="boton" className="seguir-leyendo" onClick={mostrartexto}>
                Seguir leyendo
            </div> */}
        </div>
    )
}
