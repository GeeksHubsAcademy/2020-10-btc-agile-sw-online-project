import {App} from "./app/App";
import {AppControllerStarter} from "./app/AppControllerStarter";
import {Controller} from "./controllers/Controller";
import {ThreadController} from "./controllers/ThreadController";
import {AppRunner} from "./app/AppRunner";

const app: App = new App(9111);
const appControllers: Array<Controller> = [new ThreadController()];
const appControllerStarter: AppControllerStarter = new AppControllerStarter(app, appControllers);
const appRunner: AppRunner = new AppRunner(app);

appControllerStarter.startControllers();
appRunner.run();
