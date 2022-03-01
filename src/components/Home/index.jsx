import { Fragment, useEffect } from "react"
import Carousel from "./Carousel"
import LiveAuctions from "./LiveAuctions"
import NFTItem from "./NFTItem"

const nftdrops = [
  {
    ranking: '#1',
    nftImage: '/img/bg-img/6.jpg',
    userImage: '/img/bg-img/u4.jpg',
    nftName: 'Pixel Cartoon',
    userName: '@designing_world',
    price: 0.99
  },
  {
    ranking: '#2',
    nftImage: '/img/bg-img/7.jpg',
    userImage: '/img/bg-img/u1.jpg',
    nftName: 'Funny Pigs #455',
    userName: '@art_world',
    price: 0.78
  },
  {
    ranking: '#3',
    nftImage: '/img/bg-img/8.jpg',
    userImage: '/img/bg-img/u2.jpg',
    nftName: 'Pig in Cars',
    userName: '@glpys_creator',
    price: 0.63
  }
]

const topSellers = [
  {
    image: '/img/bg-img/u1.jpg',
    ranking: '#1',
    name: 'Designing World',
    nickname: '@designing_world',
    price: 0.71,
    count: 3057
  },
  {
    image: '/img/bg-img/u2.jpg',
    ranking: '#2',
    name: 'Art World',
    nickname: '@art_world',
    price: 0.8,
    count: 671
  },
  {
    image: '/img/bg-img/u3.jpg',
    ranking: '#3',
    name: 'Style Wear',
    nickname: '@style_wear',
    price: 0.38,
    count: 647
  }
]

const topBuyers = [
  {
    image: '/img/bg-img/u4.jpg',
    ranking: '#1',
    name: 'Creative World',
    nickname: '@creative_world',
    price: 0.81,
    count: 197
  },
  {
    image: '/img/bg-img/u3.jpg',
    ranking: '#2',
    name: 'Nft Fun',
    nickname: '@nft_fun',
    price: 0.97,
    count: 164
  },
  {
    image: '/img/bg-img/u2.jpg',
    ranking: '#3',
    name: 'Nft Crew',
    nickname: '@nft_crew',
    price: 0.68,
    count: 86
  }
]

const nfts = [
  {
    image: '/img/bg-img/13.jpg',
    featured: true,
    bid: 0.861,
    userImage: '/img/bg-img/u1.jpg',
    name: 'Monkey Arts #114',
    nickname: '@nft_fun',
    price: 0.861
  },
  {
    image: '/img/bg-img/14.jpg',
    bid: 2.961,
    userImage: '/img/bg-img/u2.jpg',
    name: 'Two Monkey\'s Fun',
    nickname: '@creative_art',
    price: 2.961,
    love: true
  },
  {
    image: '/img/bg-img/15.jpg',
    bid: 0.06,
    userImage: '/img/bg-img/u3.jpg',
    name: 'Kings with Bitcoin',
    nickname: '@designing_world',
    price: 0.06,
    love: true
  },
  {
    image: '/img/bg-img/16.jpg',
    bid: 0.01,
    userImage: '/img/bg-img/u4.jpg',
    name: 'Pixel Plane',
    nickname: '@nft_fun',
    price: 0.01
  },
  {
    image: '/img/bg-img/17.jpg',
    hot: true,
    bid: 0.324,
    userImage: '/img/bg-img/u1.jpg',
    name: 'Macaw Bird',
    nickname: '@creative_art',
    price: 0.324
  },
  {
    image: '/img/bg-img/18.jpg',
    bid: 9.32,
    userImage: '/img/bg-img/u2.jpg',
    name: 'Sculpture Human Face',
    nickname: '@designing_world',
    price: 9.32
  }
]

