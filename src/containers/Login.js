import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './Login.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToggleIsAuthenticated } from '../Redux/Actions/ToggleIsAuthenticated';
import propTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      redirect: false
    };
  }

  renderRedirect = () => {
    console.log('redirecting: ' + this.state.redirect);
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }
  };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.props.ToggleIsAuthenticated(true);
    // try {
    //   this.props.toggleLoading();
    //   fetch('40.113.216.49:8080/login', {
    //     //dont need to specify https since its sending a req from and https site
    //     //will automatically prepend it (testing this theory)
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       username: this.state.email,
    //       password: this.state.password
    //     })
    //   }).then(response => {
    //     localStorage.setItem('token', response.headers.get('Authorization'));
    //     console.log(
    //       'localStorage.getItem(token): ',
    //       localStorage.getItem('token')
    //     );
    //     console.log('localStorage: ', localStorage);
    //     if (response.status === 403) {
    //       console.log('(login.js) incorrect credentials');
    //       alert('incorrect credentials');
    //     } else if (response.status === 200) {
    //       console.log('(login.js) setting authenticated to true');
    //       this.props.userHasAuthenticated(true); //calls this.setState function in app.js
    //       alert('Logged in');
    //       this.props.toggleLoading();
    //       this.setState({ redirect: true });
    //     } else {
    //       console.log(
    //         '(login.js) error other than incorrect login credentials'
    //       );
    //     }
    //   });
    // } catch (e) {
    //   alert(e.message);
    // }
  };

  render() {
    return (
      <div className='Login'>
        {this.renderRedirect()}
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId='email' bsSize='large'>
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId='password' bsSize='large'>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type='password'
            />
          </FormGroup>
          <Button
            block
            bsSize='large'
            disabled={!this.validateForm()}
            type='submit'
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

/** anytime were using props we should have propTypes,
 * should be value not func????
 * need?????
 */
Login.propTypes = {
  isAuthenticated: propTypes.func.isRequired
};

//1st param is any state you want to pass in, 2nd object
//with any actions you want to use
export default connect(
  null,
  { ToggleIsAuthenticated }
)(Login);
