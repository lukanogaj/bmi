import React from 'react';
import Layout from './components/Layout/Layout';
import AgeHandler from './components/Age/AgeHandler';
import Header from './components/Header/Header';
import MeasurementsUnits from './components/MeasurementsUnits/MeasurementsUnits';
import './App.css';

function App() {
  return (
    <div>
      <Layout>
        <Header />
        <AgeHandler></AgeHandler>
        {/* <MeasurementsUnits /> */}
      </Layout>
    </div>
  );
}

export default App;
