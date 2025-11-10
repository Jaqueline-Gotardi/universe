/* ATENÇÃO ---> Pense no seu código como uma casa: Se você deixa suas chaves (variáveis) em cada cômodo (bloco de código), quando estiver em outro cômodo, não conseguirá encontrá-las. A solução é deixar todas as chaves em um lugar central, como um chaveiro na entrada da casa.
 */  
     
   
/* VARIÁVEIS DE BOTÕES E ELEMENTOS GERAIS */
const botaoEntrar = document.querySelector('.btn-primary');
const cadastroLink = document.getElementById('cadastro-link');
const btnIniciarExploracao = document.getElementById('btn-iniciar-exploracao');
const btnHomeDoMenu = document.getElementById('home-do-menu');
const btnTutorial = document.getElementById('btn-tutorial');
const iniciarExploracao = document.getElementById('iniciar-exploracao');
const btnMenu = document.getElementById('btn-menu');
const btnVoltarMenu = document.getElementById('btn-voltar-menu');
const btnInformacoesAstronomicas = document.getElementById('btn-informacoes-astronomicas');
const btnConstelacoes = document.getElementById('btn-constelacoes');
const btnHemisferioNorte = document.getElementById('hemisferio-norte');
const btnUrsaMaior = document.getElementById('btn-ursa-maior');
const btnVoltarUrsaMaior = document.getElementById('btn-voltar-ursa-maior');
const btnUrsaMenor = document.getElementById('btn-ursa-menor'); 
const btnVoltarUrsaMenor = document.getElementById('btn-voltar-ursa-menor');
const btnAndromeda = document.getElementById('btn-andromeda');
const btnVoltarAndromeda = document.getElementById('btn-voltar-andromeda');
const btnVoltarConstelacaoNorte = document.getElementById('btn-voltar-constelacao-norte');
const btnHemisferioSul = document.getElementById('hemisferio-sul');
const btnCruzeiroDoSul = document.getElementById('btn-cruzeiro-do-sul');
const btnVoltarCruzeiroDoSul = document.getElementById('btn-voltar-cruzeiro-do-sul');
const btnFenix = document.getElementById('btn-fenix');
const btnVoltarFenix = document.getElementById('btn-voltar-fenix');
const btnCentauro = document.getElementById('btn-centauro');
const btnVoltarCentauro = document.getElementById('btn-voltar-centauro');
const btnVoltarConstelacaoSul = document.getElementById('btn-voltar-constelacao-sul');
const btnHemisferioPrincipal = document.getElementById('hemisferio-principal');
const btnOrion = document.getElementById('btn-orion');
const btnVoltarOrion = document.getElementById('btn-voltar-orion');
const btnCaoMaior = document.getElementById('btn-cao-maior');
const btnVoltarCaoMaior = document.getElementById('btn-voltar-cao-maior');
const btnEscorpiao = document.getElementById('btn-escorpiao');
const btnVoltarEscorpiao = document.getElementById('btn-voltar-escorpiao');
const btnVoltarConstelacoesFamosas = document.getElementById('btn-voltar-constelacoes-famosas');
const btnVoltarConstelacoes = document.getElementById('btn-voltar-constelacoes');
const btnEventosAstronomicos = document.getElementById('btn-eventos-astronomicos');
const btnEclipses = document.getElementById('eclipses');
const btnEclipseSolar = document.getElementById('btn-eclipse-solar');
const btnVoltarEclipseSolar = document.getElementById('btn-voltar-eclipse-solar');
const btnEclipseLunar = document.getElementById('btn-eclipse-lunar');
const btnVoltarEclipseLunar = document.getElementById('btn-voltar-eclipse-lunar');
const btnVoltarEclipses = document.getElementById('btn-voltar-eclipses');
const btnChuvaDeMeteoros = document.getElementById('chuva-de-meteoros');
const btnPerseidas = document.getElementById('btn-perseidas');
const btnVoltarPerseida = document.getElementById('btn-voltar-perseida'); 
const btnLeonideas = document.getElementById('btn-leonideas');
const btnVoltarLeonidea = document.getElementById('btn-voltar-leonidea');
const btnGeminideas = document.getElementById('btn-geminideas');
const btnVoltarGeminidea = document.getElementById('btn-voltar-geminidea');
const btnVoltarChuvaDeMeteoros = document.getElementById('btn-voltar-chuva-de-meteoros');
const btnSuperLuasEConjuncoes = document.getElementById('superluas-e-conjuncoes');
const btnSuperLua = document.getElementById('btn-superlua');
const btnVoltarSuperLua = document.getElementById('btn-voltar-superlua');
const btnConjuncaoPlanetaria = document.getElementById('btn-conjuncao-planetaria');
const btnVoltarConjuncaoPlanetaria = document.getElementById('btn-voltar-conjuncao-planetaria');
const btnVoltarSuperluasEConjuncoes = document.getElementById('btn-voltar-superluas-e-conjuncoes');
const btnCometasEOutros = document.getElementById('cometas-e-outros');
const btnCometas = document.getElementById('btn-cometas');
const btnVoltarCometas = document.getElementById('btn-voltar-cometas');
const btnSupernovas = document.getElementById('btn-supernovas');
const btnVoltarSupernovas = document.getElementById('btn-voltar-supernovas');
const btnAgrupamentosEstrelares = document.getElementById('btn-agrupamentos-estrelares');
const btnVoltarAgrupamentos = document.getElementById('btn-voltar-agrupamentos');
const btnVoltarCometasEOutros = document.getElementById('btn-voltar-cometas-e-outros');
const btnVoltarEventosAstronomicos = document.getElementById('btn-voltar-eventos-astronomicos');
const btnGalaxias = document.getElementById('btn-galaxias');
const btnTiposDeGalaxia = document.getElementById('tipos-de-galaxias');
const btnEspiral = document.getElementById('btn-espiral');
const btnVoltarEspiral = document.getElementById('btn-voltar-espiral');
const btnEliptica = document.getElementById('btn-eliptica');
const btnVoltarEliptica = document.getElementById('btn-voltar-eliptica');
const btnIrregular = document.getElementById('btn-irregular');
const btnVoltarIrregular = document.getElementById('btn-voltar-irregular');
const btnVoltarTiposDeGalaxia = document.getElementById('btn-voltar-tipos-de-galaxia');
const btnGalaxiasFamosas = document.getElementById('galaxias-famosas');
const btnViaLactea = document.getElementById('btn-via-lactea');
const btnVoltarViaLactea = document.getElementById('btn-voltar-via-lactea');
const btnGalaxiaAndromeda = document.getElementById('btn-galaxia-andromeda');
const btnVoltarGalaxiaAndromeda = document.getElementById('btn-voltar-galaxia-andromeda');
const btnTriangulo = document.getElementById('btn-triangulo-m33'); 
const btnVoltarTriangulo = document.getElementById('btn-voltar-triangulo');
const btnVoltarGalaxiasFamosas = document.getElementById('btn-voltar-galaxias-famosas');
const btnVoltarGalaxias = document.getElementById('btn-voltar-galaxias');
const btnVoltarInfoAstros = document.getElementById('btn-voltar-info-astros');
const btnInformacoesPlanetarias = document.getElementById('btn-informacoes-planetarias');
const btnSol = document.getElementById('btn-sol');
const btnVoltarSol = document.getElementById('btn-voltar-sol');
const btnMercurio = document.getElementById('btn-mercurio');
const btnVoltarMercurio = document.getElementById('btn-voltar-mercurio');
const btnVenus = document.getElementById('btn-venus');
const btnVoltarVenus = document.getElementById('btn-voltar-venus');
const btnTerra = document.getElementById('btn-terra');
const btnVoltarTerra = document.getElementById('btn-voltar-terra');
const btnMarte = document.getElementById('btn-marte');
const btnVoltarMarte = document.getElementById('btn-voltar-marte');
const btnJupiter = document.getElementById('btn-jupiter');
const btnVoltarJupiter = document.getElementById('btn-voltar-jupiter');
const btnSaturno = document.getElementById('btn-saturno');
const btnVoltarSaturno = document.getElementById('btn-voltar-saturno');
const btnUrano = document.getElementById('btn-urano');
const btnVoltarUrano = document.getElementById('btn-voltar-urano');
const btnNetuno = document.getElementById('btn-netuno');
const btnVoltarNetuno = document.getElementById('btn-voltar-netuno');
const btnPlutao = document.getElementById('btn-plutao');
const btnVoltarPlutao = document.getElementById('btn-voltar-plutao');
const btnVoltarPlanetas = document.getElementById('btn-voltar-planetas');
const btnInformacoeExtras = document.getElementById('btn-informacoes-extras');
const btnPerfil = document.getElementById('btn-perfil');
const btnVoltarPerfil = document.getElementById('btn-voltar-perfil');
const btnCriadores = document.getElementById('btn-criadores')
const btnVoltarCriadores = document.getElementById('btn-voltar-criadores');
const btnApagarConta = document.getElementById('btn-apagar-conta');
const btnVoltarApagarConta = document.getElementById('btn-voltar-apagar-conta');
const btnNao = document.getElementById('btn-nao');
const btnVoltarInfoExtras = document.getElementById('btn-voltar-info-extras');
const btnVoltarInfoMenu = document.getElementById('btn-voltar-info-menu');


