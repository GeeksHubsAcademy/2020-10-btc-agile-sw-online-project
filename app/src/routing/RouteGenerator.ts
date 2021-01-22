export class RouteGenerator {
    constructor() {}

    public generate(route: string, params?: { [key:string]: string }): string {
        if (!params)
            return route;

        let routeWithParams = route;

        Object.keys(params).forEach(key => {
            if (key && params[key])
                routeWithParams = routeWithParams.replace(String(':' + key).trim(), String(params[key]).trim());
        })

        return routeWithParams;
    }
}
