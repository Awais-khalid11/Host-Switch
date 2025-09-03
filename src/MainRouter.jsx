import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Auths/Login/Login";
import Password from "./components/Auths/Password/Password";
import Otp from "./components/Auths/Otp/Otp";
import NewPassword from "./components/Auths/NewPassword/NewPassword";
// import PMLayout from "./components/PMLayout/PMLayout";
import IncomingLeadsPage from "./pages/PMPages/IncomingLeadsPage";
import PMDashboardPage from "./pages/PMPages/PMDashboardPage";
import ProposalsPage from "./pages/PMPages/ProposalsPage";
import InvoicesPage from "./pages/PMPages/InvoicesPage";
import MessagesPage from "./pages/PMPages/MessagesPage";
import SettingsPage from "./pages/PMPages/SettingsPage";
import CompanyInfo from "./components/Auths/Onboarding/CompanyInfo/CompanyInfo";
import Portfolio from "./components/Auths/Onboarding/Portfolio/Portfolio";
import Expectation from "./components/Auths/Onboarding/Expectation/Expectation";
import Submitting from "./components/Auths/Submitting/Submitting";
import ConciergeSupportPage from "./pages/PMPages/ConciergeSupportPage";
import Views from "./components/Views/Views";
import SendProposal from "./components/SendProposal/SendProposal";
import InvoiceView from "./components/InvoiceView/InvoiceView";
import PaidInvoice from "./components/PaidInvoice/PaidInvoice";
import Pay from "./components/Pay/Pay";
import LiveChat from "./components/PM/ConciergeSupport/LiveChat";

import HostDashboardPage from "./pages/HostPages/HostDashboardPage";
import HostProposalsPage from "./pages/HostPages/HostProposalsPage";
import HostMyMatchesPages from "./pages/HostPages/HostMyMatchesPages";
import HostMySubmissionsPage from "./pages/HostPages/HostMySubmissionsPage";
import HostMessagesPage from "./pages/HostPages/HostMessagesPage";
import HostSettingsPage from "./pages/HostPages/HostSettingsPage";
import HostConciergeSupportPage from "./pages/HostPages/HostConciergeSupportPage";
import HostCompanyInfo from "./components/Host/HostSignup/HostOnboarding/HostCompanyInfo/HostCompanyInfo";
import HostExpectation from "./components/Host/HostSignup/HostOnboarding/HostExpectation/HostExpectation";
import HostPortfolio from "./components/Host/HostSignup/HostOnboarding/HostPortfolio/HostPortfolio";
import HostLiveChat from "./components/Host/ConciergeSupport/HostLiveChat";
import HostSubmission from "./components/Host/MySubmissions/HostSubmission";
import HostProposalView from "./components/Host/HostProposals/HostProposalView/HostProposalView";
import HostFeedback from "./components/Host/HostProposals/HostFeedback/HostFeedback";
import MyMatchProposal from "./components/Host/MyMatch/MyMatchProposal/MyMatchProposal";
import AdminDashboardPage from "./pages/AdminPages/AdminDashboardPage";
import AdminHostsLeadsPage from "./pages/AdminPages/AdminHostsLeadsPage";
import AdminPMCompaniesPage from "./pages/AdminPages/AdminPMCompaniesPage";
import AdminInvoicesPage from "./pages/AdminPages/AdminInvoicesPage";
import AdminSettingsPage from "./pages/AdminPages/AdminSettingsPage";
import AdminConciergeMessagesPage from "./pages/AdminPages/AdminConciergeMessagesPage";
import AdminLiveChat from "./components/Admin/AdminLiveChat/AdminLiveChat";
import Unlock from "./components/Unlock/Unlock";
import PmVerified from "./components/Admin/PmVerfied/PmVerified";
import RoleSelection from "./components/Auths/RoleSelection/RoleSelection";
import AdminIconNotification from "./components/AdminIconNotification/AdminIconNotification";
import PMIconNotification from "./components/PMIconNotification/PMIconNotification";
import HostIconNotification from "./components/HostIconNotification/HostIconNotification";
import MainLayout from "./components/Layout/MainLayout/MainLayout";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./pages/NotFound";
import PmSignUp from "./components/PmSignUp/PmSignUp";
const MainRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Auth Routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/companyinfo" element={<CompanyInfo />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/expectation" element={<Expectation />} />
        <Route path="/submitting" element={<Submitting />} />
        <Route path="/roleselection" element={<RoleSelection />} />
        <Route path="/hostcompanyinfo" element={<HostCompanyInfo />} />
        <Route path="/hostexpectation" element={<HostExpectation />} />
        <Route path="/hostportfolio" element={<HostPortfolio />} />
        <Route path="/pmsignup" element={<PmSignUp />} />
        <Route path="*" element={<NotFound />} />
        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          {/* PM Routes */}
          <Route path="/pm" element={<MainLayout property="PM" />}>
            <Route index element={<Navigate to="/pm/dashboard" />} />
            <Route path="dashboard" element={<PMDashboardPage />} />
            <Route path="incomingleads" element={<IncomingLeadsPage />} />
            <Route path="proposals" element={<ProposalsPage />} />
            <Route path="invoices" element={<InvoicesPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="conciergesupport" element={<ConciergeSupportPage />} />
            <Route path="views" element={<Views />} />
            <Route path="sendproposal" element={<SendProposal />} />
            <Route path="invoiceview" element={<InvoiceView />} />
            <Route path="paidinvoice" element={<PaidInvoice />} />
            <Route path="pay" element={<Pay />} />
            <Route path="livechat" element={<LiveChat />} />
            <Route path="pmiconnotification" element={<PMIconNotification />} />
          </Route>

          {/* Host Routes */}
          <Route path="/host" element={<MainLayout property="Host" />}>
            <Route index element={<Navigate to="/host/hostdashboard" />} />
            <Route path="hostdashboard" element={<HostDashboardPage />} />
            <Route path="hostproposals" element={<HostProposalsPage />} />
            <Route path="hostmymatches" element={<HostMyMatchesPages />} />
            <Route
              path="hostmysubmissions"
              element={<HostMySubmissionsPage />}
            />
            <Route path="hostmessages" element={<HostMessagesPage />} />
            <Route path="hostsettings" element={<HostSettingsPage />} />
            <Route
              path="hostconciergesupport"
              element={<HostConciergeSupportPage />}
            />
            <Route path="hostlivechat" element={<HostLiveChat />} />
            <Route path="hostsubmission" element={<HostSubmission />} />
            <Route path="hostproposalview/:id" element={<HostProposalView />} />
            <Route path="hostfeedback" element={<HostFeedback />} />
            <Route path="mymatchproposal" element={<MyMatchProposal />} />
            <Route path="unlock" element={<Unlock />} />
            <Route
              path="hosticonnotification"
              element={<HostIconNotification />}
            />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<MainLayout property="Admin" />}>
            <Route index element={<Navigate to="/admin/admindashboard" />} />
            <Route path="admindashboard" element={<AdminDashboardPage />} />
            <Route path="adminhostsleads" element={<AdminHostsLeadsPage />} />
            <Route path="adminpmcompanies" element={<AdminPMCompaniesPage />} />
            <Route path="admininvoices" element={<AdminInvoicesPage />} />
            <Route path="adminsettings" element={<AdminSettingsPage />} />
            <Route
              path="adminconciergemessages"
              element={<AdminConciergeMessagesPage />}
            />
            <Route path="adminlivechat" element={<AdminLiveChat />} />
            <Route
              path="adminiconnotification"
              element={<AdminIconNotification />}
            />
            <Route path="pmVerified" element={<PmVerified />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
