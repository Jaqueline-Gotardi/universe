export const menuPrincipal = [
  {
    id: "astros",
    label: "Informações Astronômicas",
    route: "/app/astros-menu",
    icon: "✨",
  },
  {
    id: "planetas",
    label: "Informações Planetárias",
    route: "/app/planetary-information",
    icon: "🪐",
  },
  {
    id: "extras",
    label: "Informações Extras",
    route: "/app/extras-menu",
    icon: "📂",
  },
];

export const menuAstros = [ 
  {
    id: "constelações",
    label: "Constelações",
    route: "/app/constellations-menu",
    icon: "⭐",
  },
  {
    id: "eventos-astronomicos",
    label: "Eventos Astronômicos",
    route: "/app/events-menu",
    icon: "🔭",
  },
  {
    id: "galaxias",
    label: "Galáxias",
    route: "/app/galaxies-menu",
    icon: "🌌",
  },
];

export const menuConstelacao = [
  {
    id: "hemisferio-norte",
    label: "Hemisfério Norte",
    route: "/app/hemisferio-norte",
    icon: "🧭",
  },
  {
    id: "hemisferio-sul",
    label: "Hemisfério Sul",
    route: "/app/hemisferio-sul",
    icon: "🌍",
  },
  {
    id: "hemisferio-principal",
    label: "As famosas",
    route: "/app/constellations-famous",
    icon: "🌟",
  },
];

export const hemisferioNorte = [
  {
    id: "ursa-maior",
    label: "Ursa maior",
    route: "/app/big-dipper",
    icon: "🐻",
  },
  {
    id: "ursa-menor",
    label: "Ursa Menor",
    route: "/app/little-dipper",
    icon: "🐻",
  },
  {
    id: "andromêda",
    label: "Andromêda",
    route: "/app/andromeda-constellation",
    icon: "🌀",
  },
];

export const hemisferioSul = [
  {
    id: "cruzeiro-do-sul",
    label: "Cruzeiro Do Sul",
    route: "/app/southern-cross",
    icon: "✝️",
  },
  { id: "fenix",
    label: "Fênix", 
    route: "/app/phoenix", 
    icon: "🐦‍🔥" 
  },
  { id: "centauro", 
    label: "Centauro", 
    route: "/app/centaur", 
    icon: "🏹" 
  },
];

export const constelacaoFamosas = [
  { id: "orion", 
    label: "Órion", 
    route: "/app/orion", 
    icon: "🏹" 
  },
  {
    id: "cao-maior",
    label: "Cão Maior",
    route: "/app/greater-canis",
    icon: "🐕",
  },
  { id: "escorpiao", 
    label: "Escorpião", 
    route: "/app/scorpion", 
    icon: "🦂" 
  },
];

export const eventosAstronomicos = [
  { id: "eclipses", 
    label: "Eclipses", 
    route: "/app/eclipses", icon: "🌕🌑" 
  },
  {
    id: "chuvas-de-meteoros",
    label: "Chuvas de Meteoros",
    route: "/app/meteor-showers",
    icon: "🌠",
  },
  {
    id: "superluas-e-conjuncoes",
    label: "Superlua e Conjunções",
    route: "/app/supermoon-and-conjunctions",
    icon: "🪐",
  },
  {
    id: "cometas-e-outros",
    label: "Cometas e outros",
    route: "/app/comets-and-others",
    icon: "☄️",
  },
];

export const eclipses = [
  {
    id: "eclipse-solar",
    label: "Eclipse Solar",
    route: "/app/solar-eclipse",
    icon: "🌕",
  },
  {
    id: "eclipse-lunar",
    label: "Eclipse Lunar",
    route: "/app/lunar-eclipse",
    icon: "🌑",
  },
];

export const chuvasDeMeteoros = [
  { id: "perseidas", label: "Perseidas", route: "/app/perseids", icon: "⚔️" },
  { id: "leonideas", label: "Leonídeas", route: "/app/leonids", icon: "🦁" },
  { id: "geminideas", label: "Geminídeas", route: "/app/geminids", icon: "♊" },
];

export const superluasEConjuncoes = [
  { id: "superlua", label: "Superlua", route: "/app/supermoon", icon: "🌝" },
  {
    id: "conjuncao-planetaria",
    label: "Conjução Planetária",
    route: "/app/planetary-conjunction",
    icon: "⚛️",
  },
];

