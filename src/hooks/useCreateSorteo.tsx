import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
	BodySorteo,
	SorteosService,
} from '../services/sorteos.service';
import { useNavigate } from 'react-router-dom';

export const useCreateSorteo = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (newSorteo: BodySorteo) =>
			SorteosService.createSorteo(newSorteo),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['sorteos'] });
		},
		onSettled: () => {
			navigate('/sorteos');
		},
	});

	return mutation;
};
