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
    let usuarios = await connection.manager.find(Usuario);
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
    let usuario: Usuario = new Usuario();
    usuario.Nome = req.body['Nome'] ? req.body['Nome'] : '';
    usuario.Login = req.body['Login'] ? req.body['Login'] : '';
    usuario.Senha = req.body['Senha'] ? req.body['Senha'] : '';
    usuario.Telefone = req.body['Telefone'] ? req.body['Telefone'] : '';
    const connection: Connection = getConnection();
    connection.manager.save(usuario).then(u => {
      res.send({"sucesso": true, "usuario": u.Id});
    }).catch(err => {
      res.send({"sucesso": false});
    });
  }
}