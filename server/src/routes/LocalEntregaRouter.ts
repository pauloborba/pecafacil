import {Router, Request, Response, NextFunction} from 'express';
import {LocalEntregaController} from '../controller/LocalEntregaController';


export class LocalEntregaRouter {
  router: Router;
  localEntregaController: LocalEntregaController;


  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.localEntregaController = new LocalEntregaController();
    this.init();
  }



  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.localEntregaController.getAll);
    this.router.get('/:id', this.localEntregaController.getById);
    this.router.post('/', this.localEntregaController.insert);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const localEntregaRouter = new LocalEntregaRouter();
localEntregaRouter.init();

export default localEntregaRouter.router;
