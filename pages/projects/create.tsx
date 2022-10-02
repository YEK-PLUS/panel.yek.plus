import type { NextPage } from 'next'
import useAuth from '../../api/useAuth';
import Layout from '../../containers/layout'
import ProjectCreate from '../../containers/projects/project-create'

const Projects: NextPage = () => {
    useAuth();
    return (
        <Layout title='Games' subtitle='List of games'>
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-4">
                    <ProjectCreate />
                </div>
            </div>
        </Layout>
    )
}

export default Projects
