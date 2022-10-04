import { Button } from "@yek-plus/panel.ui.button";
import { Section } from "@yek-plus/panel.layout.section"
import { Table } from "@yek-plus/panel.ui.table";
import Link from "next/link";
import _delete from "../../api/actions/project/delete";
import { useRouter } from "next/router";
import useProjectTypes from "../../api/useProjectTypes";
import { Project } from "../../types/project";
import { UsersIcon } from "@heroicons/react/20/solid";
import { User } from "../../types/user";
import removeUser from "../../api/actions/project/remove-user";
import { ProjectType, ProjectTypeConfig } from "../../types/project-type";
import removeConfig from "../../api/actions/project-type/remove-config";

const ProjectTypeConfigList = () => {
    const router = useRouter();
    const id = router.query.id as string || null
    const { data, mutate } = useProjectTypes(id);
    const Delete = (projectType: ProjectTypeConfig) => {
        removeConfig(id!, [projectType.id]);
        mutate(
            data && !Array.isArray(data) ? {
                ...data,
                config: data.config.filter((u) => u.id !== projectType.id)
            } : data,
            false
        );
    }
    return (
        <Section fill>
            <div className="flex flex-row justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Project Type Configs</h1>
                <Link href={`/project-types/${id}/configs/add`}>
                    <a>
                        <Button>Add Config Type</Button>
                    </a>
                </Link>
            </div>
            <Table columns={[
                {
                    label: 'Key',
                    key: 'key',
                },
                {
                    label: 'Label',
                    key: 'label',
                },
                {
                    label: 'Editable',
                    key: 'editable',
                },
                {
                    label: 'Type',
                    key: 'type',
                },
            ]} data={data && !Array.isArray(data) ? data.config as ProjectTypeConfig[] : []}
                onDelete={Delete}
            />
        </Section>
    )
}
export default ProjectTypeConfigList