// Personal Information --> #hero section
export const MY_FIRSTNAME = "José"
export const MY_SURNAME = "González Silva"
export const MY_FULLNAME = MY_FIRSTNAME + " " + MY_SURNAME
export const MY_CURRENT_COMPANY = "LCRCom (Grupo Aire)"
export const MY_CURRENT_COMPANY_LINK = "https://www.lcrcom.net/"
export const MY_CURRENT_OCUPATION = "Backend Developer"
export const MY_WORKING_SINCE = "1693821600"
export const MY_WORKING_SINCE_DATE = new Date(MY_WORKING_SINCE)
export const MY_LOCATION = "Gran Alacant, Alicante, España"
export const MY_GEOLOCATION = "https://osm.org/go/b76T~FFU--?layers=PN"
export const MY_BIRTHDATE = "First \"Hello World\" on 451954800"
export const MY_WEBSITE = "https://gadev.com.es/"
export const WEB_VERSION = "1.1"

// About
export const ABOUT_ME = [
	"Di mi primer \"Hola Mundo\" en 451954800, poco despues que lo hiciera el Apple Macintosh.",
	"Mis primeros pinitos en la informática los dí en el año olímpico de 1992, de la mano del IBM Clónico con procesador 80286, 2Mb de RAM, 20Mb de disco duro y monitor CRT a color (todo un portento de la tecnología de la época) que trajo mi padre a casa. Desde entonces, me considero un informático entusiasta con ganas de aprender de todo (con 10 años me llegué a leer el manual de dBase IV).",
	"Me considero un tipo curioso, en todos los aspectos; me gusta aprender cosas nuevas y practicar lo que ya se. No puedo decir que no me haya rendido alguna vez pero es un recurso que detesto, así que trato de terminar mis cosas aunque el universo no me deje siempre.",
	"Me vuelve loco mi familia (literal y metafóricamente), los videojuegos (esto solo metafóricamente), la fotografía y el explorar el campo, ya sea haciendo senderismo o con la bicicleta de montaña. Y tengo una secreta afición a cocinar. Creo que no se me da mal.",
]
// Tech Stack
export const TECH_STACK = [
	{
		"title": "Backend",
		"content": ["PHP", "Perl", "C#", "Python", "NodeJS"]
	},
	{
		"title": "Frontend",
		"content": ["JavaScript", "ASTRO", "CSS3", "React"]
	},
	{
		"title": "BBDD",
		"content": ["MySQL", "SQLite", "MongoDB"]
	},
	{
		"title": "Sistemas",
		"content": ["Linux", "Shell Scripting", "Docker", "VMWare"]
	},
	{
		"title": "Gestión de Versiones",
		"content": ["GIT", "SVN"]
	}
]
// Work Experience --> #work section
export const CURRENT_WORK = [
		`Llevo trabajando como ${MY_CURRENT_OCUPATION} en ${MY_CURRENT_COMPANY} desde Septiembre de 2023.`,
		"Mi principal cometido es la definición y creación de features para los sistemas de comunicaciones avanzados en la nube desarrollados por LCRCom. Actualmente estoy inmerso en diferentes proyectos de innovación y mejora de producto, añadiendo nuevas funcionalidades al software MeetIp Pro.",
		`Desarrollo mi trabajo fundamentalmente con PHP y SQL. Para el apartado API, utilizo principalmente Postman, y por experimentación, se ha trabajado con algo de NodeJS.`
]
// Former work.
export const FORMER_WORK = [
	{
		from: "jun. 2019",
		to: "mar. 2023",
		role: "Desarrollador de Software",
		org: "Artica PFMS",
		org_url: "https://pandorafms.com/es/",
		location: "(Remoto) Madrid, España",
		skills: "Desarrollo de software de monitorización, resolución de bugs y adición de features.",
		badges: ["PHP", "Perl", "Python", "JavaScript", "Docker", "MySQL"]
	},{
		from: "sept. 2018",
		to: "jun. 2019",
		role: "Desarrollador de Software .NET",
		org: "Everis (NTT Data)",
		org_url: "https://es.nttdata.com/",
		location: "Alicante, España",
		skills: "Resolución de bugs y mantenimiento de código legacy en sistemas de información.",
		badges: ["C#", "Visual Basic.NET", "SVN", "SQL Server"]
	},{
		from: "jul. 2017",
		to: "ago. 2018",
		role: "Programador Web",
		org: "Atramentum SL",
		org_url: "https://www.linkedin.com/company/atramentum-sl/",
		location: "Alicante, España",
		skills: "Desarrollo de portal web comercial de la empresa, ecommerce y TPV.",
		badges: ["PHP", "JavaScript", "GIT", "MySQL"]
	},{
		from: "nov. 2015",
		to: "dic. 2015",
		role: "Tecnico en Sistemas Distribuidos",
		org: "i3E Informática",
		org_url: "https://www.i3einformatica.com/",
		location: "Alicante, España",
		skills: "Sustitución temporal. Mantenimiento de sistemas informáticos.",
		badges: ["Windows", "Remedy Action"]
	},{
		from: "abr. 2007",
		to: "jun. 2014",
		role: "Consultor Técnico",
		org: "Information Builders Iberica",
		org_url: "https://www.ibi.com/",
		location: "Tres Cantos, Madrid, España",
		skills: "Instalación y mantenimiento de servidores de reporting en diversos sistemas.",
		badges: ["WebFOCUS", "iWay Software", "COBOL", "Shell Scripting"]
	},

]

