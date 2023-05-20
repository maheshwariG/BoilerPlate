import React from 'react';
import './Tabs.css';
const TabPane = (props) => {
  // eslint-disable-next-line react/prop-types
  const { childern } = props;
  alert('Hi===');
  return <div className="tab-pane test">{childern}</div>;
};

export default TabPane;
