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
    </>
  )
}
