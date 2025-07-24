import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
import PMLayout from "./components/Layout/PMLayout/PMLayout";
import HostLayout from "./components/Layout/HostLayout/HostLayout";
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
import AdminLayout from "./components/Layout/AdminLayout/AdminLayout";
import AdminHostsLeadsPage from "./pages/AdminPages/AdminHostsLeadsPage";
import AdminPMCompaniesPage from "./pages/AdminPages/AdminPMCompaniesPage";
import AdminInvoicesPage from "./pages/AdminPages/AdminInvoicesPage";
import AdminSettingsPage from "./pages/AdminPages/AdminSettingsPage";
import AdminConciergeMessagesPage from "./pages/AdminPages/AdminConciergeMessagesPage";
import AdminLiveChat from "./components/Admin/AdminLiveChat/AdminLiveChat";
import BellNotification from "./components/Notification/BellNotification";
import AdminBellNotification from "./components/Admin/AdminNotification/AdminBellNotification";
import PMNotification from "./components/PMNotification/PMNotification";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/pm" element={<PMLayout />}>
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
        <Route path="pmnotification" element={<PMNotification />} />
      </Route>

      <Route path="/host" element={<HostLayout />}>
        <Route index element={<Navigate to="/host/hostdashboard" />} />
        <Route path="hostdashboard" element={<HostDashboardPage />} />
        <Route path="hostproposals" element={<HostProposalsPage />} />
        <Route path="hostmymatches" element={<HostMyMatchesPages />} />
        <Route path="hostmysubmissions" element={<HostMySubmissionsPage />} />
        <Route path="hostmessages" element={<HostMessagesPage />} />
        <Route path="hostsettings" element={<HostSettingsPage />} />
        <Route
          path="hostconciergesupport"
          element={<HostConciergeSupportPage />}
        />
        <Route path="hostlivechat" element={<HostLiveChat />} />
        <Route path="hostsubmission" element={<HostSubmission />} />
        <Route path="hostproposalview" element={<HostProposalView />} />
        <Route path="hostfeedback" element={<HostFeedback />} />
        <Route path="mymatchproposal" element={<MyMatchProposal />} />
        <Route path="/host/bellnotification" element={<BellNotification />} />
      </Route>

      {/* Admin Dashboard Pages */}
      <Route path="/admin" element={<AdminLayout />}>
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
        <Route path="adminbellnotification" element={<AdminBellNotification />} />
      </Route>

      {/* Auth Routes (without layout) */}
      <Route path="/login" element={<Login />} />
      <Route path="/password" element={<Password />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path="/companyinfo" element={<CompanyInfo />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/expectation" element={<Expectation />} />
      <Route path="/submitting" element={<Submitting />} />

      {/* Host Routes */}
      <Route path="/hostcompanyinfo" element={<HostCompanyInfo />} />
      <Route path="/hostexpectation" element={<HostExpectation />} />
      <Route path="/hostportfolio" element={<HostPortfolio />} />
    </Routes>
  );
};

export default MainRouter;
