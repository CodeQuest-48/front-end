import { useQuery } from '@tanstack/react-query';
import { SorteosService } from '../services/sorteos.service';

export const useSorteoById = (id: string) => {
	const sorteoQueryById = useQuery({
		queryKey: ['sorteo', id],
		queryFn: () => SorteosService.getSorteoById(id),
		enabled: !!id,
	});

	return { sorteoQueryById };
};
