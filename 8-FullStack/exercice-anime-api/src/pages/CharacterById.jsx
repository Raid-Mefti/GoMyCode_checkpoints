import { getCharacterById } from "../api/endpoints/Characters";
import { useQuery } from "@tanstack/react-query";
import Error from "../Components/Error";
import Character from "../Components/Character";
import { useSearchParams } from "react-router-dom";

function Search() {
    const [searchParams] = useSearchParams();
    const character = searchParams.get("character");
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["character", character],
        queryFn: () => getCharacterById(character),
    });

    if (isLoading)
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    if (isError) return <Error error={error} />;

    return (
        <div>
            <Character character={data} />
        </div>
    );
}

export default Search;
