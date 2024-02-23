"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useState } from "react";

const SearchInput = () => {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const onChangeSearch = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value;
        setSearch(value)
    }, [])

    const onClickSearch = useCallback(() => {
        router.push(`/pokemon/${search}`)
    }, [router, search])
    return (
        <main className="h-[150px] flex ">
            <div className=" p-[12px] justify-between items-center m-auto">
                <h1 className="text-center">SEARCH POKEMON</h1>
                <div className='flex gap-[12px]'>
                    <input onChange={onChangeSearch} className="rounded-lg p-[12px] focus:border-2 focus:border-red-500" placeholder="search your pokemon..." />
                    <button className=''
                        onClick={onClickSearch}
                    > search </button>
                </div>
            </div>
        </main>
    )
}
export default SearchInput