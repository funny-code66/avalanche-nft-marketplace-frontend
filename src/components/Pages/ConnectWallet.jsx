const walletItems = [
  {
    image: 'img/bg-img/metamask.png',
    name: 'Metamask',
    state: 'Hot',
  },
  {
    image: 'img/bg-img/coinbase.png',
    name: 'Coinbase Wallet'
  },
  {
    image: 'img/bg-img/kaikas.png',
    name: 'Kaikas'
  },
  {
    image: 'img/bg-img/venly.png',
    name: 'Venly'
  },
]

const ConnectWallet = () => {
  return (
    <>
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="breadcrumb-content">
            <h2 className="breadcrumb-title">Connect Wallet</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Wallet</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="connect-wallet-wrapper">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-70">Connect with one of our available wallet providers.</h2>
          </div>
          <div className="row g-4 g-xl-5 justify-content-center">
            {
              walletItems.map((walletItem) => <div className="col-12 col-md-9 col-lg-6 col-xl-5">
                <div className="card wallet-card shadow-sm">
                  <div className="card-body px-4">
                    <div className="d-flex align-items-center">
                      <div className="img-wrap"><img src={walletItem.image} alt="" /></div>
                      <h4 className="mb-0 me-3">{walletItem.name}<span className="badge bg-danger rounded-pill align-top fz-12 ms-1">{walletItem.state}</span></h4><a className="btn btn-sm btn-warning rounded-pill ms-auto" href="#">Connect<i className="ms-1 bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>)
            }
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  )
}
export default ConnectWallet