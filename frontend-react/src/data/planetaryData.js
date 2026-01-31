export const menuSistemaSolar = [
    { id: "sol", label: "O Sol", icon: "☀️", route: "/conteudo/sol", color: "#FFD700" },
    { id: "cinturao-asteroides", label: "Cinturão de Asteroides", icon: "☄️", route: "/conteudo/cinturao-asteroides", color: "#A0522D" },
    { id: "cinturao-kuiper", label: "Cinturão de Kuiper", icon: "💫", route: "/conteudo/cinturao-kuiper", color: "#708090" },
    { id: "nuvem-oort", label: "Nuvem de Oort", icon: "🌌", route: "/conteudo/nuvem-oort", color: "#483D8B" },
    { id: "planetas-anoes", label: "Planetas Anões", icon: "⚫", route: "/conteudo/planetas-anoes", color: "#696969" },
]

export const menuPlanetas = [
    { id: "mercurio", label: "Mercúrio", route: "/app/mercury", icon: "🔴"},
    { id: "venus", label: "Vênus", route: "/app/venus", icon: "🟠"}, 
    { id: "terra", label: "Terra", route: "/app/earth", icon: "🌍"},
    { id: "marte", label: "Marte", route: "/app/mars", icon: "🔴"}, 
    { id: "jupiter", label: "Júpiter", route: "/app/jupiter", icon: "🟤"}, 
    { id: "saturno", label: "Saturno", route: "/app/saturn", icon: "🪐"},
    { id: "urano", label: "Urano", route: "/app/uranus", icon: "🔵"}, 
    { id: "netuno", label: "Netuno", route: "/app/neptune", icon: "🔵"}, 
    /* { id: "plutao", label: "Plutão", route: "/app/pluto", icon: "⚫"},  */
]

export const menuLuasESatelites = [
    { id: "lua-terra", label: "Lua (Terra)", icon: "🌕", route: "/conteudo/lua", color: "#C0C0C0" },
    { id: "io", label: "Io (Júpiter)", icon: "🟡", route: "/conteudo/io", color: "#FFD700" },
    { id: "europa", label: "Europa (Júpiter)", icon: "⚪", route: "/conteudo/europa", color: "#E0E0E0" },
    { id: "ganimedes", label: "Ganimedes (Júpiter)", icon: "🟤", route: "/conteudo/ganimedes", color: "#8B4513" },
    { id: "calisto", label: "Calisto (Júpiter)", icon: "⚫", route: "/conteudo/calisto", color: "#2F4F4F" },
    { id: "tita", label: "Titã (Saturno)", icon: "🟠", route: "/conteudo/tita", color: "#FF8C00" },
    { id: "encélado", label: "Encélado (Saturno)", icon: "⚪", route: "/conteudo/enceladus", color: "#FFFAFA" },
    { id: "tritao", label: "Tritão (Netuno)", icon: "🔵", route: "/conteudo/tritao", color: "#5F9EA0" },
]