/* VARIÁVEIS DE TELA */
const telaLogin = document.getElementById('tela-login');
const telaCadastro = document.getElementById('tela-cadastro');
const telaApresentacao = document.getElementById('tela-principal-inicial');
const telaMenu = document.getElementById('menu');
const telaTutorial = document.getElementById('tela-tutorial');
const informacoesDoMenu = document.getElementById('informacoes-do-menu');
const telaInfoAstros = document.getElementById('tela-info-astros');
const telaConstelacoes = document.getElementById('tela-constelacoes');
const constelacoesDoNorte = document.getElementById('constelacoes-norte');
const detalheUrsaMaior = document.getElementById('detalhe-ursa-maior');
const detalheUrsaMenor = document.getElementById('detalhe-ursa-menor');
const detalheAndromeda = document.getElementById('detalhe-andromeda');
const constelacoesDoSul = document.getElementById('constelacoes-sul');
const detalheCruzeiroDoSul = document.getElementById('detalhe-cruzeiro-do-sul');
const detalheFenix = document.getElementById('detalhe-fenix');
const detalheCentauro = document.getElementById('detalhe-centauro');
const constelacoesFamosas = document.getElementById('constelacoes-famosas');
const detalheOrion = document.getElementById('detalhe-orion');
const detalheCaoMaior = document.getElementById('detalhe-cao-maior');
const detalheEscorpiao =document.getElementById('detalhe-escorpiao');
const telaEventosAstronomicos = document.getElementById('tela-eventos-astronomicos');
const listaEclipses = document.getElementById('lista-eclipses');
const detalheEclipseSolar = document.getElementById('detalhe-eclipse-solar');
const detalheEclipseLunar = document.getElementById('detalhe-eclipse-lunar');
const listaChuvaDeMeteoros = document.getElementById('lista-chuvas-de-meteoros');
const detalhePerseidas = document.getElementById('detalhe-perseidas');
const detalheLeonideas = document.getElementById('detalhe-leonideas');
const detalheGeminideas = document.getElementById('detalhe-geminideas');
const listaSuperLuasEConjuncoes = document.getElementById('lista-superluas-conjuncoes');
const detalheSuperLua = document.getElementById('detalhe-superlua');
const detalheConjuncaoPlanetaria = document.getElementById('detalhe-conjuncao');
const listaCometasEOutros = document.getElementById('lista-cometas-outros');
const detalheCometas = document.getElementById('detalhe-cometas');
const detalheSupernovas = document.getElementById('detalhe-supernovas');
const detalheAgrupamentosEstrelares = document.getElementById('detalhe-agrupamentos');
const telaGalaxias = document.getElementById('tela-galaxias');
const listaTiposDeGalaxias = document.getElementById('lista-tipos-galaxias');
const detalheEspiral = document.getElementById('detalhe-espiral');
const detalheEliptica = document.getElementById('detalhe-eliptica');
const detalheIrregular = document.getElementById('detalhe-irregular');
const listaGalaxiasFamosas = document.getElementById('lista-galaxias-famosas')
const detalheViaLactea = document.getElementById('detalhe-via-lactea');
const detalheGalaxiaAndromeda = document.getElementById('detalhe-andromeda-galaxia');
const detalheTriangulo = document.getElementById('detalhe-triangulo');
const telaInfoPlanetas = document.getElementById('tela-info-planetas');
const detalheSol = document.getElementById('detalhe-sol');
const detalheMercurio = document.getElementById('detalhe-mercurio');
const detalheVenus = document.getElementById('detalhe-venus');
const detalheTerra = document.getElementById('detalhe-terra');
const detalheMarte = document.getElementById('detalhe-marte');
const detalheJupiter = document.getElementById('detalhe-jupiter');
const detalheSaturno = document.getElementById('detalhe-saturno');
const detalheUrano = document.getElementById('detalhe-urano');
const detalheNetuno = document.getElementById('detalhe-netuno');
const detalhePlutao = document.getElementById('detalhe-plutao');
const telaInfoExtras = document.getElementById('tela-info-extras');
const telaPerfilUsuario = document.getElementById('tela-perfil-usuario');
const detalheCriadores = document.getElementById('detalhe-criadores');
const detalheApagarConta = document.getElementById('detalhe-apagar-conta');


 /* VALIDANDO OS DADOS DO LOGIN */
 const formulario = document.getElementById('formulario');
 const campos = document.querySelectorAll('#formulario input');
 const mensagensErro = document.querySelectorAll('#formulario .mensagem-erro');

 function validarFormulario() {
 let isFormularioValido = true; 
 campos.forEach((input, index) => {
     if(input.value.trim() === '') {
         input.classList.add('erro'); 
         input.classList.remove('certo');
         mensagensErro[index].classList.add('ativo');
         isFormularioValido = false;
     } else {
         input.classList.add('certo'); 
         input.classList.remove('erro');
         mensagensErro[index].classList.remove('ativo');
     }   
 }); 
 return isFormularioValido;
};  

