const auctions = [
  {
    nftImage: '/img/bg-img/9.jpg',
    new: true,
    date: 'March 31, 2022 14:19:54',
    stocks: 3,
    userImage: '/img/bg-img/u4.jpg',
    name: 'Fancy Car',
    nickname: '@fancy_car',
    price: 0.784
  },
  {
    nftImage: '/img/bg-img/10.jpg',
    new: true,
    date: 'April 4, 2023 00:00:00',
    stocks: 11,
    userImage: '/img/bg-img/u1.jpg',
    name: 'Animal Playing with Guiter',
    nickname: '@creative_world',
    price: 0.784
  },
  {
    nftImage: '/img/bg-img/11.jpg',
    done: true,
    date: 'Feb 28, 2022 12:34:00',
    stocks: 0,
    userImage: '/img/bg-img/u2.jpg',
    name: 'Halloween #471',
    nickname: '@fancy_car',
    price: 0.784
  },
  {
    nftImage: '/img/bg-img/12.jpg',
    hot: true,
    date: 'December 31, 2022 14:19:39',
    stocks: 29,
    userImage: '/img/bg-img/u3.jpg',
    name: 'Vigor Dance',
    nickname: '@fancy_nft',
    price: 0.784
  }
]

const LiveAuctions = () => <div className="live-bidding-wrapper bg-gray pt-120 pb-120">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-7">
        <div className="section-heading d-flex align-items-center">
          <div className="spinner-grow text-danger" role="status"><span className="visually-hidden">Loading...</span></div>
          <h2 className="mb-0 ms-2">Live Auctions</h2>
        </div>
      </div>
      <div className="col-5 text-end"><a className="btn rounded-pill btn-outline-primary btn-sm border-2 mb-5" href="live-bidding.html">View All Auctions</a></div>
    </div>
  </div>
  <div className="container">
    <div className="row g-4 justify-content-center">
      {
        auctions.map(auction => <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={auction.name}>
          <div className="nft-card card border-0">
            <div className="card-body">
              <div className="img-wrap"><img src={auction.nftImage} alt="" />
                {
                  !!auction.new && <div className="badge bg-dark position-absolute"><img src="/img/core-img/fire.png" alt="" />New Bid</div>
                }
                {
                  !!auction.done && <div className="badge bg-danger position-absolute"><img src="/img/core-img/fire.png" alt="" />Bid Done</div>
                }
                {
                  !!auction.hot && <div className="badge bg-danger position-absolute"><img src="/img/core-img/fire.png" alt="" />Hot Bid</div>
                }
                <div className="dropdown">
                  <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownfx22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownfx22">
                    <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                    <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                    <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                  </ul>
                </div>
                <div className="bid-ends" data-date={auction.date}>
                  <div><span className="days"></span><span>Days</span></div>
                  <div><span className="hours"></span><span>Hours</span></div>
                  <div><span className="minutes"></span><span>Min</span></div>
                  <div><span className="seconds"></span><span>Sec</span></div>
                </div>
              </div>
              <div className="row gx-2 align-items-center mt-3">
                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1"></i>{auction.stocks > 0 ? `${auction.stocks} stock available` : 'Not available'}</span></div>
                <div className="col-4 text-end">
                  <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                </div>
              </div>
              <div className="row gx-2 align-items-center mt-2">
                <div className="col-8">
                  <div className="name-info d-flex align-items-center">
                    <div className="author-img position-relative"><img className="shadow" src={auction.userImage} alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                    <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Fancy Car">{auction.name}</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">{auction.nickname}</a></div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                    <h6 className="mb-0">{auction.price} ETH</h6>
                  </div>
                </div>
                <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="#">Place Bid</a></div>
              </div>
            </div>
          </div>
        </div>)
      }
    </div>
  </div>
</div>

export default LiveAuctions