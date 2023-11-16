import React from 'react'
import { Link } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './sobre-mi.css'

const SobreMi = (props) => {
  return (
    <div className="sobre-mi-container">
      <Helmet>
        <title>Sobre-mi - APE Experience</title>
        <meta property="og:title" content="Sobre-mi - APE Experience" />
      </Helmet>
      <div className="sobre-mi-header">
        <header data-thq="thq-navbar" className="sobre-mi-navbar">
          <Link to="/" className="sobre-mi-navlink">
            <img
              alt="APE Experience"
              src="/Material web/logo-optimizado-200h.png"
              className="sobre-mi-image"
            />
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="sobre-mi-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="sobre-mi-nav"
            >
              <Link to="/" className="sobre-mi-link navLink">
                Inicio
              </Link>
              <Link to="/sobre-mi" className="sobre-mi-link1 navLink">
                Sobre mi
              </Link>
              <Link to="/servicios" className="sobre-mi-link2 navLink">
                Servicios
              </Link>
              <span className="sobre-mi-link3 navLink">Proyectos</span>
              <span className="sobre-mi-link4 navLink">Blog</span>
              <span className="sobre-mi-link5 navLink">Contacto</span>
            </nav>
            <button className="button sobre-mi-register">
              <span className="sobre-mi-text">
                <span>Solicitar </span>
                <br></br>
              </span>
              <svg viewBox="0 0 1024 1024" className="sobre-mi-icon">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="sobre-mi-burger-menu">
            <svg viewBox="0 0 1024 1024" className="sobre-mi-icon02">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="sobre-mi-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="sobre-mi-nav1"
            >
              <div className="sobre-mi-container01">
                <h2 className="sobre-mi-text03">OnConf</h2>
                <div data-thq="thq-close-menu" className="sobre-mi-menu-close">
                  <svg viewBox="0 0 1024 1024" className="sobre-mi-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="sobre-mi-nav2"
              >
                <span className="navLink sobre-mi-text04">About</span>
                <span className="navLink sobre-mi-text05">Features</span>
                <span className="navLink sobre-mi-text06">Pricing</span>
                <span className="navLink sobre-mi-text07">Team</span>
                <span className="navLink sobre-mi-text08">Blog</span>
              </nav>
              <div className="sobre-mi-button-container">
                <button className="sobre-mi-login button">Login</button>
                <button className="button sobre-mi-register1">Register</button>
              </div>
              <div className="sobre-mi-icon-group">
                <div className="sobre-mi-icons">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="sobre-mi-icon06"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="sobre-mi-icon08"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="sobre-mi-icon10"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/quote-background.svg"
              className="sobre-mi-background"
            />
          </div>
        </header>
      </div>
      <div className="sobre-mi-container02">
        <div className="sobre-mi-container03">
          <div className="sobre-mi-container04">
            <img
              alt="image"
              src="/Material web/ape-experience-adrian-foto-ejemplo-700w.jpg"
              className="sobre-mi-image1"
            />
          </div>
          <div className="sobre-mi-container05">
            <h1 className="sobre-mi-text09">Sobre mi</h1>
            <span className="sobre-mi-text10">
              <span>
                Saludos, mi nombre es Adrian Ojeda, un apasionado del desarrollo
                web desde temprana edad.
              </span>
              <br></br>
              <span>
                Con más de 5 años de experiencia laboral en el diseño y
                optimización SEO de páginas web, así 
              </span>
              <span>
                como en la gestión de redes sociales, tengo un firme dominio de
                lenguajes de programación 
              </span>
              <span>
                como HTML, CSS, PHP y JavaScript. Además, cuento con amplios
                conocimientos en el uso de 
              </span>
              <span>
                herramientas como Adobe Photoshop, Illustrator, After Effects y
                Premiere.
              </span>
              <br></br>
              <br></br>
              <span>
                Mi trayectoria académica incluye estudios en el Colegio La
                Epifanía en Maracaibo, y sigo en 
              </span>
              <span>
                constante búsqueda de conocimientos para mejorar continuamente.
                Desde los 12 años, tuve 
              </span>
              <span>
                un fuerte vínculo con la programación web y el diseño, fascinado
                por cómo las páginas web 
              </span>
              <span>
                transmiten emociones a través de su atractiva composición de
                colores y presentación. Siempre 
              </span>
              <span>
                he aprendido a través del método de prueba y error, y he
                adquirido habilidades para construir 
              </span>
              <span>
                y reconstruir sitios web según mis propias preferencias.
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div className="sobre-mi-container06">
        <div className="sobre-mi-container07">
          <h1 className="sobre-mi-text26">¿Qué busco como Diseñador Web?</h1>
          <span className="sobre-mi-text27">
            <span>
              Mi mayor objetivo como Diseñador Web siempre ha sido ayudar a
              otros a alcanzar sus metas y contribuir al mundo digital de manera
              significativa. Comencé mi trayectoria en la agencia de publicidad
              Bgcreativos a los 18 años, recién graduado de bachillerato, donde
              perfeccioné mis habilidades como diseñador. Más allá de ser un
              simple empleo, esta experiencia se convirtió en mi universidad de
              la vida, donde actualmente sigo comprometido con ellos y
              desarrollo mi crecimiento profesional en el diseño web.
            </span>
            <br></br>
            <br></br>
            <span>
              Aparte de mi experiencia laboral, he buscado ampliar mi
              conocimiento académico a través de diversos cursos. He obtenido
              distintas perspectivas en el desarrollo y diseño de páginas web
              gracias a cursos de Marketing Digital en Google Learn y de Diseño
              Gráfico en la Universidad de URBE en mi país. Sin embargo, no
              puedo negar que mi mayor &quot;universidad&quot; ha sido
              Bgcreativos.
            </span>
            <br></br>
          </span>
        </div>
        <div className="sobre-mi-container08">
          <div className="sobre-mi-video">
            <video
              src
              muted
              poster="/quotes-1-800w.png"
              autoPlay
              controls
              className="sobre-mi-video1"
            ></video>
          </div>
        </div>
      </div>
      <div className="sobre-mi-container09">
        <Player
          src="https://lottie.host/45dd0d05-d843-4244-bf4d-358da7f04713/z8I1SKW3aK.json"
          loop
          speed="1"
          autoplay
          background="transparent"
          className="sobre-mi-lottie-node"
        ></Player>
      </div>
      <div className="sobre-mi-container10">
        <div className="sobre-mi-container11">
          <Player
            src="https://lottie.host/155c8faf-8b48-4ef6-9d07-69f51e13aac5/cCehkQsT2x.json"
            loop
            speed="2"
            autoplay
            background="transparent"
            className="sobre-mi-lottie-node1"
          ></Player>
        </div>
        <div className="sobre-mi-container12">
          <h1 className="sobre-mi-text33">
            <span>¿Qué ofrece APE?</span>
            <br></br>
          </h1>
          <span className="sobre-mi-text36">
            <span>
              Siempre me mantengo actualizado con las últimas tendencias en
              Diseño Web y, gracias a mi experiencia adquirida, decidí mostrar
              mis habilidades a través de una marca personal que no solo ofrece
              servicios para empresas, sino que también brinda oportunidades a
              emprendedores para impulsarse en el mundo digital. Así nació APE
              Experience, una hermosa experiencia que reúne mis iniciales
              (Adrian Pineda Enrique) y representa mi experiencia en el campo
              del diseño web.
            </span>
            <br></br>
            <br></br>
            <span>
              Actualmente, muchas empresas buscan desarrollar páginas web para
              aumentar la credibilidad 
            </span>
            <span>
              de su marca. Sin embargo, no aprovechan al máximo los beneficios
              que una página web puede 
            </span>
            <span>
              ofrecer. La clave está en lograr un posicionamiento sólido en el
              mercado y establecer 
            </span>
            <span>
              conexiones sólidas de empresa a cliente. Esto es exactamente lo
              que APE Experience ofrece: 
            </span>
            <span>
              una página web ideal para llevar tu marca a las estrellas.
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="sobre-mi-container13">
        <div className="sobre-mi-container14">
          <h1 className="sobre-mi-text46">
            <span>
              Para concluir, me gustaría compartir una frase que siempre
              mantengo en mente al realizar mi 
            </span>
            <span>
              trabajo: &quot;Haz lo que mejor se adapte a tu presencia&quot;
            </span>
            <br></br>
            <span>- Adrian Ojeda, 2023.</span>
          </h1>
        </div>
        <div className="sobre-mi-container15">
          <Player
            src="https://lottie.host/d425ea44-5f2c-4de9-8a42-d4c7dcb31560/KAj5CELGpU.json"
            speed="1"
            autoplay
            background="transparent"
            className="sobre-mi-lottie-node2"
          ></Player>
        </div>
      </div>
      <footer className="sobre-mi-footer">
        <div className="sobre-mi-content">
          <div className="sobre-mi-details">
            <Link to="/" className="sobre-mi-navlink1">
              <img
                alt="APE Experience Pié de Página Logo Negro"
                src="/Material web/logo-optimizado-200h.png"
                className="sobre-mi-image2"
              />
            </Link>
            <p className="sobre-mi-description">
              Soluciones a medida para crear tu sitio web profesional, atractivo
              y funcional con la tecnología más actualizada totalmente a tu
              alcance.
            </p>
          </div>
        </div>
        <div className="sobre-mi-content1">
          <div className="sobre-mi-details1">
            <span className="sobre-mi-text51">Navegación</span>
            <span className="sobre-mi-text52 a.link">
              <Link to="/" className="sobre-mi-navlink2">
                Inicio
              </Link>
              <br></br>
            </span>
            <span className="sobre-mi-text54 a.link">Sobre mi</span>
            <span className="sobre-mi-text55 a.link">Servicios</span>
            <span className="sobre-mi-text56 a.link">Proyectos</span>
            <span className="sobre-mi-text57 a.link">Blog</span>
            <span className="sobre-mi-text58 a.link">Contacto</span>
          </div>
          <div className="sobre-mi-socials">
            <a
              href="https://instagram.com/ape_experience/"
              target="_blank"
              rel="noreferrer noopener"
              className="sobre-mi-link6"
            >
              <img
                alt="Instagram APE Experience"
                src="/instagram.svg"
                className="sobre-mi-image3 social"
              />
            </a>
            <a
              href="https://facebook.com/apeexperienceve/"
              target="_blank"
              rel="noreferrer noopener"
              className="sobre-mi-link7"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="sobre-mi-icon12 social"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
            <a
              href="https://threads.com/ape_experience/"
              target="_blank"
              rel="noreferrer noopener"
              className="sobre-mi-link8"
            >
              <img
                alt="Threads APE Experience"
                src="/Material web/threads-200h.png"
                className="sobre-mi-image4 social"
              />
            </a>
          </div>
          <span className="sobre-mi-copyright">
            Política de Privacidad — Términos y Condiciones — Cookies © 2023
            Derechos reservados por APE Experience.
          </span>
        </div>
      </footer>
      <div>
        <div className="sobre-mi-container17">
          <Script
            html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="sobre-mi-container19">
          <Script
            html={`<style>
#scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#scrollbar::-webkit-scrollbar
{
	height: 12px;
	background-color: #F5F5F5;
	border-radius: 10px;
}

#scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default SobreMi
