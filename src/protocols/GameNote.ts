export type GameNoteEntity = {
    id: number, 
    gameNome: string,
    terminou: boolean,
    anotacao: string,
    nota: number
}
export type GameNote = Omit<GameNoteEntity, "id">
