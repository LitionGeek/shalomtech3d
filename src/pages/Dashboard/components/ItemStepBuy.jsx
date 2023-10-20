/* eslint-disable react/prop-types */
import { Grid } from "@mui/material/index";

const ItemStepBuy = ({ image, title, description }) => {
  return (
    <Grid container>
      <Grid item sm="12" md="12" sx={{ marginBottom: "40px" }}>
        <img
          src={image}
          alt="imagen1"
          width={"30%"}
          height={"40%"}
          className={title === "Envios a domicilio" ? "moving-image" : ""}
        />
        <h3 style={{ fontSize: "1.2rem", fontFamily: "sans-serif" }}>{title}</h3>
        <span>{description}</span>
      </Grid>
    </Grid>
  );
};

export default ItemStepBuy;
