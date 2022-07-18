export const breakPoints = [
    { 
        width: 550, 
        itemsToShow: 1
    },
    { 
        width: 768, 
        itemsToShow: 2
    },
]

export const rutas = [
    {
        id: 1,
        name: 'Inicio',
        url: '/'
    },
    {
        id: 2,
        name: 'Quienes Somos',
        url: '/quienes-somos'
    },
    {
        id: 3,
        name: 'Seguro automotriz',
        url: '/seguro-automotriz'
    },
    {
        id: 4,
        name: 'Blog',
        url: '/blog'
    },
    {
        id: 5,
        name: 'Ayuda',
        url: '/ayuda'
    },
]

export const quitarAcentos = (cadena) => {
    cadena = cadena.replace(/ /g,"-").toLowerCase();
    cadena = cadena.replace("¿","");
    cadena = cadena.replace("?","");
    cadena = cadena.replace(",","");
	const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
	return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
}