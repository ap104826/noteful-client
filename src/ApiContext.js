import React from 'react'

export default React.createContext({
  links: [],
  categories: [],
  addCategory: () => {},
  addLinks: () => {},
  deleteLinks: () => {},
})
