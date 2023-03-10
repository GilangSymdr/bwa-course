import React from 'react';
import Star from '../../elements/Star'
import Button from 'component/elements/Button';
import '../../../styles/Testimonial.css'

export default function Testymony({data}) {

  return (
    <section className='container'>
      <div className="row align-items-center">
        <div className="col-4" style={{ marginRight: 100}}>
          <div className="testimonial-hero" style={{marginTop: 70}}>
            <img src={data.imageUrl} alt="Tesimonial" className="position-relative testimonial-img" style={{width: 453.61, height: 498.4}} />         
          </div>
        </div>
        <div className="col-6">
         <div className="testimonial-desk">
         <h4 style={{marginBottom: 10, fontWeight: 600}}>
            {data.name}
          </h4>  
          <Star value={data.rate} width={35} height={35} spacing={4}></Star>
          <h5 className="h2 font-weight-600 line-height-2 " style={{color: `#2B3467`}}>
            {data.content}
          </h5>
          <span style={{color: `#9599B3`}}>
            {data.familyName}, {data.familyOccupation}
          </span>

          <div>
            <Button className="btn px-5" style={{marginTop: 60}} hasShadow isPrimary type='link' href={`/testimonial/${data._id}`}>
              Read Their Story
            </Button>
          </div>
         </div>
        </div>
      </div>
    
    </section>
  )
}