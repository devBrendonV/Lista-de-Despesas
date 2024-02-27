import { Box } from "@mui/material";
import React from "react";
import { Saldo } from "../Saldo";
import { Historico } from "../Historico";
import { NovaTransacao } from "../NovaTransacao";
import { Header } from "../Header";

export const Content = () => {
  return (
    <Box
      width={"400px"}
      padding={"10px"}
      height={"850px"}
      margin={"auto"}
      borderRadius={"10px"}
      backgroundColor={"#ffffff30"}
      boxShadow={10}

    >
        <Header/>
        <Saldo/>
        <Historico/>
        <NovaTransacao/>
    </Box>
  );
};
