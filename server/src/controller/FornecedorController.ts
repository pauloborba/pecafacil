import {Router, Request, Response, NextFunction} from 'express';
import {Fornecedor} from '../models/Fornecedor'
import {Usuario} from '../models/Usuario'
import {Helper} from '../Helper'
import {getConnection, Connection} from "typeorm";
import { connect } from 'http2';

export class FornecedorController{

  public async getAll(req: Request, res: Response, next: NextFunction) {
    const connection: Connection = getConnection();
    let fornecedores = await connection.manager.find(Fornecedor, req.query);
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
    let fornecedor: Fornecedor = Helper.createInstanceFromJson(Fornecedor, req.body);

    const connection: Connection = getConnection();
    let usuario = await connection.manager.findOne(Usuario, {Id: req.body['IdUsuario']});
    fornecedor.Usuario = usuario;
    connection.manager.save(fornecedor).then(f => {
      res.send({"sucesso": true, "fornecedor": f});
    }).catch(err => {
      res.send({"sucesso": false, "mensagem": err});
    });
  }
}