// Projects --> #project section
export const projects = [
	{
		title: "Project Griffin",
		description: "A project to improve safety standards in Quahog by implementing innovative safety measures.",
		url: "https://projectgriffin.com",
		tech: "Safety Equipment, Training Programs, Community Outreach",
	},
	{
		title: "Family Safety Campaign",
		description: "An initiative to promote safety awareness among families in Quahog.",
		url: "https://safefamilyquahog.com",
		tech: "Workshops, Educational Material, Public Events",
	},
	{
		title: "Road Safety Initiative",
		description: "A campaign to enhance road safety and reduce accidents in Quahog.",
		url: "https://roadsafetyquahog.com",
		tech: "Traffic Analysis, Signage Improvement, Public Awareness",
	}
]

// Education --> #education section
export const education = [
	{
		from: "2016",
		to: "2018",
		institute: "IES Mare Nostrum",
		course: "Técnico Superior en Desarrollo de Aplicaciones Web",
		location: "Alicante, España"
	},
	{
		from: "2016",
		to: "2014",
		institute: "IES Leonardo Da Vinci",
		course: "Técnico en Emergencias Sanitarias",
		location: "Alicante, España"
	},
	{
		from: "2005",
		to: "2007",
		institute: "IES Juan de la Cierva",
		course: "Técnico en Explotación de Sistemas Informáticos",
		location: "Madrid, España"
	},
	{
		from: "1996",
		to: "2002",
		institute: "IES Felipe II",
		course: "Titulo en Educación Secundaria Obligatoria",
		location: "Madrid, España"
	}
]

// Contact --> #contact section
export const contact = [
	{
		source_name: "Envíame un correo electrónico",
		source: "mailto:josegonzalez84@outlook.es",
		icon: "mdi:email",
	},
	{
		source_name: "Perfil en Linked In",
		source: "https://www.linkedin.com/in/jose-gonzalez-silva/",
		icon: "mdi:linkedin",
	},
	{
		source_name: "Mi perfil en Spotify",
		source: "https://open.spotify.com/user/11143436407?si=ee9c73538c4a4638",
		icon: "mdi:spotify",
	},
	{
		source_name: "Mis repositorios de GitHub",
		source: "https://github.com/JoseGonzalez84",
		icon: "mdi:github"
	},
	{
		source_name: "Mi perfil de Chess.com",
		source: "https://www.chess.com/member/gadevchess",
		icon: "mdi:chess-knight"
	},
	{
		source_name: "Curriculum Vitae en PDF",
		source: "/CV_JoseGonzalezSilva_2024.pdf",
		icon: "ic:round-sim-card-download"
	}
]

// Certifications --> #certificate section
export const certificates = [
	{
		issued: "ene. 2024",
		title: "Desarrollo de aplicaciones Web con NodeJS y Express",
		org: "OpenWebinars",
		url: "https://openwebinars.net/cert/cSKo",
		description: "Core de NodeJS, ExpressJS, Shockets y despliegues.",
	},
	{
		issued: "oct. 2023",
		title: "Curso de JavaScript Avanzado",
		org: "OpenWebinars",
		url: "https://openwebinars.net/cert/uiz0",
		description: "Estructuras de datos, promesas, asincronía y programación funcional.",
	},
	{
		issued: "oct. 2023",
		title: "Curso de JavaScript Intermedio",
		org: "OpenWebinars",
		url: "https://openwebinars.net/cert/tsYJ",
		description: "Tipos de datos avanzados, manejo del DOM y manejo de eventos.",
	},
	{
		issued: "oct. 2023",
		title: "Curso de HTML5 y CSS3",
		org: "OpenWebinars",
		url: "https://openwebinars.net/cert/PDLem",
		description: "Refuerzo y conocimiento en profundidad de HTML5 y CSS3",
	},
	{
		issued: "sep. 2023",
		title: "Taller de desarrollo de WebServices SOAP con PHP",
		org: "OpenWebinars",
		url: "https://openwebinars.net/cert/h56u",
		description: "Utilización de funcionalidades nativas de PHP para acceder a aplicaciones con SOAP.",
	},
	{
		issued: "sep. 2023",
		title: "Taller de TDD en PHP con PHPUnit",
		org: "OpenWebinars",
		url: "https://openwebinars.net/cert/x9tz",
		description: "Construcción basada en Testing de una aplicación web bajo PHP y PHPUnit.",
	},
	{
		issued: "abr. 2022",
		title: "Iniciación a PHPUnit",
		org: "OpenWebinars",
		url: "https://openwebinars.net/cert/PDLem",
		description: "Características de PHPUnit y diferentes casuísticas.",
	},
	{
		issued: "abr. 2020",
		title: "Programación en Python 3",
		org: "OpenWebinars",
		url: "https://openwebinars.net/cert/ddk6l",
		description: "Programación y desarrollo de programas con Python 3. Módulos, Programación Estructurada y POO.",
	},
	{
		issued: "nov. 2019",
		title: "Introducción a C++",
		org: "OpenWebinars",
		url: "https://openwebinars.net/cert/kkNZp",
		description: "Conocimientos introductorios a C++.",
	},
	{
		issued: "jul. 2019",
		title: "Pandora Engineering Course",
		org: "Artica PFMS",
		url: "",
		description: "Conocimientos avanzados de instalación y configuración de PandoraFMS 736",
	},
	{
		issued: "nov. 2010",
		title: "Programación con PHP 5.3",
		org: "Universidad Politécnica de Madrid",
		url: "",
		description: "Desarrollo de aplicaciones web bajo PHP 5.3, manipulación de XML y acceso a BBDD.",
	}
]

