import { CotizaAhoraConNosotros } from '../../components/CotizaAhoraConNosotros';
import { HowToQuote } from '../../components/HowtoQuote';
import { ImportaciaDeElegirnos } from '../../components/ImportaciaDeElegirnos';
import { PorqueElegirElClub } from '../../components/PorqueElegirElClub'
import { QuienesNosRespaldan } from '../../components/QuienesNosRespaldan';
import { CarouselBlogs } from '../../components/CarouselBlogs';
import { ActivaTusBeneficios } from '../../components/ActivaTusBeneficios';
import { MasSeguros } from '../../components/MasSeguros';
export default function Body({ benefits, blogs }) {
    return (
        <>
            <HowToQuote />
            <PorqueElegirElClub />
            <MasSeguros />
            <QuienesNosRespaldan />
            <CarouselBlogs blogs={blogs} />
            <CotizaAhoraConNosotros />
            <ImportaciaDeElegirnos />
            <ActivaTusBeneficios benefits={benefits} />
        </>
    )
}
