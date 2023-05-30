import React from "react";

type Props = {
    onClick: React.MouseEventHandler<HTMLInputElement>
};

const Button: React.FC<Props> = ({onClick}) => {
    return (
        <button onClick={onClick} className="bg-highlight w-40 h-12 rounded-xl text-2xl text-center text-white">
            Run
        </button>
    );
};

export default Button;
