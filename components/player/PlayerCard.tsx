import Image from "next/image";

type Player = {
    name: string;
    position: string;
    team: string;
    image: string;
};

function PlayerCard({ player }: { player: Player }) {
    const { name, position, team, image } = player;
    
    return (
        <div className="flex flex-col justify-center items-center bg-dark-2 rounded-lg w-28 lg:w-44 border border-indigo-500 overflow-hidden">
            <div className="w-full flex justify-center ">
                <div className="flex justify-center my-1 pt-2 h-16 lg:h-28 w-16 lg:w-28 relative rounded-full border border-indigo-500">
                    <Image className="rounded-full" src={image} alt={name} fill={true} objectFit="cover" />
                </div>
            </div>
            
            <div className="w-full flex flex-col justify-center text-center text-light-2 font-radley">
                <div className="text-subtle-semibold lg:text-body-normal mb-2">Yasith Fernando</div>
                <div className="text-subtle-medium lg:text-body-normal py-1 bg-dark-2 px-1">
                    <div className="flex justify-between">
                        <span>Batting</span>
                        <span>80</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Bowling</span>
                        <span>80</span>
                    </div>
                </div>
                

            </div>
            <div className="p-1 w-full text-center bg-indigo-500">
                <h2 className="text-heading3-bold text-light-2">75000</h2>
            </div>
        </div>
    );
    }

export default PlayerCard;