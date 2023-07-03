import { VideosContainer } from '@/components/Main'
import './page.css'


export default function Home() {

  return (
    <>
    <div className="container">
      <div className="section">
          <button>WEBINARS EXCLUSIVO</button>
          <h2>Menos Conversinha,</h2>
          <h1>Mais Conversão</h1>
          <img src='../img/asset-header.png' alt='efeito'/>
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
                    <img src="../img/selo_RD.png" alt="" />
                  </div>
                  <div className='Coteudotwo'>
                    
                    <img src="../img/no-card-dark.webp" alt="" />
                    <p className='borda'>Não é necessario Cartão de Crédito</p>
                    <img src="../img/rating.webp" alt="" />
                    <p>4.9/5 media de satisfação</p>
                  </div>
            </div>
        </div>
        <div className='sectionTwo'>

        </div>
    </div>
    </>
  )
}
