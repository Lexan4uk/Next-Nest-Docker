'use client'

import { useDeleteUser } from '@/hooks/useDeleteUser'
import { IDeleteUser } from '@/types/users.types'

interface IUserCard {
	email: string
	name?: string
}
export default function UserCard({ user }: { user: IUserCard }) {
	const { deleteUser, isDeleteUserPending } = useDeleteUser()

	const deleteUserClick = (data: IDeleteUser) => {
		deleteUser(data)
	}

	return (
		<div className='flex flex-col p-1 border rounded w-full'>
			<div className=''>Email: {user.email}</div>
			<div className=''>Name: {user.name ?? `no-name`}</div>
			<button
				onClick={() => deleteUserClick({ email: user.email })}
				disabled={isDeleteUserPending}
				className='bg-black text-white rounded px-3 py-1 disabled:opacity-50'
			>
				{isDeleteUserPending ? 'Удаление...' : 'Удалить'}
			</button>
		</div>
	)
}
