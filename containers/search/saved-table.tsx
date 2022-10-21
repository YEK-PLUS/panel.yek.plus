import "antd/dist/antd.css";
import { Section } from '@yek-plus/panel.layout.section';
import { Table } from "@yek-plus/panel.ui.table";
import { useRouter } from "next/router";
import { ForwardIcon } from "@heroicons/react/20/solid";
import useSavedSearchs from "../../api/useSavedSearchs";
import favoriteSearch from "../../api/favorite-search";

const SavedSearchTable = () => {
    const router = useRouter();
    const { data, loading, mutate } = useSavedSearchs();
    const onDelete = async (id: string) => {
        mutate(data?.filter((item) => item.id !== id), false);
        const { success, favorite } = await favoriteSearch(id);
        if (success && !favorite) {
            await mutate();
        }
    };
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
                onDelete={(item) => onDelete(item.id)}
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
export default SavedSearchTable;