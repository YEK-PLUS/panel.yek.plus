import { Logo } from "@yek-plus/panel.layout.logo"
import { UserLine } from "@yek-plus/panel.layout.user-line"
import { Copyright } from "@yek-plus/panel.layout.copyright"
import { Form } from '@yek-plus/panel.ui.form';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import "antd/dist/antd.css";
import { Section } from '@yek-plus/panel.layout.section';
import useCountryList from "../../hooks/useCountryList";
import { useRouter } from "next/router";
// import useCategoryList from "../../api/useCategoryList";


const RightBar = () => {
    const { countryList } = useCountryList();
    // const { categoryList } = useCategoryList();
    const router = useRouter();
    const q = router.query.q as string | undefined;

    const schema = new SimpleSchema({
        searchKey: {
            type: String,
            label: 'Search Key',
            defaultValue: q,
        },
        countries: {
            type: Array,
            label: 'Countries',
            allowedValues: countryList?.filter(country => country.country_code !== "US" && country.country_code !== "TR").map((country) => country.country),
            optional: true,
            // @ts-ignore
            uniforms: {
                checkboxes: true,
                disabled: true,
            },
        },
        'countries.$': {
            type: String,
        },
        // categories: {
        //     type: Array,
        //     label: 'Categories',
        //     allowedValues: categoryList?.map((category) => category.name),
        //     uniforms: {
        //         disabled: true,
        //     },
        // },
        // 'categories.$': {
        //     allowedValues: categoryList?.map((category) => category.name),
        //     type: String,
        // },
    });
    const handleSubmit = async (model: any) => {
        const searchKey = model.searchKey;
        router.push({
            pathname: '/',
            query: {
                q: searchKey,
            }
        });
    };
    return <div className="p-2 h-full flex flex-col gap-4">
        <div className="h-[60px] flex items-center">
            <UserLine fullName='YEK' title='Welcome' avatar='https://avatars.githubusercontent.com/u/25279263?v=4' />
        </div>
        <hr />
        {countryList &&
            <Form
                schema={new SimpleSchema2Bridge(schema)}
                onSubmit={handleSubmit}
            />
        }
        {!countryList && // loading
            <div className="flex-1 flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
        }
        <div className="mt-auto">
            <Copyright appName="DEALTIVE" />
        </div>
    </div>
}
export default RightBar