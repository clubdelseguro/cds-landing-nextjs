import { CardsBeneficio } from '../../components/CardsBeneficio'
import Carousel from 'react-elastic-carousel';
import Link from 'next/link';
import styles from '../../styles/components/ActivaTusbeneficios.module.css';

const breakPoints = [
    {
        width: 1,
        itemsToShow: 1,
        pagination: false
    },
    {
        width: 500,
        itemsToShow: 2
    },
    {
        width: 750,
        itemsToShow: 3
    },
    {
        width: 1000,
        itemsToShow: 4
    },
]

export const ActivaTusBeneficios = ({ benefits }) => {
    return (
        <div className={styles.containerBeneficios}>
            <h3 className={styles.titleActivaTusBeneficios}>Activa tus beneficios</h3>
            <div className={styles.cardsBeneficio}>
                <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay={true} autoPlaySpeed={5000}>
                    {
                        benefits?.map((beneficio) => (
                            <CardsBeneficio key={beneficio.id} beneficio={beneficio} />
                        ))
                    }
                </Carousel>
                <Link href="/asistencias" style={{ textDecoration: 'none' }}>
                    <div className={styles.bottom}>
                        <div className={styles.button}>Ver todos los beneficios</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}