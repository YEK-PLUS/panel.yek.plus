import "antd/dist/antd.css";
import { Section } from '@yek-plus/panel.layout.section';
import { Table } from "@yek-plus/panel.ui.table";
import { useRouter } from "next/router";
import useHistory from "../../api/useHistory";
import { ForwardIcon } from "@heroicons/react/20/solid";

const HistoryTable = () => {
    const router = useRouter();
    const { data, loading } = useHistory();
    return (
        <Section fill>
            {loading &&
                <div className="flex justify-center items-center h-full">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            }
            {data && <Table<typeof data[0]>
                columns={[
                    {
                        label: 'Query',
                        key: 'query',
                        type: 'text',
                    },
                    {
                        label: 'Countries',
                        key: 'country',
                        type: 'text',
                    },
                    {
                        label: 'Date',
                        key: 'date',
                        type: 'text',
                    }
                ]}
                data={data}
                actions={[
                    {
                        icon: <ForwardIcon />,
                        onClick: (row) => {
                            router.push(`/?q=${row.query}`);
                        },
                    },
                ]}
            />
            }
        </Section>
    );
}
export default HistoryTable;