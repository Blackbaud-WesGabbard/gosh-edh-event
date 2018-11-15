import camelCase from 'lodash/camelCase'
import { combineReducers } from 'redux'
import { createDocumentAction, createDocumentReducer } from 'prismic-utils'

const c = {
  NAMESPACE: 'app/content'
}

export const fetchContent = type =>
  createDocumentAction(`${c.NAMESPACE}/${type}`, {
    repository: process.env.PRISMIC_REPO,
    type
  })

const documentTypes = [
  'about',
  'config',
  'faqs',
  'fundraiser',
  'home',
  'privacy'
]

const documents = combineReducers(
  documentTypes.reduce(
    (acc, type) => ({
      ...acc,
      [camelCase(type)]: createDocumentReducer(`${c.NAMESPACE}/${type}`)
    }),
    {}
  )
)

export default documents
