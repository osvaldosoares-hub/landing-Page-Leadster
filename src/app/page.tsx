import { VideosContainer } from '@/components/Main'
import './page.css'


export default function Home() {

  return (
    <>
    <div className="container">
      <div className="section">
          <button>WEBINARS EXCLUSIVO</button>
          <h2>Menos Conversinha,</h2>
          <h1>Mais Conversão<img src='../img/asset-header.png' alt='efeito'/></h1>
          
          <div className="borda"></div>
          <p>Conheça as estratégias que mudaram o jogo e como aplica-las no seu negócio</p>
      </div>
    </div>
    <VideosContainer/>
    <div className='containerFooter'> 
        <div className='sectionOne'>
            <img className='comparativo' src="../img/comparativo_img_CTA.png" alt="" />
            <div className='conteudo'>
                  <div className='titulo'>
                  <h1>Pronto para triplica sua Geração de Leads?</h1>
                  <p>Criação e ativação em 4 minutos</p>
                  </div>
                  <div className='Coteudoone'>
                    <button>VER DEMOSTRAÇÃO</button>
                    <img src="../img/selo_RD.png" alt="selo_RD" />
                  </div>
                  <div className='Coteudotwo'>
                    
                    <img src="../img/no-card-dark.webp" alt="" />
                    <p className='borda'>Não é necessario Cartão de Crédito</p>
                    <img src="../img/rating.webp" alt="rating" />
                    <p>4.9/5 media de satisfação</p>
                  </div>
            </div>
        </div>
        <div className='divisor'>
        <img src='../img/logo.png' alt='logo'/>
        <p>Transformando visitantes em clientes.</p>
        </div>
        <div className='Footer'>
        
            <div className='lista'>
              <h3>Links Principais</h3>
              <p>Home</p>
              <p>Ferramenta</p>
              <p>Preços</p>
              <p>Contato</p>
            </div>
            <div className='lista'>
              <h3>Case</h3>
              <p>Geração de leads B2B</p>
              <p>Geração de leads em Software</p>
              <p>Geração de leads em Imobiliaria</p>
              <p>Cases de Sucesso</p>
            </div>
            <div className='lista'>
              <h3>Materiais</h3>
              <p>Blog</p>
              <p>Parecerias com Agenciaas</p>
              <p>Guia definitivo do Marketing</p>
              <p>Materiais Gratuitos</p>
            </div>
            <div className='lista'>
              <h3>Siga a Leadster</h3>
              <img src='../img/linkedin.svg' alt='linkedin'/>
              <img src='../img/facebook.svg' alt='facebook'/>
              <img src='../img/instagram.svg' alt='instagram'/>
              <p className='email'><span>E-mail:</span> osvaldo.jrjuniorlinhares@gmail.com</p>
              <p><span>Telefone:</span> (88) 993443238</p>
            </div>
        </div>
    </div>
    </>
  )
}
