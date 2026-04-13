import React from 'react'
import Credentials from './Credentials'
import Credits from './Credits'

const HomePage = () => {
    return (
        <main className='mx-auto p-4'>
            <section className='border-b border-b-gray-300'>
                <div className='flex flex-col md:flex-row gap-12'>
                    <div>
                        <h1 className='text-xl font-semibold text-center'>Password Manager</h1>

                        <p className='font-lg py-4 text-justify border-b '>Welcome to the Password Manager! This application helps you securely store and manage your passwords for various online accounts. With our user-friendly interface, you can easily add, view, and organize your credentials in one place. Say goodbye to forgotten passwords and hello to enhanced security!</p>
                        <p className='font-lg text-justify py-2'>
                            Our Password Manager offers a range of features to keep your information safe. You can create strong, unique passwords for each of your accounts, and the application will securely store them using encryption. Additionally, you can categorize your credentials for easy access and quickly search for specific accounts when needed. With our Password Manager, you can have peace of mind knowing that your sensitive information is protected while still being easily accessible whenever you need it.
                        </p>
                    </div>
                    <img src="https://images.unsplash.com/photo-1762340275855-ae8f4c2c144e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzc3dvcmQlMjBtYW5hZ2VyfGVufDB8fDB8fHww" alt="password manager" className='w-full h-auto rounded-xl hover:scale-105 transition-transform duration-300 hover:rotate-1' />
                </div>
            </section>
            <section className='py-12'>
                <h2 className='font-bold text-2xl font-serif'>Your Credentials</h2>
                <Credentials />
            </section>
            <section>
                <h2 className='font-bold text-2xl font-serif'>Your Credit Cards</h2>
                <Credits />
            </section>
        </main>
    )
}

export default HomePage