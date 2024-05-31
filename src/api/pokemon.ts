import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl, endpoints } from '../constant';
import { Pokemon, PokemonListResponse, PokemonDetails, PokemonDetailsResponse } from '../types';



export const API = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPokemonsList: builder.query<Pokemon[], any>({
      query: (limit: string) => `${endpoints.pokemon}?limit=${limit}`,
      transformResponse: (response: PokemonListResponse) => response.results,
    }),
    getPokemonById: builder.query({
      query: (id: any) => `${endpoints.pokemon}/${id}`,
      transformResponse: (response: PokemonDetailsResponse): PokemonDetails => ({
        name: response.name,
        height: response.height,
        weight: response.weight,
        image: response.sprites.front_default,
        types: response.types,
      }),
    }),
  }),
})

export const { useGetPokemonsListQuery, useGetPokemonByIdQuery } = API;
