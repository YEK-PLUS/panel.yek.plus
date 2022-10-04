import { Form } from '@yek-plus/panel.ui.form';
import { Section } from "@yek-plus/panel.layout.section";
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import { ProjectTypeConfigAddSchema } from './project-type-schema';
import { mutate } from 'swr';
import addConfig from '../../api/actions/project-type/add-config';

const ProjectTypeConfigEdit = () => {
    const router = useRouter();
    const id = router.query.id as string || null

    const handleSubmit = async (model: any) => {
        const projectType = {
            key: model.key,
            label: model.label,
            editable: model.editable,
            type: model.type,
        }
        if (id) {
            const res = await addConfig(id, projectType);
            if (!res.error) {
                mutate(`/api/project-types/${id}`);
                mutate(`/api/project-types`);
                router.push("/project-types/" + id + "/configs");
            }
            else {
                alert(res.error);
            }
        }
    };

    return (
        <Section>
            <Form
                schema={new SimpleSchema2Bridge(ProjectTypeConfigAddSchema)}
                onSubmit={handleSubmit}
            />
        </Section>
    );
}
export default ProjectTypeConfigEdit;