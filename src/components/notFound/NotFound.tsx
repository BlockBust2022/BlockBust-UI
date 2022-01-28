const NotFound = () => {
  return (
  <div className="page-single">
    <div className="container" style={{padding: "15px"}}>
      <div className="row ipad-width">
        <div className="col-md-8 col-sm-12 col-xs-12">
            <h1 style={{color: "white"}}>No Data Found</h1>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12">
          <div className="sidebar">
            <div className="searh-form">
              <h4 className="sb-title">Ads</h4>
              <div className="ads">
                <iframe
                  title="ad"
                  data-aa="1889116"
                  src="//ad.a-ads.com/1889116?size=300x250"
                  style={{
                    width: "300px",
                    height: "250px",
                    border: "0px",
                    padding: "0",
                    overflow: "hidden",
                    backgroundColor: "transparent",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default NotFound;
