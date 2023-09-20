import { Home } from "./components/home-page/Home";
import { Login } from "./components/login-page/Login";
import { Register } from "./components/register-page/Register";
import { Catalog } from "./components/gallery-page/Catalog";
import { Create } from "./components/create-page/Create";
import { Details } from "./components/details-page/Details";
import { Edit } from "./components/edit-page/Edit";
import { Profile } from "./components/profile-page/Profile";
import { NotFound } from "./components/not-found-page/NotFound";
import { Footer } from "./components/footer/Footer";
import { Logout } from "./components/logout/Logout";
import { Delete } from "./components/delete/Delete";

import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { RouteGards } from "./util/RouteGards";

import AuthContextProvider from "./context/AuthContext";
import GalleryContextProvider from "./context/GalleryContext";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";

function App() {
  return (
    <>
      <AuthContextProvider >
        <Navigation />

        <ErrorBoundary>
          <GalleryContextProvider >
            <Routes >
              <Route path="/" element={<Home />} ></Route>
              <Route path="/login" element={<Login />} ></Route>
              <Route path="/logout" element={<Logout />} ></Route>
              <Route path="/register" element={<Register />} ></Route>
              <Route path="/catalog" element={<Catalog />} ></Route>
              <Route path="/create" element={<RouteGards><Create /> </RouteGards>} ></Route>
              <Route path="/details/:id" element={<Details />} ></Route>
              <Route path="/delete/:id" element={<RouteGards><Delete /> </RouteGards>} ></Route>
              <Route path="/edit/:id" element={<RouteGards><Edit /> </RouteGards>} ></Route>
              <Route path="/profile" element={<RouteGards><Profile /> </RouteGards>} ></Route>
              <Route path="/*" element={<NotFound />} ></Route>
            </Routes>
          </GalleryContextProvider>
        </ErrorBoundary>

      </AuthContextProvider>
      <Footer />
    </>
  );
}

export default App;
