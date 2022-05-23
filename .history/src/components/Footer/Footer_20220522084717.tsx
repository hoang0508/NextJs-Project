import React from "react";
import { Divider, Grid, Hidden } from "@material-ui/core";
import useStyles from "./style";
import { social } from "@static/links";
import linkedin from "@static/svg/linkedin-circle.svg";
import github from "@static/svg/github-circle.svg";
import discord from "@static/svg/discord-circle.svg";
import twitter from "@static/svg/twitter-circle.svg";
import telegram from "@static/svg/telegram-circle.svg";
import Image from "next/image";
const Icons = () => {
  const classes = useStyles();

  return (
    <>
      <Image
        src={telegram}
        alt={"telegram"}
        className={classes.socialMedia}
        width={500}
        height={500}
        priority
        onClick={() => window.open(social.telegram)}
      />
      <img
        src={github}
        alt={"github"}
        className={classes.socialMedia}
        onClick={() => window.open(social.github)}
      />
      <img
        src={linkedin}
        alt={"linkedin"}
        className={classes.socialMedia}
        onClick={() => window.open(social.linkedin)}
      />
      <img
        src={twitter}
        alt={"twitter"}
        className={classes.socialMedia}
        onClick={() => window.open(social.twitter)}
      />
      <img
        src={discord}
        alt={"discord"}
        className={classes.socialMedia}
        onClick={() => window.open(social.discord)}
      />
    </>
  );
};

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Hidden mdDown>
        <Grid container className={classes.fixedWrapper}>
          <Icons />
        </Grid>
      </Hidden>
      <Hidden lgUp>
        <Divider className={classes.divider} />
        <Grid container className={classes.container}>
          <Icons />
        </Grid>
      </Hidden>
    </>
  );
};

export default Footer;
