import { Button } from "@yek-plus/panel.ui.button";
import { Section } from "@yek-plus/panel.layout.section"
import { Table } from "@yek-plus/panel.ui.table";
import Link from "next/link";
import _delete from "../../api/actions/project/delete";
import { useRouter } from "next/router";
import useProjects from "../../api/useProjects";
import { Project } from "../../types/project";
import { UsersIcon } from "@heroicons/react/20/solid";
import { User } from "../../types/user";
import removeUser from "../../api/actions/project/remove-user";
import { ProjectTypeConfig } from "../../types/project-type";
const ProjectConfigList = () => {
    const router = useRouter();
    const id = router.query.id as string || null
    const { data, mutate } = useProjects(id);
    const Delete = (user: User) => {
        removeUser(id!, [user.id]);
        mutate(
            data && !Array.isArray(data) ? {
                ...data,
                Users: data.Users.filter((u) => u.id !== user.id)
            } : data,
            false
        );
    }
    const EditConfig = (projectTypeConfig: ProjectTypeConfig) => {
        router.push(`/projects/${id}/config/constant/${projectTypeConfig.id}`)
    }
    
    const config = data && !Array.isArray(data) ? data.ProjectValues.filter((v) => data.ProjectType.config.find((c) => c.key === v.key)) : [];

    const values = data && !Array.isArray(data) ? data.ProjectValues.filter((v) => !data.ProjectType.config.find((c) => c.key === v.key)) : [];

    return (
        <Section fill>
            <div className="flex flex-row justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Project Config</h1>
            </div>
            <Table columns={[
                {
                    label: 'Label',
                    key: 'label',
                },
                {
                    label: 'Value',
                    key: 'value',
                },
            ]} data={config}
                onEdit={EditConfig}
            />
        </Section>
    )
}
export default ProjectConfigList