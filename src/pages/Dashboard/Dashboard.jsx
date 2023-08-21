import { Container } from "@mui/material/index";
import { SelectSimbolo } from "./components";
import { MisAcciones } from "./components/index";
import { HeaderUser } from "../../components";
import React from "react";

const MemoHeader = React.memo(HeaderUser);
const MemoMisacciones = React.memo(MisAcciones);

const Dashboard = () => {
  return (
    <Container component="main" maxWidth="lg">
      <MemoHeader />
      <br />
      <SelectSimbolo />
      <MemoMisacciones />
    </Container>
  );
};

export default Dashboard;
