import {Router, Request, Response, NextFunction} from 'express';
import {Pedido} from '../models/Pedido'
import {Helper} from '../Helper'
import {getConnection, Connection} from "typeorm";

export class PedidoController{

  public async getAll(req: Request, res: Response, next: NextFunction) {
    const connection: Connection = getConnection();
    let pedidos = await connection.manager.find(Pedido);
    res.send(pedidos);
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    let id = req.params.id;
    let repository = getConnection().getRepository(Pedido);
    let pedido = await repository.findOneById(id);
    res.send({"Pedido": pedido});
  }

  /**
   * Insert Prato.
   */
  public async insert(req: Request, res: Response, next: NextFunction) {
    let pedido: Pedido = <Pedido> req.body;
    const connection: Connection = getConnection();
    connection.manager.save(pedido).then(u => {
      res.send({"sucesso": true, "Pedido": u.Id});
    }).catch(err => {
      res.send({"sucesso": false});
    });
  }
}
