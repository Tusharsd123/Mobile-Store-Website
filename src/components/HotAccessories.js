import React from 'react'
import HotItemCard from './HotItemCard'
import '../styles/HotAccessories.css'

const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,Home,HomeCover,Lifestyle,LifestyleCover,MobileAccessories,MobileAccessoriesCover}) => {
    return (
        <div className="HotAccessories">
            <div>
                <img src={musicCover || smartDeviceCover || HomeCover || LifestyleCover || MobileAccessoriesCover} alt="cover" />
            </div>
            <div>
                {music && music.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}
                 {smartDevice && smartDevice.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}
                {Home && Home.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}
                {Lifestyle && Lifestyle.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}
                {MobileAccessories && MobileAccessories.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}
            </div>
        </div>
    )
}

export default HotAccessories
