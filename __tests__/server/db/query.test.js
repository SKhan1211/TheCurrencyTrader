const keys = require("../../../config/keys");

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
