const User = require("../../../server/db/user");
const { pool } = require("../../../server/db/query");

afterAll(() => pool.end());

let result;

describe("getUsers should return the correct users from database", () => {
  test("getUsers returns an array of all users", async () => {
    result = await User.getUsers()
    expect(Array.isArray(result)).toEqual(true)
  });

  test("getUsers should be populated with the correct data", async() => {
    expect(result[0].username).toBe("username2");
  })
});

describe("getUser should return the correct user from database", () => {
  test("getUser returns an object filled with user information", async () => {
    result = await User.getUser(67);
    expect(Object.keys(result)).toHaveLength(9);
  });

  test("getUser should be populated with the correct data", () => {
    expect(result.email).toBe('guy2@fierri.com');
  });
});

// describe("getUsersByEmail should return the correct user from database", () => {

// });

// describe("saveUser should return the correct user from database", () => {

// });

// describe("getUserByUsername should return the correct user from database", () => {

// });
