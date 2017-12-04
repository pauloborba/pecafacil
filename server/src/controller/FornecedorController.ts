import {Router, Request, Response, NextFunction} from 'express';
import {Fornecedor} from '../models/Fornecedor'
import {Helper} from '../Helper'
import {getConnection, Connection} from "typeorm";

export class FornecedorController{

  public async getAll(req: Request, res: Response, next: NextFunction) {
    const connection: Connection = getConnection();
    let fornecedores = await connection.manager.find(Fornecedor);
    res.send(fornecedores);
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    let id = req.params.id;
    let repository = getConnection().getRepository(Fornecedor);
    let fornecedor = await repository.findOneById(id);
    res.send({"Item": fornecedor});
  }

  /**
   * Insert Prato.
   */
  public async insert(req: Request, res: Response, next: NextFunction) {
    let fornecedor: Fornecedor = <Fornecedor> req.body;
    const connection: Connection = getConnection();
    connection.manager.save(fornecedor).then(u => {
      res.send({"sucesso": true, "Fornecedor": u.Id});
    }).catch(err => {
      res.send({"sucesso": false});
    });
  }
}
