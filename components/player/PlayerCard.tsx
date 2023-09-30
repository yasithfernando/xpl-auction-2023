import Image from "next/image";
import cardBackground from "../../public/assets/backgrounds/99x-backdrop.jpg"
import priceBackground from "../../public/assets/backgrounds/price-back.jpg"
import priceBackgroundFlip from "../../public/assets/backgrounds/price-back-flip.jpg"
import { Player } from "@/lib/models/player.model";

function PlayerCard({ player }: { player: Player }) {
    const { name, base_price, batting_level, bowling_level, batting_style, bowling_style, category, gender, tier,user_id } = player;
    
    return (
        <div className="flex flex-col justify-center items-center bg-dark-2 rounded-lg w-28 lg:w-44 overflow-hidden">
            <div style={{backgroundImage:`url(${cardBackground.src})`, backgroundSize: 'cover', backgroundPosition:'center'}}
            className="w-full flex justify-between">
                <div className="flex flex-col text-center h-full w-6 lg:w-8 text-light-2 text-subtle-semibold font-radley">
                    <div className="w-full bg-logout-btn text-body-normal lg:text-heading3-bold">
                        <span>{batting_level}</span>
                    </div>
                    <div className="w-full bg-logout-btn rounded-br-lg">
                        <span>{category}</span>
                    </div>
                </div>
                <div className="flex justify-center my-1 pt-2 h-14 lg:h-24 w-14 lg:w-24 relative rounded-full border">
                    <Image className="rounded-full" src={'/assets/test/test-player.jpg'} alt={name ? name : ""} fill={true} objectFit="cover" />
                </div>
                <div className="flex flex-col justify-center h-full w-6 lg:w-8">
                    
                </div>
            </div>
            
            <div style={{backgroundImage:`url(${priceBackgroundFlip.src})`, backgroundSize: 'cover', backgroundPosition:'center'}}
            className="w-full flex flex-col justify-center text-center text-light-2 font-radley">
                <div className="text-body2-normal lg:text-body-normal">{name}</div>
                <div className="flex flex-row justify-evenly text-subtle-medium lg:text-body-normal py-1 px-1">
                    <div className="flex justify-between gap-2">
                        <span>BAT</span>
                        <span>{batting_level}</span>
                    </div>
                    <div className="w-px h-full bg-light-1"></div>
                    <div className="flex justify-between gap-2">
                        <span>BOW</span>
                        <span>{bowling_level}</span>
                    </div>
                </div>
                

            </div>
            <div style={{backgroundImage:`url(${priceBackground.src})`, backgroundSize: 'cover', backgroundPosition:'center'}}
            className="w-full text-center bg-logo-blue">
                <h2 className="font-radley text-heading2-normal text-light-2">{base_price}</h2>
            </div>
        </div>
    );
    }

export default PlayerCard;