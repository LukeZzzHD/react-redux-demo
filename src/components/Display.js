import React from 'react';
import { connect } from 'react-redux';

const Display = ({ number }) => {
    return <h1 style={{ color: 'red' }}>Number is: {number}</h1>;
};

const mapStateToProps = state => ({
    number: state.number,
});

export default connect(mapStateToProps)(Display);
