import PlayerCard from "@/components/player/PlayerCard"

const testPlayer = {
  name: "Ronaldo",
  position: "Striker",
  team: "Manchester United",
  image: '/assets/test/test-player.jpg'
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between lg:px-24 py-2 lg:py-7">
      <div className="flex flex-col justify-center items-center w-full pt-3">
        <div className="hero_banner flex justify-center items-center h-32 w-full lg:w-2/3 bg-indigo-500 rounded-lg">
          <h1 className="font-porter text-heading3-normal text-light-2 text-center">XIANS' PREMIER LEAGUE 2023</h1>
        </div>
        

        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 lg:gap-4 mt-4">
          <PlayerCard player={testPlayer} />
          <PlayerCard player={testPlayer} />
          <PlayerCard player={testPlayer} />
          <PlayerCard player={testPlayer} />
          <PlayerCard player={testPlayer} />
          <PlayerCard player={testPlayer} />
          <PlayerCard player={testPlayer} />
          <PlayerCard player={testPlayer} />



        </div>
      </div>
      
    </div>
  )
}