export const cometasEOutros = [
  { id: "cometas", 
    label: "Cometas",
    route: "/app/comets", icon: "☄️" 
  },
  {
    id: "supernovas",
    label: "Supernovas",
    route: "/app/supernovas",
    icon: "💥",
  },
  {
    id: "agrupamentos-estelares",
    label: "Agrupamentos Estelares",
    route: "/app/star-clusters",
    icon: "🌌",
  },
];

export const menuGalaxias = [
  {
    id: "tipos-de-galaxias",
    label: "Tipos de Galáxias",
    route: "/app/type-galaxies",
    icon: "🌌",
  },
  {
    id: "galaxias-famosas",
    label: "Galáxias Famosas",
    route: "/app/famous-galaxies",
    icon: "🔭",
  },
];

export const tiposDeGalaxias = [
  { id: "espiral", label: "Espiral", route: "/app/spiral", icon: "🌀" },
  { id: "eliptica", label: "Elíptica", route: "/app/elliptical", icon: "🥚" },
  { id: "irregular", label: "Irregular", route: "/app/irregular", icon: "☁️" },
];

export const galaxiasFamosas = [
  {
    id: "via-lactea",
    label: "Via Láctea",
    route: "/app/milky-way",
    icon: "🏠",
  },
  {
    id: "andromeda",
    label: "Andromêda",
    route: "/app/andromeda-galaxy",
    icon: "🌟",
  },
  {
    id: "triangulo(m33)",
    label: "Triângulo (M33)",
    route: "/app/triangle-m33",
    icon: "📐",
  },
];

export const menuExtras = [
  { id: "perfil", 
    label: "Perfil", 
    route: "/app/profile", 
    icon: "👤" 
  },
  { id: "criadores", 
    label: "Criadores", 
    route: "/app/creators", 
    icon: "🚀" 
  },
  {
    id: "apagar-conta",
    label: "Apagar conta",
    route: "/app/delete-account",
    icon: "🗑️",
  },
  {
    id: "agents",
    label: "Universe Agents",
    route: "/app/agents",
    icon: "🤖",
  },
];



