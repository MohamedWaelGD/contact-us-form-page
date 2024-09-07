import React from "react";

const Input = React.forwardRef(
    ({ label, isTextarea, type, error, ...rest }, ref) => {
        return (
            <div>
                <div className="border border-black rounded p-2 relative">
                    {label && (
                        <div className="absolute top-0 left-6 px-2 font-semibold -translate-y-2/4 bg-white">
                            {label}
                        </div>
                    )}
                    {isTextarea ? (
                        <textarea
                            ref={ref}
                            {...rest}
                            className="bg-transparent border-0 outline-none w-full max-h-52 min-h-24"
                        ></textarea>
                    ) : (
                        <input
                            ref={ref}
                            {...rest}
                            type={type}
                            className="bg-transparent border-0 outline-none w-full"
                        />
                    )}
                </div>
                {error && (
                    <p className="text-red-600 text-sm">{error.message}</p>
                )}
            </div>
        );
    }
);

export default Input;
