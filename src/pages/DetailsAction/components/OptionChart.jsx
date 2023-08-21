import { Grid } from "@mui/material/index";
import { Container } from "@mui/material/index";
import { Select, ButtonIcon, InputRadio, BasicDatePicker } from "../../../components";
import { useEffect, useState } from "react";
import { intervals } from "../../../utils";

const OptionChart = () => {
  const [config, setconfig] = useState({
    interval: "0",
  });

  const handleChange = (key, value) => {
    setconfig((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    let miliseconds = intervals[config.interval]?.minutes * 60000;
    sessionStorage.setItem("configChart", JSON.stringify({ ...config, miliseconds }));
  }, [config]);

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} sx={{ display: "flex" }}>
          <InputRadio handleSelect={handleChange} />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "flex" }}>
          <BasicDatePicker label="Fecha desde" handleSelect={handleChange} name="date_from" />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "flex" }}>
          <BasicDatePicker label="Fecha hasta" handleSelect={handleChange} name="date_to" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Select
            label="Intervalo de tiempo"
            onChange={(e) => handleChange("interval", e)}
            defaultValue=""
            name={"interval"}
            value={config.interval}
            options={intervals}
          />
        </Grid>
        <Grid item xs={12} md={2} sx={{ display: "flex", alignItems: "center" }}>
          <ButtonIcon>Graficar</ButtonIcon>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OptionChart;
