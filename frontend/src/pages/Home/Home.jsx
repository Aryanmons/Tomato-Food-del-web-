import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/Menu/ExploreMenu';
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay';
import Appdown from '../../components/Appdownload/Appdown';

const Home = () => {
  const [category, setCat] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCat={setCat} />
      <Fooddisplay category={category} />
       <Appdown/>
    </div>
  );
};

export default Home;
