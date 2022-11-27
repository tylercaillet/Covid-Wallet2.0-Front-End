import React from 'react'

const Home = () => {
  return (
    <header>
      <div className="homePage">
        <h1>
          {' '}
          Have you had a chance to travel or experience some sort of normality
          since Covid hit? It can be frustating to have to provide proof that
          you're "well enough" to do any of those things. Well with the
          Covid-Wallet you can neatly and safely store any and all pertinent
          information that you may need. You can store your vaccination card,
          your booster information, when you last recived a Covid-19 test, and
          lastly when was the last time you were diagnosed postive with Covid.
        </h1>
        <p>
          {' '}
          <img
            src="https://www.uchealth.com/content/dam/uchealth/images/media-room/covid-19/new-covid-19-strain.jpg/jcr:content/renditions/cq5dam.web.767.431.jpg"
            alt="website logo"
            className="logo"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0623/8034/3544/products/AirTagSlideWallet-CarbonFiber_720x.jpg?v=1642725309"
            alt="website logo"
            className="wallet-logo"
          />
        </p>
      </div>
    </header>
  )
}

export default Home