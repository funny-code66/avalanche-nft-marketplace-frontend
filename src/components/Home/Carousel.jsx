const nfts = [
  {
    name: 'Cowboy Riding Bull Nature',
    image: '/img/bg-img/40.jpg',
    user: '@designing_world',
    price: 0.061,
    bid: 0.061,
    featured: true,
    love: true
  },
  {
    name: 'Chicken Wearing Santa Hats',
    image: '/img/bg-img/41.jpg',
    user: '@style_wear',
    price: 0.78,
    bid: 0.96,
    new: true,
    love: true
  },
  {
    name: 'Diamond Animals',
    image: '/img/bg-img/42.jpg',
    user: '@affan',
    price: 1.065,
    bid: 1.065
  },
  {
    name: 'NFT Line Vector Illustration',
    image: '/img/bg-img/43.jpg',
    user: '@designing_world',
    price: 0.98,
    bid: 0.98
  },
  {
    name: 'Cowboy Riding Bull Nature',
    image: '/img/bg-img/40.jpg',
    user: '@designing_world',
    price: 0.061,
    bid: 0.061,
    featured: true,
    love: true
  },
  {
    name: 'Chicken Wearing Santa Hats',
    image: '/img/bg-img/41.jpg',
    user: '@style_wear',
    price: 0.78,
    bid: 0.96,
    new: true,
    love: true
  },
  {
    name: 'Diamond Animals',
    image: '/img/bg-img/42.jpg',
    user: '@affan',
    price: 1.065,
    bid: 1.065
  },
  {
    name: 'NFT Line Vector Illustration',
    image: '/img/bg-img/43.jpg',
    user: '@designing_world',
    price: 0.98,
    bid: 0.98
  }
]
const Carousel = () => <div className="featured-nfts-slide">
  {
    nfts.map((nft, index) => <div key={index}>
      <div className="nft-card card featured-card border-0 bg-gray">
        <div className="img-wrap"><img src={nft.image} alt="" />
          {
            !!nft.featured && <div className="badge bg-primary position-absolute"><img src="/img/core-img/fire.png" alt="" />Featured</div>
          }
          {
            !!nft.new && <div className="badge bg-danger position-absolute"><img src="/img/core-img/fire.png" alt="" />New</div>
          }
          <div className="dropdown">
            <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdown17e" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown17e">
              <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
              <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
              <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <div className="row gx-2 align-items-center">
            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid {nft.price} ETH</span></div>
            <div className="col-4 text-end">
              <button className={!!nft.love ? 'wishlist-btn active' : 'wishlist-btn'} type="button"><i className="bi"></i></button>
            </div>
          </div>
          <div className="row gx-2 align-items-center mt-2">
            <div className="col-8">
              <div className="name-info d-flex align-items-center">
                <div className="author-img position-relative"><img className="shadow" src="/img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Cowboy Riding Bull Nature">{nft.name}</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">{nft.user}</a></div>
              </div>
            </div>
            <div className="col-4">
              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                <h6 className="mb-0">{nft.bid} ETH</h6>
              </div>
            </div>
          </div>
          <div className="row gx-2 align-items-center mt-3">
            <div className="col-6"><a className="btn btn-primary rounded-pill btn-sm" href="#">Place Bid</a></div>
            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1"></i>Activity</a></div>
          </div>
        </div>
      </div>
    </div>)
  }
</div>

export default Carousel