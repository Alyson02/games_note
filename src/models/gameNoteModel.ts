import Joi from "joi";

const gameNoteModel = Joi.object({
  gameNome: Joi.string().required(),
  terminou: Joi.bool().default(false),
  anotacao: Joi.string().allow("").optional(),
  nota: Joi.number().max(10).min(0).required(),
});

export default gameNoteModel;
