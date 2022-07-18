import { CotizaAhoraConNosotros } from '../../components/CotizaAhoraConNosotros';
import { HowToQuote } from '../../components/HowtoQuote';
import { ImportaciaDeElegirnos } from '../../components/ImportaciaDeElegirnos';
import { PorqueElegirElClub } from '../../components/PorqueElegirElClub'
import { QuienesNosRespaldan } from '../../components/QuienesNosRespaldan';
import { CarouselBlogs } from '../../components/CarouselBlogs';
import { ActivaTusBeneficios } from '../../components/ActivaTusBeneficios';
export const Body = ({ benefits, blogs }) => {
    return (
        <>
            <HowToQuote />
            <PorqueElegirElClub />
            <QuienesNosRespaldan />
            <CarouselBlogs blogs={blogs} />
            <CotizaAhoraConNosotros />
            <ImportaciaDeElegirnos />
            <ActivaTusBeneficios benefits={benefits} />
        </>
    )
}
