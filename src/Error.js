import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <main>

        <section className='error-container'>
            <h1>OOOPS!</h1>
            <article>
                <p>Page not found :(</p>

                <li>
                    <Link to='/'>Go To Home</Link>
                </li>
            </article>
        </section>
        </main>
    )
}

export default Error
