import { Form } from '@yek-plus/panel.ui.form';
import { Section } from "@yek-plus/panel.layout.section";
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import ProjectTypeSchema from './project-type-schema';
import create from '../../api/actions/project-type/create';
import { mutate } from 'swr';

const ProjectTypeCreate = () => {
    const router = useRouter();
    const handleSubmit = async (model: any) => {
        const projectType = {
            name: model.name,
            description: model.description,
        }
        const res = await create(projectType);
        if (!res.error) {
            mutate(`/api/project-type`);
            router.push("/project-types");
        }
        else {
            alert(res.error);
        }
    };

    return (
        <Section>
            <Form
                schema={new SimpleSchema2Bridge(ProjectTypeSchema)}
                onSubmit={handleSubmit}
            />
        </Section>
    );
}
export default ProjectTypeCreate;