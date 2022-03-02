const Explore = () => {
  return (
    <>
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="breadcrumb-content">
            <h2 className="breadcrumb-title">Explore One</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
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
                <option selected value="buy-now">Buy Now</option>
                <option value="on-auction">On Auction</option>
                <option value="new">New</option>
                <option value="featured">Featured</option>
              </select>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <h5>Categories</h5>
              <select className="filter-select2 bg-gray w-100">
                <option selected value="1">Art</option>
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
                <option selected value="1">All</option>
                <option value="2">Single</option>
                <option value="3">Bundle</option>
              </select>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <h5>Sort By</h5>
              <select className="filter-select bg-gray w-100">
                <option selected value="1">Recently Added</option>
                <option value="2">Recently Sold</option>
                <option value="3">Ending Soon</option>
              </select>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <h5>Price</h5>
              <input id="filterRange" type="text" name="filterByValue" value="" data-min="100" data-max="1000" data-from="300" data-to="750" data-type="double" data-prefix="" data-grid="false" />
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <h5>Ratings</h5>
              <select className="filter-select bg-gray w-100">
                <option selected value="1">5 Star</option>
                <option value="2">4 Star &amp; Above</option>
                <option value="3">3 Star &amp; Above</option>
                <option value="4">2 Star &amp; Above</option>
                <option value="5">1 Star &amp; Above</option>
              </select>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <h5>Chains</h5>
              <select className="filter-select bg-gray w-100">
                <option selected value="1">Bitcoin</option>
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
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/13.jpg" alt="" />

                    <div className="badge bg-primary position-absolute"><img src="img/core-img/fire.png" alt="" />Featured</div>

                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dd98hg7" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dd98hg7">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 0.861 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-2">
                    <div className="col-8">
                      <div className="name-info d-flex align-items-center">
                        <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Monkey Arts #114">Monkey Arts #114</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@nft_fun</a></div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                        <h6 className="mb-0">0.861 ETH</h6>
                      </div>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="#">Place bid</a></div>
                    <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1"></i>Activity</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/14.jpg" alt="" />

                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dds211" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dds211">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 2.961 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn active" type="button"><i className="bi"></i></button>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-2">
                    <div className="col-8">
                      <div className="name-info d-flex align-items-center">
                        <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Two Monkey's Fun">Two Monkey's Fun</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@creative_art</a></div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                        <h6 className="mb-0">2.961 ETH</h6>
                      </div>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="#">Place bid</a></div>
                    <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1"></i>Activity</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/15.jpg" alt="" />

                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddfnj87" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddfnj87">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 0.06 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-2">
                    <div className="col-8">
                      <div className="name-info d-flex align-items-center">
                        <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Kings with Bitcoin">Kings with Bitcoin</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@designing_world</a></div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                        <h6 className="mb-0">0.06 ETH</h6>
                      </div>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="#">Place bid</a></div>
                    <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1"></i>Activity</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/16.jpg" alt="" />

                    <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>

                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddffee" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddffee">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 0.01 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-2">
                    <div className="col-8">
                      <div className="name-info d-flex align-items-center">
                        <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u4.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Pixel Plane">Pixel Plane</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@nft_fun</a></div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                        <h6 className="mb-0">0.01 ETH</h6>
                      </div>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="#">Place bid</a></div>
                    <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1"></i>Activity</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/17.jpg" alt="" />
                    <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />Hot bid</div>
                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="cads78s78" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cads78s78">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 0.324 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn active" type="button"><i className="bi"></i></button>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-2">
                    <div className="col-8">
                      <div className="name-info d-flex align-items-center">
                        <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Macaw Bird">Macaw Bird</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@creative_art</a></div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                        <h6 className="mb-0">0.324 ETH</h6>
                      </div>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="#">Place bid</a></div>
                    <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1"></i>Activity</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/18.jpg" alt="" />

                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dd78e99" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dd78e99">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 9.32 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-2">
                    <div className="col-8">
                      <div className="name-info d-flex align-items-center">
                        <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Sculpture Human Face">Sculpture Human Face</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@designing_world</a></div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                        <h6 className="mb-0">9.32 ETH</h6>
                      </div>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="#">Place bid</a></div>
                    <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1"></i>Activity</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/13.jpg" alt="" />
                    <div className="badge bg-primary position-absolute"><img src="img/core-img/fire.png" alt="" />Featured</div>

                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dd98jl7" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dd98jl7">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 0.861 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-2">
                    <div className="col-8">
                      <div className="name-info d-flex align-items-center">
                        <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Monkey Arts #114">Monkey Arts #114</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@nft_fun</a></div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                        <h6 className="mb-0">0.861 ETH</h6>
                      </div>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="#">Place bid</a></div>
                    <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1"></i>Activity</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/14.jpg" alt="" />

                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddbbww211" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddbbww211">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 2.961 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn active" type="button"><i className="bi"></i></button>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-2">
                    <div className="col-8">
                      <div className="name-info d-flex align-items-center">
                        <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Two Monkey's Fun">Two Monkey's Fun</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@creative_art</a></div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                        <h6 className="mb-0">2.961 ETH</h6>
                      </div>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="#">Place bid</a></div>
                    <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1"></i>Activity</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/15.jpg" alt="" />

                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddfws87" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddfws87">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 0.06 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-2">
                    <div className="col-8">
                      <div className="name-info d-flex align-items-center">
                        <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Kings with Bitcoin">Kings with Bitcoin</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@designing_world</a></div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                        <h6 className="mb-0">0.06 ETH</h6>
                      </div>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="#">Place bid</a></div>
                    <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1"></i>Activity</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/16.jpg" alt="" />
                    <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddesee" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddesee">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 0.01 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-2">
                    <div className="col-8">
                      <div className="name-info d-flex align-items-center">
                        <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u4.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Pixel Plane">Pixel Plane</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@nft_fun</a></div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                        <h6 className="mb-0">0.01 ETH</h6>
                      </div>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="#">Place bid</a></div>
                    <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1"></i>Activity</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/17.jpg" alt="" />
                    <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />Hot bid</div>
                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="cadss4578" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cadss4578">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 0.324 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn active" type="button"><i className="bi"></i></button>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-2">
                    <div className="col-8">
                      <div className="name-info d-flex align-items-center">
                        <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Macaw Bird">Macaw Bird</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@creative_art</a></div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                        <h6 className="mb-0">0.324 ETH</h6>
                      </div>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="#">Place bid</a></div>
                    <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1"></i>Activity</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/18.jpg" alt="" />
                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dd78as99" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dd78as99">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 9.32 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-2">
                    <div className="col-8">
                      <div className="name-info d-flex align-items-center">
                        <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Sculpture Human Face">Sculpture Human Face</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@designing_world</a></div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                        <h6 className="mb-0">9.32 ETH</h6>
                      </div>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="#">Place bid</a></div>
                    <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1"></i>Activity</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="funto-pagination mt-70">
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