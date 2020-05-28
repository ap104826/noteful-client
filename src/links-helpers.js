
export const findCategory = (categories = [], category_id) =>
  categories.find(category => category.id === category_id)

export const findLink = (links = [], linkId) =>
  links.find(link => link.id === linkId)

export const getLinksForCategory = (links = [], category_id) => (
  (!category_id)
    ? links
    : links.filter(link => link.category_id === category_id)
)

export const countlinksForCategory = (links = [], category_id) => {
  console.log({ links })
  console.log({ category_id })
  return links.filter(link => link.category_id == category_id).length
}
