/* dashboardPage.jsx (O Quarto VIP / Área Restrita): É o lugar onde o conteúdo real do site acontece. Só chega aqui quem passou pelo Vigia e provou que está autenticado. */

import "../style/tela-principal.css"

function DashboardPage() { //nome de componentes/funções em React deve-se começar com letras maiúsculas
    return (
    <>
    <section className="tela-principal" id="tela-principal-inicial" >
    <div className="text">
      <h2>O que vamos explorar hoje?</h2>
      <p>Selecione seu destino</p>
    </div>
    <div className="informacoes-extras">
      <button type="button" className="btn-cosmic" id="btn-iniciar-exploracao">Iniciar Exploração</button>
      <button type="button" className="btn-cosmic" id="btn-tutorial">Briefing da Nave</button>
    </div> 
  </section>
    </>
      
    ); 
} 

export default DashboardPage;  