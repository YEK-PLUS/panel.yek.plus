import { Section } from "@yek-plus/panel.layout.section"
import { Table } from "@yek-plus/panel.ui.table";
import useGames from "../../api/useGames";

const GameList = () => {
    const { data } = useGames();
    const payAction = () => {
        console.log("pay")
    }
    return (
        <Section>
            <h1 className="text-2xl font-bold mb-4">Games</h1>
            <Table
                data={data?.games || []}
                columns={[
                    {
                        label: 'Title',
                        key: 'title',
                    },
                    {
                        label: 'Start Time',
                        key: 'startTime',
                    },
                    {
                        label: 'End Time',
                        key: 'endTime',
                    },
                    {
                        label: 'Code',
                        key: 'code',
                    },
                    {
                        label: 'Prize',
                        key: 'prize',
                    },
                    {

                        label: 'Max Try',
                        key: 'maxTry',
                    },
                    {

                        label: 'Winner',
                        key: 'winner',
                    }
                ]}
            />
        </Section>
    )
}
export default GameList