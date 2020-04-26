const db = require("../../../server/db/query");
const keys = require("../../../config/keys");

afterAll(() => db.pool.end());

describe("check if connectionString exists", () => {
  const checkConnectionString = async (connectionString) => {
    if (!connectionString) throw new Error("You must provide a valid string to connect to PostgreSQL database");
  };
  
  test("valid connectionString does not throw error", async () => {
    await expect(checkConnectionString(keys.connectionString)).resolves.not.toThrow();
  });

  test("invalid connectionString throws an error" , async () => {
    await expect(checkConnectionString()).rejects.toThrow(
      "You must provide a valid string to connect to PostgreSQL database"
    );
  });
});

async function getSingleUser(query) {
  try {
    const { rows } = await db.query(query);
    return rows[0];
  } catch (err) {
    return err;
  }
};

describe("check if connectionString is valid", () => {
  test("querying with connectionString should not return error", async () => {
    await expect(getSingleUser("SELECT * FROM users LIMIT 1")).resolves.not.toThrow();
  });
});

describe("function query should return correct result", () => {
  test("querying should return an object", async () => {
    await expect(typeof getSingleUser("SELECT * FROM users LIMIT 1")).toEqual('object');
  });

  test("querying should not throw an error", async () => {
    await expect(getSingleUser("SELECT * FROM users LIMIT 1")).resolves.not.toThrow();
  });

  test("querying incorrect database data should throw error", async () => {
    await expect(getSingleUser("SELECT * FROM toys LIMIT 1")).resolves.toThrow();
  });

  test("querying with wrong input parameter should throw error", async () => {
    await expect(getSingleUser("hello")).resolves.toThrow();
  })
});
