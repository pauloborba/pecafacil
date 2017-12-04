import {Router, Request, Response, NextFunction} from 'express';
import {Item} from '../models/Item'
import {Helper} from '../Helper'
import {getConnection, Connection} from "typeorm";

export class ItemController{

  public async getAll(req: Request, res: Response, next: NextFunction) {
    const connection: Connection = getConnection();
    let itens = await connection.manager.find(Item, req.query);
    res.send(itens);
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    let id = req.params.id;
    let repository = getConnection().getRepository(Item);
    let item = await repository.findOneById(id);
    res.send({"Item": item});
  }

  /**
   * Insert Prato.
   */
  public async insert(req: Request, res: Response, next: NextFunction) {
    let item: Item = <Item> req.body;
    const connection: Connection = getConnection();
    connection.manager.save(item).then(u => {
      res.send({"sucesso": true, "Item": u.Id});
    }).catch(err => {
      res.send({"sucesso": false});
    });
  }
}
