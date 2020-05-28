import React from 'react';

import { addCount, minusCount } from '../redux/actions/CountAction';
import { addNo } from '../redux/actions/AddNoAction';

import { connect } from 'react-redux';

const Count = (props) => {

    const {count, addCount, minusCount, no, addNo} = props

    return(
        <React.Fragment>
        <h3>Redux count value is : {count}</h3>
        <button onClick={() => addCount(count)}>Add One</button>
        <button onClick={() => minusCount(count)}>Substract One</button>
        
        <h3>Redux no value is : {no}</h3>
        <button onClick={() => addNo(no)}>Add One</button>
        </React.Fragment>
    )
} 

const mapStateToProps = (state) => {
    return{
    count : state.countReducer,
    no : state.AddNoReducer
    }}
  
const mapDispatchToProps = (dispatch) => {
    return{
    addCount: (count) => dispatch(addCount(count)),
    minusCount: (count) => dispatch(minusCount(count)),
    addNo: (no) => dispatch(addNo(no))
    }}

export default connect(mapStateToProps, mapDispatchToProps)(Count);