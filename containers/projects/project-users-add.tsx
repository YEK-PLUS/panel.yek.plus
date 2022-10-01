import { Form } from '@yek-plus/panel.ui.form';
import { Section } from "@yek-plus/panel.layout.section";
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import ProjectSchema, { ProjectAddUserSchema } from './project-schema';
import create from '../../api/actions/project/create';
import { mutate } from 'swr';
import addUser from '../../api/actions/project/add-user';
import useUsers from '../../api/useUsers';

const ProjectUsersAdd = () => {
    const router = useRouter();
    const { data } = useUsers();
    const handleSubmit = async (model: any) => {
        if (data && Array.isArray(data)) {
            const usernames = model.username as string[]
            const userIds = data.filter((u) => usernames.includes(u.username)).map((u) => u.id);
            const res = await addUser(router.query.id as string, userIds);
            if (!res.error) {
                // mutate(`/api/project`);
                // router.push("/projects");
                alert("User added to project");
            }
            else {
                alert(res.error);
            }
        }
    };

    return (
        <Section>
            <Form
                schema={new SimpleSchema2Bridge(ProjectAddUserSchema(
                    data && Array.isArray(data) ? data : []
                ))}
                onSubmit={handleSubmit}
            />
        </Section>
    );
}
export default ProjectUsersAdd;