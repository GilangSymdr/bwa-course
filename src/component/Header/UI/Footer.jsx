import React from 'react';
import '../../../styles/Footer.css';
import Button from '../../elements/Button/index';

export default function Footer () {

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-auto">
          <div className="logo">
        <a><span>Stay</span>cation</a>
          </div>
          <p className="brand-tagline">
            We kaboom your beauty holiday instantly and memorable
          </p>
          </div>
          <div className="col-2">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type='link' href='/register'>New Account Register</Button>
              </li>
              <li className="list-group-item">
                <Button type='link' href='/properties'>Start Booking Room</Button>
              </li>
              <li className="list-group-item">
                <Button type='link' href='/use-payment'>Use Payment</Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-2">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type='link' href='/career'>Our Careers</Button>
              </li>
              <li className="list-group-item">
                <Button type='link' href='/privacy'>Privacy</Button>
              </li>
              <li className="list-group-item">
                <Button type='link' href='/terms'>term Conditions</Button>
              </li>
            </ul>
          </div>
          <div className="col-4">
          <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type='link' href='mailto:staycation@gamil.com'>supportstaycation.id</Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type='link' href='tel:+62081342536'>0854 - 5643 - 8765</Button>
              </li>
              <li className="list-group-item">
                <span className='addres'>Jombang, Ploso, Jawa Timur</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyrights 2019 . All right reserved . Staycation
          </div>
        </div>
      </div>
      </div>
  )
}