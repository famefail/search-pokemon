import Info from "@/app/component/info"
import { IStatSectionProps } from "./interface"

const StatSection = ({ props }: IStatSectionProps) => {
    const { title, minimum, maximum } = props
    return (
        <div className="flex-col pt-[8px]">
            <h3>{title}</h3>
            <div className="flex-wrap px-[8px]">
                <Info props={{ title: 'Minimum', desc: minimum }} />
                <Info props={{ title: 'Maximum', desc: maximum }} />
            </div>
        </div>
    )
}
export default StatSection