import { PlayIcon, PlusIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import { Section } from '@yek-plus/panel.layout.section'
import { Statistic } from '@yek-plus/panel.ui.statistic'
import type { NextPage } from 'next'
import useAuth from '../../api/useAuth'
import useGames from '../../api/useGames'
import Layout from '../../containers/layout'
import GameList from '../../containers/games/game-list';
import Link from 'next/link';

const Games: NextPage = () => {
    useAuth();
    const { data, error, loading } = useGames();
    return (
        <Layout title='Games' subtitle='List of games'>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {data &&
                <div className='flex flex-col gap-4'>
                    <div className="flex flex-wrap xl:flex-nowrap gap-4">
                        <div className="flex h-full">
                            <Section fill>
                                <div className="h-full flex flex-row justify-around items-center gap-4">
                                    <Statistic title="Total of games"
                                        value={data.totalGames} icon={<UserGroupIcon width={30} />} />
                                    <Statistic title="Total spended money"
                                        value={data.totalPrize} icon={<PlayIcon width={30} />} />
                                </div>
                            </Section>
                        </div>
                        <Section fill>
                            <Link href={"/games/add"}>
                                <a>
                                    <Statistic title="Add new game" icon={<PlusIcon width={30} />} value="NOW!" />
                                </a>
                            </Link>
                        </Section>
                    </div>
                    <div className="flex flex-col gap-4">
                        <GameList />
                    </div>
                </div>}

        </Layout>
    )
}

export default Games
