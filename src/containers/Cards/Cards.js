import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

const client = {
    "title": "Mr",
    "full_name": "Vasile Cojusco",
    "birthday": "2019-03-06",
    "income": 50000,
    "postCode": "SE3 7AA",
    "house_number": 452,
    "id": 1
}

class Cards extends Component {
    componentDidMount() {
        // !this.props.location.user && this.props.history.push('/')
    }

    render() {
        return (
            <div className={"cards_list"}>

            </div>
        );
    }
}

export default withRouter(Cards);