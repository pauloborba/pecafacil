import {Router, Request, Response, NextFunction} from 'express';
import {LocalEntrega} from '../models/LocalEntrega'
import {Helper} from '../Helper'
import {getConnection, Connection} from "typeorm";

export class LocalEntregaController{

  public async getAll(req: Request, res: Response, next: NextFunction) {
    const connection: Connection = getConnection();
    let locaisEntrega = await connection.manager.find(LocalEntrega);
    res.send(locaisEntrega);
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    let id = req.params.id;
    let repository = getConnection().getRepository(LocalEntrega);
    let localEntrega = await repository.findOneById(id);
    res.send({"LocalEntrega": localEntrega});
  }

  /**
   * Insert Prato.
   */
  public async insert(req: Request, res: Response, next: NextFunction) {
    let localEntrega: LocalEntrega = <LocalEntrega> req.body;
    const connection: Connection = getConnection();
    connection.manager.save(localEntrega).then(u => {
      res.send({"sucesso": true, "LocalEntrega": u.Id});
    }).catch(err => {
      res.send({"sucesso": false});
    });
  }
}
