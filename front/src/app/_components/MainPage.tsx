'use client'
import { useUsers } from '@/hooks/useUsers'
import UserCard from './UserCard'
import CreateUserForm from './createUserForm'

export default function MainPage() {
	const { data, isLoading } = useUsers()

	return (
		<section className='flex flex-1 w-full px-10 py-4 gap-4'>
			<div className='flex flex-col'>
				<h1 className='text-xl font-semibold'>Пользователи</h1>

				{isLoading && <p>Загрузка...</p>}

				{!isLoading && data && (
					<>
						{data.length ? (
							<ul className='flex flex-col gap-2 w-fit'>
								{data.map(user => (
									<li key={user.email}>
										<UserCard user={user} />
									</li>
								))}
							</ul>
						) : (
							<p className='text-sm opacity-70'>Пользователей пока нет</p>
						)}
					</>
				)}
			</div>
			<div className='flex flex-col'>
				<h2 className='text-l font-semibold'>Добавить пользователя</h2>
				<CreateUserForm />
			</div>
		</section>
	)
}
