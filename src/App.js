import {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
    mainView: 'CartView',
  }

  addCartItem = product => {
    const {cartList} = this.state
    const toCheckDuplicate = cartList.map(eachItem => {
      if (eachItem.id === product.id) {
        return true
      }
      return false
    })

    const toCheckMain = toCheckDuplicate[toCheckDuplicate.length - 1]

    if (toCheckMain === false || toCheckMain === undefined) {
      this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
    }
  }

  onChangeMainView = value => {
    if (value === 'CartView') {
      this.setState({
        mainView: value,
        cartList: [],
      })
    }
    this.setState({
      mainView: value,
    })
  }

  onClickIncrementBtn = Id => {
    this.setState(Previous => ({
      cartList: Previous.cartList.map(eachItem => {
        if (eachItem.id === Id) {
          return {...eachItem, quantity: eachItem.quantity + 1}
        }
        return eachItem
      }),
    }))
  }

  onClickDecrementBtn = Id => {
    this.setState(Previous => ({
      cartList: Previous.cartList.map(eachItem => {
        if (eachItem.id === Id && eachItem.quantity > 1) {
          return {...eachItem, quantity: eachItem.quantity - 1}
        }
        return eachItem
      }),
    }))
  }

  deleteCartItem = ID => {
    const {cartList} = this.state
    const toDeleteItem = cartList.filter(eachItem => eachItem.id !== ID)

    this.setState({
      cartList: toDeleteItem,
    })
  }

  render() {
    const {cartList, mainView} = this.state

    return (
      <BrowserRouter>
        <CartContext.Provider
          value={{
            cartList,
            mainView,
            addCartItem: this.addCartItem,
            deleteCartItem: this.deleteCartItem,
            onClickIncrementBtn: this.onClickIncrementBtn,
            onClickDecrementBtn: this.onClickDecrementBtn,
            onChangeMainView: this.onChangeMainView,
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={ProductItemDetails} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </CartContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
