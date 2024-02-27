import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function OpcaoTransacao(prop) {
  return (
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        padding: "5px 0",
      }}
    >
      <FormLabel id="demo-radio-buttons-group-label">
        Tipo de transação:
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="entrada"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="entrada"
          control={<Radio onChange={() => prop.func.setTipoTransacao(true)} />}
          label="Entrada"
        />
        <FormControlLabel
          value="saida"
          control={<Radio onChange={() => prop.func.setTipoTransacao(false)} />}
          label="Saída"
        />
      </RadioGroup>
    </FormControl>
  );
}
