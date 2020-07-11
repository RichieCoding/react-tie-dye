import React from 'react';
import './payment-select.styles.scss';

const PaymentSelect = ({ shipping }) => {
  return (
    <select name='payment' id='payment'>
      <option value='Cashapp'>Cashapp</option>
      <option value='Venmo'>Venmo</option>
      {shipping === 'Pickup' ? <option value='Cash'>Cash</option> : null}
    </select>
  );
};

export default PaymentSelect;
