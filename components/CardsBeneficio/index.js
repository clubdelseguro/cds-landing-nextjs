import { makeStyles } from '@mui/styles';
import ReactHtmlParser from 'react-html-parser';

const useStyles = makeStyles({
    card: {
        width: '250px',
        height: '297px',
        margin: '20px 0px',
    },
    headerCard: {
        width: '100%',
        height: '144px',
        border: '5px solid #F37420',
        boxSizing: 'border-box',
        borderRadius: '40px 0px 0px 0px',
        // background: `url(https://cds-landing.s3.sa-east-1.amazonaws.com/Rectangle_460_8f849d7a16.svg)`,
    },
    bodyCard: {
        width: '100%',
        height: '153px',
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '0px 0px 30px 30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '21px',
        display: 'flex',
        alignItems: 'flex-end',
        textAlign: 'right',
        color: '#F37420',
        margin: '0px 14px 5px 14px',
    },
    content: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '11px',
        lineHeight: '13px',
        color: '#030101',
        margin: '0px 14px',
        textAlign: 'right'
    }
});
export const CardsBeneficio = ({ beneficio }) => {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <div className={classes.headerCard} style={{background: `url(${beneficio?.image?.url})`}}>
            </div>
            <div className={classes.bodyCard}>
                <div className={classes.title}>{beneficio.title}</div>
                <div className={classes.content}>{ReactHtmlParser(beneficio.description)}</div>
            </div>
        </div>
    )
}
