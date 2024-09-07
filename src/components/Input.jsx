import React from "react";

const Input = (props) => {
    const { label, isTextarea } = props;
    return (
        <>
            <div className="border border-black rounded p-2 relative">
                {label && (
                    <div className="absolute top-0 left-6 px-2 font-semibold -translate-y-2/4 bg-white">
                        {label}
                    </div>
                )}
                {isTextarea ? (
                    <textarea className="bg-transparent border-0 outline-none w-full max-h-52 min-h-24"></textarea>
                ) : (
                    <input className="bg-transparent border-0 outline-none w-full" />
                )}
            </div>
        </>
    );
};

export default Input;
