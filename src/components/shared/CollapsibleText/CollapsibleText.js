// packages
import { Button, Typography, Stack } from "@mui/material";
import { useState } from "react";

//styles
import styles from "./CollapsibleText.module.css";

export default function CollapsibleText({ children }) {
  const [collapsed, setCollapsed] = useState(children.length > 150);

  return (
    <Stack
      className={styles.collapsibleText}
    >
      <Typography
        variant="body1"
        color="text.gray"
      >
        {collapsed ? `${children.slice(0, 150)}...` : children}
      </Typography>
      {(children.length > 150 && collapsed) &&
        <Button
          variant="text"
          color="white"
          onClick={()=> setCollapsed(!collapsed)}
        >
          Show more
        </Button>
      }
    </Stack>
  )
};
