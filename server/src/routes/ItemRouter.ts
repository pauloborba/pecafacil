import {Router, Request, Response, NextFunction} from 'express';
import {ItemController} from '../controller/ItemController';


export class ItemRouter {
  router: Router;
  itemController: ItemController;


  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.itemController = new ItemController();
    this.init();
  }



  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.itemController.getAll);
    this.router.get('/:id', this.itemController.getById);
    this.router.post('/', this.itemController.insert);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const itemRoutes = new ItemRouter();
itemRoutes.init();

export default itemRoutes.router;
