import { UseFormRegister, FieldValues, Path, RegisterOptions, FieldError } from "react-hook-form";

interface Option {
    value: string;
    label: string;
}

interface FormSelectProps<T extends FieldValues> {
    name: Path<T>;
    label: string;
    options: Option[];
    register: UseFormRegister<T>;
    rules?: RegisterOptions<T>;
    error?: FieldError;
}

export const FormSelect = <T extends FieldValues>({
    name,
    label,
    options,
    register,
    rules,
    error
}: FormSelectProps<T>) => {
    return (
        <div>
            <label htmlFor={name}>
                {label}
            </label>
            <select
                id={name}
                {...register(name, rules)}
            >
                <option value="">-- Bitte wählen --</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            {error && <span>{error.message}</span>}
        </div>

    );
}

