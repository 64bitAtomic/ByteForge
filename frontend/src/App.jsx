import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Editor from "./pages/Editor";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <RouterHandler />
      </BrowserRouter>
    </>
  );
};

const RouterHandler = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/editor/:id"
          element={isLoggedIn ? <Editor /> : <Navigate to={"/login"} />}
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};
export default App;
