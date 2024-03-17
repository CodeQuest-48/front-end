import { IoSearch } from 'react-icons/io5';

export const SearchBar = () => {
	return (
		<div className='text-gray-600 flex relative items-center'>
			<button type='submit' className='absolute left-2'>
				<IoSearch className='text-gray-600 h-4 w-4 fill-current' />
			</button>
			<input
				className='border-2 border-primary bg-white h-10 pl-8 pr-2 w-72 text-sm focus:outline-none '
				type='search'
				name='search'
				placeholder='Buscar por nombre, creador...'
			/>
		</div>
	);
};
