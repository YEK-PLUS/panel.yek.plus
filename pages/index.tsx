import { PlayIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import { Logo } from '@yek-plus/panel.layout.logo'
import { Section } from '@yek-plus/panel.layout.section'
import { Statistic } from '@yek-plus/panel.ui.statistic'
import type { NextPage } from 'next'
import useAuth from '../hooks/useAuth'
import Layout from '../containers/layout'
import SearchTable from '../containers/search/table'

const Home: NextPage = () => {
  useAuth();
  return (
    <Layout title='Search' subtitle='Search products'>
      <div className="flex gap-4">
        <SearchTable />
      </div>
    </Layout>
  )
}

export default Home
