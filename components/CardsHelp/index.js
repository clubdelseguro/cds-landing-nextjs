import Link from 'next/link';

export const CardsHelp = () => {
    return (
        <div className="root-cards-help">
            <div className="cards-help">

                <Link href="/asistencias">
                    <div className="card-help card-help-title asistencia-img">
                        <span>Asistencias</span>
                    </div>
                </Link>
                <Link href="/faq">
                    <div className="card-help card-help-title faq-img" >
                        <span>Preguntas Frecuentes</span>
                    </div>
                </Link>
            </div>
            <Link href="/contacto">
                <div className="card-contacto-help card-help-title contacto-img">
                    <span>Contacto</span>
                </div>
            </Link>
        </div>
    )
}