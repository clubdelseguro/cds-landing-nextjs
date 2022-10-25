import React from 'react';
import { CardSeguroAutomotriz } from '../CardSeguroAutomotriz';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    {
        width: 1,
        itemsToShow: 1
    },
    {
        width: 700,
        itemsToShow: 2
    },
    {
        width: 1050,
        itemsToShow: 3
    },
]

export const CardsSeguroAutomotriz = ({ color, company, coverages }) => {
    return (
        <div style={{ marginTop: '38px' }}>
            <div className="cards-seguro-automotriz">
                {
                    coverages?.map((coverage, i) => {
                        let respuesta = null;
                        if(i < 3){
                            respuesta = <CardSeguroAutomotriz color={color} coverage={coverage} company={company ? company : 'Mapfre'} title="Plan sin deducible" img="/assets/SeguroAutomotriz/img-card1.png" subtitle="full cobertura" data="no pagas nada" />
                        }
                        return respuesta;
                    })
                }
            </div>
            <div className="carousel-cards-seguro-automotriz">
                <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay={true} autoPlaySpeed={5000}>
                    {
                        coverages?.map((coverage) => <CardSeguroAutomotriz color={color} coverage={coverage} company={company ? company : 'Mapfre'} title="Plan sin deducible" img="/assets/SeguroAutomotriz/img-card1.png" subtitle="full cobertura" data="no pagas nada" />)
                    }
                </Carousel>
            </div>
        </div>
    )
}