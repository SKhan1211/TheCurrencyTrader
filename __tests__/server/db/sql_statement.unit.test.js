const { Pool } = require("pg");
const connectionString = require("../../../config/keys").connectionString;

const pool = new Pool({
  connectionString,
});

afterAll(() => pool.end());

const testDataType = (column, type, res) => {
  return(
    expect(typeof res[column]).toEqual(type)
  )
}

const uniqueConstraintQuery = (table) => {
  return (
  `SELECT conname 
    FROM pg_catalog.pg_constraint con 
      INNER JOIN pg_catalog.pg_class rel 
        ON rel.oid = con.conrelid 
      INNER JOIN pg_catalog.pg_namespace nsp 
        ON nsp.oid = connamespace 
      WHERE nsp.nspname = 'public' 
        AND rel.relname = '${table}';`
  );
};

describe('tests for users schema', () => {
  let res;
  test('users table should have id, email, username, password, first_name, last_name, created_at, updated_at, and is_verified columns', async () => {
    let { rows } = await pool.query('SELECT * FROM users LIMIT 1');
    res = rows[0];
    expect(res.id && res.email && res.username && res.password && res.first_name && res.last_name && res.created_at && res.updated_at && res.is_verified).not.toBeNull();
  });

  test('id should be a number', async () => {
    testDataType('id', 'number', res);
  });

  test('email should be a string', async () => {
    testDataType('email', 'string', res);
  });

  test("username should be a string", async () => {
    testDataType("username", "string", res);
  });

  test("password should be a string", async () => {
    testDataType("password", "string", res);
  });

  test("first_name should be a string", async () => {
    testDataType("first_name", "string", res);
  });

  test("last_name should be a string", async () => {
    testDataType("last_name", "string", res);
  });

  test("is_verified should be a boolean", async () => {
    testDataType("is_verified", "boolean", res);
  });

  test('id, email, and username has a unique constraint', async () => {
    let { rows } = await pool.query(uniqueConstraintQuery('users'));
    let values = ['users_pkey', 'users_email_key', 'users_username_key'];
    rows.forEach(rowObj => {
      expect(values.includes(rowObj.conname)).toBeTruthy();
    })
  });
}); 

describe('tests for trade_information schema', () => {
  let res;
  test('trade_information table should have id, user_id, date, time, lot_size, entry_price, exit_price, dollar_gained_lost, created_at, updated_at, pair, direction, and pips_gained_lost columns', async () => {
    let { rows } = await pool.query('SELECT * FROM trade_information LIMIT 1');
    res = rows[0];
    expect(res.id && res.user_id && res.date && res.time && res.lot_size && res.entry_price && res.exit_price && res.dollar_gained_lost && res.created_at && res.updated_at && res.pips_gained_lost && res.pair && res.pips_gained_lost).not.toBeNull();
  });

  test('id should be a number', async () => {
    testDataType('id', 'number', res);
  });

  test('user_id should be a number', async () => {
    testDataType('user_id', 'number', res);
  });

  test("date should be a string", async () => {
    testDataType("date", "string", res);
  });

  test("time should be a string", async () => {
    testDataType("time", "string", res);
  });

  test("lot_size should be a string", async () => {
    testDataType("lot_size", "string", res);
  });

  test("entry_price should be a string", async () => {
    testDataType("entry_price", "string", res);
  });

  test("exit_price should be a string", async () => {
    testDataType("exit_price", "string", res);
  });

  test("dollar_gained_lost should be a string", async () => {
    testDataType("dollar_gained_lost", "string", res);
  });

  test("pips_gained_lost should be a string", async () => {
    testDataType("pips_gained_lost", "string", res);
  });

  test("created_at should be a string", async () => {
    testDataType("created_at", "object", res);
  });

  test("updated_at should be a string", async () => {
    testDataType("updated_at", "object", res);
  });

  test("pair should be a string", async () => {
    testDataType("pair", "string", res);
  });

  test("direction should be a string", async () => {
    testDataType("direction", "string", res);
  });

  // test('id, email, and username has a unique constraint', async () => {
  //   let { rows } = await pool.query(uniqueConstraintQuery('users'));
  //   let values = ['users_pkey', 'users_email_key', 'users_username_key'];
  //   rows.forEach(rowObj => {
  //     expect(values.includes(rowObj.conname)).toBeTruthy();
  //   })
  // });
}); 