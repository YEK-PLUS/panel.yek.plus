import type { NextPage } from 'next'
import Layout from '../../../containers/layout'
import ProjectEdit from '../../../containers/projects/project-edit'

const Projects: NextPage = () => {
    return (
        <Layout title='Games' subtitle='List of games'>
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-4">
                    <ProjectEdit />
                </div>
            </div>
        </Layout>
    )
}

export default Projects
