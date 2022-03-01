const NFTDrop = ({ ranking, nftImage, userImage, nftName, userName, price }) => <div className="nft-card card shadow-sm mb-4">
  <div className="card-body">
    <div className="row align-items-center g-3">
      <div className="col-4">
        <div className="img-wrap"><img src={nftImage} alt="" />
          <div className="badge bg-danger position-absolute px-2 py-1">{ranking}</div>
        </div>
      </div>
      <div className="col-8">

        <div className="meta-info">
          <div className="name-info d-flex align-items-center mb-3">
            <div className="author-img position-relative"><img className="shadow" src={userImage} alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
            <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Pixel Cartoon">{nftName}</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">{userName}</a></div>
          </div>
          <div className="price-bid d-flex align-items-center">
            <div className="price me-2 me-sm-3">
              <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">{price} ETH</h6>
            </div><a className="btn btn-minimal btn-sm hover-primary d-flex align-items-center" href="#"><img className="me-1" src="/img/core-img/fire.png" alt="" />Place bid</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

export default NFTDrop