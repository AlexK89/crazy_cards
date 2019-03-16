import React, {Component} from 'react';
import API from '../../API/API';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import './UserForm.scss';

class UserForm extends Component {

    state = {
        showErrorPopup: false,
        inputs: {
            personal_data: {
                fullName: {
                    type: 'text',
                    label: 'Full Name'
                },
                birthday: {
                    type: 'date',
                    label: 'Date of birth'
                },
            },
            address: {
                postcode: {
                    type: 'text',
                    label: 'Post code'
                },
                houseNumber: {
                    type: 'text',
                    label: 'House number'
                },
            },
            finances: {
                income: {
                    type: 'text',
                    label: 'Income(£ per year)'
                },
            }
        },
        selects: {
            titles: ['Mr', 'Mrs', 'Miss'],
            employmentTypes: ['Full time', 'Part time', 'Student']
        }
    };

    renderInputs = (inputs) => {
        return Object.keys(inputs).map((inputName, i) =>
            (
                <div className={"input_group"} key={i}>
                    <label htmlFor={inputName}>{inputs[inputName].label}</label>
                    <input type={inputs[inputName].type} name={inputName} id={inputName} required/>
                </div>
            ))
    };

    renderSelect = (selectType, options) => {
        const type = selectType.toLowerCase().split(' ').join('_');

        return (
                <select name={type} id={type} defaultValue={options[0]}>
                    {options.map((title, index) => <option key={index} value={title}>{title}</option>)}
                </select>
        );
    };

    renderSelectTitles = () => this.renderSelect('title', this.state.selects.titles);

    renderSelectEmploymentType = () => this.renderSelect('Employment status', this.state.selects.employmentTypes);

    handleForm = async (event) => {
        event.preventDefault();
        const user = {
            title: event.target.title.value,
            fullName: event.target.fullName.value,
            birthday: event.target.birthday.value,
            income: parseInt(event.target.income.value),
            employmentStatus: event.target.employment_status.value,
            postcode: event.target.postcode.value,
            houseNumber: parseInt(event.target.houseNumber.value),
        };

        const postNewUser = await API.addUser(user);

        if (postNewUser) {
            this.props.formSubmitHandler(postNewUser);
        } else {
            this.setState({showErrorPopup: true});

            setTimeout(() => this.setState({showErrorPopup: false}), 4000);
        }

    };

    render() {
        return (
            <div className={"user_form_wrapper"}>
                <h2>Provide your data</h2>
                <form onSubmit={this.handleForm}>
                    <fieldset className={"personal_data"}>
                        {this.renderSelectTitles()}
                        {this.renderInputs(this.state.inputs.personal_data)}
                    </fieldset>

                    <fieldset className={"address"}>
                        {this.renderInputs(this.state.inputs.address)}
                    </fieldset>

                    <fieldset className={"finances"}>
                        {this.renderSelectEmploymentType()}
                        {this.renderInputs(this.state.inputs.finances)}
                    </fieldset>

                    <button type={"submit"}>Submit</button>
                </form>

                {this.state.showErrorPopup && <ErrorPopup/>}
            </div>
        );
    }
}

export default UserForm;