import { Request, Response } from "express";
import gameNoteModel from "../models/gameNoteModel.js";
import { GameNote } from "../protocols/GameNote.js";
import {
  findAll,
  findById,
  insert,
  remove,
  update,
} from "../repositories/gameNoteRepository.js";

export async function create(req: Request, res: Response) {
  try {
    const gameNote = req.body as GameNote;
    const { error } = gameNoteModel.validate(gameNote, { abortEarly: false });
    if (error) return res.status(422).send(error.details.map((d) => d.message));

    await insert(gameNote);

    return res.sendStatus(201);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Erro ao cadastrar",
      exception: error,
    });
  }
}

export async function list(req: Request, res: Response) {
  try {
    const gameNome: string = req.query.gameNome as string || "";
    return res.send(await findAll(gameNome));
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Erro ao cadastrar",
      exception: error,
    });
  }
}

export async function get(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) return res.status(400).send("id inválido");

    const gameNote = await findById(id);

    if (gameNote.rowCount === 0) return res.sendStatus(404);

    return res.send(gameNote.rows[0]);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Erro ao cadastrar",
      exception: error,
    });
  }
}

export async function modify(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (isNaN(id) || id <= 0) return res.status(400).send("id inválido");

    const newGameNote = req.body as GameNote;
    const { error } = gameNoteModel.validate(newGameNote, {
      abortEarly: false,
    });
    if (error) return res.status(422).send(error.details.map((d) => d.message));

    let gameNote = await findById(id);

    if (gameNote.rowCount === 0) return res.sendStatus(404);

    const updatedGameNote = gameNote.rows[0];
    updatedGameNote.anotacao = newGameNote.anotacao;
    updatedGameNote.nota = newGameNote.nota;
    updatedGameNote.gameNome = newGameNote.gameNome;
    updatedGameNote.terminou = newGameNote.terminou;

    await update(updatedGameNote, id);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Erro ao cadastrar",
      exception: error,
    });
  }
}

export async function del(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) return res.status(400).send("id inválido");

    const gameNote = await findById(id);

    if (gameNote.rowCount === 0) return res.sendStatus(404);

    await remove(id);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Erro ao cadastrar",
      exception: error,
    });
  }
}
