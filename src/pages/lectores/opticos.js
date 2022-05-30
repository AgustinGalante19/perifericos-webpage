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
                            <h5>Lector de <span className="highlight">código de barras</span></h5>
                            <p>El código de barras es un código basado en la representación de un conjunto de líneas paralelas de distinto grosor y espaciado que en su conjunto contienen una determinada información, es decir, las barras y espacios del código representan pequeñas cadenas de caracteres.</p>
                        </div>
                        <div className="col-sm-4 mx-auto py-4">
                            <Img src={barCode} alt="monitor" className="img-fluid peripheral-img" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 mx-auto my-auto">
                            <h5>Lector de <span className="highlight">código QR</span></h5>
                            <p>
                                Los códigos QR pueden parecer un conjunto aleatorio de cuadrados negros sobre un fondo blanco, pero su estructura intrincada es lo que esencialmente les permite almacenar la información y ser decodificables por un escáner.
                            </p>
                            <h5><span className="highlight">Estructura</span> de un código QR</h5>
                            <ul>
                                <li>Información sobre la versión</li>
                                <li>Información de formato</li>
                                <li>Datos y claves de correción de errores</li>
                                <li>Patrón de posición</li>
                                <li>Patrón de alineación</li>
                                <li>Patrón de temporización</li>
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
                    <ul>
                        <li>
                            <h5>Lector Óptico de lápiz</h5>
                            <p style={{ fontSize: "12pt" }}>
                                Este modelo fue el más famoso durante un tiempo ya que tenía un precio bastante accesible y su tamaño le hacía ocupar poco espacio, para hacerlo funcionar solamente se debe colocar la punta del mismo en la parte donde está el código de barras a escanear y deslizarlo con cierta inclinación para que haga la lectura.
                            </p>
                        </li>
                        <li>
                            <h5>Lector de Ranura</h5>
                            <p style={{ fontSize: "12pt" }}>
                                Para hacer una lectura solamente se debe hacer un deslizamiento del documento a utilizar o tarjeta y asegurarse que el código de barras se encuentra muy cerca del lector.
                            </p>
                        </li>
                        <li>
                            <h5>Lector de tipo rastrillo</h5>
                            <p style={{ fontSize: "12pt" }}>
                                Este es un modelo de lector que trabaja con detector de foto y el mismo se conoce como CCD. Tiene una cantidad de LEDs que lo componen y su forma de trabajar es con fuente de luz, es muy parecido al de las cámaras de video. Para que se haga su labor es necesario un contacto físico entre el lector y el producto a escanear con la diferencia de que en este tipo de lectura no hay que hacer ningún tipo de movimiento para la lectura.
                            </p>
                        </li>
                        <li>
                            <h5>Lector de proximidad</h5>
                            <p style={{ fontSize: "12pt" }}>
                                Estos requieren una distancia bastante corta entre lector y producto que se necesita leer y tiene un alcance mucho mayor al lector CCD. Esto se debe a que la potencia del láser de estos es mucho mayor y son los más adecuados si se debe trabajar en una superficie que no sea regular o que tenga algún tipo de curva.
                            </p>
                        </li>
                        <li>
                            <h5>Lector tipo pistola</h5>
                            <p style={{ fontSize: "12pt" }}>
                                Estos trabajan con un mecanismo de activación para el escáner con la finalidad de evitar una lectura por equivocación de cualquier otro código en el área donde este se esté utilizando.
                            </p>
                        </li>
                        <li>
                            <h5>Lectores fijos</h5>
                            <p style={{ fontSize: "12pt" }}>
                                Similares a los lectores de tipo pistolas, pero estos se ubican en una base y la ventana de lectura se encuentra ubicada justo enfrente al código al que se le hará la lectura. Para realizar la lectura solo se debe pasar el producto por enfrente del mismo. Estos suelen ser los típicos lectores que encontramos en supermercados.
                            </p>
                        </li>
                        <li>
                            <h5>Lectores de tipo Autónomo</h5>
                            <p style={{ fontSize: "12pt" }}>
                                Este es un modelo que no requiere de una persona para su funcionamiento. Los lectores ópticos de este tipo pueden utilizarse en lugares de funcionamiento automático y también en bandas para transportar, la velocidad en la que realizan su lectura varía de acuerdo a la producción, también el lugar donde estén los códigos de barras dependerá de esto.
                            </p>
                        </li>
                        <li>
                            <h5>Lector de Huella Dactilar</h5>
                            <p style={{ fontSize: "12pt" }}>
                                Cuentan con una pequeña pieza que está en capacidad de reaccionar al tacto ya registrado y han adquirido gran fama ya que el sistema por contraseña ha traído problemas porque a veces estas se olvidan. Funciona colocando el dedo sobre un sensor que reconoce la huella dactilar del trabajador, el sensor digitaliza el dedo del usuario, captura la imagen tridimensional de la huella dactilar, la cual se compara con una imagen de la huella dactilar del usuario previamente capturada para comprobar su correspondencia.
                            </p>
                        </li>
                        <li>
                            <h5>Lector de Reconocimiento Facial</h5>
                            <p style={{ fontSize: "12pt" }}>
                                Este modelo tiene la capacidad de utilizar ciertos puntos de tipo biométrico, con la finalidad de detectar a una persona teniendo un conocimiento de su rostro. Es bastante efectivo porque no hay manera de hacerse pasar por una persona y entrar a un sitio siendo otra, la desventaja del mismo es que tiene un costo bastante alto para su adquisición.
                            </p>
                        </li>
                    </ul>
                </section>
            </div>
        </Layout>
    )
}

export default magneticos;