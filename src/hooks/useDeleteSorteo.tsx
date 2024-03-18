import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SorteosService } from '../services/sorteos.service';
import { useNavigate } from 'react-router-dom';

export const useDeleteSorteo = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: ({ id }: { id: string }) =>
			SorteosService.deleteSorteo(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['sorteos'] });
		},
		onSettled: () => {
			navigate('/sorteos');
		},
	});

	return mutation;
};
