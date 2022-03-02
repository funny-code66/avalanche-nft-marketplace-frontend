const collections = [
  {
    image: [
      '/img/bg-img/39.jpg',
      '/img/bg-img/38.jpg',
      '/img/bg-img/6.jpg',
      '/img/bg-img/10.jpg',
    ],
    category: 'Arts',
    number: 206,
  },
  {
    image: [
      '/img/bg-img/35.jpg',
      '/img/bg-img/34.jpg',
      '/img/bg-img/25.jpg',
      '/img/bg-img/27.jpg',
    ],
    category: 'Photos',
    number: 973,
  },
  {
    image: [
      '/img/bg-img/18.jpg',
      '/img/bg-img/20.jpg',
      '/img/bg-img/37.jpg',
      '/img/bg-img/36.jpg',
    ],
    category: 'Collectibles',
    number: 1098,
  },
]

const Collection = ({ home,
  collection }) => {
  return (
    <>
      {
        home && <>
          <div className="collection-wrapper" style={{ marginTop: '135px' }}>
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <div className="section-heading">
                    <h2 className="mb-0 ms-3">Browse by category</h2>
                  </div>
                </div>
                <div className="col-5 text-end"><a className="btn rounded-pill btn-outline-primary btn-sm border-2" href="collections.html">View all catagories</a></div>
              </div>
            </div>
            <div className="container" style={{ padding: '50px 0px' }}>
              <div className="row g-4 justify-content-center">
                {collections.map((collection) => <div className="col-12 col-md-10 col-lg-4">
                  <div className="catagory-card card shadow-sm">
                    <div className="card-body">
                      <div className="row g-1">
                        <div className="col-6"><img className="rounded" src={collection.image[0]} alt="" /><img className="rounded" src={collection.image[1]} alt="" /></div>
                        <div className="col-6"><img className="rounded" src={collection.image[2]} alt="" /><img className="rounded" src={collection.image[3]} alt="" /></div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-8">
                          <h5 className="mb-0">{collection.category}<span className="badge bg-primary ms-2">{collection.number}</span></h5>
                        </div>
                        <div className="col-4 text-end"><a className="btn btn-minimal hover-primary" href="explore-1.html">View all<i className="ms-1 fz-14 bi bi-arrow-right"></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>)

                }
              </div>
            </div>
          </div>
        </>
      }
      {
        collection && <>
          <div className="collection-wrapper">
            <div class="breadcrumb-wrapper">
              <div class="container">
                <div class="breadcrumb-content">
                  <h2 class="breadcrumb-title">Collection</h2>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                      <li class="breadcrumb-item"><a href="/">Home</a></li>
                      <li class="breadcrumb-item active" aria-current="page">Collection</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="container" style={{ padding: '50px 0px' }}>
              <div className="row g-4 justify-content-center">
                {collections.map((collection) => <div className="col-12 col-md-10 col-lg-4">
                  <div className="catagory-card card shadow-sm">
                    <div className="card-body">
                      <div className="row g-1">
                        <div className="col-6"><img className="rounded" src={collection.image[0]} alt="" /><img className="rounded" src={collection.image[1]} alt="" /></div>
                        <div className="col-6"><img className="rounded" src={collection.image[2]} alt="" /><img className="rounded" src={collection.image[3]} alt="" /></div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-8">
                          <h5 className="mb-0">{collection.category}<span className="badge bg-primary ms-2">{collection.number}</span></h5>
                        </div>
                        <div className="col-4 text-end"><a className="btn btn-minimal hover-primary" href="explore-1.html">View all<i className="ms-1 fz-14 bi bi-arrow-right"></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>)

                }
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
}
export default Collection