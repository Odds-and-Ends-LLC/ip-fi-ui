// packages
import { SvgIcon, SxProps } from "@mui/material";

// svgs
import * as Svg from "./svgs";

const icons = {
  alert: <Svg.Alert />,
  arrowHeadDown: <Svg.ArrowHeadDown />,
  arrowHeadLeft: <Svg.ArrowHeadLeft />,
  arrowHeadRight: <Svg.ArrowHeadRight />,
  arrowHeadUp: <Svg.ArrowHeadUp />,
  arrowLeft: <Svg.ArrowLeft />,
  arrowRight: <Svg.ArrowRight />,
  asterisk: <Svg.Asterisk />,
  bell: <Svg.Bell />,
  calendar: <Svg.Calendar />,
  camera: <Svg.Camera />,
  check: <Svg.Check />,
  close: <Svg.Close />,
  discord: <Svg.Discord />,
  ethereum: <Svg.Ethereum />,
  expand: <Svg.Expand />,
  eyeOff: <Svg.EyeOff />,
  eyeOn: <Svg.EyeOn />,
  facebook: <Svg.Facebook />,
  file: <Svg.File />,
  info: <Svg.Info />,
  instagram: <Svg.Instagram />,
  link: <Svg.Link />,
  linkedin: <Svg.Linkedin />,
  lock: <Svg.Lock />,
  logout: <Svg.Logout />,
  looksRare: <Svg.LooksRare />,
  mail: <Svg.Mail />,
  openSea: <Svg.OpenSea />,
  pickAvatar: <Svg.PickAvatar />,
  plus: <Svg.Plus />,
  refresh: <Svg.Refresh />,
  remove: <Svg.Remove />,
  settings: <Svg.Settings />,
  share: <Svg.Share />,
  twitter: <Svg.Twitter />,
  upload: <Svg.Upload />,
  wallet: <Svg.Wallet />,
  warning: <Svg.Warning />,
  web: <Svg.Web />,
  xTwitter: <Svg.XTwitter />,
};

export type IconType = keyof typeof icons;

export default function Icon({
  icon,
  color = "inherit",
  fontSize = 24,
  onClick,
  sx,
}: {
  icon: IconType;
  color?: string;
  fontSize?: string | number;
  onClick?: () => void;
  sx?: SxProps;
}) {
  return (
    <SvgIcon
      onClick={onClick}
      inheritViewBox
      sx={{
        color,
        fontSize,
        ...sx,
        cursor: onClick ? "pointer" : "initial",
        pointerEvents: onClick ? "all" : "none",
      }}
    >
      {icons[icon]}
    </SvgIcon>
  );
}
