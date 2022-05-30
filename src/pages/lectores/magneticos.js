import Layout from "../../components/Layout";
import Img from 'next/image';
import cc from '../../img/creditcard.jpg';

const magneticos = () => {
    return (
        <Layout>
            <header className="py-4">
                <h1 className="text-center">Lectores <span className="highlight">magnéticos</span></h1>
            </header>
            <div className="container">
                <section>
                    <h3>¿Qué es un lector<span className="highlight"> magnético</span>?</h3>
                    <p>Un lector magnético se encarga de convertir en <span className="highlight">señales eléctricas</span>, las variaciones de las propiedades magnéticas de un soporte de registro, cabezas de lectura y dispositivos electrónicos asociados.</p>
                </section>
                <section>
                    <header><h3>¿ Cómo funcionan ?</h3></header>
                    <p>Para decodificar la información lo hace a través de las particulas ferromagnéticas que tiene la banda magnética a analizar.</p>
                    <p>En la banda magnética de la tarjeta, sus particulas pueden tomar 2 direcciones al ser magnetizadas, norte o sur, dependiendo de estas direcciones se traduce a 0 o 1.</p>
                </section>
                <section>
                    <header><h3>Lector magnético más <span className="highlight">común</span> de ver</h3></header>

                    <div className="row">
                        <div className="col-sm-6 mx-auto my-auto">
                            <h5>Lector de <span className="highlight">banda magnética</span>.</h5>
                            <p>
                                La tarjeta magnética fue una de las primeras tecnologías utilizadas para codificar datos en una tarjeta de PVC y sigue siendo uno de los medios de identificación más utilizados en todo el mundo. Su impacto es tal que, por extensión, un gran número de usuarios utilizan el nombre de tarjeta magnética para su identificación RFID y tarjeta identificativa de fichaje en empresa.
                            </p>
                        </div>
                        <div className="col-sm-4 mx-auto py-4">
                            <Img src={cc} alt="monitor" className="img-fluid peripheral-img" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row">
                        <div className="col">
                            <header>
                                <h3>Tipos de lectores magnéticos</h3>
                                <ul>
                                    <li>
                                        <h5>Lector magnético de pasada</h5>
                                        <p style={{ fontSize: "12pt" }}>
                                            Permiten leer información de la banda magnética al deslizar la tarjeta por el lector. Existen muchos tipos de lectores en función del conexionado, tipo de lectura, forma, tamaño, etc. Recuerda que los lectores sólo permiten leer información de la banda magnética.
                                        </p>
                                    </li>
                                    <li>
                                        <h5>Lector magnético de inserción</h5>
                                        <p style={{ fontSize: "12pt" }}>
                                            Leen los datos de la tarjeta al insertar o sacar la tarjeta del lector.
                                        </p>
                                    </li>
                                </ul>
                            </header>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default magneticos;