import './style.css'
interface Video{
    id:number;
    nome:string;
    thumb:string;
    description:string;
    date:string;
    url:string;
    type:string
}
export const ModalVideo = ({ Card , setModalOpen}: { Card: Video | undefined , setModalOpen: React.Dispatch<React.SetStateAction<boolean>> | undefined } )=>{
    
    return (
        <div className='ModalCard'>
                <div className='CardModal'>
                    <div className='close'><img onClick={()=> setModalOpen && setModalOpen(false)} src='../../img/x.svg'/></div>
                    <div className='ModalHeader'>
                    <h2><span>Webinar:</span>
                   Como aumentar sua Gerção de Leads feat.Traktor</h2>
                    </div>
                    <div  className='ModalMain'>
                    <iframe width="100%" height="280" src={`https://www.youtube.com/embed/${Card?.url}`} ></iframe>
                    </div>
                    <div className='ModalFooter'>
                        
                        <h4>Descrição</h4>
                        <p>{Card?.description}</p>
                        <h4>Downloads</h4>
                        <div className='buttonsDownloads'>
                            <button className='spreadsheetButton'>Spreadsheet.slx</button>
                            <button className='documentButton'>Dcoument.doc</button>
                            <button className='presentationButton'>Presentation.ppt</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}