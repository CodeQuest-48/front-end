import { useQuery } from '@tanstack/react-query';
import { SorteosService } from '../services/sorteos.service';

export const useSorteos = () => {
	const sorteoQuery = useQuery({
		queryKey: ['sorteos'],
		queryFn: () => SorteosService.getAllSorteos(),
	});

	return { sorteoQuery };
};
