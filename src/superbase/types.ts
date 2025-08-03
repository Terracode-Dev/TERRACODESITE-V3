// Type definitions
export interface Employee {
  id?: number
  name?: string
  created_at?: string
  title?: string
  github_link?: string
  ig_link?: string
  fb_link?: string
  ln_link?: string
  tw_link?: string
  description?: string
  edu_title?: string
}

export interface PositionCategory {
  id?: number
  created_at?: string
  name?: string
}

export interface Article {
  id?: number
  title?: string
  body?: any
  author?: number
  cover_page?: string
  created_at?: string
  likes?: number
}

export interface ArticleWithAuthor extends Omit<Article, 'author'> {
  author?: Employee
}

export interface ArticleComment {
  id?: number
  created_at?: string
  user_name?: string
  email?: string
  comment?: string
}

export interface AvailablePosition {
  id?: number
  created_at?: string
  title?: string
  description?: string
  location?: string
  type?: string
  department?: string
  category?: number
}

export interface AvailablePositionWithCategory extends Omit<AvailablePosition, 'category'> {
  category?: PositionCategory
}

export interface Award {
  id?: number
  created_at?: string
  name?: string
  issue_date?: string
  cover_pic?: string
  add_pic?: string[]
  body?: string
}

export interface Review {
  id?: number
  created_at?: string
  client_name?: string
  client_company_name?: string
  client_title?: string
  review?: string
  star?: number
}
