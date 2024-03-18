import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface ParticipantesState {
	participanteId: string;

	setParticipanteId: (participanteId: string) => void;
}

const storeApi: StateCreator<ParticipantesState> = set => ({
	participanteId: '',

	setParticipanteId: participanteId => set({ participanteId }),
});

export const useParticipantesStore = create<ParticipantesState>()(
	devtools(storeApi)
);
