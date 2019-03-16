import React from 'react';
import './UserCard.scss';

const UserCard = (props) => {
    const {title, fullName, birthday, employmentStatus, income, postcode, houseNumber, id} = props.user;

    return (
        <div className={"user_card"} data-set-used-id={id}>
            <div className="user_card__header">
                <div className="user_card__header__img_wrapper">

                </div>
                <div className="user_card__header__details">
                    <h4>{ [title, ".", fullName] }</h4>
                    <p>{ birthday }</p>
                </div>
            </div>
            <div className="user_card__body">
                <div className="user_card__body__employment">
                    <p>{ employmentStatus }</p>
                    <p>Annual income: <span>£{ income }</span></p>
                </div>
                <div className="user_card__body__address">
                    <p>House number: <span>{houseNumber}</span></p>
                    <p>Post code: <span>{postcode}</span></p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;