import Img from "next/image";

import Layout from "../components/Layout";
import Header from "../components/HeaderIndex";

import monitor from '../img/monitor.png'
import microphone from "../img/microphone.jpg";
import printer from "../img/printer.png";

export default function Home() {
  return (
    <Layout>
      <Header />
      <section className="container py-4" style={{ marginTop: "15vh" }}>

        <header className="row">
          <div className="col">
            <h1 className="highlight fw-bold text-center">Empecemos por lo básico</h1>
          </div>
        </header>

        <section className="row">
          <div className="col">
            <h1 className="light fw-bold text-center" style={{ marginTop: "10vh" }}>¿Qué es un <span className="highlight">periférico</span>?</h1>
          </div>
        </section>

        <article className="row">
          <div className="col-8 mx-auto py-4">
            <h5 className="light text-center">
              Los <span className="highlight">periféricos</span> son dispositivos que, sin pertenecer al núcleo fundamental de la computadora, formado por la CPU y la memoria central, permitan realizar operaciones de <span className="highlight">entrada</span>/<span className="highlight">salida</span> (E/S) complementarias al proceso de datos que realiza la <span className="highlight">C.P.U</span>.
            </h5>
          </div>
        </article>

        <div className="row">
          <div className="col">
            <h1 className="light fw-bold text-center" style={{ marginTop: "10vh" }}>Periféricos de <span className="highlight">entrada</span></h1>
          </div>
        </div>
        <article className="row" style={{ maringTop: "4vh", padding: "0px 5vw 0px 5vw" }}>
          <div className="col-sm-6 mx-auto my-auto">
            <h5 className="light text-center px-5">
              Los periféricos de<span className="highlight"> entrada</span> son aquellos que permiten la lectura de datos de una forma directa, sin necesidad de una interacción con el usuario.
            </h5>
          </div>
          <div className="col-sm-4 mx-auto py-4">
            <Img src={microphone} alt="microphone" className="img-fluid peripheral-img" />
          </div>
        </article>



        <div className="row">
          <div className="col">
            <h1 className="light fw-bold text-center" style={{ marginTop: "10vh" }}>Periféricos de <span className="highlight">salida</span></h1>
          </div>
        </div>
        <article className="row" style={{ maringTop: "4vh", padding: "0px 5vw 0px 5vw" }}>
          <div className="col-sm-6 mx-auto my-auto">
            <h5 className="light text-center px-5">
              Los periféricos de<span className="highlight"> salida</span> son aquellos que permiten la escritura de datos de una forma directa, sin necesidad de una interacción con el usuario.
            </h5>
          </div>
          <div className="col-sm-4 mx-auto py-4">
            <Img src={monitor} alt="monitor" className="img-fluid peripheral-img" />
          </div>
        </article>



        <div className="row">
          <div className="col">
            <h1 className="light fw-bold text-center" style={{ marginTop: "10vh" }}>Periféricos <span className="highlight">mixtos</span></h1>
          </div>
        </div>
        <article className="row" style={{ maringTop: "4vh", padding: "0px 5vw 0px 5vw" }}>
          <div className="col-sm-6 mx-auto my-auto">
            <h5 className="light text-center px-5">
              Los periféricos <span className="highlight">mixtos</span> son aquellos dispositivos electrónicos que operan como <span className="highlight">entrada</span> y como <span className="highlight">salida</span> de <span className="highlight">información</span>, permitiendo introducir o extraer datos del sistema.
            </h5>
          </div>
          <div className="col-sm-4 mx-auto py-4">
            <Img src={printer} alt="monitor" className="img-fluid peripheral-img" />
          </div>
        </article>
      </section>
    </Layout>
  )
}
