import {Router, Request, Response, NextFunction} from 'express';
import {ClienteController} from '../controller/ClienteController';


export class ClienteRouter {
  router: Router;
  clienteController: ClienteController;


  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.clienteController = new ClienteController();
    this.init();
  }



  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.clienteController.getAll);
    this.router.get('/:id', this.clienteController.getById);
    this.router.post('/', this.clienteController.insert);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const clienteRoutes = new ClienteRouter();
clienteRoutes.init();

export default clienteRoutes.router;
