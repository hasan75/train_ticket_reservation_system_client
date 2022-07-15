import React from 'react';
import { useForm } from 'react-hook-form';

const TicketFareAmount = () => {
  //fucntion for  random number generator of 8 digits with 2 digit of decimal values
  const precision = 100;
  var randomnum =
    Math.floor(
      Math.random() * (10 * precision - 1 * precision) + 1 * precision
    ) /
    (1 * precision);

  const randomNumber = () => {
    let fareAmount = Math.floor(Math.random() * 10000000000 + 100) / 100;
    console.log(fareAmount.toString().split('.')[1]);
    if (fareAmount.toString().split('.')[1].length === 1) {
      fareAmount = fareAmount + '1';
    }
    console.log(fareAmount);
  };

  randomNumber();

  return <div></div>;
};

export default TicketFareAmount;
