//componente responsável pela tela de Menu "inicial"
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../navigation/SearchBox/SearchBox";

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

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

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
      const response = await fetch(`${API_BASE_URL}/search?title=${encodeURIComponent(query)}`, {  //usar o termo pesquisado na url
        credentials: 'include', //para enviar cookies
      });
      
      if (!response.ok) throw new Error("Erro na conexão"); //se a resposta não for ok
      const data = await response.json(); //transforma em json, de uma forma que o navegador entenda

      if (!data || data.length === 0) { //caso contrário...
        setErrorMsg(`Não encontramos registros de "${query}" nesta galáxia.`);
        setResults([]);
      } else {
        setResults(data);
      }
    } catch (err) {
      if (!window.navigator.onLine) { //se a internet cair no meio das buscas
        setErrorMsg("Você está fora de órbita! Verifique sua conexão com a internet.");
      } else {
        setErrorMsg("O centro de comando (servidor) não responde. Tente novamente mais tarde.", err);
      }
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
    <div className="tela-menu" style={{ position: "relative", minHeight: "100vh", color: "white", overflowX: "hidden" }}>
      
      {/* camada de fundo animado */} 
      <div className="cosmic-engine">
        {cosmicBackground.stars.map((star) => ( //animação para as estrelas
          <div
            key={star.id}
            className="star-field"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animation: `star-animation ${star.duration}s infinite ease-in-out ${star.delay}s`,
            }}
          />
        ))}
        {cosmicBackground.comets.map((comet) => ( //animação para os cometas
          <div
            key={comet.id}
            className="comet-trail"
            style={{
              top: comet.top,
              animation: `commet-animation ${comet.duration}s infinite linear ${comet.delay}s`,
            }}
          />
        ))}
      </div>

      {/* estrutura do header: vem depois do fundo no código para sobrepor visualmente os elementos galácticos */}
      <header className="faixa-topo">
        <div className="container-busca">
          <SearchBox  //SearchBox é o componente responsável pela criação do input de pesquisas
            searchQuery={searchQuery} //acessar o valor digitado
            setSearchQuery={setSearchQuery} //oq foi digitado
            onSearch={handleSearch} //com base no valor digitado, a pesquisa será feita
            isLoading={isLoading} //carregamento
          />
        </div>
        <nav className="botoes-navegacao">
          <button className="btn-menu-principal" onClick={() => navigate('/app/menu')}>
            MENU
          </button>
          <button className="btn-home" onClick={() => navigate('/app')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/> {/* construção da porta do ícone da casinha */}
            </svg>
          </button> 
        </nav>
      </header>

      {/* conteúdo principal */}
      <main className="container-principal">
        
        {/* mensagem de carregamento personalizada, bloqueia interação enquanto a busca ocorre */}
        {isLoading && (
          <div className="loading-overlay-intergalactico">
             <div className="scanner-container">
                <div className="scanner-line"></div>
                <div className="radar-circles">
                  <span></span><span></span><span></span> {/* elementos animados do radar de busca */}
                </div>
             </div>
             <h2 className="texto-sintonizando">Sintonizando frequências intergalácticas...</h2>
          </div>
        )}

        {errorMsg && ( //para a mensagem de erro
          <div className="alerta-cosmico">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span>{errorMsg}</span>
          </div>
        )}

        {/* tela de carregamento inicial: só ativa se não houver carregamento, resultados ou erro  */}
        {!isLoading && results.length === 0 && !errorMsg && ( //se não estiver carregando, e se não tiver erros, então. . .
          <div className="hero-universo">
            <div className="container-titulo-flutuante">
              <svg className="svg-foguete" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.5-1 1-4c2 1 3 3 3 3z" />
                <path d="M15 15v5c-1 0-3-1-4-3 0 0 2-1 4-2z" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
              <h1 className="titulo-flutuante">
                Explore o Desconhecido
                <svg className="svg-estrela" viewBox="0 0 24 24" fill="#8b5cf6">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </h1>
            </div>
            <p className="descricao-cosmica">
              Navegue pelo cosmos através dos arquivos da <span>NASA</span> e descubra os segredos estelares que aguardam por você.
            </p>

            {/* box de instrução extra */}
            {!hasSearched && ( //se nada for pesquisado, mostre...
              <div className="card-instrucao-inicial">
                <div className="icon-tip">💡</div>
                <p><strong>Dica de Explorador:</strong> Digite <span>"apod"</span> na busca para sintonizar a <strong>Imagem Astronômica do Dia</strong> oficial da NASA!</p>
              </div>
            )}
          </div>
        )}

        {/* estrutura de vizualização da APOD pesquisada */}
        {!isLoading && apodItem && ( //se não estiver carregando e a pesquisa for "apod", ela vai ter uma estilização mais "especial"
          <div
            style={{
              width: "100%",
              maxWidth: "1400px",
              padding: "20px",
              margin: "0 auto",
              animation: "fade-in 0.6s ease-out",
            }}
          >
            {/* título de destaque especial */}
            <div className="titulo-destaque-nasa">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="#fbbf24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
               <h2>IMAGEM DO DIA • DESTAQUE ESPECIAL DA NASA</h2>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="#fbbf24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            </div>

            <div
              onClick={() => setSelectedCard(apodItem)} //clicar no card da apod
              style={{
                background: "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.1))",
                border: "2px solid rgba(139, 92, 246, 0.4)",
                borderRadius: "30px",
                padding: "40px",
                marginBottom: "50px",
                cursor: "pointer",
                transition: "all 0.4s ease",
                backdropFilter: "blur(15px)",
              }}
              className="apod-container-hover"
            >

              {/* estrutura e estilização do card da apod */}
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "25px" }}>
                <div style={{
                   width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.3))", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)"
                }}>
                   <span style={{ fontSize: "28px", margin: "auto" }}>🌌</span>
                </div>
                <div>
                  <h2 style={{ fontFamily: "'Orbitron', sans-serif", color: "#a78bfa", fontSize: "1.5rem", margin: 0 }}>
                    Imagem Astronômica do Dia
                  </h2>
                  <p style={{ margin: 0, opacity: 0.7, fontSize: "0.9rem" }}>✨ Capturado pelos telescópios da NASA</p>
                </div>
              </div>

              <h3 style={{ fontFamily: "'Orbitron', sans-serif", color: "white", fontSize: "1.8rem", marginBottom: "20px" }}>
                {apodItem.title}
              </h3>

              <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", boxShadow: "0 0 30px rgba(0,0,0,0.5)" }}>
                {isVideo(apodItem.href) ? ( //se a apod for vídeo, então recebe outro tipo de estrutura e estilização
                  <iframe
                    src={getEmbedUrl(apodItem.href)}
                    style={{ width: "100%", aspectRatio: "16/9", minHeight: "450px", border: "none" }}
                    allowFullScreen
                    title="APOD Video"
                  />
                ) : ( //senão, (se for img) segue essa regra
                  <img
                    src={apodItem.href}
                    alt={apodItem.title}
                    style={{ width: "100%", maxHeight: "600px", objectFit: "cover", transition: "transform 0.7s" }}
                    className="apod-img-zoom"
                  />
                )}
              </div>

              {/* estrutura e estilização do "rodapé" desse card da apod */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "20px" }}>
                  <p style={{ fontFamily: "'Space Mono', monospace", color: "rgba(167, 139, 250, 0.8)", fontSize: "1rem", margin: 0 }}>
                    📅 {apodItem.date_created || "Exploração de Hoje"}
                  </p>
                  <span style={{ color: '#06b6d4', fontWeight: 'bold', fontSize: '0.9rem' }}>
                    CLIQUE PARA MAIS DETALHES
                    </span>
              </div>
            </div>
          </div>
        )}

        {/* estrutura e estilização para as outras pesquisas (sem ser apod) */}
        {!isLoading && otherResults.length > 0 && (
          <div className="galeria-universo">
            {otherResults.map((item, idx) => ( //idx é a abreviação de index
              <div key={idx} className="card-universo" onClick={() => setSelectedCard(item)}> {/* card selecionado/clicado */}
                <div className="imagem-wrap">
                  <img src={item.href} alt={item.title} loading="lazy" />
                  <div className="hover-info">VER DETALHES</div>
                </div>
                <div className="info-txt">
                  <h3>{item.title}</h3>
                  <small>{item.date_created ? new Date(item.date_created).toLocaleDateString() : 'Exploração Recente'}</small> {/* formatar a data para um formato brasileiro, senão mostra "Exploração Recente" */}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* modal/janela do zoom dos card quando clicados/selecionados */}
      {selectedCard && ( //se um dos card for selecionado...
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            <button className="fechar-btn" onClick={() => setSelectedCard(null)}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="modal-body">
              <div className="modal-media">
                {isVideo(selectedCard.href) ? (
                  <iframe
                  src={getEmbedUrl(selectedCard.href)}
                  style={{ width: "100%", height: "100%", border: "none" }}
                  allowFullScreen
                  />
                ) : (
                <img src={selectedCard.href} alt={selectedCard.title} />
                )}
              </div>
              <div className="modal-desc">
                <h2>{selectedCard.title}</h2>
                <div className="scroller">
                  <p>{selectedCard.description || "Sem detalhes adicionais disponíveis nos registros."}</p>
                </div>
                <div className="modal-footer">
                  <span>Data do Registro: {selectedCard.date_created}</span>
                </div> 
              </div>
            </div>
          </div>
        </div>
      )}


      <style>{`
       /* para a animação de carregamento */ 
        .loading-overlay-intergalactico {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 50px 0;
          animation: fadeIn 0.5s ease;
        }

        .scanner-container {
          position: relative;
          width: 200px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .scanner-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: #06b6d4;
          box-shadow: 0 0 15px #06b6d4;
          animation: scanVertical 2s infinite ease-in-out; /* animação de escaneamento quando a busca estiver carregando */
          z-index: 2;
        }

        .radar-circles {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .radar-circles span {
          width: 12px;
          height: 12px;
          background: #8b5cf6;
          border-radius: 50%;
          animation: radarPulse 1s infinite alternate; /* pulsação das bolinhas de carregamento */
        }

        .radar-circles span:nth-child(2) { animation-delay: 0.2s; background: #06b6d4; }
        .radar-circles span:nth-child(3) { animation-delay: 0.4s; background: #ec4899; }

        .texto-sintonizando {
          font-family: 'Space Mono', monospace;
          color: #06b6d4;
          font-size: 1.2rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          animation: blinkText 1.5s infinite; /* animação que muda a contraste do texto de forma suave */
        }

        @keyframes scanVertical {
          0%, 100% { transform: translateY(-40px); }
          50% { transform: translateY(40px); }
        }

        @keyframes radarPulse {
          from { transform: scale(1); opacity: 1; box-shadow: 0 0 0px #8b5cf6; }
          to { transform: scale(1.5); opacity: 0.5; box-shadow: 0 0 20px #8b5cf6; }
        }

        @keyframes blinkText {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* estilização para a pesquisa da APOD */
        .titulo-destaque-nasa {
           display: flex;
           align-items: center;
           justify-content: center;
           gap: 15px;
           margin-bottom: 30px;
           animation: slideDown 0.6s ease;
        }

        @keyframes slideDown { 
        from { transform: translateY(-20px); opacity: 0;} 
        to { transform: translateY(0); opacity: 1; } 
        }

        .titulo-destaque-nasa h2 {
           font-family: 'Orbitron', sans-serif;
           color: #fbbf24;
           font-size: 1.4rem;
           letter-spacing: 4px;
           text-shadow: 0 0 15px rgba(251, 191, 36, 0.5);
           text-align: center;
           margin: 0;
        }

        .apod-container-hover:hover {
          transform: translateY(-8px);
          border-color: #8b5cf6 !important;
          box-shadow: 0 25px 80px rgba(139, 92, 246, 0.3);
        }
        .apod-img-zoom:hover { 
        transform: scale(1.03); 
        }


        /* estilização do box "Dica de Explorador" */
        .card-instrucao-inicial {
          margin-top: 40px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px dashed rgba(139, 92, 246, 0.5);
          padding: 20px 30px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          max-width: 600px;
          animation: slideUp 0.8s ease;
        }

        @keyframes slideUp { 
        from { transform: translateY(30px); opacity: 0; } 
        to { transform: translateY(0); opacity: 1; } 
        }

        .card-instrucao-inicial .icon-tip { 
        font-size: 1.5rem; 
        }

        .card-instrucao-inicial p { 
        margin: 0; 
        font-size: 1rem; 
        color: #cbd5e1; 
        }

        .card-instrucao-inicial span { 
        color: #fbbf24; 
        font-weight: bold; 
        }


        /* estilização de elementos gerais */
        .cosmic-engine { /* plano de fundo galático */
        position: fixed; 
        inset: 0; 
        background: radial-gradient(circle at center, #0a0a25 0%, #020205 100%); /* equilibrar a cor de fundo */
        z-index: -1; 
        }

        .star-field { 
        position: absolute; 
        background: white; 
        border-radius: 50%; 
        box-shadow: 0 0 5px white; 
        } 

        .comet-trail { 
        position: absolute; 
        right: -100px; 
        width: 100px; 
        height: 5px; 
        background: linear-gradient(to right, transparent, white); 
        opacity: 0; 
        }

        @keyframes star-animation { 
        0%, 100% { opacity: 0.3; transform: scale(1); } 
        50% { opacity: 1; transform: scale(1.3); } 
        }

        @keyframes commet-animation { 
        0% { transform: translateX(0) translateY(0) rotate(-15deg); opacity: 0; } 
        5% { opacity: 1; } 
        15% { transform: translateX(-120vw) translateY(50vh) rotate(-15deg); opacity: 0; } 
        100% { transform: translateX(-120vw) translateY(50vh) rotate(-15deg); opacity: 0; } 
        }

        .hero-universo { 
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        justify-content: center; 
        text-align: center; 
        margin-top: 80px; 
        }

        /* para deixar o texto flutuando */
        .container-titulo-flutuante { 
        display: flex; 
        align-items: center; 
        gap: 15px; 
        animation: flutuarTitulo 4s ease-in-out infinite; 
        }

        @keyframes flutuarTitulo { 
        0%, 100% { transform: translateY(0) rotate(0deg); } 
        50% { transform: translateY(-20px) rotate(1deg); } 
        }

        .titulo-flutuante { 
        font-size: 4.5rem; 
        font-weight: 900; 
        background: linear-gradient(to right, #06b6d4, #8b5cf6, #ec4899); 
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent; 
        text-transform: uppercase; 
        letter-spacing: -2px; 
        margin: 0; 
        filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.3)); 
        }

        .svg-foguete { 
        width: 60px; 
        height: 60px; 
        filter: drop-shadow(0 0 15px #06b6d4); 
        transform: rotate(-15deg); 
        animation: vibrarFoguete 0.5s infinite alternate; 
        }

        @keyframes vibrarFoguete { 
        from { transform: rotate(-15deg) translate(0, 0); } 
        to { transform: rotate(-15deg) translate(2px, -2px); } 
        }

        .svg-estrela { 
        width: 35px; 
        height: 35px; 
        margin-left: 10px; 
        filter: drop-shadow(0 0 10px #8b5cf6); 
        animation: brilhoEstrela 2s infinite alternate; 
        }

        @keyframes brilhoEstrela { 
        from { transform: scale(1); filter: brightness(1); } 
        to { transform: scale(1.3); filter: brightness(1.5) drop-shadow(0 0 15px #8b5cf6); } 
        }

        .descricao-cosmica { 
        font-size: 1.4rem; 
        color: #cbd5e1; 
        max-width: 700px; 
        margin-top: 20px; 
        line-height: 1.6; 
        font-style: italic; 
        font-family: 'Space Mono', monospace; 
        animation: flutuarDescricao 5s ease-in-out infinite; 
        }

        .descricao-cosmica span { 
        color: #06b6d4; 
        font-weight: bold; 
        text-shadow: 0 0 10px rgba(6, 182, 212, 0.5); 
        }

        @keyframes flutuarDescricao { 
        0%, 100% { transform: translateY(0); opacity: 0.8; }
        50% { transform: translateY(-10px); opacity: 1; } 
        }

        .faixa-topo { 
        display: flex; 
        align-items: center; 
        justify-content: space-between; 
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 80px; 
        padding: 0 5%; 
        background: rgba(0,0,0,0.4); 
        backdrop-filter: blur(15px); 
        z-index: 100; 
        border-bottom: 1px solid rgba(6, 182, 212, 0.2); 
        gap: 15px;
        }

        .container-busca {  /* --> do input de busca */
        display: flex; 
        justify-content: center;
        flex: 1;  
        }

        .botoes-navegacao { 
        display: flex; 
        align-items: center; 
        gap: 20px; 
        }

        .btn-menu-principal { 
        background: rgba(6, 182, 212, 0.1); 
        border: 1px solid #06b6d4; 
        color: #06b6d4; 
        padding: 8px 25px; 
        border-radius: 8px; 
        cursor: pointer; 
        font-weight: bold; 
        transition: 0.3s; 
        }

        .btn-menu-principal:hover { 
        background: #06b6d4; 
        color: white; 
        box-shadow: 0 0 15px #06b6d4; 
        transform: scale(1.1);
        }

        .btn-home { 
        background: white; 
        border: none; 
        width: 45px; 
        height: 45px; 
        border-radius: 50%; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        color: #0a0a25; 
        cursor: pointer; 
        transition: 0.3s; 
        }

        .btn-home:hover { 
        transform: rotate(15deg) scale(1.1); 
        }

        .container-principal { 
        padding: 120px 5% 50px; 
        }

        .alerta-cosmico { 
        display: flex; 
        align-items: center; 
        gap: 12px; 
        background: rgba(248, 113, 113, 0.1); 
        border: 1px solid #f87171; 
        color: #f87171; 
        padding: 15px 30px; 
        border-radius: 15px; 
        width: fit-content; /* conteúdo adequado */
        margin: 0 auto 30px; 
        animation: slideDown 0.4s ease; 
        }

        .galeria-universo { 
        display: grid; 
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
        gap: 30px; 
        }

        .card-universo { 
        background: rgba(255, 255, 255, 0.05); 
        border: 1px solid rgba(255,255,255,0.1); 
        border-radius: 20px; 
        overflow: hidden;  /* impede a img de ficar fora do card */
        cursor: pointer; 
        transition: 0.4s ease; 
        }

        .card-universo:hover { 
        transform: translateY(-10px); 
        border-color: #8b5cf6; 
        box-shadow: 0 10px 40px rgba(0,0,0,0.6); 
        }

        .imagem-wrap { 
        position: relative; 
        height: 220px; 
        }

        .imagem-wrap img { 
        width: 100%; 
        height: 100%; 
        object-fit: cover; /* --> expande a img, não deixa ela "achatada" */
        }

        .hover-info { 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        position: absolute; 
        background: rgba(139, 92, 246, 0.4); 
        inset: 0; 
        opacity: 0; 
        transition: 0.3s; 
        font-weight: bold; 
        letter-spacing: 2px; 
        }

        .card-universo:hover 
        .hover-info { 
        opacity: 1; 
        }

        .info-txt { 
        padding: 20px; 
        }

        .info-txt h3 { 
        margin: 0; 
        font-size: 1.1rem; 
        color: #06b6d4; 
        overflow: hidden; 
        white-space: nowrap; /* reduzir o espaco q texto ocupa */
        text-overflow: ellipsis; /* adiciona "..." quando o texto ultrapassar o tamanho do card */
        }

        .modal-overlay { 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        position: fixed; 
        inset: 0; 
        background: rgba(0,0,0,0.95); 
        z-index: 1000; /* deixa o modal por cima de todos os outros elementos */
        padding: 20px; 
        backdrop-filter: blur(10px); /* borra as imagens no fundo */
        }

        .modal-window { 
        background: #050508; 
        border: 1px solid #333; 
        width: 100%; 
        max-width: 1100px; 
        border-radius: 30px; 
        position: relative; 
        overflow: hidden; 
        }

        .fechar-btn { 
        position: absolute; 
        top: 20px; 
        right: 20px; 
        background: none; 
        border: none; 
        cursor: pointer; 
        z-index: 10; 
        }

        .modal-body { 
        display: flex; 
        height: 600px; 
        }

        .modal-media { 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        background: black; 
        flex: 1.3; 
        }

        .modal-media img { 
        max-width: 100%; 
        max-height: 100%; 
        object-fit: contain; /* garante q a img inteira fique visível e mantenha sua proporção original */
        }

        .modal-desc { 
        display: flex; 
        flex-direction: column; 
        flex: 1; 
        padding: 50px; 
        }

        .modal-desc h2 { 
        color: #06b6d4; 
        font-size: 2rem; 
        margin: 0; 
        }

        .scroller { 
        flex: 1; 
        overflow-y: auto; 
        margin: 20px 0; 
        padding-right: 15px; 
        color: #aaa; 
        line-height: 1.7; 
        }

        @media (max-width: 850px) {
        .modal-body { 
        flex-direction: column; 
        height: auto; 
        max-height: 90vh; 
        overflow-y: auto; 
        }
        .modal-media { 
        height: 300px; 
        }
        .titulo-flutuante { 
        font-size: 2.8rem; 
        }
        .svg-foguete { 
        width: 40px; 
        height: 40px; 
        }
        }
      `}</style>
    </div>
  );
}

export default ExplorerMenu;