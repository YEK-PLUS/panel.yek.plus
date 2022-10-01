import type { NextPage } from 'next'
import Layout from '../../../../containers/layout'
import ProjectUsersList from '../../../../containers/projects/project-users-list'

const Projects: NextPage = () => {
    return (
        <Layout title='Games' subtitle='List of games'>
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-4">
                    <ProjectUsersList />
                </div>
            </div>
        </Layout>
    )
}

export default Projects
