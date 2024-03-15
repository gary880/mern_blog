import { convertDate } from "../../services/functions/dateFromating"

describe("convertDate", () => {
    it("should return a date in the format 'Month Day, Year'", () => {
        const date = "2021-04-20";
        const result = convertDate(date);
        expect(result).toBe("Apr 20 2021");
    });

    it("should return empty string when it receives an empty string", () => {
        const date = "";
        const result = convertDate(date);
        expect(result).toBe("");
    });
});