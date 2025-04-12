import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Finance from "../pages/Finance";
import Projection from "../pages/Projection";
import PrivateRoute from "../components/PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/finance" element={
        <PrivateRoute>
          <Finance/>
        </PrivateRoute>
      } />
      <Route path="/projection" element={
        <PrivateRoute>
          <Projection/>
        </PrivateRoute>
      } />
    </Routes>
  );
};

export default AllRoutes;