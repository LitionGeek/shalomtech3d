import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchAction } from "../../../service/getActions";
import { useEffect, useState } from "react";
import Loading from "../../../components/Loading";
import { Grid } from "@mui/material/index";
import { useLocation } from "react-router-dom/dist/index";
import { createOptions } from "./utils/createOptionsChart";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CoinInfo = () => {
  const [action, setaction] = useState({ labels: [], datasets: [] });
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let symbol = params.get("symbol");
  let optionChart = createOptions(symbol);
  
  const getAction = async () => {
    const res = await fetchAction(symbol);
    let createlabel = res?.values?.map((coin) => {
      let date = new Date(coin.datetime);
      let time = `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
      return time;
    });
    setaction({
      labels: createlabel.reverse(),
      datasets: [
        {
          backgroundColor: "#459def",
          label: symbol,
          borderColor: "#459def",
          data: res.values?.map((sampling) => sampling.high),
        },
      ],
    });
  };

  useEffect(() => {
    getAction();
    const getConfig = sessionStorage.getItem("configChart");
    const intervalValue = JSON.parse(getConfig)?.miliseconds;
    const intervalMilliseconds = setInterval(getAction, intervalValue);

    return () => {
      clearInterval(intervalMilliseconds);
    };
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        {action.datasets.length > 0 ? <Line options={optionChart} data={action} /> : <Loading />}
      </Grid>
    </Grid>
  );
};

export default CoinInfo;
