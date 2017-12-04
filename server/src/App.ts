import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { UsuarioRouter } from './routes/UsuarioRouter';
import { PratoRouter } from './routes/PratoRouter';
import { ClienteRouter } from './routes/ClienteRouter'
import { FornecedorRouter } from './routes/FornecedorRouter'
import { ItemRouter } from './routes/ItemRouter'
import { LocalEntregaRouter } from './routes/LocalEntregaRouter'
import { PedidoRouter } from './routes/PedidoRouter'


import "reflect-metadata";
import {createConnection} from "typeorm";

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.configDatabase();
  }

  private async configDatabase(){
    await createConnection();
  }

	private allowCrossDomain = function(req: any, res: any, next: any) {
	    res.header('Access-Control-Allow-Origin', "*");
	    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	    res.header('Access-Control-Allow-Headers', 'Content-Type');
	    next();
	}

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
		this.express.use(this.allowCrossDomain);
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.express.use('/', router);
    const usuarioRoutes = new UsuarioRouter();
    usuarioRoutes.init();
    this.express.use('/api/v1/usuarios', usuarioRoutes.router);
    const pratoRoutes = new PratoRouter();
    pratoRoutes.init();
    this.express.use('/api/v1/pratos', pratoRoutes.router);
    const clienteRoutes = new ClienteRouter();
    clienteRoutes.init();
    this.express.use('/api/v1/clientes', clienteRoutes.router);
    const fornecedorRoutes = new FornecedorRouter();
    fornecedorRoutes.init();
    this.express.use('/api/v1/fornecedores', fornecedorRoutes.router);
    const itemRoutes = new ItemRouter();
    itemRoutes.init();
    this.express.use('/api/v1/itens', itemRoutes.router);
    const localEntregaRouter = new LocalEntregaRouter();
    localEntregaRouter.init();
    this.express.use('/api/v1/locaisEntregas', localEntregaRouter.router);
    const pedidoRouter = new PedidoRouter();
    pedidoRouter.init();
    this.express.use('/api/v1/pedidos', pedidoRouter.router);
  }

  }

export default new App().express;