botaoEntrar.addEventListener('click', (event) => {
    event.preventDefault();

    const podeProsseguir = validarFormulario();

    if (podeProsseguir) {
        console.log("Login feito com sucesso. Bem vindo(a) explorador! 🛸💜✨");
        telaLogin.classList.remove('selecionado');
        telaApresentacao.classList.add('selecionado');
    } else {
        console.log("Faça seu login! 🛸");
    }
}); 


/* MUDANDO A TELA DE LOGIN PARA A DE CADASTRO */
const linkLogin = document.getElementById('link-login');
cadastroLink.addEventListener('click', (event) => {
    event.preventDefault();
    telaLogin.classList.remove('selecionado');
    telaCadastro.classList.add('selecionado');
});

/* MUDANDO DA TELA DE CADASTRO PARA LOGIN */
linkLogin.addEventListener('click', (event) => {
    event.preventDefault();
    telaCadastro.classList.remove('selecionado');
    telaLogin.classList.add('selecionado');
});

/* VALIDAÇÃO E NAVEGAÇÃO DO FORMULÁRIO DE CADASTRO */
const btnCadastrar = document.getElementById('btn-cadastrar');
const formCadastro = document.getElementById('form-cadastro');

 function validarCadastro() {
    let isCadastroValido = true; 

    const camposCadastro = document.querySelectorAll('#form-cadastro input');
    const mensagensErroCadastro = document.querySelectorAll('#form-cadastro .mensagem-erro');
    
 camposCadastro.forEach((input, index) => {
    if (input.type === 'checkbox') {
        if (!input.checked) {
            mensagensErroCadastro[index].classList.add('ativo');
            isCadastroValido = false;
        } else {
            mensagensErroCadastro[index].classList.remove('ativo');
        }
    } 
    else {
        if(input.value.trim() === '') {
            input.classList.add('erro'); 
            input.classList.remove('certo');
            mensagensErroCadastro[index].classList.add('ativo');
            isCadastroValido = false;
        } else {
            input.classList.add('certo'); 
            input.classList.remove('erro');
            mensagensErroCadastro[index].classList.remove('ativo');
        }  
    } 
 }); 
 return isCadastroValido;
};  

btnCadastrar.addEventListener('click', (event) => {
    event.preventDefault();  
    const podeProsseguirCadastro = validarCadastro();

    if (podeProsseguirCadastro) {
        console.log("Cadastro feito com sucesso! 🛸💜"); 
        telaCadastro.classList.remove('selecionado');
        telaApresentacao.classList.add('selecionado');
    } else { 
        console.log("Faça seu cadastro para prosseguir! 🛸");
     } 
});    



