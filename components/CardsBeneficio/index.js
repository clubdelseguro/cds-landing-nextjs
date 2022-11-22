import ReactHtmlParser from 'react-html-parser';
import styles from '../../styles/components/CardsBeneficio.module.css';

export const CardsBeneficio = ({ beneficio }) => {

    return (
        <div className={styles.card}>
            <div className={styles.headerCard} style={{ background: `url(${beneficio?.image?.url})` }}>
            </div>
            <div className={styles.bodyCard}>
                <p className={styles.title}>{beneficio.title}</p>
                <p className={styles.content}>{ReactHtmlParser(beneficio.description)}</p>
            </div>
        </div>
    )
}
