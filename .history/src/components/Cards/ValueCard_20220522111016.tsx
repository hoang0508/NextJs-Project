import React, { ReactChild } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
// import AnimatedNumber from '@components/AnimatedNumber'
import AnimatedNumber from "react-animated-number";
import HintIcon from "@static/svg/questionMark.svg";
import MobileTooltip from "@components/MobileTooltip/MobileTooltip";
import { showPrefix, formatNumbers } from "@consts/utils";
import useStyles from "./style";
import Image from "next/image";

export interface IProps {
  name: string;
  value: string;
  sign: string;
  hint?: string | ReactChild;
  hintTitle?: string;
  onClick?: () => void;
}
const ValueCard: React.FC<IProps> = ({ name, value, sign, hint, onClick }) => {
  const classes = useStyles();
  return (
    <Card className={classes.valueCard} onClick={onClick}>
      <CardContent className={classes.cardContent}>
        {hint ? (
          <MobileTooltip
            hint={hint}
            anchor={
              <Image
                width={30}
                height={30}
                src={HintIcon}
                alt=""
                className={classes.questionMark}
              />
            }
            mobilePlacement="top-end"
            desktopPlacement="top-end"
          />
        ) : null}
        <Typography
          className={classes.valueCardTitle}
          style={{ marginBottom: 18 }}
        >
          {name}
        </Typography>
        <Typography className={classes.valueCardAmount}>
          <AnimatedNumber
            value={value}
            duration={300}
            formatValue={formatNumbers}
          />
          {showPrefix(Number(value))}
          {sign}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ValueCard;
