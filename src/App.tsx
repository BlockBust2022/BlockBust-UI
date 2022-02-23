import { HomePage } from "./containers/homepage/Homepage";
import { SearchResult } from "./containers/searchResult/SearchResult";
import { StreamPage } from "./containers/streamPage/StreamPage";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import SignIn from "./containers/signIn/SignIn";
import AdminDashboard from "./containers/adminDashboard/AdminDashboard";
import { authUser } from "./constant/auth";
import RequireAuth from "./components/requireAuth/RequireAuth";
import PrivacyPolicy from "./containers/PrivacyPolicy";
import TermsOfUse from "./containers/TermsOfUse";
import Ads from "./containers/Ads";
import AboutUs from "./containers/AboutUs";

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchResult />} />
      <Route path="/stream/:id" element={<StreamPage />} />
      <Route path="/stream/:source/:id" element={<StreamPage />} />
      <Route
        path="/admin/login"
        element={
          <TestAuth>
            <SignIn />
          </TestAuth>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <RequireAuth>
            <AdminDashboard />
          </RequireAuth>
        }
      />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/ads" element={<Ads />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
    </Routes>
  );
}

export default App;

function TestAuth({ children }: { children: JSX.Element }) {
  let location = useLocation();
  if (!authUser()) {
    return children;
  }

  return <Navigate to="/admin/dashboard" state={{ from: location }} replace />;
}
