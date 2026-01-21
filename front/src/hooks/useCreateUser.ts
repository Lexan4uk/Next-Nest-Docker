import { usersService } from '@/services/users.service'
import { ApiError } from '@/types/api-error.types'
import { IUser } from '@/types/users.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useCreateUser() {
	const queryClient = useQueryClient()

	const { mutate: createUser, isPending: isCreateUserPending } = useMutation({
		mutationKey: ['createUser'],
		mutationFn: (data: IUser) => usersService.createUser(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['users'] })
			toast('User created!')
		},
		onError: (error: ApiError) => {
			toast.error(`Error ${error.status} ${error.message}`)
		},
	})
	return {
		createUser,
		isCreateUserPending,
	}
}
