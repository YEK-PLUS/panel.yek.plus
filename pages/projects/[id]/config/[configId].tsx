import type { NextPage } from 'next'
import useAuth from '../../../../api/useAuth';
import Layout from '../../../../containers/layout'
import ProjectConfigConstantEdit from '../../../../containers/projects/project-config-edit'

const Projects: NextPage = () => {
    const { loading, error } = useAuth();
    return (
        <Layout title='Games' subtitle='List of games'>
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-4">
                    {!loading && !error && <ProjectConfigConstantEdit />}
                </div>
            </div>
        </Layout>
    )
}

export default Projects
