// React
import React from 'react';

// Component
import PageRouter from './components/PageRouter';
import NavMain from './components/NavMain';

// Stylesheets
import './App.css';

function App() {
  return (
    <div className="container-page">
      <NavMain />
      <PageRouter />
    </div>
  );
}

export default App;