// packages
import { Tabs as MuiTabs, Tab, TabsOwnProps, SxProps, TabOwnProps } from "@mui/material";

interface TabProps {
  label: string;
  value: string;
  icon?: any;
  iconPosition?: TabOwnProps["iconPosition"];
}

export default function Tabs({
  value,
  tabs = [], // { label, value, icon, iconPosition }
  onChange = () => {},
  orientation = "horizontal",
  variant = "scrollable",
  tabsStyle = {},
  tabStyle = {},
} : {
  value: string;
  tabs: TabProps[];
  onChange: (value: string) => void;
  orientation?: TabsOwnProps["orientation"];
  variant?: TabsOwnProps["variant"];
  tabStyle?: SxProps;
  tabsStyle?: SxProps;
}) {
  const handleChange = (newValue: string) => {
    onChange(newValue);
  };

  return (
    <MuiTabs
      variant={variant}
      allowScrollButtonsMobile
      value={value || tabs[0]?.value}
      onChange={(_, value) => handleChange(value)}
      orientation={orientation}
      sx={tabsStyle}
    >
      {tabs.map((tab, i) => (
        <Tab
          key={i}
          label={tab.label}
          value={tab.value}
          icon={tab.icon}
          iconPosition={tab.iconPosition}
        />
      ))}
    </MuiTabs>
  );
}
