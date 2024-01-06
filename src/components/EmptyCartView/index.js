import {Link} from 'react-router-dom'

import EmptyCart from '../Images/empty-cart.svg'
import './index.css'

const EmptyCartView = () => (
  <div className="cart-empty-view-container">
    <img src={EmptyCart} className="cart-empty-image" alt="cart empty" />
    <h1 className="cart-empty-heading">Your Cart Is Empty</h1>

    <Link to="/products">
      <button type="button" className="shop-now-btn">
        Shop Now
      </button>
    </Link>
  </div>
)

export default EmptyCartView
