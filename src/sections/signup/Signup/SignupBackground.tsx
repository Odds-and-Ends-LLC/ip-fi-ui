// packages
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";

// styles
import styles from "./Signup.module.css";

// components
import { Circle } from "@/components";

// types

export default function SignupBackground({ step }: { step: number }) {
  const greenCircleRotationValues = [16, -134, -293, -343, -513];
  const purpleCircleRotationValues = [-38, -98, -225, -408, -495];
  const outlineCircleRotationValues = [6, -118, -270, -328, -505];
  const [circleRotationValues, setCircleRotationValues] = useState<{
    green: number;
    purple: number;
    outline: number;
  }>({
    green: greenCircleRotationValues[0],
    purple: purpleCircleRotationValues[0],
    outline: outlineCircleRotationValues[0],
  });

  const greenCirclePositionValues = [{ x: 8 }, { x: 150 }, { x: 0 }, { x: -336 }, { x: 96 }];
  const purpleCirclePositionValues = [{ x: 0 }, { x: -96 }, { x: 8 }, { x: -136 }, { x: -192 }];
  const outlineCirclePositionValues = [{ x: -80 }, { x: 16 }, { x: 156 }, { x: 120 }, { x: 48 }];
  const [circlePositionValue, setCirclePositionValues] = useState<{
    green: { x?: number };
    purple: { x?: number };
    outline: { x?: number };
  }>({
    green: greenCirclePositionValues[0],
    purple: purpleCirclePositionValues[0],
    outline: outlineCirclePositionValues[0],
  });

  useEffect(() => {
    setCircleRotationValues({
      green: greenCircleRotationValues[step],
      purple: purpleCircleRotationValues[step],
      outline: outlineCircleRotationValues[step],
    });
    setCirclePositionValues({
      green: greenCirclePositionValues[step],
      purple: purpleCirclePositionValues[step],
      outline: outlineCirclePositionValues[step],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  return (
    <Stack className={styles.bgContainer}>
      <Box
        className={styles.bgGreenCircleContainer}
        component={motion.div}
        initial={{
          rotate: `${greenCircleRotationValues[0]}deg`,
          x: greenCirclePositionValues[0].x,
        }}
        animate={{
          rotate: `${circleRotationValues?.green}deg`,
          x: circlePositionValue.green.x,
        }}
        transition={{ bounce: 0, duration: 0.4 }}
      >
        <Circle size={400} absolute fillColor="text.brandSecondary" top={0} right={0} />
      </Box>
      <Box
        className={styles.bgPurpleCircleContainer}
        component={motion.div}
        initial={{
          rotate: `${purpleCircleRotationValues[0]}deg`,
        }}
        animate={{
          rotate: `${circleRotationValues?.purple}deg`,
          x: circlePositionValue.purple.x,
          y: step === 4 ? -48 : 0,
        }}
        transition={{ bounce: 0, duration: 0.4 }}
      >
        <Circle size={200} absolute fillColor="primary.main" bottom={0} right={0} />
      </Box>
      <Box
        className={styles.bgCircleOutlineContainer}
        component={motion.div}
        initial={{
          rotate: `${outlineCircleRotationValues[0]}deg`,
          x: outlineCirclePositionValues[0].x,
        }}
        animate={{
          rotate: `${circleRotationValues?.outline}deg`,
          x: circlePositionValue.outline.x,
        }}
        transition={{ bounce: 0, duration: 0.4 }}
      >
        <Circle
          size={248}
          absolute
          fillColor="transparent"
          borderColor="secondary.main"
          bottom={0}
          left={0}
        />
      </Box>
    </Stack>
  );
}
