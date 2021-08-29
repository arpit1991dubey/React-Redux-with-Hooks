import React from 'react';
import {Link } from "react-router-dom";
import { useSelector } from 'react-redux'
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div  key={id}>
               <Link to={`/product/${id}`}>
            <div class="ui card">
           
            <div class="image">
              <img  src={image}/>
            </div>
            <div class="content">
           
        <a class="header">{title}</a>
              <div class="meta">
                <span class="date">{category}</span>
              </div>
              <div class="description">
                ${price}
              </div>
            </div>
            <div class="extra content">
             
            </div>
          </div>
          </Link>
          </div>
        )
    })



    return (
        <>{renderList}</>
    )
}
export default ProductComponent;
