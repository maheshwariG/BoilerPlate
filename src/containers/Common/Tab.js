import React, { useEffect, useState } from 'react';

const Tabs = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const [tabHeader, setTabHeader] = useState([]);
  const [childContent, setChildConent] = useState({});
  const [active, setActive] = useState('');
  useEffect(() => {
    const headers = [];
    const childCnt = {};
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name, defaultHeight } = element.props;
      console.log(defaultHeight);
      headers.push(name);
      childCnt[name] = element.props.children;
    });
    setTabHeader(headers);
    setActive(headers[0]);
    setChildConent({ ...childCnt });
    console.log(childCnt);
  }, [props, children]);

  const changeTab = (name) => {
    setActive(name);
  };

  return (
    <div className="tabs">
      <ul className="tab-header">
        {tabHeader.map((item) => (
          /* eslint-disable */
          <li
            onClick={() => changeTab(item)}
            key={item}
            className={item === active ? 'active' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {Object.keys(childContent).map((key,index) => {
          if (key === active) {
            return <div key={index} className="tab-child">{childContent[key]}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Tabs;
