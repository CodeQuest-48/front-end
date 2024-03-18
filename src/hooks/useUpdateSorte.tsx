import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
	BodySorteo,
	SorteosService,
} from '../services/sorteos.service';

export const useUpdateSorteo = (sorteoId: string) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (updatedSorteo: BodySorteo) =>
			SorteosService.updateSorteo(sorteoId, updatedSorteo),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['sorteo', sorteoId],
			});
		},
	});

	return mutation;
};
