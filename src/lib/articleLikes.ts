export const LIKED_ARTICLES_STORAGE_KEY = "terracode_liked_articles";

export function loadLikedArticleIds(): Set<number> {
  try {
    const stored = window.localStorage.getItem(LIKED_ARTICLES_STORAGE_KEY);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}

export function saveLikedArticleIds(likedIds: Set<number>) {
  try {
    window.localStorage.setItem(LIKED_ARTICLES_STORAGE_KEY, JSON.stringify(Array.from(likedIds)));
  } catch {
    // localStorage unavailable; like still applies for this session
  }
}
