import React from 'react';
import '../../../styles/Header.css';





const Header = () => {

  const nav_links = [
  {
    id: '1',
    display: 'Home'
  },
  {
    id: '2',
    display: 'Browse'
  },
  {
    id: '3',
    display: 'Stories'
  },
  {
    id: '4',
    display: 'Agents'
  }
  ]
  return <header className='header'>
  <div className='container'>
    <div className="nav-wrapper">
      <div className="logo">
        <a><span>Stay</span>cation</a>
      </div>
      <div className="navbar">
        <ul className="menu">
          {
          nav_links.map((item) => (
            <li className="nav_item" key={item.id}>
              <a href={item.path} >
                {item.display}
              </a>
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  </div>
  </header>
}

export default Header;