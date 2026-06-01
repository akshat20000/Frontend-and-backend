import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {
    UserSchema,
    type UserFormData,
} from "../Schema/UserSchema";

export default function UserRegistration(){
    const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<UserFormData>({
        resolver: zodResolver(UserSchema),
    })

    const onSubmit =(data:UserFormData)=>{
        console.log("submitted Data:",data);
    }
    return(
        <>
        <h2>User Rgistration</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="text" placeholder="Full Name" {...register("fullName")}/>
                <p>{errors.fullName?.message}</p>
            </div>
            <div>
                <input type="text" placeholder="Email"{...register("email")}/>
                <p>{errors.email?.message}</p>
            </div>
            <div>
                <input type="password" placeholder="Password"{...register("password")}/>
                <p>{errors.password?.message}</p>
            </div>
            <div>
                <input type="password" placeholder="Confirm Password"{...register("confirmPassword")}/>
                <p>{errors.confirmPassword?.message}</p>
            </div>
            <div>
                <input type="number" placeholder="Age"{...register("age",{valueAsNumber:true})}/>
                <p>{errors.age?.message}</p>
            </div>
            <button type="submit">Register</button>
        </form>
        </>
    )
}