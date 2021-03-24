import React from 'react';

export const alert = ({ alert }) => {
  return alert !== null && <div className={`alert alert-${alert.type}`}></div>;
};
