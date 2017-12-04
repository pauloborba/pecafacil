import {Router, Request, Response, NextFunction} from 'express';
import {Prato} from '../models/Prato'
import {Helper} from '../Helper'
import {getConnection, Connection} from "typeorm";

export class PratoController{

  public async getAll(req: Request, res: Response, next: NextFunction) {
    const connection: Connection = getConnection();
    let pratos = await connection.manager.find(Prato, req.query);
    res.send(pratos);
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    let id = req.params.id;
    let repository = getConnection().getRepository(Prato);
    let prato = await repository.findOneById(id);
    res.send({"Prato": prato});
  }

  /**
   * Insert Prato.
   */
  public async insert(req: Request, res: Response, next: NextFunction) {
    let prato: Prato = <Prato> req.body;
    const connection: Connection = getConnection();
    connection.manager.save(prato).then(u => {
      res.send({"sucesso": true, "Prato": u.Id});
    }).catch(err => {
      res.send({"sucesso": false});
    });
  }
}
