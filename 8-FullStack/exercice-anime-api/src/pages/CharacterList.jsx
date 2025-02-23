import { getAllCharacters } from "../api/endpoints/Characters";
import { useQuery } from "@tanstack/react-query";
import Error from "../Components/Error";
import Character from "../Components/Character";
import { useState } from "react";

function generatePagination(currentPage, pageTotalNumber) {
    if (pageTotalNumber <= 1) return [1];
    if (pageTotalNumber <= 7)
        return Array.from({ length: pageTotalNumber }, (_, i) => i + 1);

    if (currentPage <= 4) return [1, 2, 3, 4, 5, "...", pageTotalNumber];
    if (currentPage > pageTotalNumber - 5)
        return [
            1,
            "...",
            pageTotalNumber - 4,
            pageTotalNumber - 3,
            pageTotalNumber - 2,
            pageTotalNumber - 1,
            pageTotalNumber,
        ];

    return [
        1,
        "...",
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
        "...",
        pageTotalNumber,
    ];
}

function CharacterList() {
    const [page, setPage] = useState(1);
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["characters", page],
        queryFn: () => getAllCharacters({ page }),
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <Error error={error} />;

    const pageTotalNumber = Math.ceil(data.totalCharacters / data.pageSize);
    const Pages = generatePagination(page, pageTotalNumber);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl">All characters</h1>
            </div>
            <ul className="flex flex-wrap gap-10 justify-center">
                {data.characters.map((char) => (
                    <li key={char.id}>
                        <Character character={char} />
                    </li>
                ))}
            </ul>
            <div className="join">
                <button
                    className="btn join-item"
                    onClick={() => {
                        setPage((p) => p - 1);
                    }}
                    disabled={page === 1}
                >
                    {"<"}
                </button>
                {Pages.map((a) => (
                    <button
                        className={
                            "btn join-item " + (a === page ? "font-black" : "")
                        }
                        key={a}
                        onClick={() => {
                            setPage(a);
                        }}
                        disabled={a === "..."}
                    >
                        {a}
                    </button>
                ))}
                <button
                    className="btn join-item"
                    onClick={() => {
                        setPage((p) => p + 1);
                    }}
                    disabled={page === pageTotalNumber}
                >
                    {">"}
                </button>
            </div>
        </div>
    );
}

export default CharacterList;
