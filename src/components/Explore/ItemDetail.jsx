import { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import styled from 'styled-components'

const Catagories = styled.div`
{
  .accordion {
    width:100%
  }
  .accordion-item {
    background:transparent
  }
  .accordion-button {
    padding :19px 38px;
    background:transparent !important;
    font-size:25px;
    color:white;
    border:1px solid #301a64;
    border-radius:8px !important;
  }
  .accordion-body {
    color:white;
    font-size:20px;
    text-align:initial;
    background:transparent
    //  background:rgba(255, 255, 255, 0.1) !important;
     margin-top:10px;
     border-radius:8px;
     border:1px solid #301a64;
     margin-top:10px
  }
  .accordion-button:not(.collapsed)::after {
    //  background:url(/images/uparrow.png);
  }
  .accordion-button::after {
    background:url(/img/downarrow.png);
    height:10px;
  }
  @media(max-width:1020px) {
    .accordion-body {
      overflow:auto !important
    }
  }
  @media(max-width:530px) {
    .accordion-button {
      font-size:20px;
    }
  }
}`;

const ItemDetail = () => {
  const [attributes, setAttributes] = useState(true);
  const [detail, setDetail] = useState(true);
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
                <li className="breadcrumb-item"><a href="/">Home</a></li>
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
              <div style={{ padding: '50px 0px' }} >
                <div className="container" style={{ padding: '0' }}>
                  <div className="row">
                    <div className="">
                      <Catagories>
                        {
                          attributes &&
                          <Accordion defaultActiveKey="0" flush className='accordion' >
                            <Accordion.Item>
                              <Accordion.Header>Attributes</Accordion.Header>
                              <Accordion.Body>
                                <div className='attributes-body text-center'>
                                  <div>
                                    <p className='text-primary'>Color</p>
                                    <p>Eye</p>
                                  </div>
                                  <div>
                                    <p className='text-primary'>Color</p>
                                    <p>Eye</p>
                                  </div>
                                  <div>
                                    <p className='text-primary'>Color</p>
                                    <p>Eye</p>
                                  </div>
                                  <div>
                                    <p className='text-primary'>Color</p>
                                    <p>Eye</p>
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        }
                        {
                          detail &&
                          <Accordion defaultActiveKey="0" flush className='accordion' style={{ marginTop: '30px' }}>
                            <Accordion.Item>
                              <Accordion.Header>Details</Accordion.Header>
                              <Accordion.Body>
                                <div className='details-body'>
                                  <div>
                                    <p>Mint address</p>
                                    <p>EZ2Fv...UUy</p>
                                  </div>
                                  <div>
                                    <p>Token address</p>
                                    <p>EZ2Fv...UUy</p>
                                  </div>
                                  <div>
                                    <p>Owner</p>
                                    <p>DGWG...DAE</p>
                                  </div>
                                  <div>
                                    <p>Artist Royalties</p>
                                    <p>8%</p>
                                  </div>
                                  <div>
                                    <p>Transaction Fee</p>
                                    <p>2%</p>
                                  </div>
                                  <div>
                                    <p>Listing/Bidding/Cancel</p>
                                    <p>Free</p>
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        }
                      </Catagories>
                    </div>
                  </div>
                </div>
              </div>
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
                    <h5 className="text-center mb-0 border border-2 px-3 py-2 border-primary d-inline-block rounded text-primary w-100">7.803<img src='/img/avax.svg' style={{ width: '18px', marginLeft: '5px' }} /> </h5>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-5"><a className="btn btn-primary rounded-pill w-100" href="#"><img className="me-1" src="img/core-img/fire.png" alt="" />Place a bid</a></div>
                </div>
                <div className="border-top w-75 my-4"></div>
                <div className="short-description">
                  <h5>Short Description</h5>
                  <p className="mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque aut veniam consectetur magnam libero, natus eius numquam reprehenderit hic at, excepturi repudiandae magni optio odio doloribus?</p>
                </div>
                <div className="funto-tab-area" style={{ padding: '20px 0px' }} >
                  <div className="container" style={{ padding: '0' }} >
                    <div className="row">
                      <div className="col-12">
                        <div className="tab--area bg-gray p-4 p-lg-5">
                          <ul className="nav nav-tabs" id="funtoTab" role="tablist">
                            <li className="nav-item"><a className="nav-link rounded-pill bg-gradient active" id="tab--1" data-bs-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Transfer</a></li>
                            <li className="nav-item"><a className="nav-link rounded-pill bg-gradient" id="tab--2" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="true">Create Sale</a></li>
                            <li className="nav-item"><a className="nav-link rounded-pill bg-gradient" id="tab--3" data-bs-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">CreateAution</a></li>
                            <li className="nav-item"><a className="nav-link rounded-pill bg-gradient" id="tab--4" data-bs-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">Bid</a></li>
                            <li className="nav-item"><a className="nav-link rounded-pill bg-gradient" id="tab--5" data-bs-toggle="tab" href="#tab5" role="tab" aria-controls="tab5" aria-selected="false">Make Offer</a></li>
                          </ul>
                          <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                              <div className="" style={{ background: 'transparent' }}>
                                <div class="create-new-wrapper">
                                  <div class="container" style={{ padding: '0' }}>
                                    <div class=" " style={{ border: 'none' }}>
                                      <form action="#">
                                        <div class="row align-items-center">
                                          <div class="col-12">
                                            <div class="form-group mb-4">
                                              <label class="mb-2 fz-20" for="title">Address</label>
                                              <input class="form-control" id="title" type="text" placeholder="Address" />
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 col-md-4" style={{ textAlign: 'right', width: '100%' }}>
                                <button class="btn btn-primary rounded-pill w-100 fz-20 created-btn" type="submit" >Transfer</button>
                              </div>
                            </div>

                            <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab--2">
                              <div className="" style={{ background: 'transparent' }}>
                                <div class="create-new-wrapper">
                                  <div class="container" style={{ padding: '0' }}>
                                    <div class=" " style={{ border: 'none' }}>
                                      <form action="#">
                                        <div class="row align-items-center">
                                          <div class="col-12">
                                            <div class="form-group mb-4">
                                              <label class="mb-2 fz-20" for="title">Price</label>
                                              <input class="form-control" id="title" type="text" placeholder="Price" />
                                            </div>
                                          </div>
                                          <div class="col-12 col-md-4" style={{ textAlign: 'right', width: '100%' }}>
                                            <button class="btn btn-primary rounded-pill w-100 fz-20 created-btn" type="submit" >Create</button>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab--3">
                              <div className="" style={{ background: 'transparent' }}>
                                <div class="create-new-wrapper">
                                  <div class="container" style={{ padding: '0' }}>
                                    <div class=" " style={{ border: 'none' }}>
                                      <form action="#">
                                        <div class="row align-items-center">
                                          <div class="col-12">
                                            <div class="form-group mb-4">
                                              <label class="mb-2 fz-20" for="title">Price</label>
                                              <input class="form-control" id="title" type="text" placeholder="Price" />
                                            </div>
                                            <div class="form-group mb-4">
                                              <label class="mb-2 fz-20" for="startingDate">Created Date</label>
                                              <input class="form-control" id="startingDate" type="date" />
                                            </div>
                                          </div>
                                          <div class="col-12 col-md-4" style={{ textAlign: 'right', width: '100%' }}>
                                            <button class="btn btn-primary rounded-pill w-100 fz-20 created-btn" type="submit">Create</button>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab--4">
                              <div className="" style={{ background: 'transparent' }}>
                                <div class="create-new-wrapper">
                                  <div class="container" style={{ padding: '0' }}>
                                    <div class=" " style={{ border: 'none' }}>
                                      <form action="#">
                                        <div class="row align-items-center">
                                          <div class="col-12">
                                            <div class="form-group mb-4">
                                              <label class="mb-2 fz-20" for="title">Price</label>
                                              <input class="form-control" id="title" type="text" placeholder="Price" />
                                            </div>
                                          </div>
                                          <div class="col-12 col-md-4" style={{ textAlign: 'right', width: '100%' }}>
                                            <button class="btn btn-primary rounded-pill w-100 fz-20 created-btn" type="submit">Create</button>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="tab5" role="tabpanel" aria-labelledby="tab--5">
                              <div className="" style={{ background: 'transparent' }}>
                                <div class="create-new-wrapper">
                                  <div class="container" style={{ padding: '0' }}>
                                    <div class=" " style={{ border: 'none' }}>
                                      <form action="#">
                                        <div class="row align-items-center">
                                          <div class="col-12">
                                            <div class="form-group mb-4">
                                              <label class="mb-2 fz-20" for="title">Price</label>
                                              <input class="form-control" id="title" type="text" placeholder="Price" />
                                            </div>
                                          </div>
                                          <div class="col-12 col-md-4" style={{ textAlign: 'right', width: '100%' }}>
                                            <button class="btn btn-primary rounded-pill w-100 fz-20 created-btn" type="submit">Create</button>
                                          </div>
                                        </div>
                                      </form>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block w-100 mb-40"></div>

      <div className="funto-tab-area" style={{ padding: '50px' }} >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab--area bg-gray p-4 p-lg-5">
                <ul className="nav nav-tabs" id="funtoTab" role="tablist">
                  <li className="nav-item"><a className="nav-link rounded-pill bg-gradient active" id="tab--6" data-bs-toggle="tab" href="#tab6" role="tab" aria-controls="tab7" aria-selected="true">Offers</a></li>
                  <li className="nav-item"><a className="nav-link rounded-pill bg-gradient" id="tab--7" data-bs-toggle="tab" href="#tab7" role="tab" aria-controls="tab7" aria-selected="true">Bids</a></li>
                  <li className="nav-item"><a className="nav-link rounded-pill bg-gradient" id="tab--8" data-bs-toggle="tab" href="#tab8" role="tab" aria-controls="tab8" aria-selected="false">Activity</a></li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab6" role="tabpanel" aria-labelledby="tab--6">
                    <div className="table-responsive border shadow-sm activity-table bg-white">
                      <table className="table mb-0">
                        <tbody>
                          <tr>
                            <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                            <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u1.jpg" alt="" />@creative_art</a></td>
                            <td><i className="bi bi-clock"></i>29 min ago</td>
                            <td><a className="btn btn-danger btn-sm rounded-pill" >Cancel</a></td>
                          </tr>
                          <tr>
                            <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                            <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u2.jpg" alt="" />@designing_world</a></td>
                            <td><i className="bi bi-clock"></i>1h ago</td>
                            <td><a className="btn btn-danger btn-sm rounded-pill" >Cancel</a></td>
                          </tr>
                          <tr>
                            <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/7.jpg" alt="" />Funny Pigs</a></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.105 ETH</span></td>
                            <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u3.jpg" alt="" />@art_world</a></td>
                            <td><i className="bi bi-clock"></i>2h ago</td>
                            <td><a className="btn btn-danger btn-sm rounded-pill" >Cancel</a></td>
                          </tr>
                          <tr>
                            <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/8.jpg" alt="" />Fancy Car 2</a></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.95 ETH</span></td>
                            <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u4.jpg" alt="" />@fancy_car</a></td>
                            <td><i className="bi bi-clock"></i>3h ago</td>
                            <td><a className="btn btn-danger btn-sm rounded-pill" >Cancel</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab7" role="tabpanel" aria-labelledby="tab--7">
                    <div className="table-responsive border shadow-sm activity-table bg-white">
                      <table className="table mb-0">
                        <tbody>
                          <tr>
                            <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                            <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u1.jpg" alt="" />@creative_art</a></td>
                            <td><i className="bi bi-clock"></i>29 min ago</td>
                            <td><a className="btn btn-danger btn-sm rounded-pill" >Cancel</a></td>
                          </tr>
                          <tr>
                            <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                            <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u2.jpg" alt="" />@designing_world</a></td>
                            <td><i className="bi bi-clock"></i>1h ago</td>
                            <td><a className="btn btn-danger btn-sm rounded-pill" >Cancel</a></td>
                          </tr>
                          <tr>
                            <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/7.jpg" alt="" />Funny Pigs</a></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.105 ETH</span></td>
                            <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u3.jpg" alt="" />@art_world</a></td>
                            <td><i className="bi bi-clock"></i>2h ago</td>
                            <td><a className="btn btn-danger btn-sm rounded-pill" >Cancel</a></td>
                          </tr>
                          <tr>
                            <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/8.jpg" alt="" />Fancy Car 2</a></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.95 ETH</span></td>
                            <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u4.jpg" alt="" />@fancy_car</a></td>
                            <td><i className="bi bi-clock"></i>3h ago</td>
                            <td><a className="btn btn-danger btn-sm rounded-pill" >Cancel</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab8" role="tabpanel" aria-labelledby="tab--8">
                    <div className="table-responsive border shadow-sm activity-table bg-white">
                      <table className="table mb-0">
                        <tbody>
                          <tr>
                            <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                            <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u1.jpg" alt="" />@creative_art</a></td>
                            <td><i className="bi bi-cart"></i>Sales</td>
                            <td><i className="bi bi-clock"></i>30 min ago</td>
                          </tr>
                          <tr>
                            <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                            <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u2.jpg" alt="" />@designing_world</a></td>
                            <td><i className="bi bi-percent"></i>Offer</td>
                            <td><i className="bi bi-clock"></i>2h ago</td>
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
      {/* <td><a className="btn btn-danger btn-sm rounded-pill" >Cancel</a></td> */}
    </>
  )
}
export default ItemDetail