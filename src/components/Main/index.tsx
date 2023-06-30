'use client'
import { useEffect, useState } from 'react'
import './style.css'
import { videos } from '../../../videos'
interface arrayVideo{
    id:number;
    nome:string;
    thumb:string;
    url:string;
    type:string
}
export const VideosContainer=()=>{
    //console.log(videos)
    const [ButtonSelect, setButtonSelect] = useState('Agência');
    const [arrayVideo] = useState(videos);
    const [arrayFilter, setArrayFilter] = useState<arrayVideo[]>([]);
    
    const OrdernarVideos= (tipo:string)=>{
        setButtonSelect(tipo)
        setArrayFilter(arrayVideo.filter(values=> values.type === tipo))
    }
    useEffect(()=>{
        console.log('oi')
        setArrayFilter(arrayVideo)
        Pages(9)
    },[arrayVideo])
    const Pages = (number:number)=>{
        console.log('ola')
        
        console.log(number)
        setArrayFilter(arrayVideo.slice(number-9,number))
        
    
        setButtonSelect('')
    }
   
    let number= 0
    
    return (
        <div className="ContainerMain">
            <div className="Main">
                <div className="HeaderMain">
                    <div className='ButtonsHeader'>
                    <button onClick={()=> OrdernarVideos('Agência')} 
                    style={{
                        backgroundColor: ButtonSelect === 'Agência' ? '#1E90FF' : '',
                        border: ButtonSelect === 'Agência' ? '1px solid #1E90FF' : '',
                        color: ButtonSelect === 'Agência' ? 'white' : ''
                    }}
                        >Agência</button>
                    <button onClick={()=> OrdernarVideos('ChatBot')} 
                    style={{
                        backgroundColor:ButtonSelect==='ChatBot'? '#1E90FF':'',
                        border: ButtonSelect === 'ChatBot' ? '1px solid #1E90FF' : '',
                        color: ButtonSelect === 'ChatBot' ? 'white' : ''
                    }}>ChatBot</button>
                    <button onClick={()=> OrdernarVideos('Marketing')} style={{
                        backgroundColor:ButtonSelect==='Marketing'? '#1E90FF':'',
                        border: ButtonSelect === 'Marketing' ? '1px solid #1E90FF' : '',
                        color: ButtonSelect === 'Marketing' ? 'white' : ''
                        }}>Marketing Digital</button>
                    <button onClick={()=> OrdernarVideos('Geração')} style={{
                        backgroundColor:ButtonSelect==='Geração'? '#1E90FF':'',
                        border: ButtonSelect === 'Geração' ? '1px solid #1E90FF' : '',
                        color: ButtonSelect === 'Geração' ? 'white' : ''
                        }}>Geração de leads</button>
                    <button onClick={()=> OrdernarVideos('Midia')} style={{
                        backgroundColor:ButtonSelect==='Midia'? '#1E90FF':'',
                        border: ButtonSelect === 'Midia' ? '1px solid #1E90FF' : '',
                        color: ButtonSelect === 'Midia' ? 'white' : ''
                        }}>Midia Paga</button>
                    </div>

                    <div>
                        <p>
                            ordenar por:
                        </p>

                    </div>
                </div>
                <div className="BodyMain">
                        <div className='MainCards'>
                            {arrayFilter?.map(values =>(
                                <div key={values.id} className='cards'>
                                    <div className='hoverImg'></div>
                                    <img src='../../img/thumbnail.png' alt=''/>
                                    <p>{values.nome}</p>
                                </div>

                            ))}
                           

                        </div>
                        <div className='Pages'>
                                {arrayVideo.map((values, i)=>{
                                    
                                    if(i%9===0){
                                        number++;
                                        if(i===0){
                                            return (<button onClick={()=>Pages(9)}>Page inicial</button>)
                                        }
                                        /*if()*/
                                        return (<button  onClick={()=> Pages(i+9)}>{number - 1}</button>)
                                    }
                                  
                                    
                                })}
                                

                            
                         
                        </div>

                </div>
               
            </div>
        </div>
    )
}