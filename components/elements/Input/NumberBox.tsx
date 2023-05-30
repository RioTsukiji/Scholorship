import React, {ReactNode} from "react";

type Props = {
    number: number,
    setNumber: ReactNode,
    label?: string
};

const NumberBox: React.FC<Props> = ({number,setNumber,label}) => {
    return (
        <div className="flex flex-col p-2.5 w-48 items-center">
            <label className="text-text text-2xl text-center">{label}</label>
            <input type="number" value={number} onChange={event => setNumber(event.target.value)} className="bg-secondary w-40 h-12 rounded-xl text-2xl text-center" />
        </div>
    );
};

export default NumberBox;
