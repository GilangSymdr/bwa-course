
import React from 'react';
import Button from '../../elements/Button';
import '../../../styles/Categories.css';

const Categories = ({data}) => {
  console.log(data);
  return data.map((category, index1) => {
   return (
     <section className="container" style={{marginBottom: 40}} key={`category-${index1}`}>
      <h4 className=" font-weight-medium">
        {category.name}
      </h4>
      <div className="container-grid">
        {
          category.items.length === 0 ? <div className="row">
            <div className="col-auto align-items-center">
              There is no property at this category
            </div>
          </div> : category.items.map((item, index2) => {
            return <div className="item column-3 row-1" key={`category-${index1}-item-${index2}`}>
              <div className="card card-img" style={{width: 283, border: 0}}>
                {item.isPopular && (
                  <div className="tag">
                    Popular {" "}Choice
                  </div>
                )}
                <figure className="img-wrapper" style={{height: 138}}>
                  <img src={item.imageUrl} alt='img-wrapper' className="img-cover" style={{height: 138, width: 283}} />
                </figure>
                <div className="mata-wrapper">
                  <Button type='link' href={`/properties/${item._id}`} className="stretched-link d-block text-gray-800">
                   
                  </Button>
                  <h1 className='tag-village'>{item.name}</h1>
                  <span className="tag-location">{item.city}, {item.country}</span>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </section>
   )
  })
}

export default Categories;