import { Form } from '@yek-plus/panel.ui.form';
import { Section } from "@yek-plus/panel.layout.section";
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import { ProjectTypeEditSchema } from './project-type-schema';
import update from '../../api/actions/project-type/update';
import { mutate } from 'swr';
import useProjectTypes from '../../api/useProjectTypes';

const ProjectEdit = () => {
    const router = useRouter();
    const id = router.query.id as string || null
    const { data, loading } = useProjectTypes(id);

    const handleSubmit = async (model: any) => {
        const projectType = {
            name: model.name,
            description: model.description,
        }
        if (id) {
            const res = await update(id, projectType);
            if (!res.error) {
                mutate(`/api/project-type`);
                mutate(`/api/project-type/${id}`);
                router.push("/project-types");
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
                    schema={new SimpleSchema2Bridge(ProjectTypeEditSchema(data))}
                    onSubmit={handleSubmit}
                />
            }
        </Section>
    );
}
export default ProjectEdit;