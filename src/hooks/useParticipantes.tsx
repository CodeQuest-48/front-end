import { useQuery } from '@tanstack/react-query';
import { ParticipantesService } from '../services/participantes.service';

export const useParticipantes = (sorteoId: string) => {
	const participantesQuery = useQuery({
		queryKey: ['participantes', sorteoId],
		queryFn: () =>
			ParticipantesService.getAllParticipantesBySorteoId(sorteoId),
		enabled: !!sorteoId,
	});

	return participantesQuery;
};
