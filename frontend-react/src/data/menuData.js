export const menuPrincipal = [
    { id: "astros", label: "Informações Astronômicas", route: "/app/astros-menu", icon: "✨" },
    { id: "planetas", label: "Informações Planetárias", route: "/app/planetary-information", icon: "🪐"},
    { id: "extras", label: "Informações Extras", route: "/app/extras-menu", icon: "📂"}, 
];

export const menuAstros = [
    { id: "constelações", label: "Constelações", route: "/app/constellations-menu", icon: "⭐"},
    { id: "eventos-astronomicos", label: "Eventos Astronômicos", route: "/app/events-menu", icon: "🔭"},
    { id: "galaxias", label: "Galáxias", route: "/app/galaxies-menu", icon: "🌌"},
]

export const menuConstelacao = [
    { id: "hemisferio-norte", label: "Hemisfério Norte", route: "/app/hemisferio-norte", icon: "🧭"},
    { id: "hemisferio-sul", label: "Hemisfério Sul", route: "/app/hemisferio-sul", icon: "🌍"},
    { id: "hemisferio-principal", label: "As famosas", route: "/app/constellations-famous", icon: "🌟"},
]

export const hemisferioNorte = [
    { id: "ursa-maior", label: "Ursa maior", route: "/app/big-dipper", icon: "🐻"},
    { id: "ursa-menor", label: "Ursa Menor", route: "/app/little-dipper", icon: "🐻"},
    { id: "andromêda", label: "Andromêda", route: "/app/andromeda-constellation", icon: "🌀"},
]

export const hemisferioSul = [
    { id: "cruzeiro-do-sul", label: "Cruzeiro Do Sul", route: "/app/southern-cross", icon: "✝️"},
    { id: "fenix", label: "Fênix", route: "/app/phoenix", icon: "🐦‍🔥"},
    { id: "centauro", label: "Centauro", route: "/app/centaur", icon: "🏹"},   
]

export const constelacaoFamosas = [
    { id: "orion", label: "Órion", route: "/app/orion", icon: "🏹"},
    { id: "cao-maior", label: "Cão Maior", route: "/app/greater-canis", icon: "🐕"},
    { id: "escorpiao", label: "Escorpião", route: "/app/scorpion", icon: "🦂"},   
]

export const eventosAstronomicos = [
    { id: "eclipses", label: "Eclipses", route: "/app/eclipses", icon: "🌕🌑"},
    { id: "chuvas-de-meteoros", label: "Chuvas de Meteoros", route: "/app/meteor-showers", icon: "🌠"},
    { id: "superluas-e-conjuncoes", label: "Superlua e Conjunções", route: "/app/supermoon-and-conjunctions", icon: "🪐"},   
    { id: "cometas-e-outros", label: "Cometas e outros", route: "/app/comets-and-others", icon: "☄️"},
]

export const eclipses = [
    { id: "eclipse-solar", label: "Eclipse Solar", route: "/app/solar-eclipse", icon: "🌕"},
    { id: "eclipse-lunar", label: "Eclipse Lunar", route: "/app/lunar-eclipse", icon: "🌑"},
]

export const chuvasDeMeteoros = [
    { id: "perseidas", label: "Perseidas", route: "/app/perseids", icon: "⚔️"},
    { id: "leonideas", label: "Leonídeas", route: "/app/leonids", icon: "🦁"},
    { id: "geminideas", label: "Geminídeas", route: "/app/geminids", icon: "♊"},  
]

export const superluasEConjuncoes = [
    { id: "superlua", label: "Superlua", route: "/app/supermoon", icon: "🌝"},
    { id: "conjuncao-planetaria", label: "Conjução Planetária", route: "/app/planetary-conjunction", icon: "⚛️"},   
]

export const cometasEOutros = [
    { id: "cometas", label: "Cometas", route: "/app/comets", icon: "☄️"},
    { id: "supernovas", label: "Supernovas", route: "/app/supernovas", icon: "💥"}, 
    { id: "agrupamentos-estelares", label: "Agrupamentos Estelares", route: "/app/star-clusters", icon: "🌌"}, 
]

export const menuGalaxias = [
    { id: "tipos-de-galaxias", label: "Tipos de Galáxias", route: "/app/type-galaxies", icon: "🌌"},
    { id: "galaxias-famosas", label: "Galáxias Famosas", route: "/app/famous-galaxies", icon: "🔭"}, 
]

export const tiposDeGalaxias = [
    { id: "espiral", label: "Espiral", route: "/app/spiral", icon: "🌀"},
    { id: "eliptica", label: "Elíptica", route: "/app/elliptical", icon: "🥚"}, 
    { id: "irregular", label: "Irregular", route: "/app/irregular", icon: "☁️"}, 
]

export const galaxiasFamosas = [
    { id: "via-lactea", label: "Via Láctea", route: "/app/milky-way", icon: "🏠"},
    { id: "andromeda", label: "Andromêda", route: "/app/andromeda-galaxy", icon: "🌟"}, 
    { id: "triangulo(m33)", label: "Triângulo (M33)", route: "/app/triangle-m33", icon: "📐"}, 
]





export const informacoesPlanetarias = [
    { id: "sistema-solar", label: "Sistema Solar", route: "/app/sistema-solar", icon: "☀️"},
    { id: "planetas", label: "Planetas", route: "/app/planetary-menu", icon: "🪐"}, 
    { id: "luas-e-satelites", label: "Luas e Satélites", route: "", icon: "🌙"}, 
]

export const menuSistemaSolar = [
    { id: "conteudo-principal", label: "Conteúdo Principal", route: "", icon: "📖"},
    { id: "curiosidades", label: "Curiosidades", route: "", icon: "💡"},
    { id: "visual", label: "Visual", route: "", icon: "🔭"},
]

export const menuPlanetas = [
    { id: "mercurio", label: "Mercúrio", route: "/app/mercury", icon: "☄️"},
    { id: "venus", label: "Vênus", route: "/app/venus", icon: "🌅"}, 
    { id: "terra", label: "Terra", route: "/app/earth", icon: "🌍"},
    { id: "marte", label: "Marte", route: "/app/mars", icon: "🔴"}, 
    { id: "jupiter", label: "Júpiter", route: "/app/jupiter", icon: "🌌"}, 
    { id: "saturno", label: "Saturno", route: "/app/saturn", icon: "🪐"},
    { id: "urano", label: "Urano", route: "/app/uranus", icon: "💎"}, 
    { id: "netuno", label: "Netuno", route: "/app/neptune", icon: "🔱"}, 
    { id: "plutao", label: "Plutão", route: "/app/pluto", icon: "❄️"}, 
]

export const menuLuasESatelites = [
    { id: "nossa-lua", label: "Nossa Lua", route: "", icon: "🌑"},
    { id: "luas-famosas", label: "Luas famosas", route: "", icon: "☄️"},
    { id: "satelites-artificiais", label: "Satélites Artificiais", route: "", icon: "🛰️"},
]







export const menuExtras = [
    { id: "perfil", label: "Perfil", route: "/app/profile", icon: "👤"},
    { id: "criadores", label: "Criadores", route: "/app/creators", icon: "🚀"}, 
    { id: "apagar-conta", label: "Apagar conta", route: "/app/delete-account", icon: "🗑️"}, 
]