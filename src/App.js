import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import UserManagement from "./pages/UserManagement";
import Navbar from "./components/Navbar";
import Albums from "./pages/Albums";
import Comments from "./pages/Comments";
import Photos from "./pages/Photos";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import Login from "./pages/Login";
import PublicRoutes from "./components/PublicRoutes";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<UserManagement />} />
            <Route path="/album/:userId?" element={<Albums />} />
            <Route path="/comment/:postId?" element={<Comments />} />
            <Route path="/photo/:albumId?" element={<Photos />} />
            <Route path="/post/:userId?" element={<Posts />} />
            <Route path="/todo/:userId?" element={<Todos />} />
            <Route path="/user" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
