import Layout from "../../components/Layout";


const resumen = () => {
    return (
        <Layout>
            <header className="py-4">
                <h1 className="text-center highlight">Resumen</h1>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <article>
                            <p className="fs-2 text-center">Lectores ópticos</p>
                            <p>Un lector óptico tiene la función de transformar la información en código binario que puede ser procesado por el ordenador, teniendo distintas tecnologías y variando el diseño.</p>
                            <header><h3><span className="highlight">¿</span> Cómo funcionan <span className="highlight">?</span></h3></header>
                            <p>Los lectores ópticos funcionan mediante un <span className="highlight">láser</span>, donde dependiendo la codificación del objeto a analizar, transforma la información en algo útil para la computadora.</p>
                            <section>
                                <header>
                                    <p className="fs-4">Tipos de lectores ópticos.</p>
                                    <ul>
                                        <li>Lector Optico de lapiz</li>
                                        <li>Lector de ranura</li>
                                        <li>Lector tipo rastrillo</li>
                                        <li>Lector de proximidad</li>
                                        <li>Lector de pistola</li>
                                        <li>Lectores fijos</li>
                                        <li>Lectores de tipo autonomo</li>
                                        <li>Lector Facial</li>
                                        <li>Codigos QR</li>
                                    </ul>
                                </header>
                            </section>
                        </article>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <article>
                            <p className="fs-2 text-center">Lectores magnéticos</p>
                            <p>Un lector magnético se encarga de convertir en señales eléctricas, las variaciones de las propiedades magnéticas de un soporte de registro, cabezas de lectura y dispositivos electrónicos asociados.</p>
                            <header><h3><span className="highlight">¿</span> Cómo funcionan <span className="highlight">?</span></h3></header>
                            <p>Para decodificar la información lo hace a través de las particulas ferromagnéticas que tiene la banda magnética a analizar.<br />
                                En la banda magnética de la tarjeta, sus particulas pueden tomar 2 direcciones al ser magnetizadas, norte o sur, dependiendo de estas direcciones se traduce a 0 o 1.</p>
                            <section>
                                <header>
                                    <p className="fs-4">Tipos de lectores magnéticos.</p>
                                    <ul>
                                        <li>Lector magnético de pasada</li>
                                        <li>Lector magnético de inserción</li>
                                    </ul>
                                </header>
                            </section>
                        </article>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default resumen;