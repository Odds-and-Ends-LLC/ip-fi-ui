// packages
import { Tabs as MuiTabs, Tab } from "@mui/material";

export default function Tabs({
  value,
  tabs = [], // { label, value, icon }
  onChange = () => {},
  orientation,
  variant = "scrollable",
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
    >
      {tabs.map((tab, i) => (
        <Tab key={i} label={tab.label} value={tab.value} icon={tab.icon} />
      ))}
    </MuiTabs>
  );
}
