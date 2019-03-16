import React from 'react';
import Card from '../../components/Card/Card';
import './AvailableCards.scss';

const AvailableCards = (props) => {
    return (
        <ul className={"cards_list"}>
            {props.availableCards.map((availableCard, index) => <Card key={availableCard.id} availableCard={availableCard} index={index}/>)}
        </ul>
    );
};

export default AvailableCards;