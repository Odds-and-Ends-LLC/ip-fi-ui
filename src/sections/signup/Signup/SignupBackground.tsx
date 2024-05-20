// packages
import { useMemo } from "react";
import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";

// styles
import styles from "./Signup.module.css";

// components
import { Circle } from "@/components";

// types

export default function SignupBackground({ step }: { step: number }) {
  const circleRotationValues = useMemo(() => {
    const greenCircle = [16, -134, -293, -343, -513];
    const purpleCircle = [-38, -98, -225, -408, -495];
    const outlineCircle = [6, -118, -270, -328, -505];
    return {
      green: greenCircle[step],
      purple: purpleCircle[step],
      outline: outlineCircle[step],
    };
  }, [step]);

  const circlePositionValue = useMemo(() => {
    const greenCircle = [{ x: 8 }, { x: 150 }, { x: 0 }, { x: -336 }, { x: 96 }];
    const purpleCircle = [{ x: 0 }, { x: -96 }, { x: 8 }, { x: -136 }, { x: -192 }];
    const outlineCircle = [{ x: -80 }, { x: 16 }, { x: 156 }, { x: 120 }, { x: 48 }];
    return {
      green: greenCircle[step],
      purple: purpleCircle[step],
      outline: outlineCircle[step],
    };
  }, [step]);

  return (
    <Stack className={styles.bgContainer}>
      <Box
        className={styles.bgGreenCircleContainer}
        component={motion.div}
        initial={{
          rotate: `${circleRotationValues.green}deg`,
          x: circlePositionValue.green.x,
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
          rotate: `${circleRotationValues.purple}deg`,
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
          rotate: `${circleRotationValues.outline}deg`,
          x: circlePositionValue.outline.x,
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
