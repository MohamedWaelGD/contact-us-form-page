import React from "react";

const Button = (props) => {
    const { text, icon, classStyle, isOutline, type } = props;
    const baseStyle = "px-3 py-3 font-semibold rounded flex justify-center items-center gap-3 transition";
    const finalStyle = isOutline
        ? `${baseStyle} border border-black bg-transparent hover:bg-zinc-100`
        : `${baseStyle} bg-black text-white hover:bg-zinc-900`;

    return (
        <button className={`${finalStyle} ${classStyle}`} type={type || 'button'}>
            {icon && <img src={icon}/>}
            {text}
        </button>
    );
};

export default Button;
