import React from 'react';

export const CardHowToQuote = ({ val }) => {
    return (
        <div className="root-card-how-to-quote">
            <div className="img-card-how-to-quote">
                <img loading="lazy" src={val.icon} alt="Msg Icon" />
            </div>
            <p className="title-card-how-to-quote">
                {val.step}
            </p>
            <p className="description-how-to-quote" >
                {val.text}
            </p>
        </div>
    )
}
