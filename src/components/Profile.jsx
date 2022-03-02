import { useEffect } from "react"
import NFTItem from "./Home/NFTItem"
import AutionItem from "./Home/AutionItem"

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
    image: '/img/bg-img/15.jpg',
    bid: 0.06,
    userImage: '/img/bg-img/u3.jpg',
    name: 'Kings with Bitcoin',
    nickname: '@designing_world',
    price: 0.06,
    love: true
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

const Profile = () => {
  useEffect(() => {
    // script.src = "/js/all-js-libraries.js"
    // script.async = true
    // document.body.appendChild(script)
    const script = document.createElement("script")
    script.src = "/js/active.js"
    script.async = true
    document.body.appendChild(script)
    script.src = "/js/charts.js"
    script.async = true
    document.body.appendChild(script)

  }, [])
  return (
    <>
      <div class="author-top-content bg-img bg-overlay" style={{ backgroundImage: 'url(img/bg-img/44.jpg)' }}>
        <div class="container">
          <div class="card border-0 bg-transparent">
            <div class="card-body p-4 p-sm-5">
              <div class="row g-4 g-lg-5 align-items-center">
                <div class="col-7 col-sm-4 col-lg-3">
                  <div class="author-thumbnail"><img class="rounded" src="img/bg-img/u1.jpg" alt="" /><i class="bi bi-patch-check-fill" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified"></i></div>
                </div>
                <div class="col-12 col-sm-8 col-lg-9">
                  <div class="author-data">
                    <h3 class="mb-2 author-name text-white">Designing World<a class="btn btn-warning btn-sm rounded-pill align-top ms-2 px-3 py-1" href="#">Follow</a></h3>
                    <div class="btn btn-minimal d-inline-block mb-3 text-white hover-warning">@designing_world</div>
                    <p class="w-75 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quaerat quis similique natus rem.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown author-dd">
              <button class="dropdown-toggle" id="dd9887" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></button>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dd9887">
                <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#shareModal"><i class="me-1 bi bi-share"></i>Share</a></li>
                <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#copylinkModal"><i class="me-1 bi bi-box-arrow-up-right"></i>Copy Link</a></li>
                <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#reportModal"><i class="me-1 bi bi-flag"></i>Report</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="funto-tab-area" style={{ padding: '150px 0px 100px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab--area bg-gray p-4 p-lg-5">
                <ul className="nav nav-tabs" id="funtoTab" role="tablist">
                  <li className="nav-item"><a className="nav-link rounded-pill bg-gradient active" id="tab--1" data-bs-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">On Sale</a></li>
                  <li className="nav-item"><a className="nav-link rounded-pill bg-gradient" id="tab--2" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">On Autions</a></li>
                  <li className="nav-item"><a className="nav-link rounded-pill bg-gradient" id="tab--3" data-bs-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Owned</a></li>
                  <li className="nav-item"><a className="nav-link rounded-pill bg-gradient" id="tab--4" data-bs-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">About</a></li>
                  <li className="nav-item"><a className="nav-link rounded-pill bg-gradient" id="tab--5" data-bs-toggle="tab" href="#tab5" role="tab" aria-controls="tab5" aria-selected="false">Activity</a></li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                    <div className="card border-0">
                      <div className="card-body p-4">
                        <div className="row g-6 funto-collection-filter-list">
                          {
                            nfts.map(nft => <NFTItem image={nft.image} featured={nft.featured} bid={nft.bid} userImage={nft.userImage} name={nft.name} nickname={nft.nickname} price={nft.price} love={nft.love} newBid={nft.newBid} hot={nft.hot} sold={nft.sold} key={nft.name} />)
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade " id="tab2" role="tabpanel" aria-labelledby="tab--1">
                    <div className="card border-0">
                      <div className="card-body p-4">
                        <div className="row g-4 justify-content-center">
                          {
                            auctions.map((auction) => <AutionItem nftImage={auction.nftImage} newBid={auction.newBid} newDone={auction.newDone} newHot={auction.newHot} date={auction.date} stocks={auction.stocks} userImage={auction.userImage} name={auction.name} nickname={auction.nickname} price={auction.price} />)
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade " id="tab3" role="tabpanel" aria-labelledby="tab--1">
                    <div className="card border-0">
                      <div className="card-body p-4">
                        <div className="row g-6 funto-collection-filter-list">
                          {
                            nfts.map(nft => <NFTItem image={nft.image} featured={nft.featured} bid={nft.bid} userImage={nft.userImage} name={nft.name} owned />)
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade " id="tab4" role="tabpanel" aria-labelledby="tab--1">
                    <div className="card border-0">
                      <div className="card-body p-4">
                        <form action="#">
                          <div class="row g-4">
                            <div class="col-12">
                              <input class="form-control bg-gray border-0" type="text" name="fullName" placeholder="Full Name" />
                            </div>
                            <div class="col-12">
                              <input class="form-control bg-gray border-0" type="email" name="email" placeholder="Email Address" />
                            </div>
                            <div class="col-12">
                              <input class="form-control bg-gray border-0" type="text" name="UserName" placeholder="Full Name" />
                            </div>
                            <div class="col-12">
                              <button class="btn btn-primary w-100 rounded-pill" type="submit"><i class="bi bi-sd-card-fill me-1"></i>Save changes</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab5" role="tabpanel" aria-labelledby="tab--5">
                    <div className="table-responsive border shadow-sm activity-table bg-white">
                      <table className="table mb-0">
                        <tbody>
                          <tr>
                            <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                            <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u1.jpg" alt="" />@creative_art</a></td>
                            <td><i className="bi bi-cart"></i>Sales</td>
                            <td><i className="bi bi-clock"></i>29 min ago</td>
                          </tr>
                          <tr>
                            <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                            <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u2.jpg" alt="" />@designing_world</a></td>
                            <td><i className="bi bi-percent"></i>Offer</td>
                            <td><i className="bi bi-clock"></i>1h ago</td>
                          </tr>
                          <tr>
                            <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/7.jpg" alt="" />Funny Pigs</a></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.105 ETH</span></td>
                            <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u3.jpg" alt="" />@art_world</a></td>
                            <td><i className="bi bi-patch-exclamation"></i>Alert</td>
                            <td><i className="bi bi-clock"></i>2h ago</td>
                          </tr>
                          <tr>
                            <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/8.jpg" alt="" />Fancy Car 2</a></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.95 ETH</span></td>
                            <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u4.jpg" alt="" />@fancy_car</a></td>
                            <td><i className="bi bi-cart"></i>Sales</td>
                            <td><i className="bi bi-clock"></i>3h ago</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile