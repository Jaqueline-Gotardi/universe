//as informacoesPlanetarias não tem rotas definidas pq tudo é controlado pelo id no PlanetaryInformation.jsx, que é o componente que renderiza as informações de cada um, ele renderiza o conteúdo baseado no id que recebe.
export const informacoesPlanetarias = [
  {
    id: "planetas",
    label: "Planetas",
    description: "Os 8 planetas do sistema solar + Plutão",
    icon: "🪐",
  },
  {
    id: "sistema-solar",
    label: "Sistema Solar",
    description: "Estrutura e componentes",
    icon: "☀️",
  },
  {
    id: "luas-e-satelites",
    label: "Luas e Satélites",
    description: "Satélites naturais",
    icon: "🌙",
  },
];
  
export const menuSistemaSolar = [
  {
    id: "sol",
    label: "O Sol",
    icon: "☀️",
    route: "/app/sun",
    color: "#FFD700",
  },
  {
    id: "cinturao-asteroides",
    label: "Cinturão de Asteroides",
    icon: "☄️",
    route: "/app/cinturao-asteroides",
    color: "#A0522D",
  },
  {
    id: "cinturao-kuiper",
    label: "Cinturão de Kuiper",
    icon: "💫",
    route: "/app/cinturao-kuiper",
    color: "#708090",
  },
  {
    id: "nuvem-oort",
    label: "Nuvem de Oort",
    icon: "🌌",
    route: "/app/nuvem-oort",
    color: "#483D8B",
  },
  {
    id: "planetas-anoes",
    label: "Planetas Anões",
    icon: "⚫",
    route: "/app/planetas-anoes",
    color: "#696969",
  },
];

export const menuPlanetas = [
  { id: "mercurio", label: "Mercúrio", route: "/app/mercury", icon: "🔴" },
  { id: "venus", label: "Vênus", route: "/app/venus", icon: "🟠" },
  { id: "terra", label: "Terra", route: "/app/earth", icon: "🌍" },
  { id: "marte", label: "Marte", route: "/app/mars", icon: "🔴" },
  { id: "jupiter", label: "Júpiter", route: "/app/jupiter", icon: "🟤" },
  { id: "saturno", label: "Saturno", route: "/app/saturn", icon: "🪐" },
  { id: "urano", label: "Urano", route: "/app/uranus", icon: "🔵" },
  { id: "netuno", label: "Netuno", route: "/app/neptune", icon: "🔵" },
  { id: "plutao", label: "Plutão", route: "/app/pluto", icon: "⚫" },
];

export const menuLuasESatelites = [
  {
    id: "lua-terra",
    label: "Lua (Terra)",
    icon: "🌕",
    route: "/app/lua",
    color: "#C0C0C0",
  },
  {
    id: "io",
    label: "Io (Júpiter)",
    icon: "🟡",
    route: "/app/io",
    color: "#FFD700",
  },
  {
    id: "europa",
    label: "Europa (Júpiter)",
    icon: "⚪",
    route: "/app/europa",
    color: "#E0E0E0",
  },
  {
    id: "ganimedes",
    label: "Ganimedes (Júpiter)",
    icon: "🟤",
    route: "/app/ganimedes",
    color: "#8B4513",
  },
  {
    id: "calisto",
    label: "Calisto (Júpiter)",
    icon: "⚫",
    route: "/app/calisto",
    color: "#2F4F4F",
  },
  {
    id: "tita",
    label: "Titã (Saturno)",
    icon: "🟠",
    route: "/app/titan",
    color: "#FF8C00",
  },
  {
    id: "encélado",
    label: "Encélado (Saturno)",
    icon: "⚪",
    route: "/app/enceladus",
    color: "#FFFAFA",
  },
  {
    id: "tritao",
    label: "Tritão (Netuno)",
    icon: "🔵",
    route: "/app/tritao",
    color: "#5F9EA0",
  },
];

