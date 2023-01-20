import { QueryResult } from "pg";
import ConnectDb from "../db.js";
import { GameNote, GameNoteEntity } from "../protocols/GameNote";
const con = await ConnectDb();

export async function findAll(name: string) {
  return (await con.query(`SELECT * FROM game_note WHERE "gameNome" LIKE $1 OR "gameNome" = ''`, [`${name}%`])).rows as GameNoteEntity[];
}

export async function insert(GameNote: GameNote) {
  await con.query(`INSERT INTO game_note VALUES(DEFAULT, $1, $2, $3, $4 )`, [
    GameNote.gameNome,
    GameNote.terminou,
    GameNote.anotacao,
    GameNote.nota,
  ]);
}

export async function update(
  GameNote: GameNoteEntity,
  id: number
): Promise<QueryResult<GameNoteEntity>> {
  return await con.query(
    `UPDATE game_note SET "gameNome" = $1, terminou = $2, anotacao = $3, nota = $4 WHERE id = $5`,
    [GameNote.gameNome, GameNote.terminou, GameNote.anotacao, GameNote.nota, id]
  );
}

export async function findById(
  id: number
): Promise<QueryResult<GameNoteEntity>> {
  const teste = await con.query(`SELECT * FROM game_note WHERE id = $1`, [id]);
  return teste;
}

export async function remove(id: number): Promise<QueryResult<GameNoteEntity>> {
  return await con.query(`DELETE FROM game_note WHERE id = $1`, [id]);
}
