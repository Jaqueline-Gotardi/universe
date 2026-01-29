export const menuPrincipal = [
    { id: "astros", label: "Informações Astronômicas", route: "/app/astros-menu", icon: "✨" },
    { id: "planetas", label: "Informações Planetárias", route: "/app/planetary-menu", icon: "🪐"},
    { id: "extras", label: "Informações Extras", route: "/app/extras-menu", icon: "🛰️"}, 
];

export const menuAstros = [
    { id: "constelações", label: "Constelações", route: "/app/constellations-menu", icon: "⭐"},
    { id: "eventos-astronomicos", label: "Eventos Astronômicos", route: "/app/events-menu", icon: "🌑"},
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