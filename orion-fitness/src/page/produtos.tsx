import { useEffect, useState } from "react";
import { Card } from "../components/cards.tsx";
import type { produtosData } from "../interface/produtosData";
import api from "../services/api";
import "../css/produto.css"

function Produtos() {
  const [data, setData] = useState<produtosData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await api.get<produtosData[]>("/produtos");
        console.log("Dados recebidos: ", response.data)
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProdutos();
  }, []);

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <div className="container">
      <h1>🛍️ Produtos</h1>
      <div className="card-grid">
        {data.map((produto, index) => (
          <Card
            key={index}
            nome={produto.nome}
            preco={produto.preco}
            descricao={produto.descricao}
            imagem={produto.imagem}
          />
        ))}
      </div>
    </div>
  );
}

export default Produtos;
