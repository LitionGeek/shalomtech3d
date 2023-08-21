import { Container } from "@mui/material/index";
import { OptionChart, ActionInfo } from "./components";
import { HeaderUser } from "../../components";
import React from "react";

const MemoHeader = React.memo(HeaderUser);

const DetailsAction = () => {
  return (
    <Container>
      <MemoHeader />
      <OptionChart />
      <ActionInfo />
    </Container>
  );
};

export default DetailsAction;
