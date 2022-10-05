import { Form } from '@yek-plus/panel.ui.form';
import { Section } from "@yek-plus/panel.layout.section";
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import { ProjectConfigConstantEditSchema, ProjectConfigEditSchema } from './project-schema';
import update from '../../api/actions/project/update';
import { mutate } from 'swr';
import useProjects from '../../api/useProjects';
import updateConfig from '../../api/actions/project/update-config';

const ProjectConfigConstantEdit = () => {
    const router = useRouter();
    const id = router.query.id as string || null
    const { data, loading } = useProjects(id);
    const field = data && !Array.isArray(data) ? data.ProjectValues.find((v) => v.id === router.query.constantId) : null;
    
    const handleSubmit = async (model: any) => {
        const value = model.value;
        if (id && router.query.constantId && typeof router.query.constantId === "string") {
            const res = await updateConfig(id, router.query.constantId, value);
            if (!res.error) {
                mutate(`/api/project`);
                mutate(`/api/project/${id}`);
                router.push("/projects/" + id + "/config");
            }
            else {
                alert(res.error);
            }
        }
    };

    return (
        <Section>
            {field &&
                <Form
                    schema={new SimpleSchema2Bridge(ProjectConfigConstantEditSchema(field))}
                    onSubmit={handleSubmit}
                />
            }
        </Section>
    );
}
export default ProjectConfigConstantEdit;