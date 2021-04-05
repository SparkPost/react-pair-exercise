import React from "react";
import AppLayout from "./AppLayout";

const App = () => {
  return (
    <AppLayout>
      <AppLayout.Left>{/* navigation */}</AppLayout.Left>
      <AppLayout.Right>{/* event details */}</AppLayout.Right>
    </AppLayout>
  );
};

export default App;
