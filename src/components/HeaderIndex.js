import Img from 'next/image';
import Peripherals from "../img/peripherals.jpg";
const HeaderIndex = () => {
    return (
        <div className="container">
            <div className="grid-header my-4">
                <div className="my-auto" >
                    <h1 className="header-title light">Wiki<span className='highlight'>Tech</span></h1>
                    <p className="fs-3 light">Conceptos abarcados: periféricos de <span className="highlight">entrada</span>, <span className="highlight">salida</span>, <span className="highlight">mixtos.</span> y <span className='highlight'> almacenamiento</span></p>
                </div>
                <div>
                    <Img src={Peripherals} alt="header" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default HeaderIndex;