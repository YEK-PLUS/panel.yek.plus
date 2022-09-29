import type { NextPage } from 'next'
import Layout from '../../containers/layout'
import UserList from '../../containers/users/user-list'

const Users: NextPage = () => {
    return (
        <Layout title='Games' subtitle='List of games'>
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-4">
                    <UserList />
                </div>
            </div>
        </Layout>
    )
}

export default Users
