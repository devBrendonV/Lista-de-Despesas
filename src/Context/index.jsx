import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [listaGastos, setListaGastos] = useState([]);
  const [tipoTransacao, setTipoTransacao] = useState(true);


  return (
    <Context.Provider
      value={{
        total,
        entrada,
        saida,
        listaGastos,
        tipoTransacao,
        setTipoTransacao,
        setTotal,
        setEntrada,
        setSaida,
        setListaGastos,
      }}
    >
      {children}
    </Context.Provider>
  );
};
