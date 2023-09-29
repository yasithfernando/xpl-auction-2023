
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AuthForm from "../auth/AuthForm";


function RegisterButton(){

    return (
        <Dialog>
            <div className="w-44 text-body-normal font-aspire bg-logo-blue rounded-lg text-center p-2 border-2 border-logo-blue text-light-2">
                <DialogTrigger>Register</DialogTrigger>
            </div>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="font-radley text-body-normal">Welcome to XPL 2023</DialogTitle>
                <DialogDescription className="font-radley">
                    To proceed, please sign in with your Microsoft account. This step is necessary to validate your identity.
                    <AuthForm />
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default RegisterButton;