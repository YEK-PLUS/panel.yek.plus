import "antd/dist/antd.css";
import { Section } from '@yek-plus/panel.layout.section';
import { Table } from "@yek-plus/panel.ui.table";
import { useRouter } from "next/router";
import { ForwardIcon } from "@heroicons/react/20/solid";
import removeProduct from "../../api/remove-product";
import useProducts from "../../api/useProducts";

const ProductTable = () => {
    const router = useRouter();
    const { data, loading, mutate } = useProducts();
    const onDelete = async (id: string) => {
        mutate(data?.filter((item) => item.id !== id), false);
        await removeProduct(id);
        await mutate();
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
                        label: 'Image',
                        key: 'image',
                        type: 'image',
                    },
                    {
                        label: 'Name',
                        key: 'name',
                        type: 'text',
                    },
                    {
                        label: 'Price',
                        key: 'price',
                        type: 'text',
                    },
                    {
                        label: 'Currency',
                        key: 'currency',
                        type: 'text',
                    }
                ]}
                data={data}
                onDelete={(item) => onDelete(item.id)}
                actions={[
                    {
                        icon: <ForwardIcon />,
                        onClick: (row) => {
                            window.open("https://amazon.com/dp/" + row.asin, "_blank");
                        },
                    },
                ]}
            />
            }
        </Section>
    );
}
export default ProductTable;