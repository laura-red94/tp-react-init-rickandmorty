import  CharacterProvider from "@/contexts/CharactersContext"
import ContenuAPI from "@/component/charactere/charactere"
export default function RickMortyPage(){

    return(
    <CharacterProvider>
        <ContenuAPI/>
    </CharacterProvider>)
}