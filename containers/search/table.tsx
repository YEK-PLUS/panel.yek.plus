import "antd/dist/antd.css";
import { Section } from '@yek-plus/panel.layout.section';
import { Table } from "@yek-plus/panel.ui.table";
import { useRouter } from "next/router";
import useSearch from "../../hooks/useSearch";
import { SearchResponse } from "../../types/search-response";
import { StarIcon } from "@heroicons/react/20/solid";
import { IconButton } from "@yek-plus/panel.ui.icon-button";
import { useState } from "react";
import favoriteSearch from "../../hooks/favorite-search";
import favoriteProduct from "../../hooks/favorite-product";

const SearchTable = () => {
    const router = useRouter();
    const [isFavorite, setIsFavorite] = useState(false);
    const q = router.query.q as string | undefined;
    const { data, loading, mutate } = useSearch(q);
    const addToFavorite = async () => {
        const { success, favorite } = await favoriteSearch(data!.id);
        if (success) await setIsFavorite(favorite);
    };
    const addStar = async (item: SearchResponse["SearchResult"]["Items"][0]) => {
        mutate({
            ...data!,
            SearchResult: {
                ...data!.SearchResult,
                Items: data!.SearchResult.Items.map(i => i.ASIN === item.ASIN ? {
                    ...i,
                    favorite: !i.favorite
                } : i)
            }
        }, false);
        await favoriteProduct(item.ASIN);
        mutate();
    };
    return (
        <Section fill>
            {q && loading &&
                <div className="flex justify-center items-center h-full">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            }
            {!q && <div className="flex justify-center items-center h-full">
                <div className="text-2xl">Search for something</div>
            </div>}
            {data &&
                <div className="flex justify-between">
                    <p className="font-bold text-sm">Warring this is the demo data for the search result</p>
                </div>}
            {data &&
                <div className="flex justify-between">
                    <p className="font-bold text-lg">{q}</p>
                    <div>
                        <IconButton
                            theme="primary-outline"
                            icon={<StarIcon className={isFavorite ? "text-yellow-500" : "text-gray-500"} />}
                            onClick={addToFavorite}
                        />
                    </div>
                </div>}
            {data && <Table<SearchResponse["SearchResult"]["Items"][0]>
                columns={[
                    {
                        label: 'Image',
                        key: 'Images.Primary.Medium.URL',
                        type: 'image',
                    },
                    {
                        label: 'ASIN',
                        key: 'ASIN',
                        type: 'text',
                    },
                    {
                        label: 'Name',
                        key: 'ItemInfo.Title.DisplayValue',
                        type: 'text',
                        trim: true,
                    },
                    // {
                    //     label: 'Rating',
                    //     key: 'reviews.rating',
                    //     type: 'text',
                    // },
                    {
                        label: '.com',
                        key: 'Offers.Listings.0.Price.DisplayAmount',
                        type: 'text',
                        link: 'DetailPageURL',
                    },
                    {
                        label: '.com.tr',
                        key: 'Offers.Listings.0.Price.DisplayAmount',
                        type: 'text',
                        link: 'DetailPageURL',
                    },
                    // {
                    //     label: '.com.tr',
                    //     key: 'tr.result.[0].price.current_price',
                    //     type: 'text',
                    //     link: 'tr.result.[0].url',
                    // },
                ]}
                data={data.SearchResult.Items}
                actions={(item) => {
                    return [
                        {
                            theme: 'primary-outline',
                            icon: item.favorite ? <StarIcon className="text-yellow-500" /> : <StarIcon className="text-gray-500" />,
                            onClick: addStar
                        },
                    ]
                }}
            />
            }
        </Section>
    );
}
export default SearchTable;