import {Router, Request, Response, NextFunction} from 'express';
import {PedidoController} from '../controller/PedidoController';


export class PedidoRouter {
  router: Router;
  pedidoController: PedidoController;


  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.pedidoController = new PedidoController();
    this.init();
  }



  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.pedidoController.getAll);
    this.router.get('/:id', this.pedidoController.getById);
    this.router.post('/', this.pedidoController.insert);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const pedidoRoutes = new PedidoRouter();
pedidoRoutes.init();

export default pedidoRoutes.router;
