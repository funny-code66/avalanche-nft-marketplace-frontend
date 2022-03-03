import { useEffect } from "react"
import NFTItem from "../Home/NFTItem"

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

const Explore = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/js/active.js"
    script.async = true
    document.body.appendChild(script)
  }, [])
  return (
    <>
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="breadcrumb-content">
            <h2 className="breadcrumb-title">Explore One</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Explore</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="explore-items-wrapper">
        <div className="container">
          <div className="row g-4 align-items-end">
            <div className="col-12 col-sm-6 col-lg-3">
              <h5>Status</h5>
              <select className="filter-select bg-gray w-100">
                <option value="buy-now">Buy Now</option>
                <option value="on-auction">On Auction</option>
                <option value="new">New</option>
                <option value="featured">Featured</option>
              </select>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <h5>Categories</h5>
              <select className="filter-select2 bg-gray w-100">
                <option value="1">Art</option>
                <option value="2">Cards</option>
                <option value="3">Collectibles</option>
                <option value="4">Domain</option>
                <option value="5">Music</option>
                <option value="6">Memes</option>
                <option value="7">Photos</option>
                <option value="8">Sports</option>
                <option value="9">Videos</option>
                <option value="10">Vitual Worlds</option>
              </select>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <h5>Items</h5>
              <select className="filter-select bg-gray w-100">
                <option value="1">All</option>
                <option value="2">Single</option>
                <option value="3">Bundle</option>
              </select>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <h5>Sort By</h5>
              <select className="filter-select bg-gray w-100">
                <option value="1">Recently Added</option>
                <option value="2">Recently Sold</option>
                <option value="3">Ending Soon</option>
              </select>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <h5>Price</h5>
              <input id="filterRange" type="text" name="filterByValue" defaultValue="" data-min="100" data-max="1000" data-from="300" data-to="750" data-type="double" data-prefix="" data-grid="false" />
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <h5>Ratings</h5>
              <select className="filter-select bg-gray w-100">
                <option value="1">5 Star</option>
                <option value="2">4 Star &amp; Above</option>
                <option value="3">3 Star &amp; Above</option>
                <option value="4">2 Star &amp; Above</option>
                <option value="5">1 Star &amp; Above</option>
              </select>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <h5>Chains</h5>
              <select className="filter-select bg-gray w-100">
                <option value="1">Bitcoin</option>
                <option value="2">Ethereum</option>
                <option value="3">Tether</option>
              </select>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <button className="btn btn-primary rounded-pill w-100" type="submit">Apply<i className="ms-1 bi bi-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <div className="w-100 mb-70 d-block"></div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {
              nfts.map(nft => <NFTItem image={nft.image} featured={nft.featured} bid={nft.bid} userImage={nft.userImage} name={nft.name} nickname={nft.nickname} price={nft.price} love={nft.love} newBid={nft.newBid} hot={nft.hot} sold={nft.sold} key={nft.name} />)
            }
          </div>
        </div>
      </div>
      <div className="funto-pagination mt-70" style={{ paddingBottom: '50px' }}>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center mb-0">
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">...</a></li>
            <li className="page-item"><a className="page-link" href="#">9</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Explore