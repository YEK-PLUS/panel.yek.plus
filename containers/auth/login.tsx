import { Section } from "@yek-plus/panel.layout.section"
import { Form } from "@yek-plus/panel.ui.form";
import { SimpleSchema2Bridge } from "uniforms-bridge-simple-schema-2";
import { LoginSchema } from "./auth-schema";
import "antd/dist/antd.css";
import Link from "next/link";
import { Button } from "@yek-plus/panel.ui.button";
import login from "../../api/actions/auth/login";
import Cookies from 'universal-cookie';
import { useRouter } from "next/router";
import { mutate } from "swr";
import loginCheck from "../../api/actions/auth/login-check";

const Login = () => {
    const cookie = new Cookies();
    const router = useRouter();
    const handleSubmit = async (model: any) => {
        const email = model.email
        const password = model.password

        const res = await login(email, password);
        if (!res.error) {
            cookie.set('token', res.token, { path: '/' });
            await mutate("/user/auth", loginCheck);
            router.push("/");
        }
        else {
            alert(res.error);
        }
    };
    return (
        <Section fill>
            <h1 className="text-2xl font-bold">Login</h1>
            <Form
                schema={new SimpleSchema2Bridge(LoginSchema)}
                onSubmit={handleSubmit}
            />
        </Section>
    )
}
export default Login