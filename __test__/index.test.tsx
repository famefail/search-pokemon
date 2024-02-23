
import { render } from '@testing-library/react/';
import { MockedProvider } from '@apollo/client/testing';
import { GET_POKEMON, IPokemonResponse } from '@/app/graphql/pokemon/pokemon';
import PokemonContainer from '@/app/pokemon/[name]';
import { useQuery } from '@apollo/client';
import { BulbasaurResponse, charmanderResponse, squirtleResponse } from './mockPokemon..test';
jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useQuery: jest.fn(),
}));
jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))
const mockUseQuery = useQuery as jest.Mock

const bulbasarMock = [
  {
    request: {
      query: GET_POKEMON,
      variables: { name: 'Bulbasaur' },
    },
    result: { data: BulbasaurResponse }
  }
]
const charmanderMock = [
  {
    request: {
      query: GET_POKEMON,
      variables: { name: 'Charmander' },
    },
    result: { data: charmanderResponse }
  }
]
const squirtleMock = [
  {
    request: {
      query: GET_POKEMON,
      variables: { name: 'Squirtle' },
    },
    result: { data: squirtleResponse }
  }
]

describe('test Bulbasaur, Charmander, and Squirtle', () => {

  test('Bulbasaur', () => {
    mockUseQuery.mockReturnValue({ loading: false, data: BulbasaurResponse })
    const { getByTestId } = render(
      <MockedProvider mocks={bulbasarMock}>
        <PokemonContainer params={{ name: 'Bulbasaur' }} />
      </MockedProvider>
    )
    expect(getByTestId('Types Grass,Poison')).toBeInTheDocument
  })
  test('Charmander', () => {
    mockUseQuery.mockReturnValue({ loading: false, data: charmanderResponse })
    const { getByTestId } = render(
      <MockedProvider mocks={charmanderMock}>
        <PokemonContainer params={{ name: 'Charmander' }} />
      </MockedProvider>
    )
    expect(getByTestId('Types Fire')).toBeInTheDocument
  })
  test('Squirtle', () => {
    mockUseQuery.mockReturnValue({ loading: false, data: squirtleResponse })
    const { getByTestId } = render(
      <MockedProvider mocks={squirtleMock}>
        <PokemonContainer params={{ name: 'Squirtle' }} />
      </MockedProvider>
    )
    expect(getByTestId('Types Water')).toBeInTheDocument
  })
})


