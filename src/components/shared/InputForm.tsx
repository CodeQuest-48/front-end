import {
	FieldError,
	FieldErrors,
	FieldValues,
	UseFormRegister,
} from 'react-hook-form';

interface Props {
	label: string;
	name: string;
	errors: FieldErrors<FieldValues>;
	errorField?: FieldError | undefined;
	type?:
		| 'text'
		| 'email'
		| 'password'
		| 'number'
		| 'date'
		| 'checkbox';
	required?: boolean;
	placeholder?: string;
	register: UseFormRegister<FieldValues> | any;
	isTextarea?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	minDate?: string;
	maxDate?: string;
}

export const InputForm = ({
	label,
	name,
	errors,
	type,
	required = false,
	placeholder,
	register,
	isTextarea = false,
	errorField,
	onChange,
	minDate,
	maxDate,
}: Props) => {
	return (
		<div className='flex flex-col gap-2 '>
			<div className='flex justify-between items-center'>
				<label className='font-bold capitalize text-sm'>
					{label}:
				</label>

				<span
					className={`${
						required || type === 'checkbox'
							? 'text-red-500 text-xl mr-3'
							: 'text-white text-xs'
					} font-bold self-end`}
				>
					{required || type === 'checkbox' ? '*' : 'Opcional'}
				</span>
			</div>
			<div
				className={`flex ${
					isTextarea ? 'h-[150px]' : 'h-full'
				} border  bg-white  rounded-[5px] gap-5 items-center  ${
					errors[name] || errorField
						? 'border-red-500 border-[2px]'
						: 'border-secondary'
				}`}
			>
				{isTextarea ? (
					<textarea
						{...register(name, {
							required: required && {
								value: true,
								message: `El campo ${label} es requerido`,
							},
						})}
						placeholder={placeholder}
						className='w-full h-full bg-transparent outline-none text-primaryGray flex-1 font-bold resize-none py-3'
					/>
				) : (
					<input
						type={type}
						step={type === 'number' ? 'any' : ''}
						min={
							type === 'date'
								? minDate
								: type === 'number'
								? '0'
								: undefined
						}
						max={type === 'date' ? maxDate : undefined}
						placeholder={placeholder}
						className={`w-full bg-transparent outline-none  flex-1 font-bold py-2 focus:outline-none ${
							type === 'checkbox'
								? 'h-5 w-5 accent-primary cursor-pointer'
								: ''
						} accent-primary`}
						{...register(name, {
							required: required && {
								value: true,
								message: `El campo ${label} es requerido`,
							},
						})}
						onChange={onChange}
						autoComplete='off'
					/>
				)}
			</div>
		</div>
	);
};
