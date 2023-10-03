
import PlayerCard from "@/components/player/PlayerCard"
import hero from "@/public/assets/backgrounds/hero.png"
import Countdown from "@/components/shared/Countdown"
import { getPlayers } from "@/lib/actions/player.actions"

export default async function Home() {

  console.log("Hello World");

  const {data,error,status} = await getPlayers();


  return (
    <div className="flex min-h-screen flex-col lg:px-24 py-2 lg:py-7">
      <div className="flex flex-col justify-center items-center w-full pt-3">
        <div 
        style={{backgroundImage:`url(${hero.src})`, backgroundSize: 'cover', backgroundPosition:'center'}} 
        className="hero_banner flex justify-center items-center h-32 lg:h-40 w-full lg:w-2/3 bg-logo-blue rounded-lg" >
          <div className="w-full h-full bg-gradient-to-t from-indigo-950 via-transparent relative">
            <div className="absolute inset-x-0 bottom-0 py-2 text-center">
              <Countdown />
              <span className="text-light-2 font-radley text-subtle-medium lg:text-body-medium">Register now for XPL Auction</span>
            </div>

          </div>
          {/* <Image src="/assets/backgrounds/hero.png" alt="XPL 2023" fill={true} objectFit="cover" className="rounded-lg" /> */}
        </div>
        
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-6 lg:gap-4 mt-4">
          {data?.map((player) => (
            <PlayerCard key={player.player_id} player={player} />
          ))}
        </div>
      </div>
      
    </div>
  )
}
