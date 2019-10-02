import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { register } from '../../actions/authActions';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'pink', 3000);
    } else {
      register({ name, email, password });
    }
  };
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <Fragment>
      <div className=''>
        <form className='' onSubmit={e => onSubmit(e)}>
          <div className=''>
            <div className=''>
              <input
                value={name}
                name='name'
                type='text'
                className=''
                placeholder='Name'
                onChange={e => onChange(e)}
              />
            </div>
          </div>
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
          <div className=''>
            <div className=''>
              <input
                value={password2}
                name='password2'
                type='password'
                className=''
                placeholder='Repete Password'
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <input type='submit' className='' value='Register' />
        </form>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
