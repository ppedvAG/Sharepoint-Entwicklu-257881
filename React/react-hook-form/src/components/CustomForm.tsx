import { useForm, SubmitHandler } from "react-hook-form";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { FormCheckbox } from "./FormCheckbox";

// Definition der Datentypen für CustomForm
interface IFormInputs {
    username: string;
    email: string;
    role: string;
    termsAccepted: boolean;
}

export const CustomForm: React.FC = () => {
    // Initailieren von useForm
    const {
        register,
        handleSubmit,
        formState: { errors }, // Mögliche Errors abfangen
        reset // Formular zurücksetzten
    } = useForm<IFormInputs>();

    // Submit Handler (wird nur ausgeführt, wenn die Validierung erfolgreich war)
    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        console.log("Formular erfolgrei abgesendet: ", data);
        alert(JSON.stringify(data, null, 2));
        reset();
    }

    return (
        <div>
            <h2>Registierung</h2>

            {/* Das handleSubmit wickelt unsere eigene onSubmit Funktion ein */}
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Benutzername Feld */}
                <FormInput<IFormInputs>
                    name="username"
                    label="Benutzername"
                    register={register}
                    error={errors.username}
                    rules={{
                        required: "Benutzername ist erforderlich",
                        minLength: {
                            value: 3,
                            message: "Muss mindestens 3 Zeichen lang sein"
                        }
                    }}
                />

                {/* Email Feld */}
                <FormInput<IFormInputs>
                    name="email"
                    label="E-Mail Adresse"
                    type="email"
                    register={register}
                    error={errors.email}
                    rules={{
                        required: "E-Mail ist erforderlich",
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                            message: "Ungültige E-Mail Adresse"
                        }
                    }}
                />

                {/* Rollen Auswahl (Select) */}
                <FormSelect<IFormInputs>
                    name="role"
                    label="Rolle auswählen"
                    register={register}
                    error={errors.role}
                    options={[
                        { value: 'admin', label: 'Administrator' },
                        { value: 'user', label: 'Benutzer' },
                        { value: 'guest', label: 'Gast' },
                    ]}
                    rules={{ required: "Bitte wähle eine Rolle aus" }}
                />

                {/* AGB Checkbox */}
                <FormCheckbox<IFormInputs>
                    name="termsAccepted"
                    label="Ich akzeptiere die AGBs"
                    register={register}
                    error={errors.termsAccepted}
                    rules={{ required: "Die Bedingungen müssen akzepteirt werden" }}
                />

                {/* Submit Button */}
                <button type="submit">
                    Registrieren
                </button>


            </form>
        </div>
    )


}