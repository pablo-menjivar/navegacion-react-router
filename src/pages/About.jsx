import React from "react"

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-2xl bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Sobre Nosotros</h1>
                <p className="text-gray-600 leading-relaxed">
                ¡Bienvenido a nuestra aplicación! Nos dedicamos a brindar la mejor experiencia a 
                nuestros usuarios. Nuestro equipo trabaja arduamente para ofrecer funciones de alta 
                calidad y garantizar que todo funcione a la perfección. ¡Gracias por elegirnos!
                </p>
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Nuestra misión</h2>
                    <p className="text-gray-600 leading-relaxed">
                    Nuestra misión es crear soluciones innovadoras que faciliten y hagan 
                    la vida más agradable para todos. Nos esforzamos por estar a la vanguardia 
                    y mejorar continuamente nuestros servicios.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;