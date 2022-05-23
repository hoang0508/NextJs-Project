import BorrowContainer from "@containers/BorrowContainer/BorrowContainer";
// import { BorrowContainer } from "../../src/containers/BorrowContainer/BorrowContainer";

import { Grid } from "@material-ui/core";

// import { vaultPairs } from "@selectors/solanaWallet";
import { vaultPairs } from "../../src/store/selectors/solanaWallet";

import { useSelector } from "react-redux";
import React from "react";
// import { getUserVaults } from "@selectors/exchange";
import { getUserVaults } from "../../src/store/selectors/exchange";

import useStyles from "./style";
import Layout from "@components/Layout/Layout";

const BorrowPage = () => {
  const pairs = useSelector(vaultPairs);
  const userVaults = useSelector(getUserVaults);
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Layout>
        <BorrowContainer pairs={pairs} userVaults={userVaults} />
      </Layout>
    </Grid>
  );
};

export default BorrowPage;
