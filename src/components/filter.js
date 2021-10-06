import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3)
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}));

export default function CustomizedSelects() {
  const [item, setItem] = React.useState("");
  const handleChange = (event) => {
    setItem(event.target.value);
console.log(event.target.value);
  };
  return (

    <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-select-native">Nombre</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={item}
          onChange={handleChange}
          input={<BootstrapInput />}
>
          <option aria-label="None" value="" />
          <option value={"id"}>Id</option>
          <option value={"rutCliente"}>rutCliente</option>
          <option value={"estado"}>estado</option>
          <option value={"pesoTotal"}>pesoTotal</option>
          <option value={"cliente"}>cliente</option>
          <option value={"fechaDespacho"}>fechaDespacho</option>{" "}
          <option value={"nrodebultos"}>nrodebultos</option>
          <option value={"producto"}>producto</option>
          <option value={"nave"}>nave</option>
          <option value={"turno"}>turno</option>
        </NativeSelect>
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-textbox">Producto</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
    </div>
  );
}
