import {z} from "zod";

export const UserSchema=z
    .object({
        fullName:z 
            .string()
            .min(3,"Full name must of atleast 3 characters"),
        email: z
            .string()
            .email("Invalid email address"),
        password: z 
            .string()
            .min(6,"passwsord must be of atleast 6 characters"),
        confirmPassword: z.string(),

        age: z
            .number()
            .min(19,"Age must be above 18"),
    })
    .refine((data)=>data.password===data.confirmPassword,{
        path:["confirmPassword"],
        message:"Password does not match",
    })

    export type UserFormData = z.infer<typeof UserSchema>;