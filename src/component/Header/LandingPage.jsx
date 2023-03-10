import React, {Component} from 'react';
import Header from './UI/Header';
import landingPage from '../../json/landingPage.json';
import Hero from '../Header/UI/Hero';
import Categories from '../Header/UI/Categories';
import Testymony from './UI/Testymony';
import Footer from './UI/Footer';



import MostPicked from './UI/MostPicked';

export default class LandingPage extends Component {
  constructor(props) {
    super(props); 
    this.refMostPicked = React.createRef();
  }
  render() {

    return (
      <>
      <Header {...this.props}></Header>
      <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
      <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked}/>
      <Categories refMostPicked={this.refMostPicked} data={landingPage.categories} />
      <Testymony data={landingPage.testimonial}/>
      <Footer />
      </>
    )
  
  
}
}
