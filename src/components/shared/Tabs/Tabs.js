// packages
import { Tabs as MuiTabs, Tab } from "@mui/material";

export default function Tabs({
  value,
  tabs = [], // { label, value }
  onChange = () => {},
}) {
  const handleChange = (_, newValue) => {
    onChange(newValue);
  };

  return (
    <MuiTabs value={value || tabs[0]?.value} onChange={handleChange}>
      {tabs.map((tab, i) => <Tab key={i} label={tab.label} value={tab.value} />)}
    </MuiTabs>
  )
}
