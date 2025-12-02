import { UseFormRegister, FieldValues, Path, RegisterOptions, FieldError } from "react-hook-form";

interface FormCheckboxProps<T extends FieldValues> {
    name: Path<T>;
    label: string;
    register: UseFormRegister<T>;
    rules?: RegisterOptions<T>;
    error?: FieldError;
}

export const FormCheckbox = <T extends FieldValues>({
    name,
    label,
    register,
    rules,
    error
}: FormCheckboxProps<T>) => {
    return (
        <div>
            <div>
                <input
                    id={name}
                    type="checkbox"
                    {...register(name, rules)}
                />
                <label htmlFor={name}>{label}</label>    
            </div>
            {error && <span>{error.message}</span>}
        </div>
    )
}