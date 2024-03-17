import { api } from '../api/api';

interface BodySorteo {
	name: string;
	description: string;
	startDate: string;
	endDate: string;
}

export class SorteosService {
	static async getAllSorteos() {
		try {
			const { data } = await api.get('/sorteos');
			return data;
		} catch (error: any) {
			console.log(error.response.data);
			throw new Error(error.response.data.message);
		}
	}

	static async getSorteoById(id: string) {
		try {
			const { data } = await api.get(`/sorteos/${id}`);
			return data;
		} catch (error: any) {
			console.log(error.response.data);
			throw new Error(error.response.data.message);
		}
	}

	static async create(newSorteo: BodySorteo) {
		try {
			const { data } = await api.post('/sorteos/new', newSorteo);

			return data;
		} catch (error: any) {
			console.log(error.response.data);
			throw new Error(error.response.data.message);
		}
	}
}
