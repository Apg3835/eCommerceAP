import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../reducers/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [totalMerPrice, setTotalMerPrice] = useState(0);
  const [totalAlbumPrice, setTotalalbumPrice] = useState(0);

  const cartBandMerchandise = useSelector(
    (state) => state.cart.cartBandMerchandise
  );

  const cartBandAlbums = useSelector((state) => state.cart.cartBandAlbums);
  console.log(cartBandAlbums);

  const incrementMerchandise = (merchandise) => {
    dispatch(cartActions.addMerchandiseToCart(merchandise));
  };

  const decrementMerchandise = (merchandise) => {
    dispatch(cartActions.removeMechandiseFromCart(merchandise));
  };

  const incrementMusic = (album) => {
    dispatch(cartActions.addAlbumsToCart(album));
  };
  const decrementMusic = (album) => {
    dispatch(cartActions.remvoveAlbumsFromCart(album));
  };

  const storePageHandler = () => {
    navigate("/store");
  };

  useEffect(() => {
    if (cartBandMerchandise.length > 0) {
      TotalAmountOfMerchandise();
    }
  }, [cartBandMerchandise]);

  useEffect(() => {
    if (cartBandAlbums.length > 0) {
      TotalAmountOfAlbum();
    }
  }, [cartBandAlbums]);

  const TotalAmountOfMerchandise = () => {
    const totalAmountOfEachMerchandiseItem = cartBandMerchandise.map(
      (merchandise) => {
        return merchandise.quantity * merchandise.productPrice;
      }
    );
    const total = totalAmountOfEachMerchandiseItem.reduce(
      (previous, current) => {
        return previous + current;
      }
    );
    setTotalMerPrice(total);
  };

  const TotalAmountOfAlbum = () => {
    const totalAmountOfEachAlbumItem = cartBandAlbums.map((album) => {
      return album.quantity * album.albumPrice;
    });
    const total = totalAmountOfEachAlbumItem.reduce((previous, current) => {
      return previous + current;
    });
    setTotalalbumPrice(total);
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
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
                          Shopping Cart
                        </h1>
                        <h6 className="mb-0 text-muted">
                          Total Items:-
                          {cartBandMerchandise.length + cartBandAlbums.length}
                        </h6>
                      </div>
                      <hr className="my-4" />
                      <h3 className="fw-bold mb-5 text-black">
                        {" "}
                        Official Merchandise
                      </h3>
                      {cartBandMerchandise.map((merchandise) => (
                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={merchandise.productImage}
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">
                              {merchandise.productName}
                            </h6>
                            <h6 className="text-black mb-0">
                              {merchandise.productDescription}
                            </h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              onClick={() => decrementMerchandise(merchandise)}
                            >
                              -
                            </button>
                            {merchandise.quantity}
                            <button
                              onClick={() => incrementMerchandise(merchandise)}
                            >
                              +
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">
                              ₹&nbsp;
                              {merchandise.quantity * merchandise.productPrice}
                            </h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i className="fas fa-times"></i>
                            </a>
                          </div>
                        </div>
                      ))}
                      <hr className="my-4" />
                      <h3 className="fw-bold mb-5 text-black">
                        {" "}
                        Official Music Album
                      </h3>
                      {cartBandAlbums.map((album) => (
                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={album.albumImage}
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">{album.albumName}</h6>
                            <h6 className="text-black mb-0">
                              {album.albumYear}
                            </h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button onClick={() => decrementMusic(album)}>
                              -
                            </button>
                            {album.quantity}
                            <button onClick={() => incrementMusic(album)}>
                              +
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">
                              ₹&nbsp;{album.quantity * album.albumPrice}
                            </h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i className="fas fa-times"></i>
                            </a>
                          </div>
                        </div>
                      ))}

                      <hr className="my-4" />
                      <div className="pt-5">
                        <h6 className="mb-0">
                          <a
                            style={{ cursor: "pointer" }}
                            className="text-body"
                            onClick={storePageHandler}
                          >
                            <i className="fas fa-long-arrow-alt-left me-2"></i>
                            Back to shop
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Bill details</h3>
                      {/* <hr className="my-4" /> */}

                      {/* <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">
                          items 3
                        </h5>
                        <h5>€ 132.00</h5>
                      </div> */}
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total amounts</h5>
                        <h5>₹ {totalMerPrice + totalAlbumPrice} </h5>
                      </div>
                      <hr className="my-4" />

                      <button
                        type="button"
                        className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cart;
