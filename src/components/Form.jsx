import React from "react";
import Button from "./Button";
import Input from "./Input";
import FormContactHeader from "./FormContactHeader";
import { useForm } from "react-hook-form";

const Form = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className="flex">
            <div className="w-full xl:w-1/2 flex flex-col gap-5">
                <FormContactHeader />
                <form
                    className="mx-5 flex flex-col gap-8"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input
                        label="Name"
                        {...register("name", {
                            required: "Name is required",
                            maxLength: {
                                value: 20,
                                message: "Name must be less than 20 characters",
                            },
                        })}
                        error={errors.name}
                    />
                    <Input
                        label="E-Mail"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "Invalid email address",
                            },
                        })}
                        type="email"
                        error={errors.email}
                    />
                    <Input
                        label="TEXT"
                        isTextarea={true}
                        {...register("text", {
                            required: "Text is required",
                            maxLength: {
                                value: 1000,
                                message:
                                    "Text must be less than 1000 characters",
                            },
                        })}
                        error={errors.text}
                    />
                    <div className="flex justify-end">
                        <Button text="SUBMIT" classStyle="w-52" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
