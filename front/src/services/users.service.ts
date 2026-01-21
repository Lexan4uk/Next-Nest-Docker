import api from '@/api/axios'
import { IDeleteUser, IUser } from '@/types/users.types'

class UsersService {
	private BASE_URL = '/users'
	async getUsers() {
		const { data } = await api.get<IUser[]>(`${this.BASE_URL}`)
		return data
	}
	async createUser(payload: IUser) {
		const { data } = await api.post<IUser[]>(`${this.BASE_URL}`, payload)
		return data
	}
	async deleteUser(payload: IDeleteUser) {
		const { data } = await api.post<boolean>(`${this.BASE_URL}/delete`, payload)
		return data
	}
}
export const usersService = new UsersService()
