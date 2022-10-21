import type { NextPage } from 'next'
import useAuth from '../hooks/useAuth'
import Layout from '../containers/layout'
import SavedSearchTable from '../containers/search/saved-table'

const SavedSearchs: NextPage = () => {
  useAuth();
  return (
    <Layout title='Search' subtitle='Search products'>
      <div className="flex gap-4">
        <SavedSearchTable />
      </div>
    </Layout>
  )
}

export default SavedSearchs
