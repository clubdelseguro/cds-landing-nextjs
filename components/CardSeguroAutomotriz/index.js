import React from 'react';

export const CardSeguroAutomotriz = ({img, title, subtitle, color, data, company, coverage}) => {
    return (
        <div className="card-seguro-automotriz">
            <div className="container-seguro-automotriz">
                <img loading="lazy" className="img-card-seguro-automotriz" src={coverage.ImgHeader?.url} alt="Img Card" />
                <div className="header-card-seguro-automotriz">
                    <div>
                        <img loading="lazy" src="/assets/SeguroAutomotriz/Vector.png" alt="Img Carro" />
                    </div>
                    <div className="subheader-seguro-automotriz">
                        <span style={{
                            backgroundColor: color ? color : '#FF521B',
                            borderRadius: '20px',
                            padding: '4px 24px',
                            color: '#FFFFFF',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: '18px',
                            lineHeight: '21px',
                            textAlign: 'center'
                        }}>{coverage.Title}</span>
                        <h2 style={{
                            margin: '7px 0px 0px 0px',
                            padding: 0,
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '23px',
                            lineHeight: '27px',
                            textAlign: 'center',
                            color: color ? color : '#000000',
                        }}>{coverage.Subtitle}</h2>
                    </div>
                </div>
                <div className="body-card-seguro-automotriz">
                    <div className="content-card-seguro-automotriz">
                        <img loading="lazy" src={coverage.ImgItem1?.url} alt="Img Card" />
                        <span className="text-card-seguro-automotriz">{coverage.Item1}</span>
                    </div>
                    <div className="content-card-seguro-automotriz">
                        <img loading="lazy" src={coverage.ImgItem2?.url} alt="Img Card" />
                        <span className="text-card-seguro-automotriz">{coverage.Item2}</span>
                    </div>
                    <div className="content-card-seguro-automotriz">
                        <img loading="lazy" src={coverage.ImgItem3?.url} alt="Img Card" />
                        <span className="text-card-seguro-automotriz">{coverage.Item3}</span>
                    </div>
                    <div className="content-card-seguro-automotriz">
                        <img loading="lazy" src={coverage.ImgItem4?.url} alt="Img Card" />
                        <span className="text-card-seguro-automotriz">{coverage.Item4}</span>
                    </div>
                    <div className="content-card-seguro-automotriz">
                        <img loading="lazy" src={coverage.ImgItem5?.url} alt="Img Card" />
                        <span className="text-card-seguro-automotriz">{coverage.Item5}</span>
                    </div>
                </div>
            </div>
            <a href='https://cotizador.clubdelseguro.cl/' target="_blank" rel="noreferrer" className="button-seguro-automotriz">
                Quiero saber más
            </a>
        </div>
    )
}
