import { ISubStatProps } from "./interface"

const SubStatSection = ({ props }: ISubStatProps) => {
    const { title, elements } = props
    return (
        <div className="border-solid border-2 border-gray-400 w-full m-[16px] rounded-md">
            <div className="flex-col justify-center bg-blue-950 ">
                <h2 className="text-center text-slate-100 p-[16px]">{title}</h2>
            </div>
            <div className=" p-[20px] grid bg-white justify-between p-[10px] grid-cols-2 text-center">
                {elements?.map((element, index) => (
                    <p key={index}>{element}</p>
                ))}

            </div>
        </div>
    )
}
export default SubStatSection