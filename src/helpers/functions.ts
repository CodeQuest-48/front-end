import { Participante } from '../interfaces/sorteos.interface';

export const formatearFecha = (
	fechaInput: string | Date | undefined
) => {
	if (!fechaInput) return '-';

	// Crear la fecha desde la entrada
	const fecha = new Date(fechaInput);

	// Asegurarse de que la fecha es válida
	if (isNaN(fecha.getTime())) {
		return 'Fecha inválida';
	}

	const opciones: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC', // Utilizar la zona horaria UTC para evitar conversiones no deseadas
	};

	// Convertir la fecha a una cadena con el formato deseado
	const newDate: string = fecha.toLocaleDateString('es-ES', opciones);
	return newDate.split('de').join('').trim();
};

export const sortearGanador = (participantes: Participante[]) => {
	if (!participantes || participantes.length === 0) {
		return null; // Retornar null si la lista está vacía o no definida
	}

	const indiceAleatorio = Math.floor(
		Math.random() * participantes.length
	);
	return participantes[indiceAleatorio];
};
