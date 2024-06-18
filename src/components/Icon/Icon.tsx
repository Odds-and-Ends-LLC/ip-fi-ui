// packages
import { SvgIcon, SxProps } from "@mui/material";

// types
import { ResponsiveCssProp } from "@/types";

// svgs
import * as Svg from "./svgs";

const icons = {
  active: <Svg.Active />,
  add: <Svg.Add />,
  alert: <Svg.Alert />,
  arrowExpand: <Svg.ArrowExpand />,
  arrowHeadDown: <Svg.ArrowHeadDown />,
  arrowHeadLeft: <Svg.ArrowHeadLeft />,
  arrowHeadRight: <Svg.ArrowHeadRight />,
  arrowHeadUp: <Svg.ArrowHeadUp />,
  arrowLeft: <Svg.ArrowLeft />,
  arrowRight: <Svg.ArrowRight />,
  asterisk: <Svg.Asterisk />,
  avatar: <Svg.Avatar />,
  calendar: <Svg.Calendar />,
  camera: <Svg.Camera />,
  check: <Svg.Check />,
  chevronDown: <Svg.ChevronDown />,
  chevronUp: <Svg.ChevronUp />,
  close: <Svg.Close />,
  delete: <Svg.Delete />,
  discord: <Svg.Discord />,
  download: <Svg.Download />,
  ended: <Svg.Ended />,
  ethereum: <Svg.Ethereum />,
  eyeOff: <Svg.EyeOff />,
  eyeOn: <Svg.EyeOn />,
  facebook: <Svg.Facebook />,
  info: <Svg.Info />,
  instagram: <Svg.Instagram />,
  link: <Svg.Link />,
  linkedIn: <Svg.LinkedIn />,
  logout: <Svg.Logout />,
  looksRare: <Svg.LooksRare />,
  message: <Svg.Message />,
  openSea: <Svg.OpenSea />,
  password: <Svg.Password />,
  proposal: <Svg.Proposal />,
  refresh: <Svg.Refresh />,
  remove: <Svg.Remove />,
  settings: <Svg.Settings />,
  share: <Svg.Share />,
  twitter: <Svg.Twitter />,
  twitterX: <Svg.TwitterX />,
  undo: <Svg.Undo />,
  upload: <Svg.Upload />,
  wallet: <Svg.Wallet />,
  website: <Svg.Website />,
};

export type IconType = keyof typeof icons;

export default function Icon({
  icon,
  color = "inherit",
  size = 24,
  onClick,
  sx,
}: {
  icon: IconType;
  color?: string;
  size?: ResponsiveCssProp<24 | 18 | "full">;
  onClick?: () => void;
  sx?: SxProps;
}) {
  return (
    <SvgIcon
      onClick={onClick}
      inheritViewBox
      sx={{
        color,
        ...sx,
        // fontSize: size,
        cursor: onClick ? "pointer" : "initial",
        pointerEvents: onClick ? "all" : "none",
        aspectRatio: 1 / 1,
        height: size === "full" ? "100%" : size,
        width: size === "full" ? "100%" : size,
      }}
    >
      {icons[icon]}
    </SvgIcon>
  );
}
