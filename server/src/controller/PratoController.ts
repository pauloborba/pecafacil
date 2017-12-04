import {Router, Request, Response, NextFunction} from 'express';
import {Prato} from '../models/Prato'
import {Fornecedor} from '../models/Fornecedor'
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
    let prato: Prato = Helper.createInstanceFromJson(Prato, req.body);
    const connection: Connection = getConnection();
    let usuario = await connection.manager.findOne(Fornecedor, {Id: req.body['IdFornecedor']});
    prato.fornecedor = usuario;
    connection.manager.save(prato).then(f => {
      res.send({"sucesso": true, "prato": f});
    }).catch(err => {
      res.send({"sucesso": false, "mensagem": err});
    });
  }
}
