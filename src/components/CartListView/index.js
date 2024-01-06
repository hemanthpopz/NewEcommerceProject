import {Component} from 'react'
import {FaCheckCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'
import './index.css'

class CartListView extends Component {
  state = {
    name: '',
    address1: '',
    address2: '',
    mobile: '',
  }

  toChangeName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  toChangeAdd1 = event => {
    this.setState({
      address1: event.target.value,
    })
  }

  toChangeAdd2 = event => {
    this.setState({
      address2: event.target.value,
    })
  }

  toChangeMobile = event => {
    this.setState({
      mobile: event.target.value,
    })
  }

  toShowCartItem = (cartList, onChangeMainView) => {
    const toGetTotalAmount = cartList.map(Item => Item.price * Item.quantity)

    const totalAmount = toGetTotalAmount.reduce((sum, acc) => sum + acc)

    const onChangeMain = () => {
      onChangeMainView('FormView')
    }

    return (
      <>
        <h1 className="cart-heading">My Cart</h1>
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
        <div className="total-order-container">
          <h1 className="total-order-heading">Total Order:</h1>
          <h1 className="total-amount">{Math.round(totalAmount)}/-</h1>
        </div>
        <div className="place-order-container">
          <button onClick={onChangeMain} className="place-order-btn">
            Place Order
          </button>
        </div>
      </>
    )
  }

  toShowPaymentForm = onChangeMainView => {
    const {name, address1, address2, mobile} = this.state

    const onChangeView = event => {
      console.log(name, address1, address2, mobile)
      if (name !== '' && address1 !== '' && address2 !== '' && mobile !== '') {
        event.preventDefault()
        onChangeMainView('OrderView')
      }
    }

    return (
      <div className="payment-container">
        <h1 className="cart-heading">Payment Details</h1>
        <form className="payment-form">
          <label htmlFor="name">NAME</label>
          <input
            required
            onChange={this.toChangeName}
            placeholder="Enter Your Name"
            id="name"
            type="text"
          />
          <label htmlFor="address1">ADDRESS 1</label>
          <input
            onChange={this.toChangeAdd1}
            required
            placeholder="Enter Your Address 1"
            id="address1"
            type="text"
          />
          <label htmlFor="address2">ADDRESS 2</label>
          <input
            onChange={this.toChangeAdd2}
            required
            placeholder="Enter Your Address 1"
            id="address2"
            type="text"
          />
          <label htmlFor="mobile">MOBILE NUMBER</label>
          <input
            required
            onChange={this.toChangeMobile}
            placeholder="Enter Your Mobile Number"
            id="mobile"
            type="text"
          />
          <button onClick={onChangeView} type="submit" className="confirm-btn">
            Confirm Order
          </button>
        </form>
      </div>
    )
  }

  toShowOrderView = onChangeMainView => {
    const onClickView = () => {
      onChangeMainView('CartView')
    }

    return (
      <div className="confirm-order-container">
        <FaCheckCircle className="tick-image" />
        <h1 className="confirm-order-heading">
          Your Order Placed Successfully.
        </h1>
        <p className="confirm-order-des">Continue To Shop.</p>
        <Link to="/products">
          <button onClick={onClickView} className="final-order-btn">
            Go To Products page
          </button>
        </Link>
      </div>
    )
  }

  toShowTotalView = (mainView, cartList, onChangeMainView) => {
    switch (mainView) {
      case 'CartView':
        return this.toShowCartItem(cartList, onChangeMainView)
      case 'FormView':
        return this.toShowPaymentForm(onChangeMainView)
      case 'OrderView':
        return this.toShowOrderView(onChangeMainView)
      default:
        return null
    }
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList, mainView, onChangeMainView} = value
          console.log(mainView)
          return this.toShowTotalView(mainView, cartList, onChangeMainView)
        }}
      </CartContext.Consumer>
    )
  }
}

export default CartListView
