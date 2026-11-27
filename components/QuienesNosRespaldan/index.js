import Link from 'next/link';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    {
        width: 1,
        itemsToShow: 1
    },
    {
        width: 390,
        itemsToShow: 2
    },
    {
        width: 585,
        itemsToShow: 3,
        pagination: false,
    },
    {
        width: 815,
        itemsToShow: 4,
        pagination: false,
    },
]

export const QuienesNosRespaldan = () => {
    return (
        <div className="root-quienes-respaldan">
            <p className="title-quienes-respaldan">
                Quienes nos <b> respaldan </b>
            </p>
            <Carousel breakPoints={breakPoints} enableAutoPlay showArrows={false} autoPlaySpeed={5000} >
                <a href="https://sitio.consorcio.cl/" target="_blank" rel="noreferrer" >
                    <div className="logo-quienes-respaldan consorcio">
                        <img loading="lazy" src="https://cds-img.s3.us-east-1.amazonaws.com/companies-logo/LogoConsorcio_300x98.svg" alt="Logo Consorcio" />
                    </div>
                </a>
                <a href="https://www.mapfre.cl/" target="_blank" rel="noreferrer">
                    <div className="logo-quienes-respaldan mapfre">
                        <img loading="lazy" src="https://cds-landing.s3.sa-east-1.amazonaws.com/image_47_bbf85ce3b3.png" alt="Logo Mapfre" />
                    </div>
                </a>
                <a href="https://reale.cl/" target="_blank" rel="noreferrer" >
                    <div className="logo-quienes-respaldan reale">
                        <img loading="lazy" src="https://cds-landing.s3.sa-east-1.amazonaws.com/image_46_8b54a7b9ae.png" alt="Logo Reale" />
                    </div>
                </a>
                {/* <Link href="/aseguradoras/sura-seguros" >
                    <div className="logo-quienes-respaldan sura">
                        <img loading="lazy" src="https://cds-landing.s3.sa-east-1.amazonaws.com/logo_sura_4b190d7fcb.png" alt="Logo Sura" />
                    </div>
                </Link> */}
                <a href="https://www.rentanacional.cl/" target="_blank" rel="noreferrer" >
                    <div className="logo-quienes-respaldan sura">
                        <img style={{
                            width: '160px',
                        }} loading="lazy" src="https://cds-img.s3.amazonaws.com/Logo+Renta.png" alt="Logo Renta" />
                    </div>
                </a>
            </Carousel>
            <Link href="/aseguradoras" >
                <p className="ver-mas-quienes-respaldan">
                    Ver todos los seguros
                </p>
            </Link>
        </div>
    )
}
