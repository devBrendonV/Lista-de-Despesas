import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../Context";
import { Box, Typography, Button } from "@mui/material";
import OpcoesDeTransacao from "./OpcoesDeTransacao";
import EntradaDeValores from "./EntradaDeValores";
import AddIcon from "@mui/icons-material/Add";

export const NovaTransacao = () => {
  const { adicionar, setTipoTransacao, tipoTransacao } = useContext(Context);

  const [texto, setTexto] = useState("");
  const [valor, setValor] = useState("");

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"230px"}
      color={"black"}
    >
      <Typography
        color={"#020941dd"}
        fontWeight={"b"}
        fontSize={20}
        height={"35px"}
        borderBottom={"1px solid #ad0cf7"}
      >
        Adicionar transação
      </Typography>

      <OpcoesDeTransacao func={{ setTipoTransacao: setTipoTransacao }} />

      <EntradaDeValores
        value={{ valor: valor, texto: texto }}
        func={{ adicionar: adicionar, setValor: setValor, setTexto: setTexto }}
      />
      <Button
        startIcon={<AddIcon />}
        style={{
          color: "#180202",
          backgroundColor: `${
            texto !== "" && valor !== 0 && valor !== ""
              ? tipoTransacao
                ? "#0de429"
                : "#f70d0dd5"
              : "#857e7ed5"
          }`,
          padding: "10px",
        }}
        onClick={() => {
          if (texto !== "" && valor !== 0 && valor !== "") {
            adicionar(valor, texto);
            setValor("");
            setTexto("");
          }
        }}
      >
        ADICIONAR
      </Button>
    </Box>
  );
};
