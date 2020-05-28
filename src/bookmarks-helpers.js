
export const findCategory = (categories = [], category_id) =>
  categories.find(category => category.id === category_id)

export const findBookmark = (bookmarks = [], bookmarkId) =>
  bookmarks.find(bookmark => bookmark.id === bookmarkId)

export const getBookmarksForCategory = (bookmarks = [], category_id) => (
  (!category_id)
    ? bookmarks
    : bookmarks.filter(bookmark => bookmark.category_id === category_id)
)

export const countbookmarksForCategory = (bookmarks = [], category_id) => {
  console.log({ bookmarks })
  console.log({ category_id })
  return bookmarks.filter(bookmark => bookmark.category_id == category_id).length
}
