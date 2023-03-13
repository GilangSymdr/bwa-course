import React from 'react';
import '../../../styles/MostPicked.css';
import { Link } from 'react-router-dom';
import ImageHero2 from '../../Assets/img_picked/feature1.png';
import ImageHero3 from '../../Assets/img_picked/feature2.png';
import ImageHero4 from '../../Assets/img_picked/feature3.png';
import ImageHero5 from '../../Assets/img_picked/feature4.png';
import ImageHero from '../../Assets/img_picked/feature.png';


export default function MostPicked(props) {
  
  return (
  <section className='container' style={{height: 270}} ref={props.refMostPicked}>
    <h4 className="mb-4 content">Most Picked</h4>
    <div className="container-xxl">
      <div className="row">
        <div className="col-4">
          <div className="card main-banner position-relative" style={{border: 0}}>
            <img src={ImageHero} alt="main-banner" className='image'/>
            <Link to="/" className='main-content position-absolute' style={{right: 0}}>$ 120.0  <span>per night</span></Link>
            <h1 className='tag-place position-absolute' style={{fontSize: 16, marginTop: 415, marginLeft: 20}}>Coconut Village</h1>
                <p className="tag-country position-absolute" style={{marginTop: 415, marginLeft: 20}}>Bali, Indonesia</p>
          </div>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-6">
              <div className="card main-banner-feature " style={{border: 0}}>
                <img src={ImageHero2} alt="main-banner" className='image' style={{width: 410}}/>
                <Link to="/" className='main-content position-absolute' style={{right: 0}}>$ 90.0  <span>per night</span></Link>
                <h1 className='tag-place position-absolute' style={{fontSize: 16, marginTop: 160, marginLeft: 20}}>Jung Hook Sie</h1>
                <p className="tag-country position-absolute" style={{marginTop: 159, marginLeft: 20}}>Seoul Florea, South Korea</p>
              </div>
            </div>
            <div className="col-6">
              <div className="card main-banner-feature "  style={{border: 0, marginLeft: 15}}>
                <img src={ImageHero3} alt="main-banner" className='image' style={{width: 410}}/>
                <Link to="/" className='main-content position-absolute' style={{right: 0}}>$ 87.0  <span>per night</span></Link>
                <h1 className='tag-place position-absolute' style={{fontSize: 16, marginTop: 160, marginLeft: 20}}>Java House</h1>
                <p className="tag-country position-absolute" style={{marginTop: 159, marginLeft: 20}}>Nusa Penida, Indonesia</p>
              </div>
            </div>
            <div className="col-6">
              <div className="card main-banner-feature "  style={{border: 0, marginTop: 15}}>
                <img src={ImageHero4} alt="main-banner" className='image' style={{width: 410}}/>
                <Link to="/" className='main-content position-absolute' style={{right: 0}}>$ 80.0  <span>per night</span></Link>
                <h1 className='tag-place position-absolute' style={{fontSize: 16, marginTop: 160, marginLeft: 20}}>The People House</h1>
                <p className="tag-country position-absolute" style={{marginTop: 159, marginLeft: 20}}>Santorini, Italia</p>
              </div>
            </div>
            <div className="col-6">
              <div className="card main-banner-feature "  style={{border: 0, marginTop: 15, marginLeft: 15}}>
                <img src={ImageHero5} alt="main-banner" className='image'style={{width: 410}}/>
                <Link to="/" className='main-content position-absolute' style={{right: 0}}>$ 50.0  <span>per night</span></Link>
                <h1 className='tag-place position-absolute' style={{fontSize: 16, marginTop: 160, marginLeft: 20}}>Green Villa</h1>
                <p className="tag-country position-absolute" style={{marginTop: 159, marginLeft: 20}}>Bali, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
