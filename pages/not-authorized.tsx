import type { NextPage } from 'next'
import AuthLayout from '../containers/layout/auth'

const NotAuthorized: NextPage = () => {
    return (
        <AuthLayout>
            <div className="w-full text-center">
                <p className="text-lg font-bold text-gray-600">Not Authorized</p>
                <p className="text-sm text-gray-600">Please login to access this page</p>
            </div>
        </AuthLayout>
    )
}

export default NotAuthorized
