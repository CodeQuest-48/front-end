import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Sorteo } from '../../interfaces/sorteos.interface';

export interface SorteosState {
    sorteos: Sorteo[]
}

const storeApi: StateCreator<SorteosState> = set => ({});

export const useSorteosStore = create<SorteosState>()(
	devtools(storeApi)
);
