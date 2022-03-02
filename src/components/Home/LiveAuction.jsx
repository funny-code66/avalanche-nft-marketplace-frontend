import AutionItem from "./AutionItem"

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

const LiveAuction = () => {
  return (
    <>
      <div class="breadcrumb-wrapper">
        <div class="container">
          <div class="breadcrumb-content">
            <div class="d-flex align-items-center justify-content-center">
              <div class="spinner-grow text-danger me-1" role="status"><span class="visually-hidden">Loading...</span></div>
              <h2 class="breadcrumb-title mb-0">Live Autions</h2>
            </div>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Live Autions</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="live-bids-wrapper" style={{ paddingBottom: '150px' }}>
        <div class="container">
          <div class="row g-4 justify-content-center">
            {
              auctions.map((auction) => <AutionItem nftImage={auction.nftImage} newBid={auction.newBid} newDone={auction.newDone} newHot={auction.newHot} date={auction.date} stocks={auction.stocks} userImage={auction.userImage} name={auction.name} nickname={auction.nickname} price={auction.price} />)
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default LiveAuction