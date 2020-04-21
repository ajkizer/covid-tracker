import React from "react";
import cx from "classnames";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";

const IndividualCard = ({ param, lastUpdate, text, type, header }) => {
  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      className={cx(styles.card, styles[type])}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {header}
        </Typography>
        <Typography variant="h5">
          <CountUp
            start={0}
            end={param.value}
            duration={2.5}
            separator=","
          ></CountUp>
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
    </Grid>
  );
};

export default IndividualCard;
