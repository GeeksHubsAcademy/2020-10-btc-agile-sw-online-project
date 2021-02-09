import {DateFormatter} from "./DateFormatter";

describe('DateFormatter tests', () => {
   it('Should return 11/05/2001', () => {
      const date: Date = new Date();
      date.setFullYear(2001, 4, 11);

      const dateDDMMYYYY: string = DateFormatter.toDDMMYYYY(date);
      expect(dateDDMMYYYY).toEqual("11/05/2001");
   });

   it('Should return 01/01/1942', () => {
       const date: Date = new Date();
       date.setFullYear(1942, 0, 1);

       const dateDDMMYYYY: string = DateFormatter.toDDMMYYYY(date);
       expect(dateDDMMYYYY).toEqual("01/01/1942");
   });
});
