import type { NextPage } from 'next'
import useAuth from '../hooks/useAuth'
import Layout from '../containers/layout'
import ProductsTable from '../containers/product/table'

const SavedProducts: NextPage = () => {
  useAuth();
  return (
    <Layout title='Search' subtitle='Search products'>
      <div className="flex gap-4">
        <ProductsTable />
      </div>
    </Layout>
  )
}

export default SavedProducts
