import PlayerRegistrationForm from "@/components/registration/PlayerRegistrationForm";
import { ProfileForm } from "@/components/registration/ProfileForm";

export default function page() {
    return (
        <div className="flex justify-center border bg-light-2 font-radley mt-2 p-4">
            <ProfileForm />
        </div>
    )
}
