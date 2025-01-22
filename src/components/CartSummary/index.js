// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      return (
        <>
          <div className="car-summary-container">
            <h1 className="heading">
              <span className="order-total">Order Total:</span>Rs {total} /-
            </h1>
            <p className="para">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-button d-sm-none">
              Checkout
            </button>

            <button type="button" className="checkout-button d-lg-none">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
