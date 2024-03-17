import axios from 'axios';
import { api } from '../api/api';
import { Sorteo } from '../interfaces/sorteos.interface';

export interface BodySorteo {
	name: string;
	description: string;
	startDate: string;
	endDate: string;
}

export class SorteosService {
	static async getAllSorteos() {
		try {
			const { data } = await api.get<Sorteo[]>('/sorteos');
			return data;
		} catch (error) {
			this.handleErrors(error);
		}
	}

	static async getSorteoById(id: string) {
		try {
			// Haz algo para que se demore 5 segundos
			// ! QUITAR ESTO
			await new Promise(resolve => setTimeout(resolve, 500));

			const { data } = await api.get<Sorteo>(`/sorteos/${id}`);
			return data;
		} catch (error) {
			this.handleErrors(error);
		}
	}

	static async createSorteo(newSorteo: BodySorteo) {
		try {
			const { data } = await api.post('/sorteos/new', newSorteo);

			return data;
		} catch (error) {
			this.handleErrors(error);
		}
	}

	private static handleErrors = (error: unknown) => {
		if (axios.isAxiosError(error)) {
			console.log(error.response?.data);
			throw new Error(error.response?.data);
		} else {
			console.error(error);
		}
	};
}