// import { React, useState } from "react"

export default function () {
  // const [showModal, setShowModal] = useState(false)
  // const openMenu = () => setShowModal(true)
  // const closeMenu = () => setShowModal(false)

  return (
    <div
      data-animation="over-left"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="side-navigation w-nav"
    >
      <div className="nav-wrap w-container">
        <div className="mobile-header-cover">
          <div className="cyber-corner tm">
            <img
              src="https://uploads-ssl.webflow.com/61f6d21a35352d2f1d282e71/61fc443fb3754e693da12dba_Cyber%20Corner%20TM3.png"
              className="cyber-mobile-corner"
            />
          </div>
          <div className="bottom-line"></div>
        </div>
        <div className="brand-wrap">
          <div className="brand w-nav-brand">
            <img
              src="https://uploads-ssl.webflow.com/61f6d21a35352d2f1d282e71/61f6d4481502cfd8afe92c3e_Cyber%20Snail%20Animated%20Logotype%20Crop.gif"
              className="side-logotype"
            />
            <div className="logo-fade"></div>
            <div className="logo-fade mobile-fade"></div>
          </div>
        </div>
        <nav className="side-nav-links w-nav-menu">
          <div className="menu-lable">Menu</div>
          <div className="cyber-corner tr-mobile">
            <img
              src="https://uploads-ssl.webflow.com/61f6d21a35352d2f1d282e71/61fc09f6309b3e746a4855dd_Cyber%20Corner%20Top%20Right.png"
              className="cyber-corner-tr1"
            />
          </div>
          <div className="nav-link w-nav-link max-width">Connect</div>
          <div className="separator"></div>
          <div className="nav-link w-nav-link max-width">Cyber Snail</div>
          <div className="nav-link w-nav-link max-width">Cyber Key</div>
          <div className="nav-link w-nav-link max-width">Total $UPLOAD</div>
          <div className="nav-link w-nav-link max-width">Upload</div>

          <div target="_blank" className="nav-link w-nav-link max-width">
            Claim
          </div>
          <div className="social-nav left-social">
            <div className="social-icon-wrapper">
              <div className="social-icon w-inline-block">
                <div className="svg-icon w-embed">
                  <svg
                    viewBox="0 0 19 16"
                    width="60"
                    fill="CurrentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.5057 0.276596C18.5057 0.276596 16.924 1.08511 16.0343 1.2766C15.3424 0.468085 14.3143 0 13.1873 0C10.6764 0 8.89698 2.40426 9.39126 5.02128C6.16857 4.82979 3.24246 3.21277 1.34443 0.808511C1.00833 1.42553 0.850158 2.10638 0.830387 2.80851C0.830387 4.21277 1.52237 5.48936 2.55047 6.14894C1.9178 6.14894 1.30489 5.95745 0.771074 5.61702C0.751302 7.57447 2.09573 9.29788 3.87513 9.6383C3.30177 9.76596 2.6691 9.85107 2.09573 9.70213C2.37253 10.5319 2.86681 11.234 3.51925 11.7447C4.1717 12.2553 4.96254 12.5106 5.77316 12.5106C4.21124 13.766 1.95734 14.5958 0 14.1915C3.79605 16.7234 8.99584 16.617 12.6337 13.7447C15.5598 11.4468 17.0427 7.78724 17.0427 3.95745C17.794 3.38298 18.4464 2.68085 19 1.89362C18.308 2.23404 17.5369 2.42553 16.7856 2.55319C17.5567 2 18.1894 1.2766 18.5057 0.276596Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="cyber-corner bl-mobile">
            <img
              src="https://uploads-ssl.webflow.com/61f6d21a35352d2f1d282e71/61fc09f6bce6dcdda3b7b657_Cyber%20Corner%20BL1%401000x.png"
              className="cyber-corner-bl1"
            />
          </div>
        </nav>
        <div className="menu-button-2 w-nav-button webkit-user-select">
          <div className="mobile-menu-lable">Menu</div>
          <div className="mobile-menu-lable close-menu">Close</div>
        </div>
      </div>
      <div className="w-nav-overlay display-none"></div>
    </div>
  )
}
