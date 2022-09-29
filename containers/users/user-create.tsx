import { Form } from '@yek-plus/panel.ui.form';
import { Section } from "@yek-plus/panel.layout.section";
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import UserSchema from './user-schema';
import create from '../../api/actions/user/create';
import { mutate } from 'swr';

const UserCreate = () => {
    const router = useRouter();
    const handleSubmit = async (model: any) => {
        const user = {
            username: model.username,
            firstName: model.firstName,
            lastName: model.lastName,
            email: model.email,
            password: model.password,
        }
        const res = await create(user);
        if (!res.error) {
            mutate(`/api/user`);
            router.push("/users");
        }
        else {
            alert(res.error);
        }
    };

    return (
        <Section>
            <Form
                schema={new SimpleSchema2Bridge(UserSchema)}
                onSubmit={handleSubmit}
            />
        </Section>
    );
}
export default UserCreate;