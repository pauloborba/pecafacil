import {Router, Request, Response, NextFunction} from 'express';
import {FornecedorController} from '../controller/FornecedorController';


export class FornecedorRouter {
  router: Router;
  fornecedorController: FornecedorController;


  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.fornecedorController = new FornecedorController();
    this.init();
  }



  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.fornecedorController.getAll);
    this.router.get('/:id', this.fornecedorController.getById);
    this.router.post('/', this.fornecedorController.insert);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const fornecedorRoutes = new FornecedorRouter();
fornecedorRoutes.init();

export default fornecedorRoutes.router;
