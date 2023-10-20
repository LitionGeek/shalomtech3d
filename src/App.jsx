import { BrowserRouter, Route } from "react-router-dom/dist/index.js";
import { Dashboard } from "./pages";
import { Authenticated } from "../src/routes";
import { PublicRoutes } from "../src/models/routes.js";
import { RoutesNotFound } from "../src/utils";
import "./App.css";
import ResponsiveAppBar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ChatWhatsapp from "./components/ChatWhatsapp";
function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />

      <RoutesNotFound>
        <Route path={PublicRoutes.Home} element={<Dashboard />} />
        <Route element={<Authenticated />}></Route>
      </RoutesNotFound>
      <ChatWhatsapp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
