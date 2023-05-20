import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from './router/routes';
import styles from './App.module.css';
import NavBar from './containers/NavBar/NavBar';
import './global.css';

function App(props) {
  console.log('hi', props);
  return (
    <div className={styles.padding}>
      <NavBar />
      <Router>
        {routes.map((route) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Route key={route.path} {...route} />
        ))}
      </Router>
    </div>
  );
}

export default App;
