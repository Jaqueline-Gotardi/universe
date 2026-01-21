//componente responsável pela tela de Menu "inicial"

import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";

import "../style/tela-menu.css";
import "../style/tela-navegacao.css";
import "../style/criadores.css";

function ExplorerMenu() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(""); //guarda oq for digitado
  const [results, setResults] = useState([]); //um lista [array] q a guarda oq o servidor devolveu
  const [isLoading, setIsLoading] = useState(false); //carregamento...
  const [errorMsg, setErrorMsg] = useState(""); //mensagem de erro, se a busca falhar
  const [selectedCard, setSelectedCard] = useState(null); //card da pesquisa
  const [hasSearched, setHasSearched] = useState(false); //serve para o sistema saber se deve mostrar a tela inicial ou a tela de resultados

  //verifica se a URL pertence a um vídeo (YouTube/Vimeo) ou se já é um link incorporado (embed)
  const isVideo = (url) => url?.includes("youtube.com") || url?.includes("vimeo.com") || url?.includes("embed");
  const getEmbedUrl = (url) => { //converter links comuns do YouTube em links q o navegador permite exibir (embed)

    //verifica se a URL contém os domínios padrões do YouTube
    if (url.includes("youtube.com") || url.includes("youtu.be")) { 

      //expressão para localizar e extrair apenas o código de identificação do vídeo (ID)
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

      //encontrar uma correspondência entre a URL digitada e a fórmula acima
      const match = url.match(regExp);

      //se achar o ID (match[2]) e ele tiver 11 caracteres, monta a URL final de "embed", senão, mantém a URL original
      return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : url;
    }
    return url; //se não for um link do YouTube, retorna a URL original 
  };

  //lógica para fundo galáctico animado, para q as estrelas não mudem de lugar sempre q uma letra for digitada. A posição das estrelas é "decorada" para serem recalculadas
  const cosmicBackground = useMemo(() => {
    const stars = Array.from({ length: 150 }, (_, i) => ({ //para as estrelas
      id: `star-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5, //atraso
    }));
    const comets = Array.from({ length: 6 }, (_, i) => ({ //para os cometas (posição e animação)
      id: `comet-${i}`,
      top: `${Math.random() * 40}%`,
      delay: Math.random() * 20,
      duration: Math.random() * 4 + 3,
    }));
    return { stars, comets };
  }, []);

  //lógica de pesquisar
  const handleSearch = async () => {
    const query = searchQuery.trim();
    if (!query) { //se não houver pesquisa
      setErrorMsg("O vácuo não responde... Digite algo para pesquisar!");
      setResults([]);
      return;
    }

    //se houver pesquisa, vai carregar, sem dá mensagem de erro e a sbuca será feita
    setIsLoading(true);
    setErrorMsg("");
    setHasSearched(true);

    try {
      const response = await fetch(`http://localhost:3000/search?title=${encodeURIComponent(query)}`); //usar o termo pesquisado na url
      if (!response.ok) throw new Error("Erro na conexão"); //se a resposta não for ok
      const data = await response.json(); //transforma em json, de uma forma que o navegador entenda

      if (!data || data.length === 0) { //caso contrário...
        setErrorMsg(`Não encontramos registros de "${query}" nesta galáxia.`);
        setResults([]);
      } else {
        setResults(data);
      }
    } catch (err) {
      setErrorMsg("Falha na comunicação intergaláctica. Verifique o servidor.", err);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  //para identifica se tem um item APOD nos resultados
  const apodItem = useMemo(() => { //"useMeno" é como um guardador de memória
    return results.find(item => item.isApod || searchQuery.toLowerCase() === 'apod');
  }, [results, searchQuery]);

  //filtra os outros resultados para não duplicar o APOD
  const otherResults = useMemo(() => {
    if (!apodItem) return results;
    return results.filter(item => item !== apodItem);
  }, [results, apodItem]);





  return (
    <div></div>
  );
}

export default ExplorerMenu;