/* TRILHA SONORA: INTERAÇÃO COM O BOTÃO PLAY */
const musicas = ['Conexão cósmica: Frequênica 639Hz',
                 'Ecos do Espaço Profundo',
                 'Meditação na Nebulosa',
                 'Pulsares e Galáxias distantes',
                 'O canto dos Planetas',
                 'Sinfonia do vazio Estelar'
]; 
const tituloMusica = document.getElementById('titulo-musica');
const audioPlayer = document.querySelectorAll('.audio-player audio');
const barraProgresso = document.querySelector('.progress-outline');
const btnVoltar = document.getElementById('prev-btn');
const btnPlayPause = document.getElementById('play-pause-btn');
const btnAvancar = document.getElementById('next-btn');

let musicaAtualIndex = 0;
let isPlaying = true;

function playMusica() {
    audioPlayer[musicaAtualIndex].play();
    isPlaying = true;

    btnPlayPause.innerHTML = 'Pause';

    audioPlayer[musicaAtualIndex].addEventListener('timeupdate', atualizarProgresso);

    console.log('Tocando música' + musicaAtualIndex);
}

function pausarMusica() {
    audioPlayer[musicaAtualIndex].pause();
    isPlaying = false;

    btnPlayPause.innerHTML = 'Play';

    console.log('Pausando música' + musicaAtualIndex);
}

btnPlayPause.addEventListener('click', () => {
    if (isPlaying) {
        pausarMusica();
    } else {
        playMusica();
    };
});

function avancarMusica() {
    pausarMusica(); 
    musicaAtualIndex ++;
    if (musicaAtualIndex > audioPlayer.length -1) {
        musicaAtualIndex = 0;
    }
    playMusica();
    nomeMusica();
}

function voltarMusica() {
    pausarMusica();    
    musicaAtualIndex --;
    if (musicaAtualIndex < 0 ) {
        musicaAtualIndex = audioPlayer.length -1;
    }
    playMusica();
    nomeMusica();
}
btnAvancar.addEventListener('click', avancarMusica);
btnVoltar.addEventListener('click', voltarMusica);


/* EXIBIR O NOME DA MÚSICA */
function nomeMusica() {
    tituloMusica.innerHTML = musicas[musicaAtualIndex];
};

const progressContainer = document.querySelector('.progress-container');

