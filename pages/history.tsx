import type { NextPage } from 'next'
import useAuth from '../api/useAuth'
import Layout from '../containers/layout'
import HistoryTable from '../containers/history/table'

const History: NextPage = () => {
  useAuth();
  return (
    <Layout title='Search' subtitle='Search products'>
      <div className="flex gap-4">
        <HistoryTable />
      </div>
    </Layout>
  )
}

export default History
