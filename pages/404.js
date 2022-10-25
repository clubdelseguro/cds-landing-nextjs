import { NavBar } from '../components/NavBar';
import Link from 'next/link';
import { CotizaAhoraConNosotros } from '../components/CotizaAhoraConNosotros';

function Error() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div className="root-header-error-page">
            </div>
            <NavBar />
            <div className="body">
                <div className="root-error-page">
                    <div className="header-error-page">
                        <h1 className="title-error-page">
                            Al parecer tenemos un problema
                        </h1>
                        <p className="description-error-page">
                            En este momento no podemos encontrar el contenido que necesitas. ¡No te preocupes que lo solucionaremos pronto!
                        </p>
                    </div>
                    <div className="cards-error-page">
                        <div className="cards-left-error-page">
                            <Link href="/">
                                <div className="card-error-page volver-inicio-error">
                                    <span className="content-card-error">Volver al inicio</span>
                                </div>
                            </Link>

                            <Link href="/beneficios">
                                <div className="card-error-page beneficio-error">
                                    <span className="content-card-error">Beneficios para ti</span>
                                </div>
                            </Link>
                            <Link href="/faq">
                                <div className="card-error-page faq-error">
                                    <span className="content-card-error">FAQ</span>
                                </div>
                            </Link>
                            <Link href="/contacto">
                                <div className="card-contacto-error-page contacto-responsive" style={{ backgroundImage: 'url(/assets/Error/img-contacto.png)' }}>
                                    <span className="content-card-error">Contacto</span>
                                </div>
                            </Link>
                        </div>
                        <Link href="/contacto">
                            <div className="card-contacto-error-page contacto-oculto" style={{ backgroundImage: 'url(/assets/Error/img-contacto.png)' }}>
                                <span className="content-card-error">Contacto</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <CotizaAhoraConNosotros />
            </div>
        </div>
    )
}

export default Error;
