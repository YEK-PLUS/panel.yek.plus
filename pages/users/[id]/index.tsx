import type { NextPage } from 'next'
import Layout from '../../../containers/layout'
import UserEdit from '../../../containers/users/user-edit'

const Users: NextPage = () => {
    return (
        <Layout title='Games' subtitle='List of games'>
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-4">
                    <UserEdit />
                </div>
            </div>
        </Layout>
    )
}

export default Users
