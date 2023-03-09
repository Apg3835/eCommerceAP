import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import StorePage from "./pages/StorePage";
import { getUserProfileAction } from "./reducers/asyncAuthReducer";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import OrderHistory from "./pages/OrderHistory";
import {
  addAlbumAction,
  addMerchandiseAction,
  getAlbumData,
  getMerchandiseData,
} from "./reducers/asyncDataReducer";

function App() {
  const cart = useSelector((state) => state.cart);
  const cartBandMerchandise = useSelector(
    (state) => state.cart.cartBandMerchandise
  );
  const cartBandAlbums = useSelector((state) => state.cart.cartBandAlbums);
  const userData = useSelector((state) => state.auth.userProfileData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.cartChanged) {
      dispatch(
        addMerchandiseAction({
          userLocalId: userData.localId,
          merchandiseCart: cartBandMerchandise,
        })
      );
      dispatch(
        addAlbumAction({
          userLocalId: userData.localId,
          albumCart: cartBandAlbums,
        })
      );
    }
  }, [cart]);

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, []);
  useEffect(() => {
    if (userData) {
      dispatch(getMerchandiseData(userData.localId));
      dispatch(getAlbumData(userData.localId));
    }
  }, [userData]);

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/store" element={<StorePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/updateProfile" element={<UpdateProfile />}></Route>
        <Route path="/orderHistory" element={<OrderHistory />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
