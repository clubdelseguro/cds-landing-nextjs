import Link from "next/link";
import styles from "../../styles/components/TopBar.module.css";

export const TopBar = () => {
  return (
    <div className={styles.containerTopBar}>
      <div className={styles.elementSup}>
        <Link href="/" className={styles.logo}>
          <img
            loading="lazy"
            src="https://cds-img.s3.us-east-1.amazonaws.com/Logo+CDS+2025.png"
            className={styles.logoImg}
            alt="Logo CDS"
          />
        </Link>
        <div className={styles.barNavigation}>
          <div className={styles.barNavigation2}>
            <Link
              href="/"
              className={styles.item}
              style={{
                backgroundColor: "#000000",
                borderRadius: "0px 0px 0px 20px",
              }}
            >
              <span className={styles.link} style={{ color: "#FFFFFF" }}>
                Inicio
              </span>
            </Link>
            <Link
              href="/quienes-somos"
              className={styles.item}
              style={{ backgroundColor: "#000000" }}
            >
              <span className={styles.link} style={{ color: "#FFFFFF" }}>
                Quienes somos
              </span>
            </Link>
            <Link
              href="/seguro-automotriz"
              className={styles.item}
              style={{ backgroundColor: "#000000" }}
            >
              <span className={styles.link} style={{ color: "#FFFFFF" }}>
                Seguro Automotriz
              </span>
            </Link>
            <Link
              href="/blog"
              className={styles.item}
              style={{ backgroundColor: "#000000" }}
            >
              <span className={styles.link} style={{ color: "#FFFFFF" }}>
                Blog
              </span>
            </Link>
            <Link
              href="/ayuda"
              className={styles.item}
              style={{ backgroundColor: "#000000" }}
            >
              <span className={styles.link} style={{ color: "#FFFFFF" }}>
                Ayuda
              </span>
            </Link>
            <div
              className={styles.item}
              style={{ backgroundColor: "#F5F5F5" }}
            >
              <a
                href="https://clubdelseguro.trytoku.com/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
                style={{ color: "#000000" }}
              >
                Pagar Aqui
              </a>
            </div>
            <div className={styles.item2}>
              <a
                href="https://cotizador.clubdelseguro.cl/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
                style={{ color: "#000000" }}
              >
                Cotiza Aqui
              </a>
            </div>
          </div>
          <div className={styles.rrss}>
            <a
              href="https://www.instagram.com/clubdelsegurocl/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                loading="lazy"
                style={{ marginLeft: "16.98px", height: "19.25px" }}
                src="/assets/logo-insta.svg"
                alt="logo insta"
              />
            </a>
            <a
              href="https://www.facebook.com/clubdelseguro.cl/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                loading="lazy"
                style={{ marginLeft: "10.81px", height: "17px" }}
                src="/assets/logo-fb.svg"
                alt="logo fb"
              />
            </a>
           {/*  <a
              href="https://twitter.com/Club_Del_Seguro"
              target="_blank"
              rel="noreferrer"
            >
              <img
                loading="lazy"
                style={{ marginLeft: "12.27px", height: "16.5px" }}
                src="/assets/logo-twiter.svg"
                alt="logo twiter"
              />
            </a> */}
            <a
              className="rrss-a"
              href="tel:+6003001919"
              style={{
                marginLeft: "11.1px",
                marginRight: "14.92px",
                height: "17px",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "12px",
                lineHeight: "14px",
                textDecoration: "none",
                color: "#000000",
              }}
            >
              <img
                loading="lazy"
                style={{ height: "17px" }}
                src="/assets/logo-phone.svg"
                alt="logo phone"
              />
              <span style={{ marginLeft: "14px" }}>6003001919</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
