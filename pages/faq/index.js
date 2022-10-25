import Link from "next/link";
import { CotizaAhoraConNosotros } from "../../components/CotizaAhoraConNosotros";
import { NavBar } from "../../components/NavBar";
import styles from '../../styles/faq.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

const valores1 = [
    {
        id: 1,
        title: '¿Qué hacer en caso de Siniestro?',
        description: `En caso de accidente vehicular sin personas lesionadas, deberá presentar ante la compañia una Declaración Jurada Simple durante los primeros 10 días. Tu compañia Aseguradora la puedes ver en tu póliza o llamando al 600 300 1919 opción 4, en caso de haber terceros involucrados toma los siguientes datos (Nombre, Rut, Marca, Modelo, Patente).
        En caso de un siniestro con personas lesionadas, deberás realizar una denuncia inmediata en carabineros e informar de forma inmediata a tu Compañia Aseguradora. Será necesario presentar una copia de la denuncia respectiva en tu Compañia`,
        expanded: false,
    },
    {
        id: 2,
        title: '¿Que hacer en caso de robo del Vehículo?',
        description: `En caso de Robo de tu Vehículo con personas lesionadas, deberás realizar una denuncia inmediata a carabineros e informar de forma inmediata a tu Compañia Aseguradora. Será necesario presentar una copia de la denuncia respectiva en tu Compañia.`,
        expanded: false,
    },
    {
        id: 3,
        title: '¿Cómo solicito una asistencia?',
        description: `Para solicitar una de las asistencias que incluye tu seguro, debes llamar al número de Atención al Cliente de Club del Seguro 600 300 1919 desde red fija, ó 2 22002921 desde celulares y seleccionar la opción de Asistencia (opción 1).`,
        expanded: false,
    },
]


function Faq() {

    const [data1, setData1] = useState(valores1);

    const expanded1 = (info) => {
        const result = data1.map(val => val.id === info.id ? { ...info, expanded: !val.expanded } : val);
        setData1(result);
    }
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className={styles.rootHeaderFaqPage}>
                <div className={styles.contentHeaderFaqPage}>
                    <h1 className={styles.titleHeaderFaqPage}> FAQ </h1>
                    <h2 className={styles.descriptionHeaderFaqPage}>Encuentra acá las respuestas a las preguntas más frecuentes que realizan los miembros del Club.</h2>
                </div>
            </div>
            <NavBar />
            <div className="body">
                <div>
                    <div className={styles.container}>
                        <h2 className={styles.titleFaq}> Preguntas Frecuentes</h2>
                        {
                            data1.map(value => (
                                <Accordion key={value.id} expanded={value.expanded} className={styles.acordion} onChange={e => expanded1(value)} style={{ backgroundColor: 'transparent', borderRadius: `${value.expanded ? '20px 20px 0px 0px' : '20px'}` }}  >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        classes={{ content: styles.title }}
                                        style={{ border: '1px solid #000000', borderRadius: `${value.expanded ? '20px 20px 0px 0px' : '20px'}` }}
                                    >
                                        <p className={styles.titleAccordion}>{value.title}</p>
                                    </AccordionSummary>
                                    <div className={styles.contentido}>
                                        <AccordionDetails>
                                            <p className={styles.descriptionAccordion}>
                                                {value.description}
                                            </p>
                                        </AccordionDetails>
                                    </div>
                                </Accordion>
                            ))
                        }
                    </div>
                    <CotizaAhoraConNosotros />
                    {/* <div className={styles.container}>
                <h2 className="titleFaq"> Tema numero 2</h2>
                {
                    data2.map(value => (
                        <Accordion key={value.id} expanded={value.expanded} className={styles.acordion} onChange={e => expanded2(value)} style={{ backgroundColor: 'transparent', borderRadius: `${value.expanded ? '20px 20px 0px 0px' : '20px'}` }}  >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                styles={{ content: styles.title }}
                                style={{ border: '1px solid #000000', borderRadius: `${value.expanded ? '20px 20px 0px 0px' : '20px'}` }}
                            >
                                <p className={styles.titleAccordion}>{value.title}</p>
                            </AccordionSummary>
                            <div className={styles.contentido}>
                                <AccordionDetails>
                                    <p className={styles.descriptionAccordion}>
                                        {value.description}
                                    </p>
                                </AccordionDetails>
                            </div>
                        </Accordion>
                    ))
                }
            </div> */}
                </div>
            </div>
        </div>
    )
}

export default Faq;

