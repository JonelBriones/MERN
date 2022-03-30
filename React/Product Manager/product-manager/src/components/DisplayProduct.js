import React, {useState} from 'react';
import '../App.css';
const DisplayProduct = (props) => {
    const {product, setProduct,toggleProduct,setToggleProduct} = props;
    // on click, initiate toggle function, show description if toggle is true
    const showProduct = (index) => {
        const showProductInfo = product.map((oneProduct) => { // after mapping through list, find tab that matches id
        // if the tab matches id, set show to true will display tab.description
        console.log(`${oneProduct} matches the ${index}`)
        if (index === oneProduct.index) {
            oneProduct.show = !oneProduct.show; // 
            console.log(oneProduct.show)
          }
          return oneProduct;
        })
        setProduct(showProductInfo);
        console.log(showProductInfo)
      }
    return product.map((oneProduct) => {
        return (
            <div key={oneProduct.index}> 
                <hr/>
                {/* checked function will set the object to have a false value, on click will change to the opposite  */}
                <button checked={oneProduct.show} onClick={(e) => showProduct(oneProduct.index)}>{oneProduct.title}</button>
                {
                    oneProduct.show?
                    <div>
                    <p>{oneProduct.price}</p>
                    <p>{oneProduct.description}</p>
                    <p>{oneProduct.index}</p>
                    </div> // if tab.show == false, return tab's description
                    :null // if tab.show == false, return null
                }
            </div>
            
        )
       
    }); 
}
export default DisplayProduct;