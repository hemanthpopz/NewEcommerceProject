import {Component} from 'react'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from 'react-icons/fa'
import Header from '../Header'
import ModelImage from '../Images/ModelImage.png'
import './index.css'
import secondImage from '../Images/secondImage.png'
import matrix from '../Images/matrix.svg'
import Logo from '../Images/LogoImage.svg'

import Arrow from '../Images/Arrow.svg'

class Home extends Component {
  render() {
    return (
      <div className=" home-container">
        <Header />
        <div className="content-container">
          <div className="container1">
            <div className="text-container">
              <h1 className="container1-heading">
                Pinnacle of Crypto Communities
              </h1>
              <p className="container1-p">
                Embark on a Financial Revolution with Ultrapro Blockchain.
                Unleash the power of financial innovation and step into a
                decentralized realm of boundless possibilities. Join the ranks
                of millions worldwide who rely on Ultrapro Blockchain for its
                unparalleled technology, expansive global footprint, and
                unwavering commitment to pushing the boundaries of innovation.
              </p>

              <div className="home-button-container">
                <button className="contact-btn">Contact Us</button>
                <button className="learn-btn">Learn More</button>
              </div>
            </div>
            <div className="image-container">
              <img className="model-image" src={ModelImage} />
            </div>
          </div>

          <div className="details-container">
            <div className="main-details-container">
              <div className="box1">
                <h1>36+</h1>
                <p>Countries</p>
              </div>
              <div className="box2">
                <h1>20000+</h1>
                <p>Transactions / Sec</p>
              </div>
              <div className="box3">
                <h1>1M+</h1>
                <p>Trade per Day</p>
              </div>
            </div>
          </div>

          <div className="container2">
            <div className="container2-image-container">
              <img className="second-image" src={secondImage} />
            </div>
            <div className="container2-text-container">
              <h1 className="container2-heading">
                Your Gateway to Unrestricted Financial Freedom
              </h1>
              <p className="container2-p">
                At Ultrapro, our belief is simple yet profound: everyone
                deserves the freedom to earn, hold, spend, share, and give their
                money—regardless of their background or origin. We're not just a
                cryptocurrency platform; we're the epitome of trust, providing
                you with a seamless journey towards unrestricted financial
                empowerment.
              </p>
            </div>
          </div>

          <div className="cubes-container">
            <div className="cube1">
              <div className="matrix-image-container">
                <img src={matrix} />
              </div>
              <div className="matrix-text-container">
                <h1>Vision</h1>
                <p>
                  Powering a Prosperous Global Economy. Ultrapro envisions
                  becoming the global currency, fueling a thriving global
                  economy.
                </p>
              </div>
            </div>

            <div className="cube1">
              <div className="matrix-image-container">
                <img src={matrix} />
              </div>
              <div className="matrix-text-container">
                <h1>Mission</h1>
                <p>
                  Driving Global Utility through Digital Innovation. Ultrapro is
                  on a mission to be the global digital currency, fostering
                  utility across the globe.
                </p>
              </div>
            </div>

            <div className="cube1">
              <div className="matrix-image-container">
                <img src={matrix} />
              </div>
              <div className="matrix-text-container">
                <h1>Values</h1>
                <p>
                  Sustainability. Involvement. Transparency. Our core values
                  define us—committed to sustainability, active involvement, and
                  unwavering transparency.
                </p>
              </div>
            </div>

            <div className="cube1">
              <div className="matrix-image-container">
                <img src={matrix} />
              </div>
              <div className="matrix-text-container">
                <h1>Security</h1>
                <p>
                  Fortified Protection for Your Peace of Mind. Ultrapro ensures
                  unrivaled security with cutting-edge data encryption, secure
                  access management, and state-of-the-art storage.
                </p>
              </div>
            </div>
          </div>

          <h1 className="sol-heading">Solutions</h1>
          <div className="solutions-container">
            <ul className="solutions-ul">
              <li className="each-solution">
                <div className="upper-text-container">
                  <h1>DEFI</h1>
                  <p>1</p>
                </div>
                <p className="upper-des">
                  Eenaswap.finance:Revolutionizing DeFi
                </p>
                <p className="upper-des">
                  Unlock the future of decentralized finance with Eenaswap.
                  Discover innovative solutions for seamless, secure, and
                  rewarding decentralized financial experiences.
                </p>
                <div className="explore-container">
                  <p className="explore">EXPLORE MORE</p>
                  <img src={Arrow} />
                </div>
              </li>
              <li className="each-solution">
                <div className="upper-text-container">
                  <h1>P2P</h1>
                  <p>2</p>
                </div>
                <p className="upper-des">Your Crypto Marketplace</p>
                <p className="upper-des">
                  Buy and sell a variety of cryptos securely, faster, and
                  simpler at EenaP2P.trade. Experience uninterrupted
                  transactions like never before.Feel free to use this as a base
                  and tailor it further to fit the specific tone and style of
                  www.eenaP2P.trade.
                </p>
                <div className="explore-container">
                  <p className="explore">EXPLORE MORE</p>
                  <img src={Arrow} />
                </div>
              </li>

              <li className="each-solution">
                <div className="upper-text-container">
                  <h1>CANOPUS GTX WALLET</h1>
                  <p>3</p>
                </div>
                <p className="upper-des">Securely Store Your Digital Assets</p>
                <p className="upper-des">
                  Canopus GTX Wallet is your unique solution for safeguarding
                  digital assets like bitcoins. Unlike traditional wallets, it
                  stores only the private keys to your cryptocurrency. Visit
                  www.canopusgtx.com for a secure crypto storage experience.
                </p>
                <div className="explore-container">
                  <p className="explore">EXPLORE MORE</p>
                  <img src={Arrow} />
                </div>
              </li>

              <li className="each-solution">
                <div className="upper-text-container">
                  <h1>ULTRAPRO BRIDGE</h1>
                  <p>4</p>
                </div>
                <p className="upper-des">Securely Store Your Digital Assets</p>
                <p className="upper-des">
                  A cross-chain bridge, is like a highway connecting different
                  blockchain islands. It allows you to transfer your digital
                  assets (cryptocurrency, tokens, etc.) from one blockchain to
                  another.
                </p>
                <div className="explore-container">
                  <p className="explore">EXPLORE MORE</p>
                  <img src={Arrow} />
                </div>
              </li>

              <li className="each-solution">
                <div className="upper-text-container">
                  <h1>EXCHANGE</h1>
                  <p>5</p>
                </div>
                <p className="upper-des">Ultrapro DEX Launching Soon</p>
                <p className="upper-des">
                  Exciting news! Ultrapro Blockchain is gearing up to unveil a
                  cutting-edge Decentralized Exchange (DEX). Stay tuned for a
                  revolutionary leap into decentralized trading.
                </p>
                <div className="explore-container">
                  <p className="explore">EXPLORE MORE</p>
                  <img src={Arrow} />
                </div>
              </li>

              <li className="each-solution">
                <div className="upper-text-container">
                  <h1>NFT MARKETPLACE</h1>
                  <p>6</p>
                </div>
                <p className="upper-des">
                  UPRO NFT: Explore Limitless Creativity
                </p>
                <p className="upper-des">
                  Dive into the world of UPRO NFT at upronft.com. Discover
                  unique digital assets, express your creativity, and be part of
                  a vibrant NFT community. Your journey into the NFT realm
                  starts here.
                </p>
                <div className="explore-container">
                  <p className="explore">EXPLORE MORE</p>
                  <img src={Arrow} />
                </div>
              </li>
            </ul>
          </div>
          <h1 className="ecosystem">Ecosystem</h1>

          <ul className="ecosystem-ul">
            <li>
              <h1>Probinar</h1>
              <p>
                Proud pioneers in blockchain education, Probinar delivers
                cutting-edge courses that transform individuals into experts in
                blockchain, cryptocurrencies, and decentralized applications.
              </p>
            </li>

            <li>
              <h1>Stake UPRO</h1>
              <p>
                Stake UPRO is your key to establishing a solid financial
                foundation. Whether you're a staking novice or a seasoned pro,
                we have custom plans just for you.
              </p>
            </li>

            <li>
              <h1>UPRO Bazaar</h1>
              <p>
                Your Key to a Shopping Wonderland: Uprobazzar.com is not just a
                platform; it's your passport to a world of shopping delights.
                Experience the ease of shopping with UPRO today!
              </p>
            </li>
          </ul>

          <div className="main-payment-container">
            <div className="payment-container">
              <div className="payment-text-container">
                <h1 className="payment-heading">Payment Gateway</h1>
                <p className="payment-des">
                  Accept UPRO for your products, redefining convenience.
                  Merchant Payment API launching soon for secure and
                  lightning-fast transactions!
                </p>
              </div>
              <div className="payment-image-container">
                <img className="payment-image" src={Logo} />
                <h1 className="logo-heading">UPRO</h1>
              </div>
            </div>
          </div>

          <div className="footer-container">
            <div className="footer">
              <div className="first-footer-container">
                <div className="logo-container">
                  <img className="footer-logo" src={Logo} />
                  <h1 className="logo-heading footer-logo-heading">UPRO</h1>
                </div>
                <p className="footer-one-p">
                  The Ultrapro is all about community.It's made up of people
                  from all different backgrounds and interests.
                </p>

                <ul className="icons-container">
                  <li>
                    <FaFacebookSquare />
                  </li>
                  <li>
                    <FaTwitterSquare />
                  </li>
                  <li>
                    <FaInstagramSquare />
                  </li>
                </ul>
              </div>

              <ul className="second-footer-container">
                <li id="first-li">Navigation</li>
                <li>About Us</li>
                <li>What We DO</li>
                <li>News</li>
                <li>Projects</li>
                <li>FAQ</li>
                <li>Offices</li>
              </ul>

              <ul className="second-footer-container">
                <li id="first-li">Resources</li>
                <li>About Us</li>
                <li>What We DO</li>
                <li>News</li>
                <li>Projects</li>
                <li>FAQ</li>
                <li>Offices</li>
              </ul>

              <ul className="second-footer-container">
                <li id="first-li">Contact Info</li>
                <li>IFZA Dubai Silicon Oasis, Dubai, United Arab Emirates</li>
                <li>Telephone : + (012) 345 6789</li>
                <li>Fax : + (012) 345 6789</li>
                <li>Email : XYZ@upro.com</li>
              </ul>
            </div>
          </div>

          <p className="last-text">
            Copyright ©2023 Ultrapro. All right reserved
          </p>
        </div>
      </div>
    )
  }
}

export default Home
