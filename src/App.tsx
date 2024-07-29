import React from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthPages from "./pages/AuthPages";
import { Route, Routes } from "react-router-dom";
import ForgotCredential from "./components/authPages/ForgotCredential";
import Dashboard from "./components/maindashboard/Dashboard";
import MainDashbord from "./pages/MainDashbord";
import HomeDashboard from "./pages/HomeDashboard";
import UsagesDashboard from "./pages/UsagesDashboard";
import SubcriptionDashboard from "./pages/SubcriptionDashboard";
import FamilyMemberDashboard from './pages/FamilyMemberDashboard';
import FrequentlyAskedQuestion from "./components/FAQ/FrequentlyAskedQuestion";
import Notifications from "./pages/Notifications";
import SupportPage from "./pages/SupportPage";
import MyofferPage from "./pages/MyofferPage";
import Profilepage from "./pages/Profilepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<AuthPages />} />
        {/* <Route path="/" element={<MainDashbord />} /> */}
        <Route path="/" element={<MainDashbord />}>
          <Route index element={<HomeDashboard />} />
          <Route path="home-dashboard" element={<HomeDashboard />} />
          <Route path="usage-dashboard" element={<UsagesDashboard />} />
          <Route path="subcription-dashboard" element={<SubcriptionDashboard />} />
          <Route path="familyMember-dashboard" element={<FamilyMemberDashboard />} />
          <Route path="FaqDashboard" element={<FrequentlyAskedQuestion />} />
          <Route path="notification" element={<Notifications/>} />
          <Route path="Myoffers" element={<MyofferPage/>} />
          <Route path="Support-Dashboard" element={<SupportPage/>} />
          <Route path="Profile" element={<Profilepage/>} />
        </Route>
        <Route path="/home-dashboard" element={<HomeDashboard />} />
        <Route path="/forgot-credential" element={<ForgotCredential />} />
      </Routes>
    </div>
  );
}

export default App;
