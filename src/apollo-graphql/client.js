import { GraphQLClient } from 'graphql-request';
export const BASE_URL = "https://rickandmortyapi.com/graphql"
export const useClient = () => { 
   
    return new GraphQLClient(BASE_URL,{
        headers:{}
    })
}