const Home = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/js/active.js"
    script.async = true

    document.body.appendChild(script)
  }, [])
  return <Fragment>
    <div className="welcome-area pt-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-10 col-md-6">
            <div className="welcome-content mb-5 mb-md-0">
              <h2 data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">Explore, buy, and sell exceptional NFTs.</h2>
              <p className="mb-4" data-aos="fade-up" data-aos-duration="750" data-aos-delay="800">It's crafted with the latest trend of design &amp; coded with all modern approaches.</p>
              <div className="hero-btn-group" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1200"><a className="btn btn-primary rounded-pill mt-3 me-3" href="explore-1.html">Explore Now<i className="ms-2 bi bi-arrow-right"></i></a><a className="btn btn-minimal hover-primary mt-3" href="collections.html"><i className="me-2 bi bi-grid-3x3-gap"></i>All Collections</a></div>
            </div>
          </div>
          <div className="col-12 col-sm-9 col-md-6">
            <div className="welcome-thumb" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500"><img src="/img/illustrator/2.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
    <div className="divider"></div>
    <div className="featured-nfts-wrap">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-9 col-lg-6">
            <div className="section-heading">
              <h2 className="mb-0">Editor's Picks</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
    <div className="divider"></div>

    <div className="top-seller-wrapper">
      <div className="container">
        <div className="row g-4 g-lg-5 justify-content-center">
          <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
            <div className="section-heading text-center mb-4">
              <h4 className="mb-0">Today's Drops</h4>
            </div>
            {
              nftdrops.map(drop => <div className="nft-card card shadow-sm mb-4" key={drop.ranking}>
                <div className="card-body">
                  <div className="row align-items-center g-3">
                    <div className="col-4">
                      <div className="img-wrap"><img src={drop.nftImage} alt="" />
                        <div className="badge bg-danger position-absolute px-2 py-1">{drop.ranking}</div>
                      </div>
                    </div>
                    <div className="col-8">

                      <div className="meta-info">
                        <div className="name-info d-flex align-items-center mb-3">
                          <div className="author-img position-relative"><img className="shadow" src={drop.userImage} alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                          <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Pixel Cartoon">{drop.nftName}</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">{drop.userName}</a></div>
                        </div>
                        <div className="price-bid d-flex align-items-center">
                          <div className="price me-2 me-sm-3">
                            <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">{drop.price} ETH</h6>
                          </div><a className="btn btn-minimal btn-sm hover-primary d-flex align-items-center" href="#"><img className="me-1" src="/img/core-img/fire.png" alt="" />Place bid</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)
            }
            <a className="btn btn-minimal w-100 hover-primary" href="featured-items.html">View All Drops<i className="ms-1 bi bi-arrow-right"></i></a>
          </div>

          <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
            <div className="section-heading text-center mb-4">
              <h4 className="mb-0">Top Seller</h4>
            </div>
            {
              topSellers.map(seller => <div className="nft-card card seller-card shadow-sm mb-4" key={seller.ranking}>
                <div className="card-body">
                  <div className="row align-items-center g-3">
                    <div className="col-4">
                      <div className="img-wrap"><img src={seller.image} alt="" />
                        <div className="badge bg-danger position-absolute px-2 py-1">{seller.ranking}</div>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="#">{seller.name}<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified"></i></a><a className="author d-block fz-14 hover-primary text-truncate" href="#">{seller.nickname}</a>
                        <div className="price-bid d-flex align-items-center mt-3">
                          <div className="price me-2 me-sm-3">
                            <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">{seller.price} ETH</h6>
                          </div>
                          <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem"></i>{seller.count} Items</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)
            }
            <a className="btn btn-minimal w-100 hover-primary" href="top-seller.html">View All Seller's<i className="ms-1 bi bi-arrow-right"></i></a>
          </div>

          <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
            <div className="section-heading text-center mb-4">
              <h4 className="mb-0">Top Buyer</h4>
            </div>
            {
              topBuyers.map(buyer => <div className="nft-card card seller-card shadow-sm mb-4" key={buyer.ranking}>
                <div className="card-body">
                  <div className="row align-items-center g-3">
                    <div className="col-4">
                      <div className="img-wrap"><img src={buyer.image} alt="" />
                        <div className="badge bg-danger position-absolute px-2 py-1">{buyer.ranking}</div>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="#">{buyer.name}<i className="bi bi-patch-check-fill ms-2 text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified"></i></a><a className="author d-block fz-14 hover-primary text-truncate" href="#">{buyer.nickname}</a>
                        <div className="price-bid d-flex align-items-center mt-3">
                          <div className="price me-2 me-sm-3">
                            <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">{buyer.price} ETH</h6>
                          </div>
                          <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-lightning"></i>{buyer.count} Items</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)
            }
            <a className="btn btn-minimal w-100 hover-primary" href="top-buyer.html">View All Buyer's<i className="ms-1 bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div className="divider"></div>
    <LiveAuctions />
    <div className="divider"></div>
    <div className="discover-nft-wrapper">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4">
            <div className="section-heading">
              <h2 className="mb-0">Discover</h2>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="filters-button-group d-flex justify-content-md-end flex-wrap">
              <button className="btn btn-outline-primary rounded-pill border-2 btn-sm mb-3 mx-2 active" type="button" data-filter="*"><i className="fz-16 bi bi-collection"></i>All</button>
              <button className="btn btn-outline-primary rounded-pill border-2 btn-sm mb-3 mx-2" type="button" data-filter=".art"><i className="fz-16 bi bi-palette"></i>Art</button>
              <button className="btn btn-outline-primary rounded-pill border-2 btn-sm mb-3 mx-2" type="button" data-filter=".cards"><i className="fz-16 bi bi-card-image"></i>Cards</button>
              <button className="btn btn-outline-primary rounded-pill border-2 btn-sm mb-3 mx-2" type="button" data-filter=".collectibles"><i className="fz-16 bi bi-list-stars"></i>Collectibles</button>
              <button className="btn btn-outline-primary rounded-pill border-2 btn-sm mb-3 mx-2" type="button" data-filter=".photos"><i className="fz-16 bi bi-image"></i>Photos</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row g-4 funto-collection-filter-list">
              {
                nfts.map(nft => <NFTItem image={nft.image} featured={nft.featured} bid={nft.bid} userImage={nft.userImage} name={nft.name} nickname={nft.nickname} price={nft.price} love={nft.love} newBid={nft.newBid} hot={nft.hot} sold={nft.sold} key={nft.name} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="divider"></div>
    <div className="popular-collection-wrapper">
      <div className="container">
        <div className="section-heading position-relative z-index-1000 d-flex align-items-center justify-content-center">
          <h2 className="mb-0">Popular items in last</h2>
          <select className="popular-collection-select" id="popularSelect">
            <option value="1">1 day</option>
            <option value="7">7 days</option>
            <option value="15">15 days</option>
            <option value="30">1 month</option>
          </select>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-sm-10 col-md-6 col-xl-4">
            <div className="nft-card card shadow-sm">
              <div className="card-body">
                <div className="row align-items-center g-3">
                  <div className="col-4">
                    <div className="img-wrap"><img src="/img/bg-img/25.jpg" alt="" />
                      <div className="badge bg-danger position-absolute px-2 py-1">#1</div>
                    </div>
                  </div>
                  <div className="col-8">

                    <div className="meta-info">
                      <div className="name-info d-flex align-items-center mb-3">
                        <div className="author-img position-relative"><img className="shadow" src="/img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Trees Growing Seedlings">Trees Growing Seedlings</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@designing_world</a></div>
                      </div>
                      <div className="price-bid d-flex align-items-center">
                        <div className="price me-2 me-sm-3">
                          <h6 className="mb-0 d-inline-block fz-14 border border-2 border-info rounded py-1 px-2 text-info">0.06 ETH</h6>
                        </div><a className="btn btn-minimal btn-sm hover-primary d-flex align-items-center" href="#"><img className="me-1" src="/img/core-img/fire.png" alt="" />Place bid</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-10 col-md-6 col-xl-4">
            <div className="nft-card card shadow-sm">
              <div className="card-body">
                <div className="row align-items-center g-3">
                  <div className="col-4">
                    <div className="img-wrap"><img src="/img/bg-img/26.jpg" alt="" />
                      <div className="badge bg-danger position-absolute px-2 py-1">#2</div>
                    </div>
                  </div>
                  <div className="col-8">

                    <div className="meta-info">
                      <div className="name-info d-flex align-items-center mb-3">
                        <div className="author-img position-relative"><img className="shadow" src="/img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Flower Crafts #24">Flower Crafts #24</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@nft_fun</a></div>
                      </div>
                      <div className="price-bid d-flex align-items-center">
                        <div className="price me-2 me-sm-3">
                          <h6 className="mb-0 d-inline-block fz-14 border border-2 border-info rounded py-1 px-2 text-info">0.01 ETH</h6>
                        </div><a className="btn btn-minimal btn-sm hover-primary d-flex align-items-center" href="#"><img className="me-1" src="/img/core-img/fire.png" alt="" />Place bid</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-10 col-md-6 col-xl-4">
            <div className="nft-card card shadow-sm">
              <div className="card-body">
                <div className="row align-items-center g-3">
                  <div className="col-4">
                    <div className="img-wrap"><img src="/img/bg-img/27.jpg" alt="" />
                      <div className="badge bg-danger position-absolute px-2 py-1">#3</div>
                    </div>
                  </div>
                  <div className="col-8">

                    <div className="meta-info">
                      <div className="name-info d-flex align-items-center mb-3">
                        <div className="author-img position-relative"><img className="shadow" src="/img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="NFT Text">NFT Text</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@designing_world</a></div>
                      </div>
                      <div className="price-bid d-flex align-items-center">
                        <div className="price me-2 me-sm-3">
                          <h6 className="mb-0 d-inline-block fz-14 border border-2 border-info rounded py-1 px-2 text-info">0.06 ETH</h6>
                        </div><a className="btn btn-minimal btn-sm hover-primary d-flex align-items-center" href="#"><img className="me-1" src="/img/core-img/fire.png" alt="" />Place bid</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-10 col-md-6 col-xl-4">
            <div className="nft-card card shadow-sm">
              <div className="card-body">
                <div className="row align-items-center g-3">
                  <div className="col-4">
                    <div className="img-wrap"><img src="/img/bg-img/28.jpg" alt="" />
                      <div className="badge bg-danger position-absolute px-2 py-1">#4</div>
                    </div>
                  </div>
                  <div className="col-8">

                    <div className="meta-info">
                      <div className="name-info d-flex align-items-center mb-3">
                        <div className="author-img position-relative"><img className="shadow" src="/img/bg-img/u4.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Norwegian Fjords Winter">Norwegian Fjords Winter</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@designing_world</a></div>
                      </div>
                      <div className="price-bid d-flex align-items-center">
                        <div className="price me-2 me-sm-3">
                          <h6 className="mb-0 d-inline-block fz-14 border border-2 border-info rounded py-1 px-2 text-info">0.61 ETH</h6>
                        </div><a className="btn btn-minimal btn-sm hover-primary d-flex align-items-center" href="#"><img className="me-1" src="/img/core-img/fire.png" alt="" />Place bid</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-10 col-md-6 col-xl-4">
            <div className="nft-card card shadow-sm">
              <div className="card-body">
                <div className="row align-items-center g-3">
                  <div className="col-4">
                    <div className="img-wrap"><img src="/img/bg-img/29.jpg" alt="" />
                      <div className="badge bg-danger position-absolute px-2 py-1">#5</div>
                    </div>
                  </div>
                  <div className="col-8">

                    <div className="meta-info">
                      <div className="name-info d-flex align-items-center mb-3">
                        <div className="author-img position-relative"><img className="shadow" src="/img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Red Rose Flower Ilustration">Red Rose Flower Ilustration</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@creative_crafts</a></div>
                      </div>
                      <div className="price-bid d-flex align-items-center">
                        <div className="price me-2 me-sm-3">
                          <h6 className="mb-0 d-inline-block fz-14 border border-2 border-info rounded py-1 px-2 text-info">0.11 ETH</h6>
                        </div><a className="btn btn-minimal btn-sm hover-primary d-flex align-items-center" href="#"><img className="me-1" src="/img/core-img/fire.png" alt="" />Place bid</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-10 col-md-6 col-xl-4">
            <div className="nft-card card shadow-sm">
              <div className="card-body">
                <div className="row align-items-center g-3">
                  <div className="col-4">
                    <div className="img-wrap"><img src="/img/bg-img/30.jpg" alt="" />
                      <div className="badge bg-danger position-absolute px-2 py-1">#6</div>
                    </div>
                  </div>
                  <div className="col-8">

                    <div className="meta-info">
                      <div className="name-info d-flex align-items-center mb-3">
                        <div className="author-img position-relative"><img className="shadow" src="/img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Venice Canel">Venice Canel</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@designing_world</a></div>
                      </div>
                      <div className="price-bid d-flex align-items-center">
                        <div className="price me-2 me-sm-3">
                          <h6 className="mb-0 d-inline-block fz-14 border border-2 border-info rounded py-1 px-2 text-info">0.1 ETH</h6>
                        </div><a className="btn btn-minimal btn-sm hover-primary d-flex align-items-center" href="#"><img className="me-1" src="/img/core-img/fire.png" alt="" />Place bid</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-10 col-md-6 col-xl-4">
            <div className="nft-card card shadow-sm">
              <div className="card-body">
                <div className="row align-items-center g-3">
                  <div className="col-4">
                    <div className="img-wrap"><img src="/img/bg-img/31.jpg" alt="" />
                      <div className="badge bg-danger position-absolute px-2 py-1">#7</div>
                    </div>
                  </div>
                  <div className="col-8">

                    <div className="meta-info">
                      <div className="name-info d-flex align-items-center mb-3">
                        <div className="author-img position-relative"><img className="shadow" src="/img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="VR Glasses Metaverse">VR Glasses Metaverse</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@designing_world</a></div>
                      </div>
                      <div className="price-bid d-flex align-items-center">
                        <div className="price me-2 me-sm-3">
                          <h6 className="mb-0 d-inline-block fz-14 border border-2 border-info rounded py-1 px-2 text-info">0.1 ETH</h6>
                        </div><a className="btn btn-minimal btn-sm hover-primary d-flex align-items-center" href="#"><img className="me-1" src="/img/core-img/fire.png" alt="" />Place bid</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-10 col-md-6 col-xl-4">
            <div className="nft-card card shadow-sm">
              <div className="card-body">
                <div className="row align-items-center g-3">
                  <div className="col-4">
                    <div className="img-wrap"><img src="/img/bg-img/32.jpg" alt="" />
                      <div className="badge bg-danger position-absolute px-2 py-1">#8</div>
                    </div>
                  </div>
                  <div className="col-8">

                    <div className="meta-info">
                      <div className="name-info d-flex align-items-center mb-3">
                        <div className="author-img position-relative"><img className="shadow" src="/img/bg-img/u4.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Wow Emoji">Wow Emoji</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@nft_fun</a></div>
                      </div>
                      <div className="price-bid d-flex align-items-center">
                        <div className="price me-2 me-sm-3">
                          <h6 className="mb-0 d-inline-block fz-14 border border-2 border-info rounded py-1 px-2 text-info">01 ETH</h6>
                        </div><a className="btn btn-minimal btn-sm hover-primary d-flex align-items-center" href="#"><img className="me-1" src="/img/core-img/fire.png" alt="" />Place bid</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-10 col-md-6 col-xl-4">
            <div className="nft-card card shadow-sm">
              <div className="card-body">
                <div className="row align-items-center g-3">
                  <div className="col-4">
                    <div className="img-wrap"><img src="/img/bg-img/33.jpg" alt="" />
                      <div className="badge bg-danger position-absolute px-2 py-1">#9</div>
                    </div>
                  </div>
                  <div className="col-8">

                    <div className="meta-info">
                      <div className="name-info d-flex align-items-center mb-3">
                        <div className="author-img position-relative"><img className="shadow" src="/img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Banana Pixel Art">Banana Pixel Art</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@designing_world</a></div>
                      </div>
                      <div className="price-bid d-flex align-items-center">
                        <div className="price me-2 me-sm-3">
                          <h6 className="mb-0 d-inline-block fz-14 border border-2 border-info rounded py-1 px-2 text-info">0.06 ETH</h6>
                        </div><a className="btn btn-minimal btn-sm hover-primary d-flex align-items-center" href="#"><img className="me-1" src="/img/core-img/fire.png" alt="" />Place bid</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="divider"></div>
    <div className="process-wrapper" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">
      <div className="container">
        <div className="row g-4 g-xxl-5 align-items-center justify-content-center">
          <div className="col-12 col-sm-6 col-xl-3">

            <div className="single-process-card card bg-gray border-0" data-aos="fade-up" data-aos-duration="750" data-aos-delay="400">
              <div className="card-body p-4 text-center"><img className="mb-3 mx-auto" src="/img/illustrator/4.png" alt="" />
                <h5 className="mb-3">Create your account &amp; add wallet</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>

              <div className="step-number">1</div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">

            <div className="single-process-card card bg-gray border-0" data-aos="fade-up" data-aos-duration="750" data-aos-delay="600">
              <div className="card-body p-4 text-center"><img className="mb-3 mx-auto" src="/img/illustrator/2.png" alt="" />
                <h5 className="mb-3">Get approval from our review team</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>

              <div className="step-number">2</div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">

            <div className="single-process-card card bg-gray border-0" data-aos="fade-up" data-aos-duration="750" data-aos-delay="800">
              <div className="card-body p-4 text-center"><img className="mb-3 mx-auto" src="/img/illustrator/3.png" alt="" />
                <h5 className="mb-3">Create your NFT's &amp; list them for sale</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>

              <div className="step-number">3</div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">

            <div className="single-process-card card bg-gray border-0" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1000">
              <div className="card-body p-4 text-center"><img className="mb-3 mx-auto" src="/img/illustrator/1.png" alt="" />
                <h5 className="mb-3">Now sale your items &amp; earn rewards</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>

              <div className="step-number">4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="divider"></div>
    <div className="collection-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="section-heading">
              <h2 className="mb-0 ms-3">Browse by category</h2>
            </div>
          </div>
          <div className="col-5 text-end"><a className="btn rounded-pill btn-outline-primary btn-sm border-2" href="collections.html">View all catagories</a></div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center">

          <div className="col-12 col-md-10 col-lg-4">
            <div className="catagory-card card shadow-sm">
              <div className="card-body">
                <div className="row g-1">
                  <div className="col-6"><img className="rounded" src="/img/bg-img/39.jpg" alt="" /><img className="rounded" src="/img/bg-img/38.jpg" alt="" /></div>
                  <div className="col-6"><img className="rounded" src="/img/bg-img/6.jpg" alt="" /><img className="rounded" src="/img/bg-img/10.jpg" alt="" /></div>
                </div>
                <div className="row mt-3">
                  <div className="col-8">
                    <h5 className="mb-0">Arts<span className="badge bg-primary ms-2">206</span></h5>
                  </div>
                  <div className="col-4 text-end"><a className="btn btn-minimal hover-primary" href="explore-1.html">View all<i className="ms-1 fz-14 bi bi-arrow-right"></i></a></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-10 col-lg-4">
            <div className="catagory-card card shadow-sm">
              <div className="card-body">
                <div className="row g-1">
                  <div className="col-6"><img className="rounded" src="/img/bg-img/35.jpg" alt="" /><img className="rounded" src="/img/bg-img/34.jpg" alt="" /></div>
                  <div className="col-6"><img className="rounded" src="/img/bg-img/25.jpg" alt="" /><img className="rounded" src="/img/bg-img/27.jpg" alt="" /></div>
                </div>
                <div className="row mt-3">
                  <div className="col-8">
                    <h5 className="mb-0">Photos<span className="badge bg-primary ms-2">973</span></h5>
                  </div>
                  <div className="col-4 text-end"><a className="btn btn-minimal hover-primary" href="explore-1.html">View all<i className="ms-1 fz-14 bi bi-arrow-right"></i></a></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-10 col-lg-4">
            <div className="catagory-card card shadow-sm">
              <div className="card-body">
                <div className="row g-1">
                  <div className="col-6"><img className="rounded" src="/img/bg-img/18.jpg" alt="" /><img className="rounded" src="/img/bg-img/20.jpg" alt="" /></div>
                  <div className="col-6"><img className="rounded" src="/img/bg-img/37.jpg" alt="" /><img className="rounded" src="/img/bg-img/36.jpg" alt="" /></div>
                </div>
                <div className="row mt-3">
                  <div className="col-8">
                    <h5 className="mb-0">Collectibles<span className="badge bg-primary ms-2">1098</span></h5>
                  </div>
                  <div className="col-4 text-end"><a className="btn btn-minimal hover-primary" href="explore-1.html">View all<i className="ms-1 fz-14 bi bi-arrow-right"></i></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="divider"></div>

    <div className="dark-light-wrapper" data-aos="zoom-in" data-aos-duration="750" data-aos-delay="200">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="mb-0 text-white" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">Light mode is available!</h5>

          <div className="dark-light-mode" data-aos="fade-up" data-aos-duration="750" data-aos-delay="800">
            <input id="darkLightSwitch" type="checkbox" />
            <label className="shadow" htmlFor="darkLightSwitch">Toggle</label>
          </div>
        </div>
      </div>
    </div>

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

    <div id="scrollTopButton"><i className="bi bi-arrow-up-short"></i></div>
  </Fragment >
}

export default Home