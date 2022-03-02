import { Fragment, useEffect } from "react"
import Carousel from "./Carousel"
import AutionItem from "./AutionItem"
import Collection from './Collection'
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

const auctions = [
  {
    nftImage: '/img/bg-img/9.jpg',
    newBid: true,
    date: 'March 31, 2022 14:19:54',
    stocks: 3,
    userImage: '/img/bg-img/u4.jpg',
    name: 'Fancy Car',
    nickname: '@fancy_car',
    price: 0.784
  },
  {
    nftImage: '/img/bg-img/10.jpg',
    newBid: true,
    date: 'April 4, 2023 00:00:00',
    stocks: 11,
    userImage: '/img/bg-img/u1.jpg',
    name: 'Animal Playing with Guiter',
    nickname: '@creative_world',
    price: 0.784
  },
  {
    nftImage: '/img/bg-img/11.jpg',
    newDone: true,
    date: 'Feb 28, 2022 12:34:00',
    stocks: 0,
    userImage: '/img/bg-img/u2.jpg',
    name: 'Halloween #471',
    nickname: '@fancy_car',
    price: 0.784
  },
  {
    nftImage: '/img/bg-img/12.jpg',
    newHot: true,
    date: 'December 31, 2022 14:19:39',
    stocks: 29,
    userImage: '/img/bg-img/u3.jpg',
    name: 'Vigor Dance',
    nickname: '@fancy_nft',
    price: 0.784
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

const popularItems = [
  {
    nftImage: '/img/bg-img/25.jpg',
    ranking: '#1',
    userImage: '/img/bg-img/u1.jpg',
    name: 'Trees Growing Seedlings',
    nickname: '@designing_world',
    price: 0.06
  },
  {
    nftImage: '/img/bg-img/26.jpg',
    ranking: '#2',
    userImage: '/img/bg-img/u2.jpg',
    name: 'Flower Crafts #24',
    nickname: '@nft_fun',
    price: 0.01
  },
  {
    nftImage: '/img/bg-img/27.jpg',
    ranking: '#3',
    userImage: '/img/bg-img/u3.jpg',
    name: 'NFT Text',
    nickname: '@designing_world',
    price: 0.06
  },
  {
    nftImage: '/img/bg-img/28.jpg',
    ranking: '#4',
    userImage: '/img/bg-img/u4.jpg',
    name: 'Norwegian Fjords Winter',
    nickname: '@designing_world',
    price: 0.06
  },
  {
    nftImage: '/img/bg-img/28.jpg',
    ranking: '#4',
    userImage: '/img/bg-img/u4.jpg',
    name: 'Norwegian Fjords Winter',
    nickname: '@designing_world',
    price: 0.06
  },
  {
    nftImage: '/img/bg-img/28.jpg',
    ranking: '#4',
    userImage: '/img/bg-img/u4.jpg',
    name: 'Norwegian Fjords Winter',
    nickname: '@designing_world',
    price: 0.06
  },
]

const processes = [
  {
    image: '/img/illustrator/4.png',
    name: 'Create your account &amp; add wallet',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/img/illustrator/2.png',
    name: 'Create your account &amp; add wallet',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/img/illustrator/3.png',
    name: 'Create your account &amp; add wallet',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/img/illustrator/1.png',
    name: 'Create your account &amp; add wallet',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
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

    {/* <div className="top-seller-wrapper">
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
    </div> */}
    <div className="live-bidding-wrapper bg-gray pt-120 pb-120">
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
            auctions.map((auction) => <AutionItem nftImage={auction.nftImage} newBid={auction.newBid} newDone={auction.newDone} newHot={auction.newHot} date={auction.date} stocks={auction.stocks} userImage={auction.userImage} name={auction.name} nickname={auction.nickname} price={auction.price} />)
          }
        </div>
      </div>
    </div>
    <div className="divider"></div>
    {/* <div className="discover-nft-wrapper">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4">
            <div className="section-heading">
              <h2 className="mb-0">Discover</h2>
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
    </div> */}
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
          {
            popularItems.map((popular) => <div className="col-12 col-sm-10 col-md-6 col-xl-4">
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="row align-items-center g-3">
                    <div className="col-4">
                      <div className="img-wrap"><img src={popular.nftImage} alt="" />
                        <div className="badge bg-danger position-absolute px-2 py-1">{popular.ranking}</div>
                      </div>
                    </div>
                    <div className="col-8">

                      <div className="meta-info">
                        <div className="name-info d-flex align-items-center mb-3">
                          <div className="author-img position-relative"><img className="shadow" src={popular.userImage} alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                          <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Trees Growing Seedlings">{popular.name}</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">{popular.nickname}</a></div>
                        </div>
                        <div className="price-bid d-flex align-items-center">
                          <div className="price me-2 me-sm-3">
                            <h6 className="mb-0 d-inline-block fz-14 border border-2 border-info rounded py-1 px-2 text-info">{popular.price} ETH</h6>
                          </div><a className="btn btn-minimal btn-sm hover-primary d-flex align-items-center" href="#"><img className="me-1" src="/img/core-img/fire.png" alt="" />Place bid</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>)
          }

        </div>
      </div>
    </div>
    <div className="divider"></div>
    <div className="process-wrapper" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">
      <div className="container">
        <div className="row g-4 g-xxl-5 align-items-center justify-content-center">
          {
            processes.map((process) => <div className="col-12 col-sm-6 col-xl-3">

              <div className="single-process-card card bg-gray border-0" data-aos="fade-up" data-aos-duration="750" data-aos-delay="400">
                <div className="card-body p-4 text-center"><img className="mb-3 mx-auto" src={process.image} alt="" />
                  <h5 className="mb-3">{process.name}</h5>
                  <p className="mb-0">{process.description}</p>
                </div>

                <div className="step-number">1</div>
              </div>
            </div>)
          }

        </div>
      </div>
    </div>
    <div className="divider"></div>
    <Collection home />



    <div id="scrollTopButton"><i className="bi bi-arrow-up-short"></i></div>
  </Fragment >
}

export default Home