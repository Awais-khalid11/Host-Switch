import { DashboardSVG, DashboardactiveSVG, IncomingactiveSVG, IncomingSVG, LogoutSVG, MesaagesactiveSVG, MesaagesSVG, NoteactiveSVG, NoteSVG, RankingactiveSVG, RankingSVG, SettingactiveSVG, SettingSVG, SupportSVG, SupportactiveSVG, HleadsSVG, PmcompanySVG, HleadactiveSVG, PmcompanyactiveSVG } from "../../Constants/Icons";
import { ROUTES } from "../../constants/Routes";


export const AdminSidbar = [
  {
    label: "Dashboard",
    to: ROUTES.ADMINDASHBOARD,
    labelIcon: DashboardSVG,
    activeIcon: DashboardactiveSVG
  },
     {
    label: "Hosts Leads",
    to: ROUTES.ADMINHOSTLEADS,
    labelIcon: HleadsSVG,
    activeIcon: HleadactiveSVG,
  },
  {
    label: "PM Companies",
    to: ROUTES.ADMINPMCOMPANIES,
    labelIcon: PmcompanySVG,
    activeIcon: PmcompanyactiveSVG,
  },
  {
    label: "Invoices",
    to: ROUTES.ADMININVOICES,
    labelIcon: NoteSVG,
    activeIcon: NoteactiveSVG,
  },
   {
    label: "Settings",
    to: ROUTES.ADMINSETTINGS,
    labelIcon: SettingSVG,
    activeIcon: SettingactiveSVG,
  },
  {
    label: "Concierge Support",
    to: ROUTES.ADMINCONCIERGEMESSAGES,
    labelIcon: SupportSVG,
    activeIcon: SupportactiveSVG,
  },
  {
      label: "Log Out",
      to: "/login",
      labelIcon: LogoutSVG,
      activeIcon: LogoutSVG,
    },
];