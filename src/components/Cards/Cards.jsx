import React from "react";
import styles from "./Cards.module.css";
import IndividualCard from "./Card";
import cx from "classnames";
import { Grid } from "@material-ui/core";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <IndividualCard
          param={confirmed}
          lastUpdate={lastUpdate}
          text="Confirmed Cases"
          type="infected"
          header="Confirmed"
        />
        <IndividualCard
          param={recovered}
          lastUpdate={lastUpdate}
          text="Number of people recovered"
          type="recovered"
          header="Recovered"
        />
        <IndividualCard
          param={deaths}
          lastUpdate={lastUpdate}
          text="Number of deaths"
          type="deaths"
          header="Deaths"
        />
      </Grid>
    </div>
  );
};

export default Cards;
