import React, { useContext } from "react";
import { Context } from "../../Context";
import { Box, Typography } from "@mui/material";
import { ItemLista } from "./ItemLista";

export const Historico = () => {
  const {
    listaGastos
  } = useContext(Context);


  return (
    <Box height={"300px"}>
      <Typography
        color={"#020941dd"}
        fontWeight={"b"}
        fontSize={20}
        height={"35px"}
        borderBottom={"1px solid #ad0cf7"}
      >
        Hístorico
      </Typography>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={`${listaGastos == 0 ? "center" : "flex-start"}`}
        margin={"10px 0px 0px 0"}
        paddingRight={"5px"}
        alignItems={"center"}
        color={"black"}
        fontSize={18}
        height={"250px"}
        overflow={"auto"}
        boxSizing={"border-box"}
      >
        {listaGastos == "" ? "Lista Vazia" : listaGastos.map((e, i) => {
      return (
        <ItemLista
          key={i}
          value={{
            transacao: e.nome,
            tipo: e.tipo,
            valor: e.valor,
            indice: i,
            conteudo: e
          }}
        ></ItemLista>
      );
    })}
      </Box>
    </Box>
  );
};
