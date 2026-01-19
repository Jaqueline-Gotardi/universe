import { useState } from "react";



function SearchBox() {
  const [ field, setField ] = useState("");
  const [ searchField, setSearchField ] = useState(false);
  const [ showSearch, setShowSearch ] = useState([])


  async function sendData(event) {
    event.preventDefault();

    try {
      const valueInput = `${field}`;

      const response = await fetch(`http://localhost:3000/search?title=${valueInput}`,
        {
          method: "GET"
        }
      );

      const data = await response.json();
      console.log("Buscando no Universo...", data)


    //PARA EXIBIR A PESQUISA SE O CAMPO FOR PREENCHIDO
    const results = data;
    let htmlResultados = "";
    if (results.length === 0) {
      setShowSearch(data)
    }  

    const apodItem = results.find(item => item.source === 'APOD');
    const outrosItens = results.filter(item => item.source === 'IMAGES');
    
    if (apodItem) {
      let mediaHTML = '';

      //verificar se é vídeo ou imagem
      const isVideo = apodItem.href.includes('youtube.com') || apodItem.href.includes('vimeo.com');
    

    return (
      <div>
        {isVideo ? 
        embedUrl = apodItem.href.replace('watch?v=' , 'embed/')
        :
        <iframe className= "media-apod, width:100%, height=400, src=${embedUrl}, frameborder=0, allowfullscreen style=border-radius:8px;" />
        :
        <img className="media-apod, src=${apodItem.href}
        alt=${apodItem.title}" style="border-radius:8px;" />;
        }

      setShowSearch(data) `
      <div className= "resultado-item" 
      style= "padding: 40px; border: 2px solid #adb5db; border-radius: 10px; margin-bottom: 30px;">
      <h2 style= "font-family: Orbitron; color: #abd5db;">🌌Imagem do dia (APOD)🌌</h2>
      <h3 style= "font-family: Orbitron">{apodItem.title}</h3>
      <p style= "font-family: Space mono"><strong>📅 Data:</strong>{apodItem.date_created}</p>
      {mediaHTML}
      <p style= "font-family: Space mono"><strong>📍 Localização:</strong>{apodItem.location}</p>
      <p style= "font-family: Space mono; max-width: 800px; width: 90%; margin: 20px auto;"><strong>📝 Descrição:</strong>{apodItem.description} </p>
      </div>
      <br />`;
        
        
        
        )
      </div>
    )
    }

      



    } catch(error) {
      console.log("Dados não disponível:", error);
    alert("Erro ao buscar na API. Tente novamente mais tarde")
    }
  }
} 
export default SearchBox;







    if (apodItem) {
      let mediaHTML = '';

      //verificar se é vídeo ou imagem
      const isVideo = apodItem.href.includes('youtube.com') || apodItem.href.includes('vimeo.com');

      if (isVideo) {
      }

      htmlResultados += `
      <div class= "resultado-item" 
      style= "padding: 40px; border: 2px solid #adb5db; border-radius: 10px; margin-bottom: 30px;">
      <h2 style= "font-family: Orbitron; color: #abd5db;">🌌Imagem do dia (APOD)🌌</h2>
      <h3 style= "font-family: Orbitron">${apodItem.title}</h3>
      <p style= "font-family: Space mono"><strong>📅 Data:</strong>${apodItem.date_created}</p>
      ${mediaHTML}
      <p style= "font-family: Space mono"><strong>📍 Localização:</strong>${apodItem.location}</p>
      <p style= "font-family: Space mono; max-width: 800px; 
  width: 90%; margin: 20px auto;"><strong>📝 Descrição:</strong>${apodItem.description}</p>
      </div>
      <hr style= "margin: 40px 0;">
      <br><br>`;
    }

    //verificar se tem itens na API IMAGES
    if (outrosItens.length > 0) {
      outrosItens.forEach((item => {
        htmlResultados += `
      <div class= "resultado-item" style= "padding: 40px;">
      <h3 style= "font-family: Orbitron">${item.title}</h3>
      <br>
      <p style= "font-family: Space mono"><strong>📅 Data:</strong>${item.date_created}</p>
      <p style= "font-family: Space mono"><strong>📍 Localização:</strong>${item.location}</p>
      <p style= "font-family: Space mono; max-width: 500px; 
  width: 90%; margin: 0 auto;"><strong>📝 Descrição:</strong>${item.description}</p>
      <img src="${item.href}" alt="${item.title}" style="border-radius: 8px;"></img>
      </div>
      <br><br>`;
      })
    )};

    //para exibir o resultado da API APOD e API IMAGES
    mostrarPesquisa.innerHTML = htmlResultados;






    /* PARA EXIBIR A PESQUISA EMBAIXO E COLOCAR O MENU, BARRA DE PESQUISA E A CASINHA EM LINHA HORIZONTAL */
    const bgMenu = document.querySelector('.background-menu');
    const faixa = document.getElementById('faixa');
    if (resultado.length > 0) { //se a pesquisa for maior que 0 (se tiver termos)
    document.getElementById('tela-login').style.display = 'none';
    document.querySelector('.faixa').classList.add('pesquisa-ativa'); //exibindo pesquisa
    bgMenu.classList.add('ativa');
    bgMenu.querySelectorAll('.background-menu, .menu-bg, .stars-menu, .planets-menu').forEach(el => el.classList.add('ativa'));
  } else {
    document.querySelector('.faixa').classList.remove('pesquisa-ativa');
    bgMenu.classList.remove('ativa');
    bgMenu.querySelectorAll('.background-menu, .menu-bg, .stars-menu, .planets-menu').forEach(el => el.classList.remove('ativa'));
    faixa.classList.remove('pesquisa-ativa');
  } 
 


lupaPesquisa.addEventListener("click", () => {
  enviarDados(); //chama a função a cada click na tecla Enter
});

campoPesquisa.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    enviarDados(); //chama a função a cada click na lupa da barra de pesquisa
  }
});