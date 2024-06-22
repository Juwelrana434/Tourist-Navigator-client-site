
import useCart from "../../hooks/useCart";




const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
   

    

    return (
        <div>
            
              
                <h2 className="text-4xl">Total Price: {totalPrice}</h2>
                <h2 className="text-4xl">Total Price: {cart.length}</h2>
               
                    
        
              

            
            
        </div>
    );
};

export default Cart;