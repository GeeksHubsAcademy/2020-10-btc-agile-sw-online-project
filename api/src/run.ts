require('dotenv').config();
import {App} from "./app/App";
import {AppControllerStarter} from "./app/AppControllerStarter";
import {BaseController} from "./controllers/BaseController";
import {ThreadController} from "./controllers/ThreadController";
import {AppRunner} from "./app/AppRunner";
import {CommentController} from "./controllers/CommentController";
import {AppMiddlewaresStarter} from "./app/AppMiddlewaresStarter";

const app: App = new App(9111);
const appControllers: Array<BaseController> = [new ThreadController(), new CommentController()];
const appMiddlewaresStarter: AppMiddlewaresStarter = new AppMiddlewaresStarter(app);
const appControllerStarter: AppControllerStarter = new AppControllerStarter(app, appControllers);
const appRunner: AppRunner = new AppRunner(app);

appMiddlewaresStarter.startMiddlewares();
appControllerStarter.startControllers();
appRunner.run();
