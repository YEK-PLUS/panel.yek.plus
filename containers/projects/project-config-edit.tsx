import { Form } from '@yek-plus/panel.ui.form';
import { Section } from "@yek-plus/panel.layout.section";
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import { ProjectConfigEditSchema } from './project-schema';
import update from '../../api/actions/project/update';
import { mutate } from 'swr';
import useProjects from '../../api/useProjects';

const ProjectConfigEdit = () => {
    const router = useRouter();
    const id = router.query.id as string || null
    const { data, loading } = useProjects(id);

    const handleSubmit = async (model: any) => {
        const project = {
            name: model.name,
            description: model.description,
            email: model.email,
        }
        if (id) {
            const res = await update(id, project);
            if (!res.error) {
                mutate(`/api/project`);
                mutate(`/api/project/${id}`);
                router.push("/projects");
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
                    schema={new SimpleSchema2Bridge(ProjectConfigEditSchema(data))}
                    onSubmit={handleSubmit}
                />
            }
        </Section>
    );
}
export default ProjectConfigEdit;