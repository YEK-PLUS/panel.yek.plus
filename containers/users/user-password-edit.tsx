import { Form } from '@yek-plus/panel.ui.form';
import { Section } from "@yek-plus/panel.layout.section";
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import { UserPasswordEditSchema } from './user-schema';
import useUsers from '../../api/useUsers';
import updatePassword from '../../api/actions/user/update-password';

const UserPasswordEdit = () => {
    const router = useRouter();
    const id = router.query.id as string || null
    const { data, loading } = useUsers(id);

    const handleSubmit = async (model: any) => {
        const user = {
            password: model.password,
        }
        if (id) {
            const res = await updatePassword(id, user);
            if (!res.error) {
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
                    schema={new SimpleSchema2Bridge(UserPasswordEditSchema)}
                    onSubmit={handleSubmit}
                />
            }
        </Section>
    );
}
export default UserPasswordEdit;