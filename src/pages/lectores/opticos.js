import Layout from "../../components/Layout";
import Img from 'next/image';
import QR from '../../img/qrcode.jpg';
import barCode from '../../img/barcode.png';


const magneticos = () => {
    return (
        <Layout>
            <header className="py-4">
                <h1 className="text-center">Lectores <span className="highlight">ópticos</span></h1>
            </header>
            <div className="container">
                <section>
                    <h3>¿Qué es un lector<span className="highlight"> óptico</span>?</h3>
                    <p>Un lector óptico tiene la función de transformar la información en código binario que puede ser procesado por el ordenador, teniendo distintas tecnologías y variando el diseño.</p>
                </section>
                <section>
                    <header><h3>¿ Cómo funcionan ?</h3></header>
                    <p>Los lectores ópticos funcionan mediante un <span className="highlight">láser</span>, donde dependiendo la codificación del objeto a analizar, transforma la información en algo útil para la computadora.</p>
                </section>
                <section>
                    <header><h3>Lectores ópticos más <span className="highlight">usados</span> hoy en día</h3></header>
                    <div className="row">
                        <div className="col-sm-6 mx-auto my-auto">
                            <h5>Lector de <span className="highlight">código de barras</span>.</h5>
                            <p>El código de barras es un código basado en la representación de un conjunto de líneas paralelas de distinto grosor y espaciado que en su conjunto contienen una determinada información, es decir, las barras y espacios del código representan pequeñas cadenas de caracteres.</p>
                        </div>
                        <div className="col-sm-4 mx-auto py-4">
                            <Img src={barCode} alt="monitor" className="img-fluid peripheral-img" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 mx-auto my-auto">
                            <h5>Lector de <span className="highlight">código QR</span>.</h5>
                            <p>
                                Los códigos QR pueden parecer un conjunto aleatorio de cuadrados negros sobre un fondo blanco, pero su estructura intrincada es lo que esencialmente les permite almacenar la información y ser decodificables por un escáner.
                            </p>
                            <h5><span className="highlight">Estructura</span> de un código QR.</h5>
                            <ul>
                                <li>Información sobre la versión.</li>
                                <li>Información de formato.</li>
                                <li>Datos y claves de correción de errores.</li>
                                <li>Patrón de posición.</li>
                                <li>Patrón de alineación.</li>
                                <li>Patrón de temporización.</li>
                                <li>Zona tranquila</li>
                            </ul>
                            <p className="light" style={{ fontSize: "8pt" }}>Para más información: <a href="https://uqr.me/es/qr-code-generator-marketing/como-funciona-codigo-qr/#:~:text=los%20c%C3%B3digos%20QR-,Los%20c%C3%B3digos%20QR%20pueden%20parecer%20un%20conjunto%20aleatorio%20de%20cuadrados,ser%20decodificables%20por%20un%20esc%C3%A1ner.">Códigos QR</a></p>
                        </div>
                        <div className="col-sm-4 mx-auto py-4">
                            <Img src={QR} alt="monitor" className="img-fluid peripheral-img" />
                        </div>
                    </div>
                </section>
                <section>
                    <header><h3>¿Qué tipos de lectores ópticos existen?</h3></header>
                </section>
            </div>
        </Layout>
    )
}

export default magneticos;