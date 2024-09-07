import React from "react";
import messageIcon from "../../public/ic_outline-message.svg";
import messageBlackIcon from "../../public/ic_outline-message_black.svg";
import phoneIcon from "../../public/ic_baseline-phone.svg";
import Button from "./Button";

const FormContactHeader = () => {
    return (
        <>
            <div className="flex gap-8">
                <Button
                    text="VIA SUPPORT CHAT"
                    icon={messageIcon}
                    classStyle="flex-grow flex-shrink-0 basis-0"
                />
                <Button
                    text="VIA CALL"
                    icon={phoneIcon}
                    classStyle="flex-grow flex-shrink-0 basis-0"
                />
            </div>
            <Button
                text="VIA EMAIL FORM"
                icon={messageBlackIcon}
                isOutline={true}
                classStyle="w-full"
            />
        </>
    );
};

export default FormContactHeader;
