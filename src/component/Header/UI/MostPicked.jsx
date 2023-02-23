import React from 'react';
import '../../../styles/MostPicked.css';
import { Link } from 'react-router-dom';
import ImageHero2 from '../../Assets/img_picked/feature1.png';
import ImageHero3 from '../../Assets/img_picked/feature2.png';
import ImageHero4 from '../../Assets/img_picked/feature3.png';
import ImageHero5 from '../../Assets/img_picked/feature4.png';
import ImageHero from '../../Assets/img_picked/feature.png';

export default function MostPicked(props) {
  
  return ( <section className='container' style={{height: 270}} ref={props.refMostPicked}>
    <h4 className="mb-4 content">Most Picked</h4>
    <div className="container-xxl">
      <div className="row">
        <div className="col-4">
          <div className="main-banner position-relative p-2">
            <img src={ImageHero} alt="main-banner" className='img-fluid rounded-2'/> <Link to="/" className='main-content position-absolute'>$ 50.0  <span>per night</span></Link>
          </div>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-6">
              <div className="main-banner-feature  p-2">
                <img src={ImageHero2} alt="main-banner" className='img-fluid' />
                <Link to="/" className='main-content position-absolute' style={{right: 553}}>$ 50.0  <span>per night</span></Link>
              </div>
            </div>
            <div className="col-6">
              <div className="main-banner-feature p-2 ">
                <img src={ImageHero3} alt="main-banner" className='img-fluid' />
                <Link to="/" className='main-content position-absolute' style={{right: 121}}>$ 50.0  <span>per night</span></Link>
              </div>
            </div>
            <div className="col-6">
              <div className="main-banner-feature p-2">
                <img src={ImageHero4} alt="main-banner" className='img-fluid' />
                <Link to="/" className='main-content position-absolute' style={{right: 121}}>$ 50.0  <span>per night</span></Link>
              </div>
            </div>
            <div className="col-6">
              <div className="main-banner-feature p-2">
                <img src={ImageHero5} alt="main-banner" className='img-fluid' />
                <Link to="/" className='main-content position-absolute' style={{right: 553}}>$ 50.0  <span>per night</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
