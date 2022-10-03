import type { NextPage } from 'next'
import useAuth from '../../../api/useAuth';
import Layout from '../../../containers/layout'
import UserPasswordEdit from '../../../containers/users/user-password-edit'

const Users: NextPage = () => {
    const { loading, error } = useAuth();
    return (
        <Layout title='Games' subtitle='List of games'>
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-4">
                    {!loading && !error && <UserPasswordEdit />}
                </div>
            </div>
        </Layout>
    )
}

export default Users
