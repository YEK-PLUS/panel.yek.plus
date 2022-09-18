import { UserGroupIcon } from '@heroicons/react/20/solid'
import { Section } from '@yek-plus/panel.layout.section'
import { Statistic } from '@yek-plus/panel.ui.statistic'
import type { NextPage } from 'next'
import useAuth from '../../api/useAuth'
import Layout from '../../containers/layout'
import UserList from '../../containers/users/user-list'
import useUsers from '../../api/useUsers'

const Users: NextPage = () => {
    useAuth();
    const { data, error, loading } = useUsers();
    return (
        <Layout title='Games' subtitle='List of games'>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {data &&
                <div className='flex flex-col gap-4'>
                    <Section fill>
                        <div className="h-full flex flex-row justify-around items-center gap-4">
                            <Statistic title="Total of users"
                                value={data.totalUsers} icon={<UserGroupIcon width={30} />} />
                        </div>
                    </Section>
                    <div className="flex flex-col gap-4">
                        <UserList />
                    </div>
                </div>}

        </Layout>
    )
}

export default Users
