import React, { Children } from "react";
import Head from "next/head";
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import useStyles from "../utils/styles";
import NextLink from "next/Link";

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Amazon_clone</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Amazon</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved Amazon </Typography>
      </footer>
    </div>
  );
}
