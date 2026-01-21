import axios, { AxiosError } from 'axios'

type NestHttpError = {
	statusCode: number
	message: string | string[]
	error?: string
}

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	//withCredentials: true, // для куки включить
})

// интерсепторы
api.interceptors.response.use(
	response => response,
	(err: AxiosError<NestHttpError>) => {
		const status = err.response?.status
		const data = err.response?.data

		const message = Array.isArray(data?.message)
			? data?.message.join(', ')
			: data?.message

		return Promise.reject({
			status,
			message: message ?? err.message,
			raw: err,
		})
	},
)

export default api
