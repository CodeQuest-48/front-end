import { useAuthStore } from '../../store';
import { IoMdClose } from 'react-icons/io';

interface Props {
	isOpen: boolean;
	children: React.ReactNode;
	setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AlertMessage = ({
	isOpen,
	children,
	setShowAlert,
}: Props) => {
	const logoutUser = useAuthStore(state => state.logoutUser);

	if (!isOpen) return null;

	const onClose = () => {
		setShowAlert(false);
		logoutUser();
	};

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
			<div className='bg-white p-6 rounded-lg shadow-xl flex flex-col gap-5'>
				<div className='flex justify-between items-center'>
					<h2 className='text-2xl font-bold text-secondary'>Aviso</h2>
					<button onClick={onClose} className='text-xl font-semibold'>
						<IoMdClose size={25} />
					</button>
				</div>
				<div className='text-secondary'>{children}</div>
				<div className='flex w-full'>
					<button
						onClick={onClose}
						className='bg-primary hover:bg-tertiary hover:text-secondary text-white font-bold py-3 rounded w-full border border-transparent hover:border-primary transition-all'
					>
						Cerrar
					</button>
				</div>
			</div>
		</div>
	);
};
