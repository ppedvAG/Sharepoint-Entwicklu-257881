import { UseFormRegister, FieldValues, Path, RegisterOptions, FieldError } from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
    name: Path<T>                   // Der Name des Feldes (muss zum Typ T passen)
    label: string;
    type?: string;                  // z.B. "text", "email", "password"
    register: UseFormRegister<T>;
    rules?: RegisterOptions<T>;     // Validierungsregeln (required, minLength, etc.)
    error?: FieldError;             // Das Fehlerobjekt für dieses Feld 
    placeholder?: string;
}

export const FormInput = <T extends FieldValues>({
    name,
    label,
    type = "text",
    register,
    rules,
    error,
    placeholder
}: FormInputProps<T>) => {
    return (
        <div>
            <label htmlFor={name}>
                {label}
            </label>
            <input 
                id={name}
                type ={type}
                placeholder = {placeholder}
                // hier verbinden wir das Feld mit dem React Hook Form
                {...register(name, rules)}
            />
            {/* Fehlermeldung anzeigen */}
            {error && <span>{error.message}</span>}
        </div>
    );
}