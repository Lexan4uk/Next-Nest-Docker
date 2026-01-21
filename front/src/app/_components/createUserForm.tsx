'use client'

import { useCreateUser } from '@/hooks/useCreateUser'
import { IUser } from '@/types/users.types'
import { useForm } from 'react-hook-form'

export default function CreateUserForm() {
	const { createUser, isCreateUserPending } = useCreateUser()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IUser>()

	const onSubmit = (data: IUser) => {
		createUser(data, {
			onSuccess: () => reset(),
		})
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-3 w-64'
		>
			<input
				type='email'
				placeholder='Email'
				className='border rounded px-2 py-1'
				{...register('email', {
					required: 'Email обязателен',
				})}
			/>
			{errors.email && (
				<span className='text-sm text-red-500'>{errors.email.message}</span>
			)}

			<input
				type='text'
				placeholder='Имя (необязательно)'
				className='border rounded px-2 py-1'
				{...register('name')}
			/>

			<button
				type='submit'
				disabled={isCreateUserPending}
				className='bg-black text-white rounded px-3 py-1 disabled:opacity-50'
			>
				{isCreateUserPending ? 'Создание...' : 'Создать'}
			</button>
		</form>
	)
}
