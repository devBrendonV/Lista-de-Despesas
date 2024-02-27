import * as React from "react";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

export default function EntradaValores(prop) {
  const max = 100000000;
  const min = 0;
  return (
    <FormControl sx={{ display: "flex", width: "100%", paddingBottom: "25px" }}>
      <TextField
        variant="standard"
        sx={{
          marginBottom: "10px",
          padding: "5px",
        }}
        inputProps={{
          maxLength: 15,
        }}
        value={prop.value.texto}
        label="Digite o nome da transação:"
        type="text"
        onChange={(e) => prop.func.setTexto(e.target.value.trim())}
        onKeyDown={(e) => {
          if (
            prop.value.texto !== "" &&
            prop.value.valor > 0 &&
            prop.value.valor != ""
          ) {
            if (e.key === "Enter") {
              prop.func.adicionar(prop.value.valor, prop.value.texto);
              prop.func.setValor("");
              prop.func.setTexto("");
            }
          }
        }}
      />

      <TextField
        variant="standard"
        sx={{ padding: "5px" }}
        value={prop.value.valor}
        label="Digite o valor da transação:"
        type="number"
        onKeyDown={(e) => {
          if (
            prop.value.texto !== "" &&
            prop.value.valor > 0 &&
            prop.value.valor != ""
          ) {
            if (e.key === "Enter") {
              prop.func.adicionar(prop.value.valor, prop.value.texto);
              prop.func.setValor("");
              prop.func.setTexto("");
            }
          }
        }}
        onChange={(e) => {
          if (e.target.value != "") {
            prop.func.setValor(
              parseFloat(Math.sqrt(e.target.value ** 2).toFixed(2))
            );
          }
          if (e.target.value > max) {
            prop.func.setValor(max);
          }
          if (e.target.value <= min) {
            prop.func.setValor(min);
          }
        }}
      />
    </FormControl>
  );
}