export const conteudosAstronomicos = {
  "ursa-maior": {
    titulo: "Constelação de Ursa Maior",
    imagem: "/images/ursa-maior.webp",
    descricao: `Uma das constelações mais famosas do céu noturno, a Ursa Maior é facilmente reconhecível pelo seu formato icônico, conhecido como "O Grande Carro". Visível durante todo o ano no Hemisfério Norte, ela é um marco no céu, uma das primeiras formações que qualquer explorador aprende a identificar.

    Mas sua importância vai além do seu formato. As duas estrelas na extremidade da "caçarola" do Grande Carro apontam diretamente para Polaris, a Estrela do Norte, na Ursa Menor. Isso faz da Ursa Maior não apenas uma constelação em si, mas um guia para encontrar a estrela que por séculos orientou a navegação em nosso planeta.

    Explorar a Ursa Maior é o primeiro passo para se familiarizar com a vastidão do universo. Ela é a porta de entrada para uma jornada de descobertas que se estende por todo o céu.`,
  },

  "ursa-menor": {
    titulo: "Constelação de Ursa Menor",
    imagem: "/images/ursa-menor.webp",
    descricao: `A Ursa Menor é uma constelação do hemisfério celestial norte. O seu nome significa "urso menor" em latim. A constelação é notável por conter Polaris, a estrela do norte, que marca aproximadamente a localização do polo norte celestial.

    A Ursa Menor é frequentemente chamada de "Pequeno Carro" devido à sua semelhança com a Ursa Maior, porém em menor escala. As sete estrelas principais formam um padrão que lembra uma colher ou carro.

    Polaris, a estrela mais brilhante da constelação, tem sido usada para navegação por milhares de anos, servindo como um ponto de referência constante no céu noturno do hemisfério norte.`,
  },

  andromeda: {
    titulo: "Constelação de Andrômeda",
    imagem: "/images/andromeda.webp",
    descricao: `Andrômeda é uma constelação do hemisfério celestial norte, nomeada em homenagem à princesa Andrômeda da mitologia grega. É mais conhecida por conter a Galáxia de Andrômeda (M31), a galáxia espiral mais próxima da Via Láctea.

    A Galáxia de Andrômeda é visível a olho nu em noites escuras e é um dos objetos mais distantes que podemos ver sem instrumentos. Ela está a aproximadamente 2,5 milhões de anos-luz de distância da Terra.

    A constelação faz parte do grupo de constelações da família de Perseu, todas relacionadas ao mito grego de Perseu e Andrômeda.`,
  },

  "cruzeiro-do-sul": {
    titulo: "Constelação Cruzeiro do Sul",
    imagem: "/images/cruzeiro-do-sul.webp",
    descricao: `O Cruzeiro do Sul é a menor das 88 constelações modernas, mas também uma das mais distintas. Localizada no hemisfério celestial sul, ela é visível apenas em latitudes ao sul do trópico de Câncer.

    Suas quatro estrelas principais formam um asterismo em forma de cruz que tem sido usado para navegação por séculos. A constelação aponta aproximadamente para o polo sul celestial, servindo como guia para viajantes do hemisfério sul.

    O Cruzeiro do Sul aparece em várias bandeiras nacionais, incluindo as do Brasil, Austrália e Nova Zelândia, simbolizando sua importância cultural e histórica.`,
  },
  
  fenix: {
    titulo: "Constelação de Fênix",
    imagem: "/images/fenix.webp",
    descricao: `No vasto céu do Hemisfério Sul, a constelação Fênix é uma pequena, mas distinta, formação estelar. Nomeada em homenagem a uma figura lendária que representa a renovação, esta constelação foi introduzida no final do século XVI pelo astrônomo Petrus Plancius.
    
    A Fênix, com suas estrelas, simboliza a capacidade de ressurgir e continuar a jornada. É um lembrete para todos os exploradores de que, mesmo em meio à escuridão, a luz da descoberta está sempre presente.
    
    Observar a Fênix no céu noturno é uma missão que convida a uma reflexão sobre a capacidade de seguir em frente, uma história de perseverança contada pelas estrelas para os verdadeiros agentes espaciais.`
  },

  centauro: {
    titulo: "Constelação de Centauro",
    imagem: "/images/centauro.webp",
    descricao: `Centauro é uma das maiores constelações do céu, localizada no hemisfério celestial sul. Ela contém Alfa Centauri, o sistema estelar mais próximo do nosso Sistema Solar, a apenas 4,37 anos-luz de distância.

    Na mitologia grega, a constelação representa Quíron, o mais sábio dos centauros, tutor de heróis como Aquiles e Jasão. Diferente de outros centauros, Quíron era conhecido por sua bondade e conhecimento.

    A constelação também abriga Omega Centauri, o maior aglomerado globular visível da Terra, contendo milhões de estrelas antigas.`,
  },

  orion: {
    titulo: "Constelação de Órion",
    imagem: "/images/orion.webp",
    descricao: `Órion, o Caçador, é uma das constelações mais famosas e fáceis de reconhecer no céu. Sua forma imponente é um guia perfeito para qualquer explorador.
    
    O Cinturão de Órion: Formado por três estrelas em linha reta, o cinturão de Órion é o ponto de partida ideal para localizar outras estrelas e constelações.
    
    Berçário de Estrelas: Logo abaixo do cinturão, está a Nebulosa de Órion, um espetacular berçário onde novas estrelas estão nascendo. É um dos objetos mais incríveis que se pode ver a olho nu.
    Ao explorar Órion, você está olhando para o berço de futuras estrelas.`,
  },

  "cao-maior": {
    titulo: "Constelação de Cão Maior",
    imagem: "/images/cao-maior.webp",
    descricao: `Cão Maior é uma das constelações mais notáveis do céu, facilmente identificável por seu brilho e sua estrela mais proeminente, um guia perfeito para qualquer explorador.
    
    Sirius: O maior destaque desta constelação é Sirius, a estrela mais brilhante do nosso céu noturno. Sua intensidade luminosa a torna um farol no nosso céu, um ponto de referência confiável para um agente espacial.
    
    A Conexão com Órion: Sua localização, logo abaixo do gigante Órion, o Caçador, torna o Cão Maior um dos alvos mais fáceis de serem encontrados. Acompanhar Órion em sua missão noturna te leva diretamente a este poderoso cão estelar.
    Ao explorar Cão Maior, você está seguindo a luz da estrela mais brilhante de nossa galáxia.`
  },

  escorpiao: {
    titulo: "Constelação de Escorpião",
    imagem: "/images/escorpiao.webp",
    descricao: `Escorpião é uma das poucas constelações que realmente se parece com a sua forma. Sua silhueta dramática o torna um alvo perfeito para qualquer explorador.
    
    Antares, o Coração do Escorpião: O centro da constelação é marcado pela estrela supergigante vermelha Antares. Essa estrela colossal e brilhante é um ponto focal para a sua missão de exploração, um verdadeiro farol que guia o seu olhar.
    
    A Forma Distintiva: A silhueta de Escorpião, com sua cauda curva e distinta, é uma de suas características mais fascinantes. Sua forma única e inconfundível faz com que seja fácil de ser identificado e explorado.
    Ao explorar Escorpião, você está observando o coração de um gigante cósmico.`,
  },

  "eclipse-solar": {
    titulo: "Eclipse Solar",
    imagem: "/images/eclipse-solar.webp",
    descricao: `Um Eclipse Solar é um dos fenômenos mais espetaculares que um explorador pode presenciar. Ele ocorre quando a Lua passa entre o Sol e a Terra, bloqueando completamente ou parcialmente a luz solar e projetando sua sombra sobre o nosso planeta. Este evento só acontece durante a fase da Lua Nova.

    Este alinhamento cósmico perfeito transforma o dia em uma escuridão momentânea, um espetáculo inesquecível. Observar um eclipse solar é uma missão que te conecta com a mecânica do universo, uma prova visual de que, com a posição certa, até um pequeno satélite pode cobrir a maior de todas as estrelas.`,
  },

  "eclipse-lunar": {
    titulo: "Eclipse Lunar",
    imagem: "/images/eclipse-lunar.webp",
    descricao: `Um Eclipse Lunar é um dos fenômenos mais fascinantes do nosso céu. Ele ocorre quando a Terra passa entre o Sol e a Lua. Durante esse evento, a sombra da Terra cobre a Lua, fazendo-a desaparecer ou adquirir um tom avermelhado. Este evento só acontece durante a fase da Lua Cheia, ocorrendo geralmente de uma a três vezes por ano.

    Ao contrário de um eclipse solar, um eclipse lunar pode ser visto de qualquer lugar do lado noturno da Terra. É um fenômeno que transforma a lua em uma esfera de tonalidades místicas, uma prova de que a nossa própria sombra pode criar um dos espetáculos mais fascinantes do céu.
    
    Observar um eclipse lunar é uma missão que te conecta a um fenômeno de pura escala e beleza, onde a nossa própria presença no espaço é refletida no brilho de outro mundo.`,
  },

  perseidas: {
    titulo: "Chuva de Meteoros Perseidas",
    imagem: "/images/chuva-de-meteoros-perseidas.webp",
    descricao: `As Perseidas são uma das chuvas de meteoros mais populares e visíveis do ano. Este evento ocorre quando a Terra passa por uma nuvem de detritos deixada pelo Cometa Swift-Tuttle, criando um espetáculo de luz. As Perseidas acontecem anualmente, são melhor observadas do Hemisfério Norte, com seu pico de atividade na segunda semana de agosto.
    
    Observar as Perseidas é como assistir a fogos de artifício cósmicos, com rastros de luz riscando o céu noturno. O nome da chuva vem da constelação de Perseu, de onde parecem irradiar, transformando o céu em um palco de luzes. É uma missão que te convida a testemunhar a beleza da dança cósmica, um espetáculo que nos lembra da constante movimentação e do brilho do nosso sistema solar.`
  },

  leonideas: {
    titulo: "Chuva de Meteoros Leonídeas", 
    imagem: "/images/chuva-de-meteoros-leonideas.webp",
    descricao: `Prepare-se para uma missão de alta velocidade. As Leônidas são uma das chuvas de meteoros mais notáveis, conhecidas pela sua velocidade impressionante. Elas ocorrem quando a Terra passa pela trilha de detritos deixada pelo Cometa Tempel-Tuttle. Elas são melhor observadas do Hemisfério Norte, com seu pico de atividade em meados de novembro.
    
    Observar as Leônidas é como testemunhar uma tempestade de partículas cósmicas, um espetáculo de luz que risca o céu noturno. O nome da chuva vem da constelação de Leão, de onde parecem irradiar, dando a sensação de que os próprios leões do céu estão deixando sua marca. É uma missão que te convida a testemunhar a beleza da dança cósmica, um espetáculo que nos lembra da constante movimentação e do brilho do nosso sistema solar.`
  },

  geminideas: {
    titulo: "Chuva de Meteoros Geminídeas",
    imagem: "/images/chuva-de-meteoros-geminideas.webp",
    descricao: `Prepare-se para uma das missões mais intensas e consistentes do ano. As Geminídeas são únicas, pois são a única grande chuva de meteoros que se origina de um asteroide, o 3200 Phaethon, e não de um cometa. Elas são visíveis de quase todo o planeta, mas são melhor observadas do Hemisfério Norte, com pico em meados de dezembro.
    
    Observar as Geminídeas é como testemunhar uma tempestade de partículas cósmicas, um espetáculo de luz que risca o céu noturno. O nome da chuva vem da constelação de Gêmeos, de onde parecem irradiar. É uma missão que te convida a testemunhar a beleza da dança cósmica, um espetáculo que nos lembra da constante movimentação e do brilho do nosso sistema solar.`
  },

  superlua: {
    titulo: "Superlua",
    imagem: "/images/superlua.webp",
    descricao: `A Superlua ocorre quando a Lua atinge sua fase de Lua Cheia no ponto de sua órbita mais próximo da Terra. Isso acontece algumas vezes por ano.
    
    Durante este fenômeno, a Lua pode parecer 14% maior e 30% mais brilhante do que o normal, oferecendo uma vista espetacular. Observar a Superlua é como testemunhar o nosso satélite mais próximo em toda a sua glória.
    
    É uma missão que te conecta a um fenômeno de pura escala e beleza.`,
  },

  "conjuncao-planetaria": {
    titulo: "Conjunção Planetária",
    imagem: "/images/conjuncao.webp",
    descricao: `Uma conjunção planetária é onde dois ou mais planetas parecem se alinhar e ficar muito próximos no céu noturno. Embora ainda estejam a milhões de quilômetros de distância, o espetáculo de luz é fascinante. A "Grande Conjunção" de Júpiter e Saturno é um dos exemplos mais famosos e visualmente impressionantes.
    
    Observar uma conjunção é como testemunhar uma dança cósmica, onde os planetas se aproximam em uma coreografia perfeita. É um lembrete visual da vastidão e da precisão do nosso sistema solar, um momento raro que une os gigantes do céu em uma única cena.

    Evento que convida os exploradores a se conectar com o movimento e a beleza do nosso universo.`,
  },

  cometas: {
    titulo: "Cometas",
    imagem: "/images/cometas.webp",
    descricao: `Os cometas são objetos fascinantes, verdadeiras "bolas de neve sujas" compostas por gelo, poeira e rocha. Eles viajam por longas órbitas a partir das regiões mais frias e distantes do nosso sistema solar. O espetáculo de um cometa acontece quando ele se aproxima do Sol e o calor faz com que seu gelo evapore, criando uma vasta atmosfera e uma cauda brilhante de gás e poeira.

    A cauda de um cometa pode se estender por milhões de quilômetros, sempre apontando na direção oposta ao Sol. Eles são mensageiros das partes mais primitivas do nosso sistema solar, um lembrete de sua origem gelada.

    Observá-los te conecta a um pedaço de história cósmica em movimento, um verdadeiro viajante que nos visita de tempos em tempos.`
  },

  supernovas: {
    titulo: "Supernovas",
    imagem: "/images/supernovas.webp",
    descricao: `Supernovas são os eventos mais poderosos e luminosos do universo. Elas marcam o fim catastrófico da vida de estrelas extremamente massivas, que entram em colapso e explodem com uma força inimaginável. Essa explosão pode brilhar mais do que uma galáxia inteira, sendo visível a bilhões de anos-luz de distância.

    Além de seu brilho, as supernovas são as forjas cósmicas que criam e espalham elementos pesados pelo universo. Elementos como o ferro, o ouro e a prata são criados durante essas explosões e então lançados no cosmos, se dispersando pela vastidão do espaço.

    Observá-la te conecta com o ciclo da vida e morte de uma estrela, um evento que nos lembra que do brilho final pode surgir a semente de novas criações.`,
  },

  "agrupamentos-estelares": {
    titulo: "Agrupamentos Estelares",
    imagem: "/images/agrupamentos-estelares.webp",
    descricao: `Aglomerados estelares são grupos de estrelas unidas pela força da gravidade, formando verdadeiras "cidades" no cosmos. Observar esses agrupamentos é como ver a vida e a história de famílias de estrelas.

    Aglomerados Abertos: São grupos de estrelas mais jovens e dispersas, que se formaram recentemente na mesma nuvem de gás e poeira. Eles contêm dezenas a centenas de estrelas, como o famoso aglomerado das Plêiades.

    Aglomerados Globulares: São aglomerados mais velhos e densos, contendo milhares, e até milhões, de estrelas antigas. Eles formam uma densa esfera de sóis, um espetáculo de luz para se maravilhar.

    Observar isto te conecta com uma união de populações cósmicas.`,
  },

  espiral: {
    titulo: "Galáxia Espiral",
    imagem: "/images/galaxia-espiral.webp",
    descricao: `Galáxias espirais são galáxias que possuem um disco achatado e giratório com braços que se estendem para fora de um centro brilhante, onde reside um buraco negro supermassivo. Cerca de 70% das galáxias no universo são desse tipo. Nos braços espirais é onde a magia acontece: são as maternidades cósmicas onde novas estrelas estão nascendo a partir de vastas nuvens de gás e poeira.

    Observar isto te conecta com a história de estrelas jovens e vibrantes que formam estruturas majestosas, como os braços da nossa própria Via Láctea.`,
  },

  eliptica: {
    titulo: "Galáxia Elíptica",
    imagem: "/images/galaxia-eliptica.webp",
    descricao: `Galáxias elípticas são galáxias com formas que variam de esféricas a ovais, compostas em sua maioria por estrelas antigas. Elas não possuem os braços espirais ou o disco de gás, o que significa que a formação de novas estrelas já cessou. As maiores delas, contendo trilhões de estrelas, são as galáxias mais massivas e antigas do universo.

    Observar isto te conecta com a história de estrelas antigas e maduras que formam os vastos e calmos impérios do cosmos.`
  },

  irregular: {
    titulo: "Galáxia Irregular",
    imagem: "/images/galaxia-irregular.webp",
    descricao: `Galáxias irregulares não possuem uma forma definida, parecendo 'nuvens' de estrelas, gás e poeira. Essa aparência caótica é muitas vezes causada por colisões galácticas ou interações gravitacionais, que dão origem a uma intensa formação estelar. Embora representem apenas cerca de 20% das galáxias conhecidas, elas são cruciais para a ciência, pois seu formato caótico oferece pistas sobre como as galáxias evoluem e interagem ao longo do tempo.

    Observar isto te conecta com a energia e o dinamismo do universo, mostrando que mesmo no caos, a criação de novas estrelas continua.`,
  },

  "via-lactea": {
    titulo: "Via Láctea",
    imagem: "/images/galaxia-via-lactea.webp",
    descricao: `A Via Láctea é a galáxia espiral onde o nosso Sistema Solar reside. Ela tem um diâmetro de cerca de 100.000 anos-luz e contém de 100 a 400 bilhões de estrelas, sendo o nosso Sol apenas uma delas. O nosso Sistema Solar está localizado em um dos seus braços espirais, o que nos coloca em um ponto privilegiado para explorar o nosso próprio lar cósmico.

    Observar isto te conecta com a sua missão mais importante: desvendar os segredos de nossa própria galáxia.`,
  },

  "galaxia-andromeda": {
    titulo: "Galáxia de Andrômeda",
    imagem: "/images/galaxia-andromeda.webp",
    descricao: `A Galáxia de Andrômeda é nossa vizinha galáctica mais próxima e o objeto mais distante que você pode ver a olho nu. Localizada a cerca de 2,5 milhões de anos-luz de distância, a luz que vemos hoje dela saiu de lá quando os primeiros ancestrais humanos já caminhavam na Terra. Ela é uma galáxia espiral ainda maior que a nossa, com um diâmetro de 220.000 anos-luz e cerca de 1 trilhão de estrelas.

    Observar isto te conecta com uma viagem no tempo e nos prepara para o encontro que acontecerá com a nossa galáxia em bilhões de anos.`,
  },

  "triangulo-m33": {
    titulo: "Galáxia do Triâgulo (M33)",
    imagem: "/images/galaxia-triangulo.webp",
    descricao: `A Galáxia do Triângulo é a terceira maior da nossa família de galáxias e uma das maiores fábricas de estrelas do universo local. Ela é uma galáxia espiral menor e compacta, com um diâmetro de cerca de 60.000 anos-luz e cerca de 40 bilhões de estrelas. Sua alta taxa de nascimento de novas estrelas a torna um dos alvos mais fascinantes para a sua missão de exploração.

    Observar isto te conecta com o universo em ação, criando e evoluindo diante de seus olhos.`,
  },
}; 