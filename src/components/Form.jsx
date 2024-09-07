import React from "react";
import Button from "./Button";
import messageIcon from "../../public/ic_outline-message.svg";
import messageBlackIcon from "../../public/ic_outline-message_black.svg";
import phoneIcon from "../../public/ic_baseline-phone.svg";
import Input from "./Input";

const Form = () => {
    return (
      <div className="flex">
        <div className="w-full xl:w-1/2 flex flex-col gap-5">
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
            <form className="mx-5 flex flex-col gap-8">
                <Input label="Name" />
                <Input label="E-Mail" />
                <Input label="TEXT" isTextarea={true} />
                <div className="flex justify-end">
                    <Button text="SUBMIT" classStyle="w-52" type="submit" />
                </div>
            </form>
        </div>
      </div>
    );
};

export default Form;
