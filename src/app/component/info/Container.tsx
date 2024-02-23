import { IInfoProps } from "./interface"

const Info = ({ props }: IInfoProps) => {
    const { title, desc } = props
    if (Array.isArray(desc))
        return (
            <div className="flex py-[8px]" >
                <h3>{title}: </h3>
                <div className="flex flex-wrap">
                    {desc.map((des, index) => (
                        <p className="px-[4px]" key={index}>{des} </p>
                    ))}
                </div >
            </div>
        )
    return (<div className="flex flex-wrap gap-[8px] py-[8px] items-start">
        <h3>{title}: </h3><p>{desc}</p>
    </div>
    )
}
export default Info