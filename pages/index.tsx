import { PlayIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import { Logo } from '@yek-plus/panel.layout.logo'
import { Section } from '@yek-plus/panel.layout.section'
import { Statistic } from '@yek-plus/panel.ui.statistic'
import type { NextPage } from 'next'
import useAuth from '../api/useAuth'
import Layout from '../containers/layout'

const Home: NextPage = () => {
  useAuth();
  return (
    <Layout title='Dashboard' subtitle='This is the dashboard page'>
      <div className="flex flex-wrap xl:flex-nowrap gap-4">
        <div className="xl:w-auto flex w-full h-full">
          <Section fill>
            <div className="h-full flex flex-row justify-around items-center gap-4">
              <Statistic title="Total of all users"
                value="100" icon={<UserGroupIcon width={30} />} />
              <Statistic title="Total of games"
                value="100" icon={<PlayIcon width={30} />} />
            </div>
          </Section>
        </div>
        <div className="flex-1 h-full flex">
          <Section fill>
            <Logo appName="OLDU!" />
          </Section>
        </div>
      </div>
    </Layout>
  )
}

export default Home
