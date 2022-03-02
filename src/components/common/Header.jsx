const Header = ({ address, connect, disconnect }) => {
  return <header className="header-area">
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/"><img className="light-logo" src="/img/core-img/logo.png" alt="" /><img className="dark-logo" src="/img/core-img/logo-white.png" alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#funtoNav" aria-controls="funtoNav" aria-expanded="false" aria-label="Toggle navigation"><i className="bi bi-grid"></i></button>
        <div className="collapse navbar-collapse" id="funtoNav">
          <ul className="navbar-nav navbar-nav-scroll my-2 my-lg-0">
            <li ><a href="/">Home</a>
            </li>
            <li className="ft-dd"><a href="#">Explore</a>
              <ul className="ft-dd-menu">
                <li><a href="/explore">Explore</a></li>
                <li><a href="/liveautions">Live Auctions</a></li>
                <li><a href="/collection">Collections</a></li>
              </ul>
            </li>
            <li><a href="/profile">Profile</a>
            </li>
            <li><a style={{ cursor: "pointer" }} onClick={connect}>{address != '' && address != 'undefined' ? address.substr(0, 6) + '...' + address.substr(address.length - 4, 4) : 'Connect Wallet'}</a>
            </li>
          </ul>

          <div className="header-meta d-flex align-items-center ms-lg-auto">

            <div className="search-form position-relative d-flex align-items-center">
              <input className="form-control" type="text" placeholder="Search" />
              <button className="position-absolute" type="submit"><i className="bi bi-search"></i></button>
            </div>

            <a className="btn btn-warning btn-sm rounded-pill" href="create-new.html">Create</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
}

export default Header