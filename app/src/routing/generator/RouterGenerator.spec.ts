import {RouteGenerator} from "./RouteGenerator";

describe('RouterGenerator tests', () => {
    it('Should return /test/25/route/12', () => {
       const routeGenerator: RouteGenerator = new RouteGenerator();
       const routeWithParams: string = '/test/:param1/route/:param2';

       const generatedRoute: string = routeGenerator.generate(routeWithParams, {
           param1: "25",
           param2: "12"
       });
       expect(generatedRoute).toEqual('/test/25/route/12');
    });
});
