import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getToken } from "./features/user/userSlice";
import Browser from "./pages/Browser";
import Home from "./pages/Home";
import Login from "./pages/Login";
import auth from "./utils/firebase";

const App = () => {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (_user) => {
      if (_user) {
        dispatch(getToken(_user.accessToken));
      }
      return unsubscribe;
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={token ? <Navigate to="/browser" replace /> : <Login />}
        />
        <Route
          path="/browser"
          element={token ? <Browser /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
