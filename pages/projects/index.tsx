import type { NextPage } from 'next'
import useAuth from '../../api/useAuth';
import Layout from '../../containers/layout'
import ProjectList from '../../containers/projects/project-list'

const Projects: NextPage = () => {
    const { loading, error } = useAuth();
    return (
        <Layout title='Projects' subtitle='List of projects'>
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-4">
                    {!loading && !error && <ProjectList />}
                </div>
            </div>
        </Layout>
    )
}

export default Projects
