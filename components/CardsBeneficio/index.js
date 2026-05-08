import ReactHtmlParser from 'html-react-parser';
import styles from '../../styles/components/CardsBeneficio.module.css';

export const CardsBeneficio = ({ beneficio }) => {

    return (
        <div className={styles.card}>
            <div className={styles.headerCard} style={{ background: `url(${beneficio?.image?.url})` }}>
            </div>
            <div className={styles.bodyCard}>
                <p className={styles.title}>{beneficio.title}</p>
                <div className={styles.content}>{ReactHtmlParser(beneficio.description)}</div>
            </div>
        </div>
    )
}