// Achievements --> #achievement section
export const achievements = [
	{
		title: "Actuación como Sanitario en Preventivos",
		year: "2016",
		decription: "Voluntariado en delegación de Cruz Roja de Santa Pola, acudiendo como Técnico a diversos actos multitudinarios."
	},
	{
		title: "Talleres de nuevas tecnologías para mayores",
		year: "2016",
		decription: "Voluntariado en delegación de Cruz Roja de Santa Pola, impartiendo cursos de utilización de nuevas tecnologías a personas mayores."
	},
	{
		title: "Monitor en traslado para niños con discapacidad",
		year: "2015",
		decription: "Voluntariado en delegación de Cruz Roja de Santa Pola, acompañando a personas con diversas discapacidades a sus centros de día."
	}
]

// Technology badges
export const TECH_BADGES = [
	{
		title: "PHP",
		icon: "mdi:language-php",
		background: "#2196f3",
		color: "#000"
	},
	{
		title: "Perl",
		icon: "simple-icons:perl",
		background: "#8271AB",
		color: "#000"
	},
	{
		title: "C#",
		icon: "mdi:language-csharp",
		background: "#640064",
		color: "#FFF"
	},
	{
		title: "Python",
		icon: "mdi:language-python",
		background: "#0402a8",
		color: "#FF0"
	},
	{
		title: "NodeJS",
		icon: "mdi:nodejs",
		background: "#54b87a",
		color: "#FFF"
	},
	{
		title: "JavaScript",
		icon: "mdi:language-javascript",
		background: "#ffff00",
		color: "#000"
	},
	{
		title: "ASTRO",
		icon: "simple-icons:astro",
		background: "#322e2e",
		color: "#FFF"
	},
	{
		title: "CSS3",
		icon: "mdi:language-css3",
		background: "#0402a8",
		color: "#FFF"
	},
	{
		title: "React",
		icon: "mdi:react",
		background: "#000",
		color: "#87ceeb"
	},
	{
		title: "MySQL",
		icon: "simple-icons:mysql",
		background: "#3E6E93",
		color: "#e97b00"
	},
	{
		title: "SQLite",
		icon: "simple-icons:sqlite",
		background: "#FFF",
		color: "#044a64"
	},
	{
		title: "MongoDB",
		icon: "simple-icons:mongodb",
		background: "#FFF",
		color: "#023430"
	},
	{
		title: "GIT",
		icon: "mdi:git",
		background: "#f0efe7",
		color: "#4e443c"
	},
	{
		title: "SVN",
		icon: "file-icons:svn",
		background: "#FFF",
		color: "#93b0da"
	},
	{
		title: "Linux",
		icon: "simple-icons:linux",
		background: "#185886",
		color: "#bcdef5"
	},
	{
		title: "Shell Scripting",
		icon: "simple-icons:gnubash",
		background: "#FFF",
		color: "#5f8159"
	},
	{
		title: "Docker",
		icon: "mdi:docker",
		background: "#FFF",
		color: "#1d63ed"
	},
	{
		title: "VMWare",
		icon: "simple-icons:vmware",
		background: "#565656",
		color: "#FFF"
	},
	{
		title: "VisualBasic.NET",
		icon: "simple-icons:visualbasic",
		background: "#0402a8",
		color: "#f5f5dc"
	},
	{
		title: "COBOL",
		icon: "file-icons:cobol",
		background: "#000",
		color: "#FFF"
	},
	{
		title: "API",
		icon: "mdi:api",
		background: "#000",
		color: "#FFF"
	},
	{
		title: "WebSockets",
		icon: "logos:websocket",
		background: "#000",
		color: "#FFF"
	},
	{
		title: "Windows",
		icon: "simple-icons:windows10",
		background: "#87ceeb",
		color: "#FFF"
	},
	{
		title: "WebFOCUS",
		icon: "mdi:report-box",
		background: "#0c457d",
		color: "#FFF"
	},
	{
		title: "Postman",
		icon: "mdi:report-box",
		background: "#ffa500",
		color: "#000"
	}

]