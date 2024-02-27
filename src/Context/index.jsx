import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [listaGastos, setListaGastos] = useState([]);
  const [tipoTransacao, setTipoTransacao] = useState(true);

  function excluirTransacao(item, posicao) {
    const remocao = listaGastos.filter((e, i) => {
      return posicao != i;
    });
    setListaGastos(remocao);
    if (item.tipo == true) {
      setTotal(total - item.valor);
      setEntrada(entrada - item.valor);
    }
    if (item.tipo == false) {
      setTotal(total + item.valor);
      setSaida(saida - item.valor);
    }
  }


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
        excluirTransacao,
      }}
    >
      {children}
    </Context.Provider>
  );
};
