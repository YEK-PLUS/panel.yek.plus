import { Button } from "@yek-plus/panel.ui.button";
import { Section } from "@yek-plus/panel.layout.section"
import { Table } from "@yek-plus/panel.ui.table";
import Link from "next/link";
import _delete from "../../api/actions/project/delete";
import { useRouter } from "next/router";
import useProjects from "../../api/useProjects";
import { Project } from "../../types/project";
import { UsersIcon, Cog6ToothIcon } from "@heroicons/react/20/solid";
const ProjectList = () => {
    const { data, mutate } = useProjects();
    const router = useRouter();
    const Delete = (project: Project) => {
        console.log(project);

        _delete(project.id);
        mutate(
            Array.isArray(data) ? data.filter((u: Project) => u.id !== project.id) : data,
            false
        );
    }
    const Edit = (project: Project) => {
        router.push(`/projects/${project.id}`);
    }
    const GoProjectConfig = (project: Project) => {
        router.push(`/projects/${project.id}/config`);
    }
    const GoAssignedUsers = (project: Project) => {
        router.push(`/projects/${project.id}/users`);
    }
    return (
        <Section fill>
            <div className="flex flex-row justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Projects</h1>
                <Link href="/projects/create">
                    <a>
                        <Button>Add Project</Button>
                    </a>
                </Link>
            </div>
            <Table columns={[
                {
                    label: 'İsim',
                    key: 'name',
                },
                {
                    label: 'Açıklama',
                    key: 'description',
                },
                {
                    label: 'Type',
                    key: 'ProjectType.name',
                },
                {
                    label: 'Email',
                    key: 'email',
                },
            ]} data={data as Project[] || []}
                onDelete={Delete}
                onEdit={Edit}
                actions={[
                    {
                        icon: <Cog6ToothIcon />,
                        onClick: GoProjectConfig,
                        theme: 'primary-outline',
                    },
                    {
                        icon: <UsersIcon />,
                        onClick: GoAssignedUsers,
                        theme: 'secondary',
                    },
                ]}
            />
        </Section>
    )
}
export default ProjectList