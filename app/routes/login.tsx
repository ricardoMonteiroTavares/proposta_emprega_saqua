import type { V2_MetaFunction } from "@remix-run/node";
import { Input } from "~/core/ui/forms";
import { faIdCard, faLock } from "@fortawesome/free-solid-svg-icons";
import logo from'~/assets/images/logo.png';

export const meta: V2_MetaFunction = () => {
  return [{ title: "Login - Proposta Emprega Saqua" }];
};

export default function Login() {
    return (
        <div className="bg-green-800 h-screen w-screen flex flex-col">
            <div className="w-96 h-auto px-6 py-8 m-auto bg-white rounded-xl shadow-lg flex flex-col items-center justify-center">

                <img src={logo} className="w-3/4" alt="Logo Proposta Emprega Saqua"/>
                <h1 className="text-2xl font-display font-bold m-5">Login</h1>

                <Input label="CPF/CNPJ" icon={faIdCard}/>
                <Input label="Senha" icon={faLock} type="password"/>
            </div>
        </div>
    );
}