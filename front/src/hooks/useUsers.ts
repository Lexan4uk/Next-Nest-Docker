import { usersService } from '@/services/users.service'
import { useQuery } from '@tanstack/react-query'

export function useUsers() {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['users'],
		queryFn: () => usersService.getUsers(),
	})
	return { data, isLoading }
}
