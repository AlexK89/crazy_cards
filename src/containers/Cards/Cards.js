import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import API from '../../API/API';
import AvailableCards from '../AvailableCards/AvailableCards';
import './Cards.scss';

import UserCard from "../../components/UserCard/UserCard";

class Cards extends Component {
    state = {
        user: null,
        availableCards: null
    };

    async componentDidMount() {
        const currentUser = this.props.location.user;
        const cards = await API.getCards();

        !currentUser ? this.props.history.push('/') : this.filterCards(currentUser, cards)
    }

    filterCards = (user, cards) => {
        let availableCards = [];

        cards.forEach(card => {
            if (card.requirements) {
                const requirementsMet = this.checkRequirements(user, card);
                availableCards.push(...requirementsMet);
            } else {
                availableCards.push(card)
            }
        });

        this.setState({user, availableCards})
    };

    checkRequirements = (user, card) => {
        const requirementsMet = [];

        Object.keys(card.requirements).forEach(requirementKey => {
            switch (requirementKey) {
                case "employmentStatus":
                    user.employmentStatus === card.requirements.employmentStatus && requirementsMet.push(card);
                    return;
                case "income":
                    user.income >= card.requirements.income && requirementsMet.push(card);
                    return;
                default:
                    return;
            }
        });

        return requirementsMet;
    };

    render() {
        return (
            <div className={"cards_page"}>
                { this.state.user && <UserCard user={this.state.user}/> }

                { this.state.availableCards && <AvailableCards availableCards={this.state.availableCards}/> }
            </div>
        );
    }
}

export default withRouter(Cards);