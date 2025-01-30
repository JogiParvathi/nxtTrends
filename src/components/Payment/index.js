import {useContext, useState} from 'react'

import CartContext from '../../context/CartContext'

import './index.css'

const PaymentOptionsList = [
  {
    id: 'CARD',
    displayText: 'Card',
    isDisabled: true,
  },
  {
    id: 'NET BANKING',
    displayText: 'Net Banking',
    isDisabled: true,
  },
  {
    id: 'UPI',
    displayText: 'UPI',
    isDisabled: true,
  },
  {
    id: 'WALLET',
    displayText: 'Wallet',
    isDisabled: true,
  },
  {
    id: 'CASH ON DELIVERY ',
    displayText: 'Cash on Delivery',
    isDisabled: true,
  },
]
const Payment = () => {
  const {cartList} = useContext(CartContext)

  const [paymentMethod, setPaymentMethod] = useState('')
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const updatedPaymentMethod = event => {
    const {id} = event.target
    setPaymentMethod(id)
  }

  const onPlaceOrder = () => setIsOrderPlaced(true)

  const getTotalPrice = () =>
    cartList.reduce((acc, item) => acc + item.quantity * item.price, 0)

  const renderPaymentMethodsInput = () => (
    <ul className="payment-method-input">
      {PaymentOptionsList.map(eachMethod => (
        <li key={eachMethod.id} className="payment-method-input-container">
          <input
            className="payment-method-input"
            id={eachMethod.id}
            type="radio"
            name="paymentMethod"
            disabled={eachMethod.isDisabled}
            onChange={updatedPaymentMethod}
          />
          <label
            className={`payment-method-label ${
              eachMethod.isDisabled ? 'disabled-label' : ''
            }`}
            htmlFor={eachMethod.id}
          >
            {eachMethod.displayText}
          </label>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="payments-container">
      {isOrderPlaced ? (
        <p className="success-message">
          Your order has been placed successfully
        </p>
      ) : (
        <>
          <h1 className="payments-heading">Payments Details</h1>
          <p className="payments-sub-heading">Payment Method</p>
          {renderPaymentMethodsInput()}
          <div className="order-details">
            <p className="payments-sub-heading">Order details</p>
            <p>Quantity: {cartList.length}</p>
            <p>Total Price: RS {getTotalPrice()}/-</p>
          </div>
          <button
            disabled={paymentMethod === ''}
            type="button"
            className="confirm-order-button"
            onClick={onPlaceOrder}
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  )
}

export default Payment
