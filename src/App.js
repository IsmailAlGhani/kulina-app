import React from 'react';
import Location from './component/location/location.component';
import DateSlide from './component/date-slide/date-slide.component';
import CollectionCard from './component/collection-card/collection-card.component';
import CustomOption from './component/custom-option/custom-option.component';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="body">
      <Location />
      <br />
      <DateSlide />
      <br />
      <CustomOption />
      <br />
      <CollectionCard />
    </div>
  );
}

export default App;
