import { createContext,useState } from 'react';

const CartContext = createContext();

export function CartProvider({children}) {
    const [cart,setCart] = useState([])
    const [cartQty,setQty] = useState(0)
    const addToCart = (productObject) => {

        // is our product already in the cart?
        const exist = cart.find((product)=>product._id === productObject._id)
        // if true, add 1 to quantity key value pair for every time it exist/added
        if(exist) {
            setCart(cart.map((product)=>
            //find the matching added product from the cart and increment the qty
                product._id === productObject._id? {...exist,qty: exist.qty + 1}:product


                /* 
                go into the product object and increment qty
                    product : {
                        name : name,
                        etc : etc,
                        qty: qty + 1 (added 1)
                    }
                */
            ))
            console.log(cart)
            // setQty(cartQty+1

        }
        // else, add to cart and iniate item quantity key value pair
        else {
            setCart([...cart,{...productObject,qty: 1}])
            /* 
                go into the product object
                    product : {
                        name : name,
                        etc : etc,
                        qty: 1 (newly created)
                    }
                */
            console.log(cart)
            
        }
        setQty(cartQty+1)
    }
    const removeFromCart = (productObject) => {
        const exist = cart.find((product)=>product._id === productObject._id)
        // if qty equals 0 stop decrementing
        if(exist.qty === 1) {
            setCart(cart.filter((product)=>
            //find the matching added product from the cart and increment the qty
                product._id !== productObject._id
                /* 
                go into the product object
                    product : {
                        name : name,
                        etc : etc,
                        qty: qty + 1 (added 1)
                    }
                */
            ))
        console.log(cart)
        } else {
            // map into cart and find matching object
            setCart(cart.map((product)=>
                product._id === productObject._id? 
                {...product,qty: product.qty-1}:product
                ))
            console.log(cart)
        }
        setQty(cartQty-1)
    }

    // const qty = () => {
    //     // loop through products in cart
    //     // each product.qty at index is added to total qty
    //     let sum = 0;
    //     for(let i = 0; i<cart.length; i++) {
    //         // if(cart[i]){
    //         //     console.log("product",[i],cart[i])
    //         //     console.log("previously",qty)
    //         //     console.log("added",product.qty)
    //         // }
    //         let product = cart[i]
    //         console.log(sum,product.qty)
    //         sum += product.qty;
    //         setQty(sum)
    //     }
    //     console.log("qty",sum)
    //     // return sum
    // }

    return (
        <CartContext.Provider value={{item:1,cart,addToCart,removeFromCart,cartQty}}>{children}</CartContext.Provider>
    )
}

export default CartContext;
