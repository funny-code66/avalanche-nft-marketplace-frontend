const Header = () => <header className="header-area">
  <nav className="navbar navbar-expand-lg">
    <div className="container">
      <a className="navbar-brand" href="index.html"><img className="light-logo" src="/img/core-img/logo.png" alt="" /><img className="dark-logo" src="/img/core-img/logo-white.png" alt="" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#funtoNav" aria-controls="funtoNav" aria-expanded="false" aria-label="Toggle navigation"><i className="bi bi-grid"></i></button>
      <div className="collapse navbar-collapse" id="funtoNav">
        <ul className="navbar-nav navbar-nav-scroll my-2 my-lg-0">
          <li className="ft-dd"><a href="#">Home</a>
            <ul className="ft-dd-menu">
              <li><a href="/">Home Variation 1</a></li>
              <li><a href="home-2.html">Home Variation 2</a></li>
            </ul>
          </li>
          <li className="ft-dd"><a href="#">Explore</a>
            <ul className="ft-dd-menu">
              <li><a href="/explore">Explore 1</a></li>
              <li><a href="explore-2.html">Explore 2</a></li>
              <li><a href="featured-items.html">Featured Drops</a></li>
              <li><a href="/liveautions">Live Auctions</a></li>
              <li><a href="/collection">Collections</a></li>
              <li><a href="top-seller.html">Top Seller</a></li>
              <li><a href="top-buyer.html">Top Buyer</a></li>
              <li><a href="/itemdetail">Item Details</a></li>
            </ul>
          </li>
          <li className="ft-dd"><a href="#">Admin</a>
            <ul className="ft-dd-menu">
              <li><a href="dashboard.html">Dashboard</a></li>
              <li><a href="live-bids.html">Live Bids</a></li>
              <li><a href="my-collection.html">My Collection</a></li>
              <li><a href="my-wallet.html">My Wallet</a></li>
              <li><a href="notifications.html">Notifications</a></li>
              <li><a href="settings.html">Settings</a></li>
            </ul>
          </li>
          <li className="ft-dd"><a href="#">Pages</a>
            <ul className="ft-dd-menu">
              <li><a href="activity.html">Activity</a></li>
              <li><a href="ranking.html">Ranking</a></li>
              <li><a href="create-new.html">Create New Items</a></li>
              <li><a href="/connectwallet">Connect Wallet</a></li>
              <li><a href="author.html">Author Profile</a></li>
              <li className="ft-dd"><a href="#">Authentification</a>
                <ul className="ft-dd-menu">
                  <li><a href="register.html">Register</a></li>
                  <li><a href="login.html">Login</a></li>
                  <li><a href="forget-password.html">Forget Password</a></li>
                </ul>
              </li>
              <li className="ft-dd"><a href="#">Blog</a>
                <ul className="ft-dd-menu">
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="blog-details.html">Blog Details</a></li>
                </ul>
              </li>
              <li className="ft-dd"><a href="#">Others</a>
                <ul className="ft-dd-menu">
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a href="coming-soon.html">Coming Soon</a></li>
                  <li><a href="newsletter.html">Newsletter</a></li>
                  <li><a href="privacy.html">Privacy Policy</a></li>
                  <li><a href="terms.html">Terms</a></li>
                  <li><a href="404.html">404</a></li>
                </ul>
              </li>
              <li className="ft-dd"><a href="#">Help Center</a>
                <ul className="ft-dd-menu">
                  <li><a href="help-center.html">Help Home</a></li>
                  <li><a href="help-questions.html">All Questions</a></li>
                  <li><a href="question-details.html">Question Details</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="help-center.html">Help Center</a></li>
        </ul>

        <div className="header-meta d-flex align-items-center ms-lg-auto">

          <div className="search-form position-relative d-flex align-items-center">
            <input className="form-control" type="text" placeholder="Search" />
            <button className="position-absolute" type="submit"><i className="bi bi-search"></i></button>
          </div>

          <div className="user-dropdown dropdown mx-3">
            <button className="btn dropdown-toggle user-btn" id="dropdownMenuButton1" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots"></i></button>
            <ul className="dropdown-menu mt-3" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="dashboard.html"><i className="me-2 bi bi-speedometer2"></i>Dashboard</a></li>
              <li><a className="dropdown-item" href="my-collection.html"><i className="me-2 bi bi-collection"></i>Collections</a></li>
              <li><a className="dropdown-item" href="notifications.html"><i className="me-2 bi bi-bell"></i>Notifications</a></li>
              <li><a className="dropdown-item" href="settings.html"><i className="me-2 bi bi-gear"></i>Settings</a></li>
            </ul>
          </div>
          <a className="btn btn-warning btn-sm rounded-pill" href="create-new.html">Create</a>
        </div>
      </div>
    </div>
  </nav>
</header>

export default Header