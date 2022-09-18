import { Section } from "@yek-plus/panel.layout.section"
import { Table } from "@yek-plus/panel.ui.table";
import useUsers from "../../api/useUsers";

const UserList = () => {
    const { data } = useUsers();
    return (
        <Section fill>
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <Table columns={[
                { label: "Id", key: "id" },
                { label: "Name", key: "fullname" },
                { label: "User Name", key: "username" },
                { label: "IBAN", key: "iban" },
                { label: "Telephone", key: "phoneNumber" },
            ]} data={data?.users || []} />
        </Section>
    )
}
export default UserList