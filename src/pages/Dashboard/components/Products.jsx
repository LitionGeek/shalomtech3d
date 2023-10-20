/* eslint-disable react/jsx-no-duplicate-props */
import "./index.css";
import { Container } from "@mui/material/index";
import { Grid } from "@mui/material/index";
import ItemsStepsBuy from "./ItemsStepsBuy";

const Products = () => {
  return (
    <Container component="main" sx={{ margin: "40px 0px" }}>
      <Grid container>
        <Grid item sm="12" md="12" sx={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontFamily: "sans-serif" }}>Compra personalizada rapida y sencilla</h2>
        </Grid>
        <ItemsStepsBuy />
      </Grid>
    </Container>
  );
};

export default Products;
