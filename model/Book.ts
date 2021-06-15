export interface Book {
  id: number
  author: string
  resealeData: string
  title: string
  description: string
  cover: string
  categories: Category[]
}

interface Category {
  id: number
  name: string
}

interface Page {
  id: number
  text: string
  pageNumber: number
}
