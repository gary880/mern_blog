import { stringToArray } from "../../services/functions/stringToArray";

describe("stringToArray", () => {

    it("should return an array of strings", () => {
        const str = "one,two,three";
        const result = stringToArray(str);
        expect(result).toEqual(["one", "two", "three"]);
    });

    it("should return an empty array when it receives an empty string", () => {
        const str = "";
        const result = stringToArray(str);
        expect(result).toEqual([]);
    });

    it("should return an array with one element when it receives a string with one element", () => {
        const str = "one";
        const result = stringToArray(str);
        expect(result).toEqual(["one"]);
    });

});