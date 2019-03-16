import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import UserForm from './components/UserForm/UserForm';
import Cards from './containers/Cards/Cards';
import './App.scss';

class App extends Component {
  state = {

  };

  formSubmitHandler = (user) => {
    console.log(user);
    const location = {
      pathname: '/cards',
      user: { user }
    };

    this.props.history.push(location);
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={"/cards"} component={Cards}/>
          <Route exact path={"/"} component={ () => <UserForm formSubmitHandler={this.formSubmitHandler} /> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
