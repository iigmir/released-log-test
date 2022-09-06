import { IsOdd, IsEven } from "./index.ts";
import { strictEqual } from "assert";

strictEqual( IsOdd( 1 ), true );
strictEqual( IsOdd( 2 ), false );
strictEqual( IsEven( 2 ), true );
strictEqual( IsEven( 3 ), false );
