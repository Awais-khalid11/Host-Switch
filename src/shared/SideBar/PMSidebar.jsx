import { ROUTES } from "../../constants/Routes";
import { DashboardSVG, DashboardactiveSVG, IncomingactiveSVG, IncomingSVG, LogoutSVG, MesaagesactiveSVG, MesaagesSVG, NoteactiveSVG, NoteSVG, RankingactiveSVG, RankingSVG, SettingactiveSVG, SettingSVG, SupportSVG, SupportactiveSVG } from "../../Constants/Icons";


export const pmSideBarLinks = [
  {
    label: "Dashboard",
    to: ROUTES.DASHBOARD,
    labelIcon: DashboardSVG,
    activeIcon: DashboardactiveSVG
  },
  {
    label: "Incoming Leads",
    to: ROUTES.INCOMINGLEADS,
    labelIcon: IncomingSVG,
    activeIcon: IncomingactiveSVG,
  },
  {
    label: "Proposals",
    to: ROUTES.PROPOSALS,
    labelIcon: RankingSVG,
    activeIcon: RankingactiveSVG,
  },
  {
    label: "Invoices",
    to: ROUTES.INVOICES,
    labelIcon: NoteSVG,
    activeIcon: NoteactiveSVG,
  },
  {
    label: "Messages",
    to: ROUTES.MESSAGES,
    labelIcon: MesaagesSVG,
    activeIcon: MesaagesactiveSVG,
  },
  {
    label: "Settings",
    to: ROUTES.SETTINGS,
    labelIcon: SettingSVG,
    activeIcon: SettingactiveSVG,
  },
  {
    label: "Concierge Support",
    to: ROUTES.SUPPORT,
    labelIcon: SupportSVG,
    activeIcon: SupportactiveSVG,
  },
  {
      label: "Log Out",
      to: ROUTES.LOGIN,
      labelIcon: LogoutSVG,
      activeIcon: LogoutSVG,
    },
];

