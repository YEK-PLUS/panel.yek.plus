import { Form } from '@yek-plus/panel.ui.form';
import { Section } from "@yek-plus/panel.layout.section";
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import { UserEditSchema } from './user-schema';
import update from '../../api/actions/user/update';
import useUsers from '../../api/useUsers';
import { mutate } from 'swr';
const UserEdit = () => {
    const router = useRouter();
    const id = router.query.id as string || null
    const { data, loading } = useUsers(id);

    const handleSubmit = async (model: any) => {
        const user = {
            username: model.username,
            firstName: model.firstName,
            lastName: model.lastName,
            email: model.email,
        }
        if (id) {
            const res = await update(id, user);
            if (!res.error) {
                mutate(`/api/users`);
                router.push("/users");
            }
            else {
                alert(res.error);
            }
        }
    };

    return (
        <Section>
            {data && !loading && !Array.isArray(data) &&
                <Form
                    schema={new SimpleSchema2Bridge(UserEditSchema(data))}
                    onSubmit={handleSubmit}
                />
            }
        </Section>
    );
}
export default UserEdit;