/* MOSTRAR BARRA DE PROGRESSO DA MÚSICA */
function atualizarProgresso() {
    const musica = audioPlayer[musicaAtualIndex];
    const porcentagem = (musica.currentTime / musica.duration) * 100;

    /* VERIFICA O TAMANHO DA TELA PARA DECIDIR SE ATUALIZA A ALTURA OU LARGURA DA BARRA DE PROGRESSO DA MÚSICA */ 
    if (window.innerWidth <= 768) {
        barraProgresso.style.width = porcentagem + '%';
        barraProgresso.style.height = '100%'; 
    } else {
        barraProgresso.style.height = porcentagem + '%';
        barraProgresso.style.width = '100%'; 
    }
}; 



    /*  TROCANDO AS TELAS AO CLICK DOS BOTÕES */
    btnIniciarExploracao.addEventListener('click', (event) => {
        event.preventDefault();
            telaApresentacao.classList.remove('selecionado');
            telaMenu.classList.add('selecionado');
    });

    btnTutorial.addEventListener('click', (event) => {
        event.preventDefault();
        telaApresentacao.classList.remove('selecionado');
        telaTutorial.classList.add('selecionado');
    });

    iniciarExploracao.addEventListener('click', (event) => {
        telaTutorial.classList.remove('selecionado');
        telaMenu.classList.add('selecionado');
    });

    btnMenu.addEventListener('click', (event) => {
        telaMenu.classList.remove('selecionado');
        informacoesDoMenu.classList.add('selecionado');
    });

    btnVoltarMenu.addEventListener('click', (event) => {
        telaMenu.classList.remove('selecionado');
        telaApresentacao.classList.add('selecionado');
    })

    btnInformacoesAstronomicas.addEventListener('click', (event) => {
        informacoesDoMenu.classList.remove('selecionado');
        telaInfoAstros.classList.add('selecionado');
    });
    
    btnConstelacoes.addEventListener('click', (event) => {
        telaInfoAstros.classList.remove('selecionado');
        telaConstelacoes.classList.add('selecionado');
    });

    btnHemisferioNorte.addEventListener('click', (event) => {
        telaConstelacoes.classList.remove('selecionado');
        constelacoesDoNorte.classList.add('selecionado');
    });

    btnUrsaMaior.addEventListener('click', (event) => {
        constelacoesDoNorte.classList.remove('selecionado');
        detalheUrsaMaior.classList.add('selecionado');
    });

    btnVoltarUrsaMaior.addEventListener('click', (event) => {
        detalheUrsaMaior.classList.remove('selecionado');
        constelacoesDoNorte.classList.add('selecionado');
    });

    btnUrsaMenor.addEventListener('click', (event) => {
        constelacoesDoNorte.classList.remove('selecionado');
        detalheUrsaMenor.classList.add('selecionado');
    });

    btnVoltarUrsaMenor.addEventListener('click', (event) => {
        detalheUrsaMenor.classList.remove('selecionado');
        constelacoesDoNorte.classList.add('selecionado');
    });

    btnAndromeda.addEventListener('click', (event) => {
        constelacoesDoNorte.classList.remove('selecionado');
        detalheAndromeda.classList.add('selecionado');
    });

    btnVoltarAndromeda.addEventListener('click', (event) => {
        detalheAndromeda.classList.remove('selecionado');
        constelacoesDoNorte.classList.add('selecionado');
    });

    btnVoltarConstelacaoNorte.addEventListener('click', (event) => {
        constelacoesDoNorte.classList.remove('selecionado');
        telaConstelacoes.classList.add('selecionado');
    });

    btnHemisferioSul.addEventListener('click', (event) => {
        telaConstelacoes.classList.remove('selecionado');
        constelacoesDoSul.classList.add('selecionado');
    });

    btnCruzeiroDoSul.addEventListener('click', (event) => {
        constelacoesDoSul.classList.remove('selecionado');
        detalheCruzeiroDoSul.classList.add('selecionado');
    });

    btnVoltarCruzeiroDoSul.addEventListener('click', (event) => {
        detalheCruzeiroDoSul.classList.remove('selecionado');
        constelacoesDoSul.classList.add('selecionado');
    });

    btnFenix.addEventListener('click', (event) => {
        constelacoesDoSul.classList.remove('selecionado');
        detalheFenix.classList.add('selecionado');
    });

    btnVoltarFenix.addEventListener('click', (event) => {
        detalheFenix.classList.remove('selecionado');
        constelacoesDoSul.classList.add('selecionado');
    });

    btnCentauro.addEventListener('click', (event) => {
        constelacoesDoSul.classList.remove('selecionado');
        detalheCentauro.classList.add('selecionado');
    });

    btnVoltarCentauro.addEventListener('click', (event) => {
        detalheCentauro.classList.remove('selecionado');
        constelacoesDoSul.classList.add('selecionado');
    });

    btnVoltarConstelacaoSul.addEventListener('click', (event) => {
        constelacoesDoSul.classList.remove('selecionado');
        telaConstelacoes.classList.add('selecionado');
    });
    
    btnHemisferioPrincipal.addEventListener('click', (event) => {
        telaConstelacoes.classList.remove('selecionado');
        constelacoesFamosas.classList.add('selecionado');
    });

    btnOrion.addEventListener('click', (event) => {
        constelacoesFamosas.classList.remove('selecionado');
        detalheOrion.classList.add('selecionado');
    });

    btnVoltarOrion.addEventListener('click', (event) => {
        detalheOrion.classList.remove('selecionado');
        constelacoesFamosas.classList.add('selecionado');
    });

    btnCaoMaior.addEventListener('click', (event) => {
        constelacoesFamosas.classList.remove('selecionado');
        detalheCaoMaior.classList.add('selecionado');
    });

    btnVoltarCaoMaior.addEventListener('click', (event) => {
        detalheCaoMaior.classList.remove('selecionado')
        constelacoesFamosas.classList.add('selecionado');
    });

    btnEscorpiao.addEventListener('click', (event) => {
        constelacoesFamosas.classList.remove('selecionado');
        detalheEscorpiao.classList.add('selecionado');
    });

    btnVoltarEscorpiao.addEventListener('click', (event) => {
        detalheEscorpiao.classList.remove('selecionado');
        constelacoesFamosas.classList.add('selecionado');
    });

    btnVoltarConstelacoesFamosas.addEventListener('click', (event) => {
        constelacoesFamosas.classList.remove('selecionado');
        telaConstelacoes.classList.add('selecionado');
    });

    btnVoltarConstelacoes.addEventListener('click', (event) => {
        telaConstelacoes.classList.remove('selecionado');
        telaInfoAstros.classList.add('selecionado');
    });

    btnEventosAstronomicos.addEventListener('click', (event) => {
        telaInfoAstros.classList.remove('selecionado');
        telaEventosAstronomicos.classList.add('selecionado');
    });

    btnEclipses.addEventListener('click', (event) => {
        telaEventosAstronomicos.classList.remove('selecionado');
        listaEclipses.classList.add('selecionado');
    });

    btnEclipseSolar.addEventListener('click', (event) => {
        listaEclipses.classList.remove('selecionado');
        detalheEclipseSolar.classList.add('selecionado');
    });

    btnVoltarEclipseSolar.addEventListener('click', (event) => {
        detalheEclipseSolar.classList.remove('selecionado');
        listaEclipses.classList.add('selecionado');
    });

    btnEclipseLunar.addEventListener('click', (event) => {
        listaEclipses.classList.remove('selecionado')
        detalheEclipseLunar.classList.add('selecionado');
    });

    btnVoltarEclipseLunar.addEventListener('click', (event) => {
        detalheEclipseLunar.classList.remove('selecionado');
        listaEclipses.classList.add('selecionado');
    });

    btnVoltarEclipses.addEventListener('click', (event) => {
        listaEclipses.classList.remove('selecionado');
        telaEventosAstronomicos.classList.add('selecionado');
    });

    btnChuvaDeMeteoros.addEventListener('click', (event) => {
        telaEventosAstronomicos.classList.remove('selecionado');
        listaChuvaDeMeteoros.classList.add('selecionado');
    });

    btnPerseidas.addEventListener('click', (event) => {
        listaChuvaDeMeteoros.classList.remove('selecionado');
        detalhePerseidas.classList.add('selecionado');
    });

    btnVoltarPerseida.addEventListener('click', (event) => {
        detalhePerseidas.classList.remove('selecionado');
        listaChuvaDeMeteoros.classList.add('selecionado');
    });

    btnLeonideas.addEventListener('click', (event) => {
        listaChuvaDeMeteoros.classList.remove('selecionado');
        detalheLeonideas.classList.add('selecionado');
    });

    btnVoltarLeonidea.addEventListener('click', (event) => {
        detalheLeonideas.classList.remove('selecionado');
        listaChuvaDeMeteoros.classList.add('selecionado');
    });

    btnGeminideas.addEventListener('click', (event) => {
        listaChuvaDeMeteoros.classList.remove('selecionado');
        detalheGeminideas.classList.add('selecionado');
    });

    btnVoltarGeminidea.addEventListener('click', (event) => {
        detalheGeminideas.classList.remove('selecionado');
        listaChuvaDeMeteoros.classList.add('selecionado');
    });

    btnVoltarChuvaDeMeteoros.addEventListener('click', (event) => {
        listaChuvaDeMeteoros.classList.remove('selecionado');
        telaEventosAstronomicos.classList.add('selecionado');
    });

    btnSuperLuasEConjuncoes.addEventListener('click', (event) => {
        telaEventosAstronomicos.classList.remove('selecionado');
        listaSuperLuasEConjuncoes.classList.add('selecionado');
    });

    btnSuperLua.addEventListener('click', (event) => {
        listaSuperLuasEConjuncoes.classList.remove('selecionado');
        detalheSuperLua.classList.add('selecionado');
    });

    btnVoltarSuperLua.addEventListener('click', (event) => {
        detalheSuperLua.classList.remove('selecionado');
        listaSuperLuasEConjuncoes.classList.add('selecionado');
    });

    btnConjuncaoPlanetaria.addEventListener('click', (event) => {
        listaSuperLuasEConjuncoes.classList.remove('selecionado');
        detalheConjuncaoPlanetaria.classList.add('selecionado');
    });

    btnVoltarConjuncaoPlanetaria.addEventListener('click', (event) => {
        detalheConjuncaoPlanetaria.classList.remove('selecionado');
        listaSuperLuasEConjuncoes.classList.add('selecionado');
    });

    btnVoltarSuperluasEConjuncoes.addEventListener('click', (event) => {
        listaSuperLuasEConjuncoes.classList.remove('selecionado');
        telaEventosAstronomicos.classList.add('selecionado');
    });

    btnCometasEOutros.addEventListener('click', (event) => {
        telaEventosAstronomicos.classList.remove('selecionado');
        listaCometasEOutros.classList.add('selecionado');
    });

    btnCometas.addEventListener('click', (event) => {
        listaCometasEOutros.classList.remove('selecionado');
        detalheCometas.classList.add('selecionado');    
    });

    btnVoltarCometas.addEventListener('click', (event) => {
        detalheCometas.classList.remove('selecionado');
        listaCometasEOutros.classList.add('selecionado');
    });

    btnSupernovas.addEventListener('click', (event) => {
        listaCometasEOutros.classList.remove('selecionado');
        detalheSupernovas.classList.add('selecionado');
    });

    btnVoltarSupernovas.addEventListener('click', (event) => {
        detalheSupernovas.classList.remove('selecionado');
        listaCometasEOutros.classList.add('selecionado');
    });

    btnAgrupamentosEstrelares.addEventListener('click', (event) => {
        listaCometasEOutros.classList.remove('selecionado');
        detalheAgrupamentosEstrelares.classList.add('selecionado');
    });

    btnVoltarAgrupamentos.addEventListener('click', (event) => {
        detalheAgrupamentosEstrelares.classList.remove('selecionado');
        listaCometasEOutros.classList.add('selecionado');
    });

    btnVoltarCometasEOutros.addEventListener('click', (event) => {
        listaCometasEOutros.classList.remove('selecionado');
        telaEventosAstronomicos.classList.add('selecionado');
    });
    
    btnVoltarEventosAstronomicos.addEventListener('click', (event) => {
        telaEventosAstronomicos.classList.remove('selecionado');
        telaInfoAstros.classList.add('selecionado');
    });

    btnGalaxias.addEventListener('click', (event) => {
        telaInfoAstros.classList.remove('selecionado');
        telaGalaxias.classList.add('selecionado');
    });

    btnTiposDeGalaxia.addEventListener('click', (event) => {
        telaGalaxias.classList.remove('selecionado');
        listaTiposDeGalaxias.classList.add('selecionado');
    });

    btnEspiral.addEventListener('click', (event) => {
        listaTiposDeGalaxias.classList.remove('selecionado');
        detalheEspiral.classList.add('selecionado');
    });

    btnVoltarEspiral.addEventListener('click', (event) => {
        detalheEspiral.classList.remove('selecionado');
        listaTiposDeGalaxias.classList.add('selecionado');
    });

    btnEliptica.addEventListener('click', (event) => {
        listaTiposDeGalaxias.classList.remove('selecionado');
        detalheEliptica.classList.add('selecionado');
    });

    btnVoltarEliptica.addEventListener('click', (event) => {
        detalheEliptica.classList.remove('selecionado');
        listaTiposDeGalaxias.classList.add('selecionado');
    });

    btnIrregular.addEventListener('click', (event) => {
        listaTiposDeGalaxias.classList.remove('selecionado');
        detalheIrregular.classList.add('selecionado');
    });

    btnVoltarIrregular.addEventListener('click', (event) => {
        detalheIrregular.classList.remove('selecionado');
        listaTiposDeGalaxias.classList.add('selecionado');
    });

    btnVoltarTiposDeGalaxia.addEventListener('click', (event) => {
        listaTiposDeGalaxias.classList.remove('selecionado');
        telaGalaxias.classList.add('selecionado');
    });

    btnGalaxiasFamosas.addEventListener('click', (event) => {
        telaGalaxias.classList.remove('selecionado');
        listaGalaxiasFamosas.classList.add('selecionado');
    });

    btnViaLactea.addEventListener('click', (event) => {
        listaGalaxiasFamosas.classList.remove('selecionado');
        detalheViaLactea.classList.add('selecionado');
    });

    btnVoltarViaLactea.addEventListener('click', (event) => {
        detalheViaLactea.classList.remove('selecionado');
        listaGalaxiasFamosas.classList.add('selecionado');
    });

    btnGalaxiaAndromeda.addEventListener('click', (event) => {
        listaGalaxiasFamosas.classList.remove('selecionado');
        detalheGalaxiaAndromeda.classList.add('selecionado');
    });

    btnVoltarGalaxiaAndromeda.addEventListener('click', (event) => {
        detalheGalaxiaAndromeda.classList.remove('selecionado');
        listaGalaxiasFamosas.classList.add('selecionado');
    });

    btnTriangulo.addEventListener('click', (event) => {
        listaGalaxiasFamosas.classList.remove('selecionado');
        detalheTriangulo.classList.add('selecionado');
    });

    btnVoltarTriangulo.addEventListener('click', (event) => {
        detalheTriangulo.classList.remove('selecionado');
        listaGalaxiasFamosas.classList.add('selecionado');
    });

    btnVoltarGalaxiasFamosas.addEventListener('click', (event) => {
        listaGalaxiasFamosas.classList.remove('selecionado');
        telaGalaxias.classList.add('selecionado');
    });

    btnVoltarGalaxias.addEventListener('click', (event) => {
        telaGalaxias.classList.remove('selecionado');
        telaInfoAstros.classList.add('selecionado');
    });

    btnVoltarInfoAstros.addEventListener('click', (event) => {
        telaInfoAstros.classList.remove('selecionado');
        informacoesDoMenu.classList.add('selecionado');
    });

    btnInformacoesPlanetarias.addEventListener('click', (event) => {
        informacoesDoMenu.classList.remove('selecionado');
        telaInfoPlanetas.classList.add('selecionado');
    });
    
    btnSol.addEventListener('click', (event) => {
        telaInfoPlanetas.classList.remove('selecionado')
        detalheSol.classList.add('selecionado');
    });

    btnVoltarSol.addEventListener('click', (event) => {
        detalheSol.classList.remove('selecionado');
        telaInfoPlanetas.classList.add('selecionado');
    });

    btnMercurio.addEventListener('click', (event) => {
        telaInfoPlanetas.classList.remove('selecionado');
        detalheMercurio.classList.add('selecionado');
    });

    btnVoltarMercurio.addEventListener('click', (event) => {
        detalheMercurio.classList.remove('selecionado');
        telaInfoPlanetas.classList.add('selecionado');
    });

    btnVenus.addEventListener('click', (event) => {
        telaInfoPlanetas.classList.remove('selecionado');
        detalheVenus.classList.add('selecionado');
    });

    btnVoltarVenus.addEventListener('click', (event) => {
        detalheVenus.classList.remove('selecionado');
        telaInfoPlanetas.classList.add('selecionado');
    });

    btnTerra.addEventListener('click', (event) => {
        telaInfoPlanetas.classList.remove('selecionado');
        detalheTerra.classList.add('selecionado');
    });

    btnVoltarTerra.addEventListener('click', (event) => {
        detalheTerra.classList.remove('selecionado');
        telaInfoPlanetas.classList.add('selecionado');
    });

    btnMarte.addEventListener('click', (event) => {
        telaInfoPlanetas.classList.remove('selecionado');
        detalheMarte.classList.add('selecionado');
    });

    btnVoltarMarte.addEventListener('click', (event) => {
        detalheMarte.classList.remove('selecionado');
        telaInfoPlanetas.classList.add('selecionado');
    });

    btnJupiter.addEventListener('click', (event) => {
        telaInfoPlanetas.classList.remove('selecionado');
        detalheJupiter.classList.add('selecionado');
    });

    btnVoltarJupiter.addEventListener('click', (event) => {
        detalheJupiter.classList.remove('selecionado');
        telaInfoPlanetas.classList.add('selecionado');
    });

    btnSaturno.addEventListener('click', (event) => {
        telaInfoPlanetas.classList.remove('selecionado');
        detalheSaturno.classList.add('selecionado');
    });

    btnVoltarSaturno.addEventListener('click', (event) => {
        detalheSaturno.classList.remove('selecionado');
        telaInfoPlanetas.classList.add('selecionado');
    });

    btnUrano.addEventListener('click', (event) => {
        telaInfoPlanetas.classList.remove('selecionado');
        detalheUrano.classList.add('selecionado');
    });

    btnVoltarUrano.addEventListener('click', (event) => {
        detalheUrano.classList.remove('selecionado');
        telaInfoPlanetas.classList.add('selecionado');
    });

    btnNetuno.addEventListener('click', (event) => {
        telaInfoPlanetas.classList.remove('selecionado');
        detalheNetuno.classList.add('selecionado');
    });

    btnVoltarNetuno.addEventListener('click', (event) => {
        detalheNetuno.classList.remove('selecionado');
        telaInfoPlanetas.classList.add('selecionado');
    });

    btnPlutao.addEventListener('click', (event) => {
        telaInfoPlanetas.classList.remove('selecionado');
        detalhePlutao.classList.add('selecionado');
    });

    btnVoltarPlutao.addEventListener('click', (event) => {
        detalhePlutao.classList.remove('selecionado');
        telaInfoPlanetas.classList.add('selecionado');
    });

    btnVoltarPlanetas.addEventListener('click', (event) => {
        telaInfoPlanetas.classList.remove('selecionado');
        informacoesDoMenu.classList.add('selecionado');
    });

    btnInformacoeExtras.addEventListener('click', (event) => {
        informacoesDoMenu.classList.remove('selecionado');
        telaInfoExtras.classList.add('selecionado');
    });

    btnPerfil.addEventListener('click', (event) => {
        telaInfoExtras.classList.remove('selecionado');
        telaPerfilUsuario.classList.add('selecionado');
    });

    btnVoltarPerfil.addEventListener('click', (event) => {
        telaPerfilUsuario.classList.remove('selecionado');
        telaInfoExtras.classList.add('selecionado');
    });

    btnCriadores.addEventListener('click', (event) => {
        telaInfoExtras.classList.remove('selecionado');
        detalheCriadores.classList.add('selecionado');
    });

    btnVoltarCriadores.addEventListener('click', (event) => {
        detalheCriadores.classList.remove('selecionado');
        telaInfoExtras.classList.add('selecionado');
    });

    btnApagarConta.addEventListener('click', (event) => {
        telaInfoExtras.classList.remove('selecionado');
        detalheApagarConta.classList.add('selecionado');
    });
 
    btnVoltarApagarConta.addEventListener('click', (event) => {
        detalheApagarConta.classList.remove('selecionado');
        telaApresentacao.classList.add('selecionado');
    });

    btnNao.addEventListener('click', (event) => {
        detalheApagarConta.classList.remove('selecionado');
        telaInfoExtras.classList.add('selecionado');
    });

    btnVoltarInfoExtras.addEventListener('click', (event) => {
        telaInfoExtras.classList.remove('selecionado');
        informacoesDoMenu.classList.add('selecionado');
    });

    btnVoltarInfoMenu.addEventListener('click', (event) => {
        informacoesDoMenu.classList.remove('selecionado');
        telaMenu.classList.add('selecionado');
    }); 


    /* TROCA DA TELA DE EDIÇÃO DE PERFIL */
    document.addEventListener('DOMContentLoaded', () => {
    const btnEditarPerfil = document.getElementById('btn-editar-perfil');
    const btnSalvarPerfil = document.getElementById('btn-salvar-perfil');
    const btnCancelarPerfil = document.getElementById('btn-cancelar-perfil');

    const secaoVisualizacao = document.getElementById('secao-visualizacao');
    const secaoEdicao = document.getElementById('secao-edicao');

    btnEditarPerfil.addEventListener('click', () => {
        secaoVisualizacao.style.display = 'none';
        secaoEdicao.style.display = 'block';
    });

    btnCancelarPerfil.addEventListener('click', () => {
        secaoEdicao.style.display = 'none';
        secaoVisualizacao.style.display = 'block';
    });

    
    /* VISUALIZAR A FOTO TROCADA */
    const inputFotoPerfil = document.getElementById('input-foto-perfil-edicao');
    const fotoPerfilPreview = document.getElementById('foto-perfil-preview-edicao');
    
    const btnEscolherGaleria = document.getElementById('btn-escolher-galeria');
    const btnEscolherAvatars = document.getElementById('btn-escolher-avatars');

    btnEscolherGaleria.addEventListener('click', () => {
        inputFotoPerfil.click(); //para abrir o file (uma simulação), clicou no botao, exibe o files
    });


    inputFotoPerfil.addEventListener('change', (event) => {
        const arquivo = event.target.files[0];
        if (arquivo) {
            const reader = new FileReader();

            reader.onload = (e) => {
                fotoPerfilPreview.src = e.target.result;
            };

            reader.readAsDataURL(arquivo);
        }
    });

    btnSalvarPerfil.addEventListener('click', (event) => {
        event.preventDefault();

        console.log("Perfil salvo com sucesso!");
        
        /* COLETA DADOS DOS INPUTS */
        const novoNome = document.getElementById('nome-agente-edicao').value;
        const novoSobre = document.getElementById('sobre-voce-edicao').value;
        const novosInteresses = document.getElementById('interesses-edicao').value;
        
        /* ATUALIZA OS DADOS DO USUÁRIO */
        document.getElementById('perfil-nome').textContent = novoNome;
        document.getElementById('perfil-sobre').textContent = novoSobre;
        document.getElementById('perfil-interesses').textContent = novosInteresses;

        /* QUANDO O USUÁRIO CLICAR EM 'SALVAR ATERAÇÕES', OS NOVOS DADOS IRÃO APARECER NO PERFIL DELE */
        secaoEdicao.style.display = 'none';
        secaoVisualizacao.style.display = 'block';
    });
 

    /* MUDANDO A TELA PARA TROCAR A SENHA */
    const trocarSenha = document.getElementById('btn-troca-senha');
    const secaoTrocarSenha = document.getElementById('secao-trocar-senha');

    trocarSenha.addEventListener('click', () => {
        telaPerfilUsuario.classList.remove('selecionado');
        secaoTrocarSenha.classList.add('selecionado');
    });

    const btnSalvarSenha = document.getElementById('btn-salvar-senha');
    btnSalvarSenha.addEventListener('click', () => {
        event.preventDefault();

        secaoTrocarSenha.classList.remove('selecionado');
        telaPerfilUsuario.classList.add('selecionado');
    });

    const btnCancelarTrocaSenha = document.getElementById('btn-cancelar-troca-senha');
    btnCancelarTrocaSenha.addEventListener('click', () => {
        secaoTrocarSenha.classList.remove('selecionado');
        telaPerfilUsuario.classList.add('selecionado');
    });

    const btnVoltarTrocaSenha = document.getElementById('btn-voltar-troca-senha');
    btnVoltarTrocaSenha.addEventListener('click', () => {
        secaoTrocarSenha.classList.remove('selecionado');
        telaPerfilUsuario.classList.add('selecionado');
    });
}); 