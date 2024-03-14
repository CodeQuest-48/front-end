import { FaHome, FaUser } from 'react-icons/fa';
import { GiRollingDices, GiTrophyCup } from 'react-icons/gi';
import { BsFillTicketPerforatedFill } from 'react-icons/bs';

import {
	HomePage,
	ProfilePage,
	SortearPage,
	SorteosPage,
	WinnersPage,
} from '../pages';

interface Enlace {
	to: string;
	icon: JSX.Element;
	title: string;
	component: JSX.Element;
}

export const enlacesMenu: Enlace[] = [
	{
		to: '/inicio',
		icon: <FaHome size={22} />,
		title: 'Inicio',
		component: <HomePage />,
	},
	{
		to: '/sorteos',
		icon: <BsFillTicketPerforatedFill size={22} />,
		title: 'Sorteos',
		component: <SorteosPage />,
	},
	{
		to: '/sortear',
		icon: <GiRollingDices size={22} />,
		title: 'Sortear',
		component: <SortearPage />,
	},
	{
		to: '/ganadores',
		icon: <GiTrophyCup size={22} />,
		title: 'Ganadores',
		component: <WinnersPage />,
	},
	{
		to: '/perfil',
		icon: <FaUser size={22} />,
		title: 'Perfil',
		component: <ProfilePage />,
	},
];
