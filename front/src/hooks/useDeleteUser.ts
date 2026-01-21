import { usersService } from '@/services/users.service'
import { ApiError } from '@/types/api-error.types'
import { IDeleteUser } from '@/types/users.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useDeleteUser() {
	const queryClient = useQueryClient()

	const { mutate: deleteUser, isPending: isDeleteUserPending } = useMutation({
		mutationKey: ['deleteUser'],
		mutationFn: (data: IDeleteUser) => usersService.deleteUser(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['users'] })
			toast('User deleted!')
		},
		onError: (error: ApiError) => {
			toast.error(`Error ${error.status} ${error.message}`)
		},
	})
	return {
		deleteUser,
		isDeleteUserPending,
	}
}
