import { useEffect } from 'react'

const ItemDetail = () => {
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
            <h2 className="breadcrumb-title">Item Details</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Item Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="item-details-wrap" style={{ marginTop: '100px' }} >
        <div className="container">
          <div className="row g-4 g-lg-5 justify-content-center">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="item-big-thumb"><img src="img/bg-img/4.jpg" alt="" data-action="zoom" /></div>
            </div>

            <div className="col-12 col-md-9 col-lg-6">
              <div className="item-details-content mt-5 mt-lg-0">
                <div className="dropdown item-details-dd">
                  <button className="dropdown-toggle" id="dwd987" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dwd987">
                    <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#shareModal"><i className="me-1 bi bi-share"></i>Share</a></li>
                    <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#copylinkModal"><i className="me-1 bi bi-box-arrow-up-right"></i>Copy Link</a></li>
                    <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#reportModal"><i className="me-1 bi bi-flag"></i>Report</a></li>
                  </ul>
                </div>
                <div className="d-flex flex-wrap align-items-center">

                  <button className="btn btn-dark btn-sm rounded-pill px-3 wishlist-btn" type="button"><i className="bi"></i><span className="ms-1">98</span></button>

                  <div className="badge border px-3 py-2 rounded-pill text-dark fz-14 d-inline-block ms-1 ms-sm-4"><i className="me-1 bi bi-eye"></i>8,634 people views this</div>
                </div>
                <h2 className="my-3">Diamond Horse Animals #47</h2>
                <div className="d-flex align-items-center mb-4">
                  <div className="author-img position-relative me-3"><img className="shadow" src="img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-primary"></i></div>
                  <div className="name-author"><span className="d-block fz-14">Created by</span><a className="author d-block fz-16 hover-primary text-truncate" href="#">@creative_world</a></div>              </div>
                <div className="border-top w-75 mb-4"></div>

                <p className="lh-1">Bid ending soon</p>
                <div className="bid-ends mb-4" data-date="December 31, 2022 14:19:39">
                  <div><span className="days"></span><span>Days</span></div>
                  <div><span className="hours"></span><span>Hours</span></div>
                  <div><span className="minutes"></span><span>Min</span></div>
                  <div><span className="seconds"></span><span>Sec</span></div>
                </div>
                <div className="row align-items-end">
                  <div className="col-6 col-sm-4">
                    <p className="mb-2">Floor price</p>
                    <h5 className="text-center mb-0 border border-2 px-3 py-2 border-primary d-inline-block rounded text-primary w-100">7.803 ETH </h5>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-5"><a className="btn btn-primary rounded-pill w-100" href="#"><img className="me-1" src="img/core-img/fire.png" alt="" />Place a bid</a></div>
                </div>
                <div className="border-top w-75 my-4"></div>
                <div className="short-description">
                  <h5>Short Description</h5>
                  <p className="mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque aut veniam consectetur magnam libero, natus eius numquam reprehenderit hic at, excepturi repudiandae magni optio odio doloribus?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block w-100 mb-70"></div>
      <div className="funto-tab-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab--area bg-gray p-4 p-lg-5">
                <ul className="nav nav-tabs" id="funtoTab" role="tablist">
                  <li className="nav-item"><a className="nav-link rounded-pill bg-gradient active" id="tab--1" data-bs-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Details</a></li>
                  <li className="nav-item"><a className="nav-link rounded-pill bg-gradient" id="tab--2" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Activity</a></li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                    <div className="card border-0">
                      <div className="card-body p-4">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor modi ut, debitis delectus deserunt ipsa ullam necessitatibus expedita laboriosam mollitia veniam rerum error iste, tempora vitae. Quasi totam exercitationem odit.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quisquam consectetur aliquid accusantium aut. A, veritatis voluptates. Blanditiis ut repellat, reprehenderit rem ab cum cumque veniam nulla officiis, quo maxime facilis aut eius labore quisquam nemo ea illum! Reprehenderit officia illo ipsa.</p>
                        <ul>
                          <li>Bootstrap 5</li>
                          <li>Vanilla JS </li>
                          <li>Creative Design</li>
                        </ul>
                        <p className="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae saepe eveniet optio minima, minus quas distinctio iste laudantium in voluptates, corporis labore. Debitis saepe et laudantium, dolor necessitatibus eius porro reiciendis?</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab--2">
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
      <div className="divider"></div>
      <div className="related-project-area" style={{ padding: '50px 0px' }} >
        <div className="container">
          <div className="section-heading">
            <h2 className="mb-0">Related Projects</h2>
          </div>
          <div className="related-project-slide">
            <div>
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/13.jpg" alt="" />
                    <div className="badge bg-primary position-absolute"><img src="img/core-img/fire.png" alt="" />Featured</div>
                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dttd987" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dttd987">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
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
            <div>
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/14.jpg" alt="" />
                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddwer211" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddwer211">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 2.961 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn" type="button"><i className="bi"></i></button>
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
            <div>

              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/15.jpg" alt="" />

                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddgtf87" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddgtf87">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 0.06 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn active" type="button"><i className="bi"></i></button>
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
            <div>

              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/16.jpg" alt="" />
                    <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dd45ee" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dd45ee">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 0.01 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn active" type="button"><i className="bi"></i></button>
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
            <div>
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/13.jpg" alt="" />
                    <div className="badge bg-primary position-absolute"><img src="img/core-img/fire.png" alt="" />Featured</div>
                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dwwd987" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dwwd987">
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
            <div>
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/14.jpg" alt="" />
                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="uudsd211" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="uudsd211">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 2.961 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn" type="button"><i className="bi"></i></button>
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
            <div>
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/15.jpg" alt="" />
                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddddwf87" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddddwf87">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 0.06 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn active" type="button"><i className="bi"></i></button>
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
            <div>
              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><img src="img/bg-img/16.jpg" alt="" />
                    <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                    <div className="dropdown">
                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dd63ee" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dd63ee">
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 0.01 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn active" type="button"><i className="bi"></i></button>
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
          </div>
        </div>
      </div>
    </>
  )
}
export default ItemDetail