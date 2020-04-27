const User = require("../../../server/db/user");
const { query, pool } = require("../../../server/db/query");

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

describe("getUserByEmail should return the correct user from database", () => {
  test("getUserByEmail returns an object filled with user information", async () => {
    result = await User.getUserByEmail('guy2@fierri.com');
    expect(Object.keys(result)).toHaveLength(9);
  });

  test("getUserByEmail should be populated with the correct data", () => {
    expect(result.first_name).toBe("Guy");
  });
}); 

describe("saveUser should save the correct user to the database, then return it", () => {
  afterAll(async () => {
    try {
      const deleteQuery = {
        text: 'DELETE FROM users where email = $1',
        values: ['jest@test.com']
      }
      const { rows } = await query(deleteQuery.text, deleteQuery.values);
      return rows[0];
    } catch (error) {
      return error;
    }
  });
  
  test("saveUser should return a new database entry", async () => {
    await expect(
      User.saveUser({
        email: "jest@test.com",
        username: "JestTestDummy",
        password: "Hunter12!",
        first_name: "Jest",
        last_name: "Test",
        is_verified: false
      })
    ).resolves.not.toThrow();
  });

  test("saveUser should correctly save information to database", async () => {
    await expect(User.getUserByEmail('jest@test.com')).resolves.not.toBeUndefined();
  });
}); 

describe("getUserByUsername should return the correct user from database", () => {
  test("getUserByUsername returns an object filled with user information", async () => {
    result = await User.getUserByUsername('username2');
    expect(Object.keys(result)).toHaveLength(9);
  });

  test("getUserByUsername should be populated with the correct data", () => {
    expect(result.last_name).toBe("Fierri");
  });
});