export const conteudosPlanetarios = {
  mercurio: {
    titulo: "Mercúrio",
    imagem: "/images/mercurio.webp",
    descricao: `Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol. Com um diâmetro de apenas 4.879 km, ele é apenas ligeiramente maior que a nossa Lua.
    
    Apesar de sua proximidade com o Sol, Mercúrio não é o planeta mais quente (esse título pertence a Vênus). No entanto, Mercúrio experimenta as maiores variações de temperatura do Sistema Solar, oscilando entre -180°C à noite e 430°C durante o dia.

    O planeta não possui atmosfera significativa, o que o deixa vulnerável a impactos de meteoritos. Sua superfície é coberta de crateras, semelhante à Lua. Um ano em Mercúrio dura apenas 88 dias terrestres, mas um dia solar (do nascer ao pôr do sol) leva 176 dias terrestres.`,
  },
  venus: {
    titulo: "Vênus - A Estrela da Manhã",
    imagem: "/images/venus.webp",
    descricao: `Vênus é o segundo planeta a partir do Sol e é frequentemente chamado de "planeta irmão" da Terra devido ao seu tamanho similar. No entanto, as semelhanças param por aí.

    Vênus possui a atmosfera mais densa de todos os planetas rochosos, composta principalmente de dióxido de carbono com nuvens de ácido sulfúrico. Essa atmosfera cria um efeito estufa extremo, tornando Vênus o planeta mais quente do Sistema Solar, com temperaturas na superfície de cerca de 465°C.

    Curiosamente, Vênus gira na direção oposta à maioria dos planetas (rotação retrógrada), o que significa que o Sol nasce no oeste e se põe no leste. Um dia em Vênus é mais longo que um ano venusiano!`,
  },
  terra: {
    titulo: "Terra - Nosso Lar Azul",
    imagem: "/images/terra.webp",
    descricao: `A Terra é o terceiro planeta a partir do Sol e o único conhecido por abrigar vida. Com uma idade de aproximadamente 4,5 bilhões de anos, nosso planeta tem condições únicas que permite a vida.

    A Terra possui uma atmosfera rica em nitrogênio e oxigênio, um campo magnético protetor e água líquida em abundância (os três ingredientes essenciais para a vida como a conhecemos).

    Cerca de 71% da superfície terrestre é coberta por oceanos, o que dá ao nosso planeta sua característica cor azul quando visto do espaço. A Lua, nosso único satélite natural, desempenha um papel crucial na estabilização do eixo de rotação da Terra e nas marés oceânicas.`,
  },
  marte: {
    titulo: "Marte - O Planeta Vermelho",
    imagem: "/images/marte.webp",
    descricao: `Marte é o quarto planeta do Sistema Solar e tem fascinado a humanidade por séculos. Sua cor avermelhada, visível mesmo a olho nu, é causada pelo óxido de ferro (ferrugem) em sua superfície.

    Marte abriga as maiores estruturas geológicas conhecidas no Sistema Solar: o Monte Olimpo, um vulcão com 22 km de altura (quase três vezes a altura do Everest), e o Valles Marineris, um sistema de cânions de 4.000 km de extensão.

    Evidências sugerem que Marte já teve água líquida em sua superfície bilhões de anos atrás. Hoje, água existe principalmente como gelo nos polos e possivelmente em aquíferos subterrâneos. Marte possui duas pequenas luas: Fobos e Deimos.`,
  },
  jupiter: {
    titulo: "Júpiter - O Gigante Gasoso",
    imagem: "/images/jupiter.webp",
    descricao: `Júpiter é o maior planeta do Sistema Solar, com uma massa 2,5 vezes maior que todos os outros planetas combinados. Se Júpiter fosse oco, mais de 1.300 Terras caberiam dentro dele.

    O planeta é famoso pela Grande Mancha Vermelha, uma tempestade anticiclônica que existe há pelo menos 400 anos. Essa tempestade é tão grande que poderia engolir a Terra inteira.

    Júpiter possui pelo menos 95 luas conhecidas, incluindo as quatro grandes luas galileanas: Io, Europa, Ganimedes e Calisto. Europa é particularmente interessante para cientistas, pois pode abrigar um oceano de água líquida sob sua superfície gelada.`,
  },
  saturno: {
    titulo: "Saturno - O Senhor dos Anéis",
    imagem: "/images/saturno.webp",
    descricao: `Saturno é o sexto planeta do Sistema Solar e é instantaneamente reconhecível por seu espetacular sistema de anéis. Embora outros gigantes gasosos também possuam anéis, nenhum se compara à magnificência dos anéis de Saturno.

    Os anéis são compostos principalmente de partículas de gelo, variando em tamanho de grãos de areia a blocos do tamanho de casas. Surpreendentemente, apesar de se estenderem por centenas de milhares de quilômetros, os anéis têm apenas cerca de 10 metros de espessura.

    Saturno é tão pouco denso que flutuaria se pudesse ser colocado em um oceano grande o suficiente. O planeta possui mais de 140 luas, incluindo Titã, a segunda maior lua do Sistema Solar e a única com uma atmosfera densa.`,
  },
  urano: {
    titulo: "Urano - O Planeta Deitado",
    imagem: "/images/urano.webp",
    descricao: `Urano é o sétimo planeta do Sistema Solar e possui uma característica única: ele gira de lado! Seu eixo de rotação está inclinado em aproximadamente 98 graus, possivelmente resultado de uma colisão com um objeto do tamanho da Terra bilhões de anos atrás.

    Urano é classificado como um "gigante de gelo", pois sua composição inclui água, metano e amônia em formas de gelo de alta pressão. A cor azul-esverdeada do planeta é causada pelo metano em sua atmosfera.

    O planeta possui 27 luas conhecidas, todas nomeadas em homenagem a personagens das obras de William Shakespeare e Alexander Pope. Urano também possui um sistema de anéis, embora muito mais tênue que o de Saturno.`,
  },
  netuno: {
    titulo: "Netuno - O Gigante Azul",
    imagem: "/images/netuno.webp",
    descricao: `Netuno é o oitavo e mais distante planeta do Sistema Solar, localizado a cerca de 4,5 bilhões de quilômetros do Sol. Um ano em Netuno equivale a 165 anos terrestres.

    O planeta possui os ventos mais fortes do Sistema Solar, atingindo velocidades de até 2.100 km/h. Sua atmosfera apresenta tempestades massivas, incluindo a Grande Mancha Escura, similar à Grande Mancha Vermelha de Júpiter.

    Netuno possui 16 luas conhecidas, sendo Tritão a maior e mais interessante. Tritão é uma das luas mais frias do Sistema Solar e é geologicamente ativa, com gêiseres que expelem nitrogênio. Curiosamente, Tritão orbita Netuno na direção oposta à rotação do planeta.`,
  },
  plutao: {
    titulo: "Plutão - O Planeta Anão",
    imagem: "/images/plutao.webp",
    descricao: `Plutão foi considerado o nono planeta do Sistema Solar por 76 anos, mas foi reclassificado como um planeta anão em 2006 pela União Astronômica Internacional, após a descoberta de objetos similares como Éris.
    Plutão é um mundo gelado, com uma superfície composta principalmente de nitrogênio, metano e monóxido de carbono congelados. Sua atmosfera fina, composta principalmente de nitrogênio, congela e cai como neve quando o planeta se afasta do Sol em sua órbita elíptica.

    Sua lua Caronte é tão grande (metade do tamanho de Plutão) que ambos orbitam um centro de massa comum, formando um sistema duplo único.

    Situado no Cinturão de Kuiper, além de Netuno, possui uma órbita altamente inclinada e elíptica, levando-o a distâncias variáveis do Sol, entre 30 e 49 unidades astronômicas.

    Em 2015, a sonda da NASA revelou um relevo surpreendente, com montanhas de gelo de 3.500 metros e possíveis criovulcões.`
  }, 

  sol: {
    titulo: "O sol - Nossa Estrela",
    imagem: "/images/sol.webp",
    descricao: `O Sol é a estrela no centro do nosso Sistema Solar. É uma esfera quase perfeita de plasma quente, com um diâmetro de cerca de 1,4 milhão de quilômetros - 109 vezes o diâmetro da Terra.

    No núcleo do Sol, a temperatura atinge 15 milhões de graus Celsius, onde reações de fusão nuclear convertem hidrogênio em hélio, liberando enormes quantidades de energia. O Sol converte cerca de 600 milhões de toneladas de hidrogênio em hélio a cada segundo.

    Apesar de parecer amarelo da Terra, o Sol é na verdade branco. A atmosfera terrestre dispersa a luz azul, fazendo o Sol parecer amarelo. O Sol tem aproximadamente 4,6 bilhões de anos e ainda tem combustível suficiente para mais 5 bilhões de anos.`,
  },

  "cinturao-de-asteroides": {
    titulo: "Cinturão de Asteroides",
    imagem: "/images/cinturao-de-asteroides.webp",
    descricao: `Localizado na vasta região entre as órbitas de Marte e Júpiter, o Cinturião de Asteroides é um disco circunestelar composto por milhões de corpos rochosos e metálicos. Apesar da grande quantidade de objetos, a massa total do cinturião é apenas cerca de 4% da massa da Lua terrestre.

    Os objetos variam desde minúsculos grãos de poeira até o planeta anão Ceres, que detém um terço da massa de todo o cinturião. Ao contrário das representações em filmes, o espaço entre os asteroides é imenso, permitindo que sondas espaciais o atravessem sem colisões.

    Cientistas acreditam que estes detritos são restos da formação do Sistema Solar que nunca conseguiram agrupar-se para formar um planeta devido à forte influência gravitacional de Júpiter.`,
  },

  "cinturao-de-kuiper": {
    titulo: "Cinturão de Kuiper",
    imagem: "/images/cinturao-de-kuiper.webp",
    descricao: `O Cinturião de Kuiper é uma região gelada que se estende além da órbita de Netuno, aproximadamente de 30 a 50 unidades astronómicas do Sol. É semelhante ao cinturião de asteroides, mas é muito maior — 20 vezes mais largo e até 200 vezes mais massivo.

    Esta região é composta maioritariamente por corpos gelados, formados por "gelos" voláteis como metano, amoníaco e água. É o lar de muitos planetas anões, incluindo Plutão, Haumea e Makemake.

    Muitos cometas de curto período, que orbitam o Sol em menos de 200 anos, têm a sua origem nesta região remota e fria do nosso sistema.`,
  },

  "nuvem-de-oort": {
    titulo: "Nuvem de Oort",
    imagem: "/images/nuvem-de-oort.webp",
    descricao: `A Nuvem de Oort é uma gigantesca camada esférica teórica que marca o limite externo do Sistema Solar. Estendendo-se por quase um ano-luz do Sol, ela é composta por milhares de milhões de objetos gelados que se movem em órbitas muito lentas.

    Enquanto o Cinturião de Kuiper é um disco plano, a Nuvem de Oort envolve todo o sistema como uma bolha. É considerada a reserva de cometas de longo período, que podem levar milhares de anos para completar uma única volta ao redor do Sol.

    A gravidade de estrelas próximas pode ocasionalmente desviar um destes objetos para o interior do Sistema Solar, criando os espetaculares cometas que observamos da Terra.`,
  },

  "planetas-anoes": {
    titulo: "Planetas Anões",
    imagem: "/images/planetas-anoes.webp",
    descricao: `Um planeta anão é um corpo celeste que orbita o Sol e tem massa suficiente para que a sua própria gravidade o mantenha numa forma quase esférica, mas que, ao contrário dos oito planetas principais, não "limpou" a vizinhança da sua órbita.

    Atualmente, a União Astronómica Internacional reconhece cinco planetas anões: Ceres, Plutão, Haumea, Makemake e Éris. Ceres localiza-se no cinturião de asteroides, enquanto os outros estão no Cinturião de Kuiper ou no disco disperso.

    Estes mundos oferecem pistas cruciais sobre a história primordial do nosso sistema, preservando materiais que não foram incorporados nos planetas maiores.`,
  },

  lua: {
    titulo: "A Lua - Nosso Satélite Natural",
    imagem: "/images/lua.webp",
    descricao: `A Lua é o único satélite natural da Terra e o quinto maior satélite do Sistema Solar. Com um diâmetro de 3.474 km, ela é aproximadamente um quarto do tamanho da Terra.

    A Lua é o único corpo celeste além da Terra que humanos já visitaram. Entre 1969 e 1972, doze astronautas caminharam em sua superfície durante as missões Apollo.

    A Lua está gradualmente se afastando da Terra a uma taxa de cerca de 3,8 cm por ano. Sua gravidade é responsável pelas marés oceânicas e ajuda a estabilizar a inclinação axial da Terra, mantendo condições climáticas relativamente estáveis ao longo de milhões de anos.`,
  },

  "io(jupiter)": {
    titulo: "Io (Júpiter)",
    imagem: "/images/io.webp",
    descricao: `Io é o corpo geologicamente mais ativo do Sistema Solar, com centenas de vulcões ativos que expelem lava de silicato e plumas de enxofre a centenas de quilómetros de altura. Esta atividade extrema é causada pelo "aquecimento de maré".

    Situada entre a poderosa gravidade de Júpiter e a influência das luas Europa e Ganimedes, Io é constantemente "esmagada" e esticada internamente, gerando um calor imenso que derrete as suas rochas subterrâneas.

    A superfície de Io é constantemente renovada pela lava, o que explica a ausência total de crateras de impacto e a sua aparência colorida em tons de amarelo, vermelho e branco.`,
  },

  "europa(jupiter)": {
    titulo: "Europa (Júpiter)",
    imagem: "/images/europa.webp",
    descricao: `Europa é um dos mundos mais fascinantes para a astrobiologia. Sob uma crosta de gelo de quilómetros de espessura, acredita-se que exista um oceano global de água líquida salgada, mantido aquecido por forças de maré.

    A superfície de Europa é extremamente lisa e coberta por fissuras e riscos, sugerindo que o gelo flutua e se move sobre um interior líquido. Cientistas estimam que Europa possa conter duas vezes mais água do que todos os oceanos da Terra combinados.

    Com água líquida, elementos químicos essenciais e uma fonte de energia interna, Europa é considerada o local mais provável para encontrar vida extraterrestre no nosso sistema.`,
  },

  "ganimedes(jupiter)": {
    titulo: "Ganimedes (Júpiter)",
    imagem: "/images/ganimedes.webp",
    descricao: `Ganimedes é a maior lua do Sistema Solar, sendo inclusive maior do que o planeta Mercúrio (embora tenha menos massa). É o único satélite natural conhecido por possuir o seu próprio campo magnético gerado internamente.

    A sua superfície apresenta dois tipos de terreno: regiões escuras e antigas, densamente crateradas, e regiões mais claras e jovens, cortadas por sulcos e cumes. 

    Dados da missão Galileo sugerem que, tal como Europa, Ganimedes pode possuir um oceano subterrâneo de água salgada imprensado entre camadas de gelo a grandes profundidades.`,
  },

  "calisto(jupiter)": {
    titulo: "Calisto (Júpiter)",
    imagem: "/images/calisto.webp",
    descricao: `Calisto é o objeto com mais crateras de impacto em todo o Sistema Solar. A sua superfície de gelo e rocha é extremamente antiga e não mostra sinais de processos geológicos como vulcanismo ou tectónica de placas.

    Devido à sua distância de Júpiter, Calisto sofre menos influência de radiação e forças de maré do que as outras luas galileanas, tornando a sua superfície geologicamente "morta" há biliões de anos.

    É considerada uma cápsula do tempo, preservando o registo visual dos impactos que ocorreram durante o início da formação do sistema planetário.`,
  },

  titan: {
    titulo: "Titã - A Lua com Atmosfera",
    imagem: "/images/tita.webp",
    descricao: `Titã é a maior lua de Saturno e a segunda maior do Sistema Solar. É a única lua conhecida com uma atmosfera densa e a única além da Terra onde lagos e mares de líquido foram descobertos.

    A atmosfera de Titã é composta principalmente de nitrogênio, com metano e outros hidrocarbonetos. Na superfície, lagos de metano e etano líquido cobrem regiões polares, criando um ciclo hidrológico similar ao da Terra, mas com hidrocarbonetos em vez de água.

    A missão Cassini-Huygens revelou uma superfície complexa com dunas, montanhas e possivelmente criovulcões. Titã é considerado um dos locais mais promissores para buscar vida além da Terra.`,
  },

  "encelado(saturno)": {
    titulo: "Encélado (Saturno)",
    imagem: "/images/encelado.webp",
    descricao: `Encélado é uma pequena lua gelada de Saturno que se tornou uma das maiores prioridades da exploração espacial. A sonda Cassini descobriu géiseres gigantescos de vapor de água e partículas de gelo a serem expelidos do seu pólo sul.

    Estas plumas vêm de um oceano de água líquida localizado sob a crosta gelada. As partículas expelidas são tão abundantes que formam o anel E de Saturno.

    Análises químicas revelaram a presença de moléculas orgânicas e hidrogénio molecular nas plumas, sugerindo a existência de fontes hidrotermais no fundo do seu oceano — um ambiente que na Terra suporta ecossistemas inteiros.`,
  },

  "tritao(netuno)": {
    titulo: "Tritão (Netuno)",
    imagem: "/images/tritao.webp",
    descricao: `Tritão é a maior lua de Netuno e um dos lugares mais frios do Sistema Solar, com temperaturas de superfície próximas do zero absoluto (-235°C). É a única grande lua que orbita o seu planeta em sentido contrário à rotação deste (órbita retrógrada).

    Esta característica sugere que Tritão não se formou ao redor de Netuno, mas foi um objeto do Cinturião de Kuiper capturado pela gravidade do planeta há biliões de anos.

    A sua superfície possui criovulcões que expelem azoto líquido e poeira, e apresenta um terreno único conhecido como "casca de melão", devido à sua aparência rugosa e irregular.`,
  },
};