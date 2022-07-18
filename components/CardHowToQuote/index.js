import React from 'react';

export const CardHowToQuote = ({ val }) => {
    return (
        <div className="root-card-how-to-quote">
            <div className="img-card-how-to-quote">
                <img loading="lazy" src={val.icon} alt="Msg Icon" />
            </div>
            <h3 className="title-card-how-to-quote">
                {val.step}
            </h3>
            <p className="description-how-to-quote" >
                {val.text}
            </p>
        </div>
    )
}
