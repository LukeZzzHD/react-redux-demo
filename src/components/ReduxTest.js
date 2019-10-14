import React from 'react';
import { connect } from 'react-redux';

const ReduxTest = ({ increase, decrease, addItem }) => {
    return (
        <div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={() => addItem(123)}>add</button>
        </div>
    );
};

/* const mapStateToProps = state => ({
    myNumber: state.number,
    myName: state.name,
}); */

const mapDispatchToProps = dispatch => ({
    increase: () =>
        dispatch({
            type: 'INCREASE_NUMBER',
        }),
    decrease: () =>
        dispatch({
            type: 'DECREASE_NUMBER',
        }),
    addItem: item =>
        dispatch({
            type: 'ADD_TO_LIST',
            payload: {
                item,
            },
        }),
});

export default connect(
    null,
    mapDispatchToProps,
)(ReduxTest);
