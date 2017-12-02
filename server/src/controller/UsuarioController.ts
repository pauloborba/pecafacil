import {Router, Request, Response, NextFunction} from 'express';

export class UsuarioController {
    /**
   * GET all Heroes.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send([{Nome: "Item 1", Descricao: "Uma descrição"}]);
  }
}