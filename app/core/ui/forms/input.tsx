import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InputProps {
    label: string,
    icon?: IconProp,
    type?: React.HTMLInputTypeAttribute
};

const Input: React.FC<InputProps> = ({label, icon, type}) => {
    return (
        <div className="flex m-2 w-10/12">
            {icon ? (
                <div className="h-10 w-10 bg-gray-300 flex items-center justify-center rounded-l">
                    <FontAwesomeIcon icon={icon} />
                </div>
                ) : null}
            
            <input className="h-10 px-3 border border-slate-300 rounded-r w-full" placeholder={label} type={type}/>
        </div>
    )
};

export default Input;