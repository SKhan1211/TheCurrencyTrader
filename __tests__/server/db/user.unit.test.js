const User = require("../../../server/db/user");
const { pool } = require("../../../server/db/query");

describe("user functions should not throw errors", () => {
  afterAll(() => pool.end()); 

  test("getUsers should not throw error", async () => {
    await expect(User.getUsers()).resolves.not.toThrow();
  });

  test("getUsers should return an array", async () => {
    const result = await User.getUsers();
    expect(Array.isArray(result)).toBe(true);
  });

  test("getUser should not throw error", async () => {
    await expect(User.getUser(1)).resolves.not.toThrow();
  });

  test("getUser with invalid param should throw error", async () => {
    await expect(User.getUser("hello")).resolves.toThrow();
  });

  test("getUser should return an object", async () => {
    await expect(typeof User.getUser(1)).toEqual('object');
  });

  test("getUserByEmail should not throw error", async () => {
    await expect(User.getUserByEmail("testing@testing.com")).resolves.not.toThrow();
  });

  test("getUserByEmail with invalid param should throw error", async () => {
    await expect(User.getUserByEmail(1)).resolves.toBe(undefined);
  });

  test("getUserByEmail should return an object", async () => {
    await expect(typeof User.getUserByEmail("testing@testing.com")).toEqual("object");
  });

  test("saveUser with invalid param should throw error", async () => {
    await expect(User.saveUser(1)).resolves.toThrow();
  });

  test("getUserByUsername should not throw error", async () => {
    await expect(User.getUserByUsername("TestDummy123")).resolves.not.toThrow();
  });

  test("getUserByUsername with invalid param should throw error", async () => {
    await expect(User.getUserByUsername(1)).resolves.toBe(undefined);
  });

  test("getUserByUsername should return an object", async () => {
    await expect(typeof User.getUserByUsername("TestDummy123")).toEqual("object");
  });
}); 