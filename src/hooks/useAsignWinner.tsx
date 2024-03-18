import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SorteosService } from '../services/sorteos.service';

export const useAsignWinner = (sorteoId: string) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: ({
			sorteoId,
			participanteId,
		}: {
			sorteoId: string;
			participanteId: string;
		}) => SorteosService.asignWinner(sorteoId, participanteId),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['sorteo', sorteoId],
			});
		},
	});

	return mutation;
};
