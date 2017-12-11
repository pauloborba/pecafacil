import {Router, Request, Response, NextFunction} from 'express';
import {Cliente} from '../models/Cliente'
import {Usuario} from '../models/Usuario'
import {Helper} from '../Helper'
import {getConnection, Connection} from "typeorm";

export class ClienteController{

  public async getAll(req: Request, res: Response, next: NextFunction) {
    const connection: Connection = getConnection();
    let clientes = await connection.manager.find(Cliente, req.query);
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
    let cliente: Cliente = Helper.createInstanceFromJson(Cliente, req.body);
    const connection: Connection = getConnection();
    let usuario = await connection.manager.findOne(Usuario, {Id: req.body['IdUsuario']});
    cliente.Usuario = usuario;
    connection.manager.save(cliente).then(c => {
      res.send({"sucesso": true, "cliente": c});
    }).catch(err => {
      res.send({"sucesso": false, "mensagem": err});
    });
  }
}
