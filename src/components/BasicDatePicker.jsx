/* eslint-disable react/prop-types */
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment/moment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

export default function ResponsiveDateTimePickers(props) {
  const [date, setDate] = useState(moment());
  const handleSelect = (value) => {
    setDate(value);
    props.handleSelect(props.name, moment(value).format("DD-MM-YYYY"));
  };
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={props.label}
          value={date}
          inputFormat="dd-mm-yyyy"
          format="DD-MM-YYYY"
          onChange={(newValue) => handleSelect(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
