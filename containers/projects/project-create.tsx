import { Form } from '@yek-plus/panel.ui.form';
import { Section } from "@yek-plus/panel.layout.section";
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import ProjectSchema from './project-schema';
import create from '../../api/actions/project/create';
import { mutate } from 'swr';

const ProjectCreate = () => {
    const router = useRouter();
    const handleSubmit = async (model: any) => {
        const project = {
            name: model.name,
            description: model.description,
            email: model.email,
        }
        const res = await create(project);
        if (!res.error) {
            mutate(`/api/project`);
            router.push("/projects");
        }
        else {
            alert(res.error);
        }
    };

    return (
        <Section>
            <Form
                schema={new SimpleSchema2Bridge(ProjectSchema)}
                onSubmit={handleSubmit}
            />
        </Section>
    );
}
export default ProjectCreate;