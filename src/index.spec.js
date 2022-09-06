import { IsOdd, IsEven } from "../dist/index.js";
import { strictEqual } from "assert";

describe( "IsOdd", () => {
    it("is odd if value is 1", () => { strictEqual( IsOdd( 1 ), true ); });
    it("is not odd if value is 2", () => { strictEqual( IsOdd( 2 ), false ); });
});

describe( "IsEven", () => {
    it("is even if value is 2", () => { strictEqual( IsEven( 2 ), true ); });
    it("is not even if value is 3", () => { strictEqual( IsEven( 3 ), false ); });
});

