import { CotizaAhoraConNosotros } from "../../components/CotizaAhoraConNosotros";
import { ImportaciaDeElegirnos } from "../../components/ImportaciaDeElegirnos";
import { NavBar } from "../../components/NavBar";
import styles from '../../styles/quienes-somos.module.css';
import Head from 'next/head'

function QuienesSomos({ data }) {
    return (
        <div className="body">
            <Head>
                <title>{data?.data.titlePage} Club del Seguro</title>
                <meta name="description" content={data?.data.meta} />
            </Head>
            <div className={styles.headerQuienesSomosPage}>
                <NavBar />
                <div className={styles.containerHeaderQuienesSomos}>
                </div>
            </div>
            <div className={styles.rootNuestroObjetivo}>
                <div className={styles.itemNuestroObjetivo}>
                    <img loading="lazy" className={styles.imgNuestroObjetivo} src="/assets/quienes-somos/codicon_organization.svg" alt="Icon Organization" />
                    <h1 className={styles.titleNuestroObjetivo}>{data.data.title}</h1>
                </div>
                <div className={styles.itemNuestroObjetivo}>
                    <p className={styles.descriptionNuestroObjetivo} >
                        {data.data.description}
                    </p>
                </div>
            </div>
            <div className={styles.rootNuestraHistoria}>
                <h2 className={styles.titleNuestraHistoria}>{data?.data.title}</h2>
                <div className={styles.containerNuestraHistoria}>
                    <div className={styles.contentNuestraHistoria}>
                        <img loading="lazy" className={styles.imgNuestraHistoria} src="/assets/quienes-somos/img-content-quienes-somos.svg" alt="Img Nuestra Historia" />
                    </div>
                    <div className={styles.descriptionNuestraHistoria}>
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
                <div id="texto" className={styles.desarrolloNuestraHistoria}>
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
            <ImportaciaDeElegirnos />
            <CotizaAhoraConNosotros />
        </div>
    )
}


QuienesSomos.getInitialProps = async ({ req }) => {
    const [data] = await Promise.all([
        fetch(`https://strapi.clubdelseguro.cl/pages/10`).then((r) => r.json()),
    ]);

    return {
        data,
    };
};

export default QuienesSomos;
