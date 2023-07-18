export interface TodoType {
  id: number
  title: string
  priority: string
  completed: boolean
  userId: number
  categoryId: number
  createdAt: string
  updatedAt: string
}

export interface CategoryType {
  id: number
  name: string
  userId: number
  createdAt: string
  updatedAt: string
}

export interface User {
  id: number
  email: string
  password: string
  activationToken: string | null
  createdAt: string
  updatedAt: string
}
