import type { NextPage } from 'next'
import useLogin from '../api/useLogin'
import AuthLayout from '../containers/layout/auth'

const Auth: NextPage = () => {
    const { error, data } = useLogin();
    return (
        <AuthLayout>
            {error ? (
                <div className="w-full text-center">
                    <p className="text-lg font-bold text-gray-600">Not Authorized</p>
                    <p className="text-sm text-gray-600">Please login to access this page</p>
                </div>
            ) : (
                <div className="w-full flex justify-center items-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
                </div>
            )}
        </AuthLayout>
    )
}

export default Auth
