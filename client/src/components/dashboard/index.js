import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Dashboard = ({auth: {user}}) => {
  return (
    <Fragment>
      <h1>Dashboard</h1>
      <h4>Welcome {user && user.name}</h4>
    </Fragment>
  );
};

Dashboard.protoType = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Dashboard);
