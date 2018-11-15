export const doesPageBelongToUser = (page = {}, user = {}) =>
  page.owner === user.uuid
