import Layout from "../../components/Layout";


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
                <header>
                    <h2>Existen diferentes tipos</h2>
                </header>
                <article>
                    types
                </article>
            </section>
        </div>
    </Layout>
  );
}

export default magneticos;