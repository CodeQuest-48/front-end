export interface Sorteo {
	id: string;
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	creador: Creador;
	participantes: Participante[];
	premios: Premio[];
}

export interface Creador {
	id: string;
	email: string;
	nombre: string;
	rol: string;
	fecha_creacion: string;
	fecha_ultima_modificacion: string;
}

export interface Participante {
	id: string;
	discordId: string;
	username: string;
	globalNameDiscord: string;
	avatarDiscord: null;
	createdAt: string;
	updatedAt: string;
}

export interface Premio {
	id: string;
	title: string;
	description: string;
	urlImage: null;
}
