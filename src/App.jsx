import { BrowserRouter } from "react-router-dom";
import Router from "./shared/Router";
import Navigation from "./components/Navigation";
import AuthProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
