import { Button } from "@yek-plus/panel.ui.button";
import { Section } from "@yek-plus/panel.layout.section"
import { Table } from "@yek-plus/panel.ui.table";
import Link from "next/link";
import _delete from "../../api/actions/project-type/delete";
import { useRouter } from "next/router";
import useProjectTypes from "../../api/useProjectTypes";
import { ProjectType } from "../../types/project-type";
import {  Cog6ToothIcon } from "@heroicons/react/20/solid";
const ProjectTypeList = () => {
    const { data, mutate } = useProjectTypes();
    const router = useRouter();
    const Delete = (project: ProjectType) => {
        _delete(project.id);
        mutate(
            Array.isArray(data) ? data.filter((u: ProjectType) => u.id !== project.id) : data,
            false
        );
    }
    const Edit = (project: ProjectType) => {
        router.push(`/project-types/${project.id}`);
    }
    const GoProjectConfig = (project: ProjectType) => {
        router.push(`/project-types/${project.id}/configs`);
    }
    return (
        <Section fill>
            <div className="flex flex-row justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Project Types</h1>
                <Link href="/project-types/create">
                    <a>
                        <Button>Add Project Type</Button>
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
            ]} data={data as ProjectType[] || []}
                onDelete={Delete}
                onEdit={Edit}
                actions={[
                    {
                        icon: <Cog6ToothIcon />,
                        onClick: GoProjectConfig,
                        theme: 'secondary-outline',
                    },
                ]}
            />
        </Section>
    )
}
export default ProjectTypeList