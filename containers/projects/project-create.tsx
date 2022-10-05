import { Form } from '@yek-plus/panel.ui.form';
import { Section } from "@yek-plus/panel.layout.section";
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import ProjectSchema from './project-schema';
import create from '../../api/actions/project/create';
import { mutate } from 'swr';
import useProjectTypes from '../../api/useProjectTypes';

const ProjectCreate = () => {
    const router = useRouter();
    const { data: projectTypes, loading } = useProjectTypes();
    const handleSubmit = async (model: any) => {
        if (projectTypes && Array.isArray(projectTypes)) {
            const typeName = model.type as string
            const type = projectTypes.find((t) => t.name === typeName)!;
            const project = {
                name: model.name,
                description: model.description,
                email: model.email,
                type: type.id,
            }
            const res = await create(project);
            if (!res.error) {
                mutate(`/api/project`);
                router.push("/projects");
            }
            else {
                alert(res.error);
            }
        }
    };

    return (
        <Section>
            {!loading && projectTypes && Array.isArray(projectTypes) && (
                <Form
                    schema={new SimpleSchema2Bridge(ProjectSchema(projectTypes))}
                    onSubmit={handleSubmit}
                />
            )}
        </Section>
    );
}
export default ProjectCreate;