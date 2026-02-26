export async function getServerSideProps() {
  return {
    redirect: {
      destination:
        "https://www.segurossura.cl/SoapVenta/Cotizador/enviaPaso?rut=76215627&idConvenio=CLUBDELSEGUROMARZO2026",
      permanent: false,
    },
  };
}

export default function Soap() {
  return null;
}