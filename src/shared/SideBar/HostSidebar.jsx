import { ROUTES } from "../../constants/Routes";
import { DashboardSVG, DashboardactiveSVG, IncomingactiveSVG, IncomingSVG, LogoutSVG, MesaagesactiveSVG, MesaagesSVG, NoteactiveSVG, NoteSVG, RankingactiveSVG, RankingSVG, SettingactiveSVG, SettingSVG, SupportSVG, SupportactiveSVG } from "../../Constants/Icons";


export const HostSidbar = [
  {
    label: "Dashboard",
    to: ROUTES.HOSTDASHBOARD,
    labelIcon: DashboardSVG,
    activeIcon: DashboardactiveSVG
  },
   {
    label: "Porposals",
    to: ROUTES.HOSTPORPOSALS,
    labelIcon: IncomingSVG,
    activeIcon: IncomingactiveSVG,
  },
  {
    label: "My Matches",
    to: ROUTES. HOSTMYMATCHES,
    labelIcon: RankingSVG,
    activeIcon: RankingactiveSVG,
  },
  {
    label: "My Submissions",
    to: ROUTES.HOSTMYSUBMISSIONS,
    labelIcon: NoteSVG,
    activeIcon: NoteactiveSVG,
  },
  {
    label: "Messages",
    to: ROUTES.HOSTMESSAGES,
    labelIcon: MesaagesSVG,
    activeIcon: MesaagesactiveSVG,
  },
   {
    label: "Settings",
    to: ROUTES.HOSTSETTINGS,
    labelIcon: SettingSVG,
    activeIcon: SettingactiveSVG,
  },
  {
    label: "Concierge Support",
    to: ROUTES.HOSTCONCIERGESUPPORT,
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

