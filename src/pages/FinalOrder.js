import { useNavigate } from "react-router-dom";

const FinalOrder = () => {
  const navigate = useNavigate();

  const orderHistoryHandler = () => {
    navigate("/orderHistory");
  };

  return (
    <div>
      <section
        className="h-100 h-custom"
        style={{ backgroundColor: "#d2c9ff" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Thank You For Ordering
                          </h1>
                        </div>
                        <hr className="my-4" />
                        <h3 className="fw-bold mb-5 text-black">
                          {" "}
                          Go to the order history To view Your previous orders
                          &nbsp;
                          <span
                            style={{ color: "green", cursor: "pointer" }}
                            onClick={orderHistoryHandler}
                          >
                            here!
                          </span>
                          {/* <button
                            style={{
                              marginTop: "8px",
                              margin: "auto",
                              height: "35px",
                              borderRadius: "5px",
                              color: "green",
                            }}
                          >
                            Go to see order history
                          </button> */}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default FinalOrder;
