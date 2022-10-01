import { Button } from "@yek-plus/panel.ui.button";
import { Section } from "@yek-plus/panel.layout.section"
import { Table } from "@yek-plus/panel.ui.table";
import useUsers from "../../api/useUsers";
import type { User } from "../../types/user";
import Link from "next/link";
import _delete from "../../api/actions/user/delete";
import { useRouter } from "next/router";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { ElementType, SVGProps } from "react";
const UserList = () => {
    const { data, mutate } = useUsers();
    const router = useRouter();
    const Delete = (user: User) => {
        _delete(user.id);
        mutate(
            Array.isArray(data) ? data.filter((u: User) => u.id !== user.id) : data,
            false
        );
    }
    const Edit = (user: User) => {
        router.push(`/users/${user.id}`);
    }
    const ChangePassword = (user: User) => {
        router.push(`/users/${user.id}/password`);
    }
    return (
        <Section fill>
            <div className="flex flex-row justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Users</h1>
                <Link href="/users/create">
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
            ]} data={data as User[] || []}
                onDelete={Delete}
                onEdit={Edit}
                actions={[
                    {
                        icon: <LockClosedIcon />,
                        onClick: ChangePassword,
                        theme: 'secondary',
                    },
                ]}
            />
        </Section>
    )
}
export default UserList