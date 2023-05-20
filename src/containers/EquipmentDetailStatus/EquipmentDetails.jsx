import React from 'react';
import { connect } from 'react-redux';
import EquipmentDetailsComponent from '../../components/EquipmentDetails/EquipmentDetails';
import { increaseCounter, decreaseCounter } from './action';
const EquipmentDetails = (props) => {
  const incr = () => {
    alert('hi');
  };
  return <EquipmentDetailsComponent props={props} incr={incr} />;
};
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => {
      console.log('clicked');
      dispatch(increaseCounter());
    },
    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EquipmentDetails);
