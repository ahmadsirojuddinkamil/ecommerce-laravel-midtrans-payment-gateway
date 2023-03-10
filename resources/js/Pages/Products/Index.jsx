import { Head } from '@inertiajs/inertia-react';
import React from 'react'
import Container from '@/Components/Container';
import App from '@/Layouts/App';
import ProductItem from '@/Components/ProductItem';
import Header from '@/Components/Header';
import Pagination from '@/Components/Pagination';

export default function Index(props) {

    const { data: products, meta, links } = props.products

    return (
        <div>
            <Head title='All Products' />

            <Header title='Products' description='Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak' />

            <Container>
                {products.length ?
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                        {
                            products.map(product => (
                                <ProductItem product={product} key={product.id} />
                            ))
                        }
                    </div>
                    :
                    null
                }
                <Pagination meta={meta} links={links} />
            </Container>
        </div>
    );
}

Index.layout = page => <App children={page} />