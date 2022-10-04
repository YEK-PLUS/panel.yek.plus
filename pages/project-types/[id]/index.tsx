import type { NextPage } from 'next'
import useAuth from '../../../api/useAuth';
import Layout from '../../../containers/layout'
import ProjectTypeEdit from '../../../containers/project-types/project-type-edit'

const ProjectTypes: NextPage = () => {
    const { loading, error } = useAuth();
    return (
        <Layout title='Games' subtitle='List of games'>
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-4">
                    {!loading && !error && <ProjectTypeEdit />}
                </div>
            </div>
        </Layout>
    )
}

export default ProjectTypes
