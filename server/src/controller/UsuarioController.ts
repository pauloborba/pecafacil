import {Router, Request, Response, NextFunction} from 'express';
import {Usuario} from '../models/Usuario'
import {Helper} from '../Helper'
import {getConnection, Connection} from "typeorm";

export class UsuarioController {
    /**
   * GET all Usuarios.
   */
  public async getAll(req: Request, res: Response, next: NextFunction) {
    const connection: Connection = getConnection();
    let usuarios = await connection.manager.find(Usuario, req.query);
    res.send(usuarios);
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    let id = req.params.id;
    let repository = getConnection().getRepository(Usuario);
    let usuario = await repository.findOneById(id);
    res.send({"usuario": usuario});
  }

  /**
   * Insert Usuario.
   */
  public async insert(req: Request, res: Response, next: NextFunction) {
    let usuario: Usuario = Helper.createInstanceFromJson(Usuario, req.body);
    const connection: Connection = getConnection();
    connection.manager.save(usuario).then(u => {
      res.send({"sucesso": true, "usuario": u});
    }).catch(err => {
      res.send({"sucesso": false});
    });
  }
}