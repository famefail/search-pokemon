'use client'
import Image from "next/image"
import { useQuery } from "@apollo/client"
import { GET_POKEMON, IPokemonResponse } from "@/app/graphql/pokemon/pokemon"
import Info from "@/app/component/info";
import StatSection from "./views/statSection";
import SearchInput from "@/app/component/searchInput";
import { useRouter } from "next/navigation";
import Loading from "@/app/component/loading";
import NotFound from "@/app/component/notFound";

const PokemonContainer = ({ params }: { params: { name: string } }) => {

  const { loading, error, data } = useQuery<IPokemonResponse>(GET_POKEMON, {
    variables: { name: params.name }
  })

  const router = useRouter()

  const pokemon = data?.pokemon;

  const onClickPic = (name: string | null) => {
    router.push(`./${name}`)
    console.log(params.name)
  }
  if (loading) {
    return <Loading />

  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (pokemon === null)
    return (
      <div>
        <SearchInput />
        <NotFound />
      </div>
    )

  return (
    <div>
      <SearchInput />
      <div className="flex-col mx-auto my-[32px] p-[20px] shadow-md rounded-md w-[95%] bg-white">
        <h1 className="text-center">Stats</h1>
        <div className="border-solid">
          <div className="flex p-[20px] gap-[16px] justify-around">
            <div>
              <div className="flex items-center border-solid border-2 border-red-500 rounded-full justify-center p-[24px] w-[250px] h-[250px]">
                <Image
                  src={pokemon?.image ?? ''}
                  width={150}
                  height={200}
                  alt="Picture of the Pokémon"
                />
              </div>
              <div className="mt-[8px]">
                <h1 className="text-center">
                  {pokemon?.name}
                </h1>
              </div>
            </div>
            <div className="w-[75%]">
              <div className="grid grid-cols-2 ">
                <Info props={{ title: 'MaxHP', desc: pokemon?.maxHP }} />
                <Info props={{ title: 'MaxCP', desc: pokemon?.maxCP }} />
                <Info props={{ title: 'Classification', desc: pokemon?.classification }} />
                <Info props={{ title: 'FleeRate', desc: pokemon?.fleeRate }} />
                <Info props={{ title: 'Types', desc: pokemon?.types }} />
                <Info props={{ title: 'Number', desc: pokemon?.number }} />
              </div>

              <div className="grid grid-cols-2 ">
                <StatSection props={{ title: 'Weight', minimum: pokemon?.weight.minimum, maximum: pokemon?.weight.maximum }} />
                <StatSection props={{ title: 'Height', minimum: pokemon?.height.minimum, maximum: pokemon?.height.maximum }} />
              </div>
              <Info props={{ title: 'Resistant', desc: pokemon?.resistant }} />
              <Info props={{ title: 'Weaknesses', desc: pokemon?.weaknesses }} />
            </div>

          </div>
        </div>
      </div>
      <div className="flex-col mx-auto my-[32px] p-[20px] shadow-md rounded-md w-[95%] bg-white">
        <h1 className="text-center">Attacks</h1>
        <div className="flex justify-evenly">
          <div className="min-w-[250px] rounded">
            <h2 className="bg-red-500 text-center text-slate-50">Fast</h2>
            {pokemon?.attacks?.fast.map((fast, index) => (
              <div key={index} className=" px-[16px] border-x-2 border-b-2 border-slate-500 border-collapse">
                <Info props={{ title: 'Name', desc: fast.name }} />
                <Info props={{ title: 'Damage', desc: fast.damage }} />
                <Info props={{ title: 'Type', desc: fast.type }} />
              </div>
            ))}
          </div>
          <div className=" min-w-[250px] rounded">
            <h2 className="bg-red-500 text-center text-slate-50">Special</h2>
            {pokemon?.attacks?.special && pokemon?.attacks.special.map((special, index) => (
              <div key={index} className=" px-[16px] border-x-2 border-b-2 border-slate-500 border-collapse">
                <Info props={{ title: 'Name', desc: special.name }} />
                <Info props={{ title: 'Damage', desc: special.damage }} />
                <Info props={{ title: 'Type', desc: special.type }} />
              </div>
            ))}
          </div>
        </div>
      </div >
      {pokemon?.evolutions &&
        <div className="flex-col mx-auto my-[32px] p-[20px] shadow-md rounded-md w-[95%] bg-white">
          <h1 className="text-center">Evolutions</h1>
          <div className="flex justify-evenly">
            {pokemon?.evolutions?.map((evolution, index) => (
              <div key={index}>
                <button onClick={() => onClickPic(evolution?.name)}>
                  <div className="flex items-center border-solid border-2 border-red-500 rounded-full justify-center p-[24px] w-[250px] h-[250px]">
                    <Image
                      src={evolution.image || '/'}
                      width={150}
                      height={200}
                      alt="Picture of the Pokémon"

                    />
                  </div>
                  <div className="mt-[8px] border-solid ">
                    <h1 className="text-center">
                      {evolution?.name}
                    </h1>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      }
    </div >
  )
}

export default PokemonContainer