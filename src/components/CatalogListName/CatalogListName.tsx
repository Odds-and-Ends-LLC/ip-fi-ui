// packages
import { Stack, Typography } from "@mui/material";

// styles
import styles from "./CatalogListName.module.css";

// components
import { Avatar } from "@/components";

export default function CatalogListName({
  image = "/images/checker.png",
  name,
  description,
  onClick,
  selected,
}: {
  image?: string;
  name: string;
  description?: string;
  onClick?: () => void;
  selected?: boolean;
}) {
  return (
    <Stack
      className={styles.catalogListName}
      sx={{
        pointerEvents: !!onClick ? "auto" : "none",
        backgroundColor: selected ? "background.grayOverlay" : "transparent",
        borderColor: selected ? "background.greenOverlay" : "transparent",
        "&:hover": {
          backgroundColor: "background.grayOverlay",
        },
      }}
    >
      <Avatar size="s" image={image} />
      <Stack className={styles.catalogListNameText}>
        <Typography variant="label2" fontWeight={700} lineHeight="20px" textTransform="none">
          {name}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.disabledBlue">
            {description}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}
