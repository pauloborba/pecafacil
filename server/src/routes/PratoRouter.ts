import {Router, Request, Response, NextFunction} from 'express';
import {PratoController} from '../controller/PratoController';


export class PratoRouter {
  router: Router;
  pratoController: PratoController;


  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.pratoController = new PratoController();
    this.init();
  }



  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.pratoController.getAll);
    this.router.get('/:id', this.pratoController.getById);
    this.router.post('/', this.pratoController.insert);
    this.router.delete('/:id', this.pratoController.delete);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const pratoRoutes = new PratoRouter();
pratoRoutes.init();

export default pratoRoutes.router;
