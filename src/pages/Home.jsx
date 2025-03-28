import React from 'react'

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="text-center">
                <h1 className="text-4xl font-bold text-red-600">Bienvenido a nuestra App</h1>
                <p className="mt-4 text-gray-700">Explora las funcionalidades y disfruta de la experiencia.</p>
            </header>
            <main className="mt-8">
                <button className="px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-600">
                    Ejemplo de navegación
                </button>
            </main>
        </div>
    );
};
export default Home