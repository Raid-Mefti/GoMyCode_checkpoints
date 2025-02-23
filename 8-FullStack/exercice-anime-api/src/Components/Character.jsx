import { Img } from "react-image";

export default function Character({ character }) {
    return (
        <div className="flex flex-col p-4 border  ">
            <Img
                className="w-[300px] h-[300px]"
                src={[
                    ...character.images,
                    "https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_640.jpg",
                ]}
                alt={character.name}
            />
            <div className="flex justify-center items-center font-bold">
                <p>{character.name}</p>
            </div>
        </div>
    );
}
