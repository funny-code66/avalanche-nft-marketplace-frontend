const AutionItem = ({ nftImage, newBid, newDone, newHot, date, stocks, userImage, name, nickname, price }) => <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={name}>
  <div className="nft-card card border-0">
    <div className="card-body">
      <div className="img-wrap"><img src={nftImage} alt="" />
        {
          !!newBid && <div className="badge bg-dark position-absolute"><img src="/img/core-img/fire.png" alt="" />New Bid</div>
        }
        {
          !!newDone && <div className="badge bg-danger position-absolute"><img src="/img/core-img/fire.png" alt="" />Bid Done</div>
        }
        {
          !!newHot && <div className="badge bg-danger position-absolute"><img src="/img/core-img/fire.png" alt="" />Hot Bid</div>
        }
        <div className="dropdown">
          <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownfx22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownfx22">
            <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
            <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
            <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
          </ul>
        </div>
        <div className="bid-ends" data-date={date}>
          <div><span className="days"></span><span>Days</span></div>
          <div><span className="hours"></span><span>Hours</span></div>
          <div><span className="minutes"></span><span>Min</span></div>
          <div><span className="seconds"></span><span>Sec</span></div>
        </div>
      </div>
      <div className="row gx-2 align-items-center mt-3">
        <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1"></i>{stocks > 0 ? `${stocks} stock available` : 'Not available'}</span></div>
        <div className="col-4 text-end">
          <button className="wishlist-btn" type="button"><i className="bi"></i></button>
        </div>
      </div>
      <div className="row gx-2 align-items-center mt-2">
        <div className="col-8">
          <div className="name-info d-flex align-items-center">
            <div className="author-img position-relative"><img className="shadow" src={userImage} alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
            <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Fancy Car">{name}</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">{nickname}</a></div>
          </div>
        </div>
        <div className="col-4">
          <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
            <h6 className="mb-0">{price} ETH</h6>
          </div>
        </div>
        <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="#">Place Bid</a></div>
      </div>
    </div>
  </div>
</div>


export default AutionItem