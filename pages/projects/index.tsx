import type { NextPage } from 'next'
import Layout from '../../containers/layout'
import ProjectList from '../../containers/projects/project-list'

const Projects: NextPage = () => {
    return (
        <Layout title='Projects' subtitle='List of projects'>
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-4">
                    <ProjectList />
                </div>
            </div>
        </Layout>
    )
}

export default Projects
