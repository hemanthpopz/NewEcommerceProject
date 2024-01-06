import {Link} from 'react-router-dom'

import ModelPhoto from '../Images/ModelPhoto.png'

import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">
          Each Purchase Will Be Made With Pleasure
        </h1>
        <div className="photo-container sm-photo-container">
          <img
            className="model-photo sm-modal-photo"
            src="https://s3-alpha-sig.figma.com/img/cbc2/713b/6fd033f480a575f0a0f175bd3257c3c2?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J43o5FwnQzkk0BMwC5eldXz6hH1teihp~d9QA1oLsNxQoAJJasyB2EDJmW1GRb8bauETgeXwz79PM1WtS8ZfXx~~KlzTmQ0DHiMbWP6VsRlUhpYyrSICOtQWzoF9DRnrRdhq4Ge16Y9XtO6orwxxHfajNZLnPvH15VTSzjf~MR-MXJexVEk-4FHjiEaPJuxcxT5NfpJ~a1NsOHG36FZuFJLBakrDWkwSJdMz0FNTUYTX~rnBg1-dqz9TcfUz61vPZFtsm3sz0DCAzli-LaMgTYhC6dGFV6Z6BTGIPmisDBQ9QDIQS3E6kBNZiZzzmMlZ4yOgmMVh7cUjcLJFafyl~w__"
          />
        </div>

        <p className="home-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      {/* <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      /> */}
      <div className="photo-container lg-photo-container">
        <img className="model-photo" src={ModelPhoto} />
      </div>
    </div>
  </>
)

export default Home
