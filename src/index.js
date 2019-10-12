import React from "react";
import ReactDOM from "react-dom";
import { Grid, Panel } from "@sparkpost/matchbox";
import Logo from "./components/Logo";
import "./styles.scss";

const App = () => {
  return (
    <div>
      <Logo />
      <Grid center="md">
        <Grid.Column md={3}>
          {/* navigation */}
        </Grid.Column>
        <Grid.Column md={9}>
          <Panel sectioned>
            {/* details */}
          </Panel>
        </Grid.Column>
      </Grid>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
