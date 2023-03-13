import React from 'react';
import '../../../styles/Hero.css';
import Map from '../../Assets/icons/Map.svg';
import Profile from '../../Assets/icons/Profile.svg';
import Website from '../../Assets/icons/Website.svg';
import ImageHero from '../../Assets/image/sidney.png';
import { Fade } from "react-awesome-reveal";



const Hero = (props) => {

  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth"
    })
  }

  function numberFormat(number) {
    const formatNumbering = new Intl.NumberFormat("id-ID");
    return formatNumbering.format(number);
  }

  return ( <Fade bottom>
     <section>
    <div className='container'>
      <div className='hero_wrapper'>

        {/* hero content */}
        <div className='hero_content'>
          <h1>Forget the busy work <br/> start you next holiday</h1>
          <p>we provids what you needs to enjoy <br/> your holiday with family time to make memorable moments</p>

          {/* hero_button */}
          <div className='hero_button'>
            <button className='register_button btn_primary' onClick={showMostPicked}>Show Me Now</button>

            <div className="row" style={{width: 700, marginTop: 80}}>
              <div className="col-3">
                <img src={Profile} alt={`${props.data.profile} Profile`} />
                <h6 className='mt-3 '>
                  {numberFormat(props.data.profile)}{" "}
                  <span className=' about' style={{marginLeft: 2}}>travellers</span>
                </h6>
              </div>
              <div className="col-3">
                <img src={Website} alt={`${props.data.website} Website`} />
                <h6 className='mt-3'>
                  {numberFormat(props.data.website)}{" "}
                  <span className=' about ' style={{marginLeft: 2}}>cities</span>
                </h6>
              </div>
              <div className="col-4 ">
                <img src={Map} alt={`${props.data.map} Map`} />
                <h6 className='mt-3'>
                  {numberFormat(props.data.map)}{" "}
                  <span className=' about' style={{marginLeft: 2}}>treasures</span>
                </h6>
              </div>
            </div>
            <div className="box_iamge">
              <img className='image_hero' src={ImageHero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </Fade>
  )
}

export default Hero;
