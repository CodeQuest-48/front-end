import axios from 'axios';
import { api } from '../api/api';

export class PremiosService {
	static async designarGanadorPremio(
		sorteoId: string,
		premioId: string,
		participanteId: string
	) {
		try {
			const { data } = await api.post(
				`/premios/${sorteoId}/${premioId}/asignar-ganador/${participanteId}`
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
