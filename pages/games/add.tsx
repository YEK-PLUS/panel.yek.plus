import type { NextPage } from 'next'
import useAuth from '../../api/useAuth'
import Layout from '../../containers/layout'
import GameAddForm from '../../containers/games/game-add-form';

const GameAdd: NextPage = () => {
    useAuth();
    return (
        <Layout title='Add Game' subtitle='Add a new game to your app'>
            <GameAddForm />
        </Layout>
    )
}

export default GameAdd
