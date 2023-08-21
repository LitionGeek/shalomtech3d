import { loadAbort, intervals } from "../utils";

export const getData = async (searchTerm) => {
  const controller = loadAbort();

  try {
    const response = await fetch(`https://api.twelvedata.com/symbol_search?symbol=${searchTerm}&source=docs`, {
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    if (data) {
      return data?.data?.map((p, index) => {
        return { symbol: p.symbol, currency: p.currency, label: p.instrument_name, id: index, key: index };
      });
    }
    return [];
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
export const fetchAction = async (symbol) => {
  let url;
  let getConfig = sessionStorage.getItem("configChart") ? JSON.parse(sessionStorage.getItem("configChart")) : "";
  if (getConfig.option === "historic") {
    url = `https://api.twelvedata.com/time_series?start_date=${getConfig.start_date}&end_date=${
      getConfig.end_date
    }&outputsize=5&symbol=${symbol}&interval=${intervals[getConfig.interval].interval}&apikey=${
      import.meta.env.VITE_REACT_API
    }`;
  } else {
    url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${
      intervals[getConfig.interval].interval
    }&apikey=${import.meta.env.VITE_REACT_API}`;
  }

  return await fetch(url)
    .then((res) => res.json())
    .then((res) => res);
};
