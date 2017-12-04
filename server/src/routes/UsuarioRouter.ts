import {Router, Request, Response, NextFunction} from 'express';
import {UsuarioController} from '../controller/UsuarioController';

export class UsuarioRouter {
  router: Router;
  usuarioController: UsuarioController;

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.usuarioController = new UsuarioController();
    this.init();
  }

  

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.usuarioController.getAll);
    this.router.get('/:id', this.usuarioController.getById);
    this.router.post('/', this.usuarioController.insert);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const usuarioRoutes = new UsuarioRouter();
usuarioRoutes.init();

export default usuarioRoutes.router;