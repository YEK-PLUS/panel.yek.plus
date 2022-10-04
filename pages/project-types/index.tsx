import type { NextPage } from 'next'
import useAuth from '../../api/useAuth';
import Layout from '../../containers/layout'
import ProjectTypeList from '../../containers/project-types/project-type-list'

const Users: NextPage = () => {
    const { loading, error } = useAuth();
    return (
        <Layout title='Users' subtitle='List of users'>
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-4">
                    {!loading && !error && <ProjectTypeList />}
                </div>
            </div>
        </Layout>
    )
}

export default Users
