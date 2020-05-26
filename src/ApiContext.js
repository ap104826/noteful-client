import React from 'react'

export default React.createContext({
  bookmarks: [],
  categories: [],
  addCategory: () => {},
  addBookmark: () => {},
  deleteBookmark: () => {},
})
