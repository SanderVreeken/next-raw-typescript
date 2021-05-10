import { request } from 'graphql-request'

export const createMessage = (query: any, variables: any) => request('https://backend-raw-graphql.herokuapp.com/graphql', query, variables)

