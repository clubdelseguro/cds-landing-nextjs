import { makeStyles } from '@mui/styles';
import { CarouselBenefits } from '../CarouselBenefits';

const useStyles = makeStyles({
    root: {
        margin: '2% 0%',
    },
    container: {
        height: '100px',
        margin: '2% 0%',
    },
    element: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0px 40px'
    },
    titleElement: {
        fontWeight: '300',
        fontSize: '48px',
        lineHeight: '56px',
        textAlign: 'center',
    },
    description: {
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '21px',
        textAlign: 'center',
    },
    containerBeneficios: {
        margin: '2% 0%',
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
        margin: '2% 0%'
    },
    card: {
        width: '300px',
        height: '200px',
        border: '1px solid #000000',
        borderRadius: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '2% 0%',
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '28px',
        textAlign: 'center',
    },
    cardDescription: {
        fontWeight: '300',
        fontSize: '13px',
        lineHeight: '15px',
        textAlign: 'center',
        margin: '0% 5%',
    },
    cardIcon: {
        height: '74px',
        width: '74px',
    },
    title: {
        fontWeight: '300',
        fontSize: '48px',
        lineHeight: '56px',
        textAlign: 'center',
    },
    cardsBeneficio: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
});

export const ActivaTusBeneficios = ({ benefits }) => {
    const classes = useStyles();
    return (
        <div className={classes.containerBeneficios}>
            <h3 className="title-activa-tus-beneficios">Activa tus beneficios</h3>
            <CarouselBenefits beneficios={benefits} />
        </div>
    )
}