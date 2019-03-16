import React from 'react';
import './Card.scss';

const Card = (props) => {
    const { cardType, apr, balanceTransferDuration, purchaseOfferDuration, credit } = props.availableCard;

    return (
        <li className={"card"}>
            <h3 className="title">{ cardType }</h3>
            <div className="card__body">
                <div className="card__body__image"></div>
                <div className="card__body__details">
                    <div className="card__body__details__column">
                        <p>Balance Transfer offer duration</p>
                        <h6>{ balanceTransferDuration }</h6>
                    </div>
                    <div className="card__body__details__column">
                        <p>0% Purchase offer duration</p>
                        <h6>{ purchaseOfferDuration }</h6>
                    </div>
                    <div className="card__body__details__column">
                        <p>Rep % APR (variable)</p>
                        <h6>{ apr }</h6>
                    </div>
                    <div className="card__body__details__column">
                        <p>Credit</p>
                        <h6>{ credit }</h6>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Card;