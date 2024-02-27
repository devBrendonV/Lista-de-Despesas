import React, { useState, useContext } from "react";
import { Box, Typography,IconButton } from "@mui/material";
import { Context } from "../../Context";
import DeleteIcon from "@mui/icons-material/Delete";


export const ItemLista = (prop) => {
  const [opcao, setOpcao] = useState(false);
  const {excluirTransacao } = useContext(Context);
  const data = prop.value;
  return (
    <Box
      boxSizing={"border-box"}
      boxShadow={5}
      backgroundColor={"#faf7f7df"}
      flexDirection={"row"}
      marginBottom={"5px"}
      height={"50px"}
      width={"100%"}
      onMouseLeave={() => setOpcao(false)}
      onMouseEnter={() => setOpcao(true)}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderRight={`7px solid ${data.tipo == true ? "#08f32fdf" : "#f00b0bed"}`}
      title={`${data.tipo == true ? "+" : "-"} R$${data.valor}`}
    >
      <Typography
        display={"flex"}
        alignItems={"center"}
        width={"50%"}
        paddingLeft={"5px"}
        height={"45px"}
      >
        {data.transacao}
      </Typography>

      <Box
        as={"div"}
        display={`${opcao == true ? "flex" : "none"}`}
        flexDirection={"row"}
        justifyContent={"flex-end"}
        marginRight={"10px"}
        width={"50%"}
      >
        <IconButton
          title="Delete"
          onClick={() => excluirTransacao(data.conteudo, data.indice)}
        >
          <DeleteIcon sx={{ fontSize: 25 , color:"#c91111"}} />
        </IconButton>

      </Box>
    </Box>
  );
};
