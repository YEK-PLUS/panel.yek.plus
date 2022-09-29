import type { NextPage } from 'next'
import Layout from '../../containers/layout'
import UserCreate from '../../containers/users/user-create'

const Users: NextPage = () => {
    return (
        <Layout title='Games' subtitle='List of games'>
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-4">
                    <UserCreate />
                </div>
            </div>
        </Layout>
    )
}

export default Users