export const conteudosPlanetarios = {
  "mercurio": {
    titulo: "Mercúrio",
    imagem: "🔴",
    descricao: `Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol. Com um diâmetro de apenas 4.879 km, ele é apenas ligeiramente maior que a nossa Lua.

Apesar de sua proximidade com o Sol, Mercúrio não é o planeta mais quente (esse título pertence a Vênus). No entanto, Mercúrio experimenta as maiores variações de temperatura do Sistema Solar, oscilando entre -180°C à noite e 430°C durante o dia.

O planeta não possui atmosfera significativa, o que o deixa vulnerável a impactos de meteoritos. Sua superfície é coberta de crateras, semelhante à Lua. Um ano em Mercúrio dura apenas 88 dias terrestres, mas um dia solar (do nascer ao pôr do sol) leva 176 dias terrestres.`,
  },
  "venus": {
    titulo: "Vênus - A Estrela da Manhã",
    imagem: "🟠",
    descricao: `Vênus é o segundo planeta a partir do Sol e é frequentemente chamado de "planeta irmão" da Terra devido ao seu tamanho similar. No entanto, as semelhanças param por aí.

Vênus possui a atmosfera mais densa de todos os planetas rochosos, composta principalmente de dióxido de carbono com nuvens de ácido sulfúrico. Essa atmosfera cria um efeito estufa extremo, tornando Vênus o planeta mais quente do Sistema Solar, com temperaturas na superfície de cerca de 465°C.

Curiosamente, Vênus gira na direção oposta à maioria dos planetas (rotação retrógrada), o que significa que o Sol nasce no oeste e se põe no leste. Um dia em Vênus é mais longo que um ano venusiano!`,
  },
  "terra": {
    titulo: "Terra - Nosso Lar Azul",
    imagem: "🌍",
    descricao: `A Terra é o terceiro planeta a partir do Sol e o único conhecido por abrigar vida. Com uma idade de aproximadamente 4,5 bilhões de anos, nosso planeta tem condições únicas que permite a vida.

A Terra possui uma atmosfera rica em nitrogênio e oxigênio, um campo magnético protetor e água líquida em abundância (os três ingredientes essenciais para a vida como a conhecemos).

Cerca de 71% da superfície terrestre é coberta por oceanos, o que dá ao nosso planeta sua característica cor azul quando visto do espaço. A Lua, nosso único satélite natural, desempenha um papel crucial na estabilização do eixo de rotação da Terra e nas marés oceânicas.`,
  },
  "marte": {
    titulo: "Marte - O Planeta Vermelho",
    imagem: "🔴",
    descricao: `Marte é o quarto planeta do Sistema Solar e tem fascinado a humanidade por séculos. Sua cor avermelhada, visível mesmo a olho nu, é causada pelo óxido de ferro (ferrugem) em sua superfície.

Marte abriga as maiores estruturas geológicas conhecidas no Sistema Solar: o Monte Olimpo, um vulcão com 22 km de altura (quase três vezes a altura do Everest), e o Valles Marineris, um sistema de cânions de 4.000 km de extensão.

Evidências sugerem que Marte já teve água líquida em sua superfície bilhões de anos atrás. Hoje, água existe principalmente como gelo nos polos e possivelmente em aquíferos subterrâneos. Marte possui duas pequenas luas: Fobos e Deimos.`,
  },
  "jupiter": {
    titulo: "Júpiter - O Gigante Gasoso",
    imagem: "🟤",
    descricao: `Júpiter é o maior planeta do Sistema Solar, com uma massa 2,5 vezes maior que todos os outros planetas combinados. Se Júpiter fosse oco, mais de 1.300 Terras caberiam dentro dele.

O planeta é famoso pela Grande Mancha Vermelha, uma tempestade anticiclônica que existe há pelo menos 400 anos. Essa tempestade é tão grande que poderia engolir a Terra inteira.

Júpiter possui pelo menos 95 luas conhecidas, incluindo as quatro grandes luas galileanas: Io, Europa, Ganimedes e Calisto. Europa é particularmente interessante para cientistas, pois pode abrigar um oceano de água líquida sob sua superfície gelada.`,
  },
  "saturno": {
    titulo: "Saturno - O Senhor dos Anéis",
    imagem: "🪐",
    descricao: `Saturno é o sexto planeta do Sistema Solar e é instantaneamente reconhecível por seu espetacular sistema de anéis. Embora outros gigantes gasosos também possuam anéis, nenhum se compara à magnificência dos anéis de Saturno.

Os anéis são compostos principalmente de partículas de gelo, variando em tamanho de grãos de areia a blocos do tamanho de casas. Surpreendentemente, apesar de se estenderem por centenas de milhares de quilômetros, os anéis têm apenas cerca de 10 metros de espessura.

Saturno é tão pouco denso que flutuaria se pudesse ser colocado em um oceano grande o suficiente. O planeta possui mais de 140 luas, incluindo Titã, a segunda maior lua do Sistema Solar e a única com uma atmosfera densa.`,
  },
  "urano": {
    titulo: "Urano - O Planeta Deitado",
    imagem: "🔵",
    descricao: `Urano é o sétimo planeta do Sistema Solar e possui uma característica única: ele gira de lado! Seu eixo de rotação está inclinado em aproximadamente 98 graus, possivelmente resultado de uma colisão com um objeto do tamanho da Terra bilhões de anos atrás.

Urano é classificado como um "gigante de gelo", pois sua composição inclui água, metano e amônia em formas de gelo de alta pressão. A cor azul-esverdeada do planeta é causada pelo metano em sua atmosfera.

O planeta possui 27 luas conhecidas, todas nomeadas em homenagem a personagens das obras de William Shakespeare e Alexander Pope. Urano também possui um sistema de anéis, embora muito mais tênue que o de Saturno.`,
  },
  "netuno": {
    titulo: "Netuno - O Gigante Azul",
    imagem: "🔵",
    descricao: `Netuno é o oitavo e mais distante planeta do Sistema Solar, localizado a cerca de 4,5 bilhões de quilômetros do Sol. Um ano em Netuno equivale a 165 anos terrestres.

O planeta possui os ventos mais fortes do Sistema Solar, atingindo velocidades de até 2.100 km/h. Sua atmosfera apresenta tempestades massivas, incluindo a Grande Mancha Escura, similar à Grande Mancha Vermelha de Júpiter.

Netuno possui 16 luas conhecidas, sendo Tritão a maior e mais interessante. Tritão é uma das luas mais frias do Sistema Solar e é geologicamente ativa, com gêiseres que expelem nitrogênio. Curiosamente, Tritão orbita Netuno na direção oposta à rotação do planeta.`,
  },
}