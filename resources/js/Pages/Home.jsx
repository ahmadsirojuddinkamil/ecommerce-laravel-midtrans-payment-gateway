import Container from '@/Components/Container'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/inertia-react'
import React from 'react'

export default function Home() {
    return (
        <div>
            <div>
                <Head title='yesterday' />
                <Container>
                    Home
                </Container>
            </div>
        </div>
    )
}

Home.layout = page => <App children={page} />