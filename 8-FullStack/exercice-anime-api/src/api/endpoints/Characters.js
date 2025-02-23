import { myAPIConfig } from "../axiosConfig";

export async function getAllCharacters({ page, limit }) {
    const searchParams = new URLSearchParams({
        page,
        limit,
    });
    return (await myAPIConfig.get("/character?" + searchParams.toString()))
        .data;
}

export async function getCharacterById(id) {
    return (await myAPIConfig.get("/character/" + id)).data;
}

export async function getCharacterByName() {
    return (await myAPIConfig.get(`/character/search?name=${name}`)).data;
}
