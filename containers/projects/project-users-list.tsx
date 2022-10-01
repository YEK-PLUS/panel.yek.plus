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
const ProjectUsersList = () => {
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
    return (
        <Section fill>
            <div className="flex flex-row justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Project Users</h1>
                <Link href={`/projects/${id}/users/add`}>
                    <a>
                        <Button>Add User</Button>
                    </a>
                </Link>
            </div>
            <Table columns={[
                {
                    label: 'Username',
                    key: 'username',
                },
                {
                    label: 'First Name',
                    key: 'firstName',
                },
                {
                    label: 'Last Name',
                    key: 'lastName',
                },
                {
                    label: 'Email',
                    key: 'email',
                },
            ]} data={data && !Array.isArray(data) ? data.Users as User[] : []}
                onDelete={Delete}
            />
        </Section>
    )
}
export default ProjectUsersList