const Footer = () => {
  return (
    <footer className="footer-area pb-120 pt-120"><img className="footer-bg-shape" src="/img/core-img/shape1.png" alt="" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" />
      <div className="container">
        <div className="row">

          <div className="col-12 col-lg-5">
            <div className="footer-widget-area mb-70 pe-lg-4 pe-xl-5 me-lg-4 me-xl-5 border-end"><a className="d-block mb-4" href="index.html"><img className="light-logo" src="/img/core-img/logo.png" alt="" /><img className="dark-logo" src="/img/core-img/logo-white.png" alt="" /></a>
              <p>It's crafted with the latest trend of design &amp; coded with all modern approaches.</p>
              <p className="mb-0">Call: +123 456 789 <br /> Email: help@example.com</p>

              <h5 className="mt-4 mb-3">Join the community</h5>
              <div className="footer-social-icon d-flex align-items-center flex-wrap"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Facbook"><img src="/img/core-img/icons8-facebook.svg" alt="" /></a><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"><img src="/img/core-img/icons8-twitter.svg" alt="" /></a><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"><img src="/img/core-img/icons8-instagram.svg" alt="" /></a><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Slack"><img src="/img/core-img/icons8-slack.svg" alt="" /></a><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Youtube"><img src="/img/core-img/icons8-player.svg" alt="" /></a></div>

              <div className="newsletter-form mt-5 me-5">
                <form className="d-flex align-items-stretch" action="#">
                  <input className="form-control" type="email" placeholder="Enter email" />
                  <button className="btn btn-warning px-3" type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="row g-4">
              <div className="col-6 col-sm-4">
                <div className="footer-widget-area mb-70">
                  <h5 className="mb-4">Explore</h5>
                  <ul className="list-unstyled mb-0">
                    <li><a href="featured-items.html">Featured Drops</a></li>
                    <li><a href="live-bidding.html">Live Auctions</a></li>
                    <li><a href="collections.html">Collections</a></li>
                    <li><a href="top-seller.html">Top Seller</a></li>
                    <li><a href="top-buyer.html">Top Buyer</a></li>
                    <li><a href="item-details.html">Item Details</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-sm-4">
                <div className="footer-widget-area mb-70">
                  <h5 className="mb-4">Marketplace</h5>
                  <ul className="list-unstyled mb-0">
                    <li><a href="#">Art</a></li>
                    <li><a href="#">Cards</a></li>
                    <li><a href="#">Collectibles</a></li>
                    <li><a href="#">Domain</a></li>
                    <li><a href="#">Photos</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Videos</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-sm-4">
                <div className="footer-widget-area mb-70">
                  <h5 className="mb-4">Company</h5>
                  <ul className="list-unstyled mb-0">
                    <li><a href="#">Forum</a></li>
                    <li><a href="#">Licences</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Conditions</a></li>
                    <li><a href="#">Privacy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copywrite-wrapper d-lg-flex align-items-lg-center justify-content-lg-between">

          <div className="copywrite-text text-center text-lg-start mb-3 mb-lg-0">
            <p className="mb-0">2022 &copy; All rights reserved by <a href="https://themeforest.net/user/designing-world/portfolio" target="_blank" rel="noreferrer">Designing World</a></p>
          </div>

          <div className="footer-nav">
            <ul className="mb-0 d-flex flex-wrap justify-content-center list-unstyled">
              <li><a href="privacy.html">Privacy Policy</a></li>
              <li><a href="terms.html">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer