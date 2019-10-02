import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login( email, password );
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <Fragment>
      <div className=''>
        <h3>Login</h3>
        <form className='' onSubmit={e => onSubmit(e)}>
          <div className=''>
            <div className=''>
              <input
                value={email}
                name='email'
                type='email'
                className=''
                placeholder='Email'
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <div className=''>
            <div className=''>
              <input
                value={password}
                name='password'
                type='password'
                className=''
                placeholder='Password'
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <input type='submit' className='' value='Login' />
        </form>
      </div>
    </Fragment>
  );
};

Login.protoType = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
