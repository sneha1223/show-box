import React from 'react';
import Navbar from './component/Navbar/Navbar';
import './App.css';
import Banner from './component/Banner/Banner';
import {action,Horror,originals,Comedy} from './url'
import RowPost from './component/RowPost/RowPost';

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Banner />
      <RowPost url={originals} title='Originals' />
      <RowPost url ={action} title='Action' isSmall />
      <RowPost url ={Comedy} title='Comedy' isSmall />
      <RowPost url ={Horror} title='Horror' isSmall />
    </div>
  );
}

export default App;
