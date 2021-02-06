export class DateFormatter {
    public static toDDMMYYYY(date: Date): string {
        let day: string | number = date.getDate();
        let month: string | number = date.getMonth() + 1;
        const year: number = date.getFullYear();

        day = day < 9 ? "0" + day : day;
        month = month < 9 ? "0" + month : month;

        return `${day}/${month}/${year}`;
    }
}
