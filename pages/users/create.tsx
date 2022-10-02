import type { NextPage } from 'next'
import useAuth from '../../api/useAuth';
import Layout from '../../containers/layout'
import UserCreate from '../../containers/users/user-create'

const Users: NextPage = () => {
  useAuth();
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
