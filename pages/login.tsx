import { Logo } from '@yek-plus/panel.layout.logo'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import useLogin from '../api/useLogin'
import Login from '../containers/auth/login'
import AuthLayout from '../containers/layout/auth'

const LoginPage: NextPage = () => {
    return (
        <AuthLayout>
            <div className='h-full flex-full w-full'>
                <Login />
            </div>
        </AuthLayout>
    )
}

export default LoginPage
