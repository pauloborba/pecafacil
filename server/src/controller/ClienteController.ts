import {Router, Request, Response, NextFunction} from 'express';
import {Cliente} from '../models/Cliente'
import {Helper} from '../Helper'
import {getConnection, Connection} from "typeorm";

export class ClienteController{

  public async getAll(req: Request, res: Response, next: NextFunction) {
    const connection: Connection = getConnection();
    let clientes = await connection.manager.find(Cliente);
    res.send(clientes);
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    let id = req.params.id;
    let repository = getConnection().getRepository(Cliente);
    let cliente = await repository.findOneById(id);
    res.send({"Cliente": cliente});
  }

  /**
   * Insert Prato.
   */
  public async insert(req: Request, res: Response, next: NextFunction) {
    let cliente: Cliente = <Cliente> req.body;
    const connection: Connection = getConnection();
    connection.manager.save(cliente).then(u => {
      res.send({"sucesso": true, "Cliente": u.Id});
    }).catch(err => {
      res.send({"sucesso": false});
    });
  }
}
