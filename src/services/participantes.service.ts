import axios from 'axios';
import { api } from '../api/api';

export class ParticipantesService {
	static async getAllParticipantesBySorteoId(sorteoId: string) {
		try {
			const { data } = await api.get(
				`/participantes/sorteo/${sorteoId}`
			);

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
