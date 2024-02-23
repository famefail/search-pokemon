import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
query pokemon($id: String, $name: String){
  pokemon(id: $id, name: $name){
    id
    number
    name
    weight{
      minimum
      maximum
    }
    height{
      minimum
      maximum
    }
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
    attacks{
      fast{
        name
        type
        damage
      }
      special{
        name
        type
        damage
      }
    }
   evolutions{
    name
    image
    }
  }
  
}`;
interface ILength {
  minimum: string | null,
  maximum: string | null
}
interface IAttackType {
  name: string | null
  type: string | null
  damage: number | null
}
interface IAttacks {
  fast: IAttackType[]
  special: IAttackType[]
}
interface IEvolutions {
  name: string | null
  image: string | null
}
export interface IPokemonResponse {
  pokemon: {
    id: string | null,
    number: string | null,
    name: string | null,
    weight: ILength,
    height: ILength,
    classification: string | null,
    types: [],
    resistant: string[] | null,
    weaknesses: string[] | null,
    fleeRate: number | null,
    maxCP: number | null,
    maxHP: number | null,
    image: string | null,
    attacks: IAttacks | null,
    evolutions: IEvolutions[] | null,
  }
}