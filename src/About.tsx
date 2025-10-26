import React from "react"; 

const About: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-inicio">
                <img
                    src="\public\background.jpeg"
                    className="about-image"
                />
            </div>

            <div className="about-content">
                <h2>Sobre Nosotros</h2>
                <p>
                    En nuestra peluquería, celebramos la belleza, el estilo y la cultura caribeña.
                    Ofrecemos cortes modernos, tratamientos capilares, barbería y asesoría personalizada para
                    cada cliente. Nuestro equipo está formado por estilistas apasionados que combinan técnica,
                    creatividad y tradición.
                </p>
                <p>
                    Creemos que un buen corte de cabello o afeitado es más que un servicio: es una experiencia transformadora que potencia la confianza y el bienestar de nuestros clientes.
                </p>

                <ul className="about-info">
                    <li><b>Contacto:</b> 809-000-0000</li>
                </ul>
                <ul className="about-info">
                    <li><b>Horario 📋</b></li>
                </ul>
                    <ul className="about-info">
                    <li><b>Lunes a Sabados:</b> 9:30 AM a 6:00 PM</li>
                    <li><b>Domingos:</b> 9:30 AM a 3:00 PM</li>
                </ul>
            </div>
        </section>
    );
};

export default About;