const NFTItem = ({ image, featured, bid, userImage, name, nickname, price, love, newBid, hot, sold }) => <div className="col-12 col-sm-6 col-lg-4 col-xl-3 list-item cards">
  <div className="nft-card card shadow-sm">
    <div className="card-body">
      <div className="img-wrap"><img src={image} alt="" />
        {!!featured && <div className="badge bg-primary position-absolute"><img src="/img/core-img/fire.png" alt="" />Featured</div>}
        {!!newBid && <div className="badge bg-dark position-absolute"><img src="/img/core-img/fire.png" alt="" />New Bid</div>}
        {!!hot && <div className="badge bg-dark position-absolute"><img src="/img/core-img/fire.png" alt="" />Hot bid</div>}
        {!!sold && <div className="badge bg-warning position-absolute text-dark">Sold</div>}
        <div className="dropdown">
          <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dgd987" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dgd987">
            <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
            <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
            <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
          </ul>
        </div>
      </div>
      <div className="row gx-2 align-items-center mt-3">
        <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid {bid} ETH</span></div>
        <div className="col-4 text-end">
          <button className={!!love ? "wishlist-btn active" : "wishlist-btn"} type="button"><i className="bi"></i></button>
        </div>
      </div>
      <div className="row gx-2 align-items-center mt-2">
        <div className="col-8">
          <div className="name-info d-flex align-items-center">
            <div className="author-img position-relative"><img className="shadow" src={userImage} alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
            <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title={name}>{name}</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">{nickname}</a></div>
          </div>
        </div>
        <div className="col-4">
          <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
            <h6 className="mb-0">{price} ETH</h6>
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

export default NFTItem