// packages
import { Tabs as MuiTabs, Tab, Orientation, TabsOwnProps, SxProps } from "@mui/material";

/**
 *
 * @param {{
 *  value: any,
 *  tabs: Array,
 *  orientation: Orientation,
 *  variant: TabsOwnProps["variant"],
 *  tabsStyle: SxProps,
 *  tabStyle: SxProps }} props
 *
 */

export default function Tabs({
  value,
  tabs = [], // { label, value, icon, iconPosition }
  onChange = () => {},
  orientation = "horizontal",
  variant = "scrollable",
  tabsStyle = {},
  tabStyle = {},
}) {
  const handleChange = (_, newValue) => {
    onChange(newValue);
  };

  return (
    <MuiTabs
      variant={variant}
      allowScrollButtonsMobile
      value={value || tabs[0]?.value}
      onChange={handleChange}
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
          sx={{ typography: { tablet: "button", mobile: "button2" }, ...tabStyle }}
        />
      ))}
    </MuiTabs>
  );
}
