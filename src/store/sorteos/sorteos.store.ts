import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Sorteo } from '../../interfaces/sorteos.interface';

export interface SorteosState {
	sorteoSelectedById?: Sorteo;
	setSorteoSelectedById: (sorteo: Sorteo) => void;
	clearSorteoSelectedById: () => void;
}

const storeApi: StateCreator<SorteosState> = set => ({
	// Estado inicial
	sorteoSelectedById: undefined,

	// Acciones
	setSorteoSelectedById: sorteo =>
		set({ sorteoSelectedById: sorteo }),
	clearSorteoSelectedById: () =>
		set({ sorteoSelectedById: undefined }),
});

export const useSorteosStore = create<SorteosState>()(
	devtools(storeApi)
);
