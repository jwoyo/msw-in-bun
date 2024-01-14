import {afterAll, afterEach, expect, test, beforeAll} from "bun:test";
import {server} from "./msw.ts";

beforeAll(() => {
    server.listen()
})

afterEach(() => {
    server.resetHandlers()
})

afterAll(() => {
    server.close();
});

test("Expect fictitious api to return John Maverick", async () => {
    const response = await fetch('https://api.example.com/user');
    const user = await response.json() as { firstName: string, lastName: string };
    expect(user.firstName).toBe("John");
    expect(user.lastName).toBe("Maverick");
});
