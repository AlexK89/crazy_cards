import React, {Component} from 'react';
import API from '../../API/API';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import './UserForm.scss';

class UserForm extends Component {

    state = {
        showErrorPopup: false
    };

    handleForm = async (event) => {
        event.preventDefault();
        const user = {
            title: event.target.title.value,
            full_name: event.target.full_name.value,
            birthday: event.target.birthday.value,
            income: parseInt(event.target.income.value),
            postCode: event.target.postcode.value,
            house_number: parseInt(event.target.house_number.value),
        };

        const postNewUser = await API.addUser(user);
        if (postNewUser) {
            this.props.formSubmitHandler(postNewUser);
        } else {
            this.setState({ showErrorPopup: true });

            setTimeout(() => this.setState({ showErrorPopup: false }), 4000);
        }

    };

    renderSelectTitles = () => {
        const titles = ['Mr', 'Mrs', 'Miss'];

        return (
            <select name="title" id={"title"} defaultValue={titles[0]}>
                {titles.map((title, index) => <option key={index} value={title}>{title}</option>)}
            </select>
        );
    };

    renderInputs = () => {
        const inputs = {
            full_name: {
                type: 'text',
                label: 'Full Name'
            },
            birthday: {
                type: 'date',
                label: 'Date of birth'
            },
            income: {
                type: 'text',
                label: 'Income(£ per year)'
            },
            postcode: {
                type: 'text',
                label: 'Post code'
            },
            house_number: {
                type: 'text',
                label: 'House number'
            },
        };

        return Object.keys(inputs).map((inputName, i) =>
            (
                <fieldset key={i} className={inputName}>
                    <label htmlFor={inputName}>{inputs[inputName].label}</label>
                    <input type={inputs[inputName].type} name={inputName} id={inputName} required/>
                </fieldset>
            ))
    };

    render() {
        return (
            <div className={"user_form_wrapper"}>
                <h2>Provide your data</h2>
                <form onSubmit={this.handleForm}>
                    <fieldset className={"title"}>
                        {this.renderSelectTitles()}
                    </fieldset>

                    { this.renderInputs() }

                    <button type={"submit"}>Submit</button>
                </form>

                { this.state.showErrorPopup && <ErrorPopup /> }
            </div>
        );
    }
}

export default UserForm;