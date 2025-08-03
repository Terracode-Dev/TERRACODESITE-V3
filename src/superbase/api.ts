import supabase from "./base"
import type { Article, ArticleComment, ArticleWithAuthor, AvailablePosition, AvailablePositionWithCategory, Award, Employee, PositionCategory, Review } from "./types"

// Employee
export const createEmployee = async (employee: Omit<Employee, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('Employees')
      .insert([employee])
      .select()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

export const getEmployees = async () => {
  try {
    const { data, error } = await supabase
      .from('Employees')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

export const getEmployeeById = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from('Employees')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

// Position Category Functions
export const createPositionCategory = async (category: Omit<PositionCategory, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('positions_category')
      .insert([category])
      .select()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

export const getPositionCategories = async () => {
  try {
    const { data, error } = await supabase
      .from('positions_category')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

// Article Functions
export const createArticle = async (article: Omit<Article, 'id' | 'created_at' | 'likes'>) => {
  try {
    const { data, error } = await supabase
      .from('article')
      .insert([article])
      .select()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

export const getArticles = async (): Promise<{ data: ArticleWithAuthor[] | null, error: any }> => {
  try {
    const { data, error } = await supabase
      .from('article')
      .select(`
        *,
        author:Employees(*)
      `)
      .order('created_at', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

export const getArticleById = async (id: number): Promise<{ data: ArticleWithAuthor | null, error: any }> => {
  try {
    const { data, error } = await supabase
      .from('article')
      .select(`
        *,
        author:Employees(*)
      `)
      .eq('id', id)
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

export const likeArticle = async (id: number) => {
  try {
    const { data, error } = await supabase
      .rpc('increment_article_likes', { article_id: id })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

// Article Comment Functions
export const createArticleComment = async (comment: Omit<ArticleComment, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('article_comment')
      .insert([comment])
      .select()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

export const getArticleComments = async () => {
  try {
    const { data, error } = await supabase
      .from('article_comment')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

// Available Positions Functions
export const createAvailablePosition = async (position: Omit<AvailablePosition, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('available_positions')
      .insert([position])
      .select()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

export const getAvailablePositions = async (): Promise<{ data: AvailablePositionWithCategory[] | null, error: any }> => {
  try {
    const { data, error } = await supabase
      .from('available_positions')
      .select(`
        *,
        category:positions_category(*)
      `)
      .order('created_at', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

export const getAvailablePositionById = async (id: number): Promise<{ data: AvailablePositionWithCategory | null, error: any }> => {
  try {
    const { data, error } = await supabase
      .from('available_positions')
      .select(`
        *,
        category:positions_category(*)
      `)
      .eq('id', id)
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

// Award Functions
export const createAward = async (award: Omit<Award, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('award')
      .insert([award])
      .select()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

export const getAwards = async () => {
  try {
    const { data, error } = await supabase
      .from('award')
      .select('*')
      .order('issue_date', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

export const getAwardById = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from('award')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

// Review Functions
export const createReview = async (review: Omit<Review, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('review')
      .insert([review])
      .select()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

export const getReviews = async () => {
  try {
    const { data, error } = await supabase
      .from('review')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

export const getReviewById = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from('review')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

// Utility Functions
export const getArticlesByAuthor = async (authorId: number): Promise<{ data: ArticleWithAuthor[] | null, error: any }> => {
  try {
    const { data, error } = await supabase
      .from('article')
      .select(`
        *,
        author:Employees(*)
      `)
      .eq('author', authorId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

export const getPositionsByCategory = async (categoryId: number): Promise<{ data: AvailablePositionWithCategory[] | null, error: any }> => {
  try {
    const { data, error } = await supabase
      .from('available_positions')
      .select(`
        *,
        category:positions_category(*)
      `)
      .eq('category', categoryId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

// Search Functions
export const searchArticles = async (searchTerm: string): Promise<{ data: ArticleWithAuthor[] | null, error: any }> => {
  try {
    const { data, error } = await supabase
      .from('article')
      .select(`
        *,
        author:Employees(*)
      `)
      .or(`title.ilike.%${searchTerm}%,body->>text.ilike.%${searchTerm}%`)
      .order('created_at', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

export const searchPositions = async (searchTerm: string): Promise<{ data: AvailablePositionWithCategory[] | null, error: any }> => {
  try {
    const { data, error } = await supabase
      .from('available_positions')
      .select(`
        *,
        category:positions_category(*)
      `)
      .or(`title.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%,location.ilike.%${searchTerm}%`)
      .order('created_at', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}
