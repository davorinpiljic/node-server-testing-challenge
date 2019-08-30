const db = require("../dbConfig.js");
const Database = require("./Model.js");
const request = require("supertest");

describe("Database model", () => {
  describe("create", () => {
    beforeEach(async () => {
      await db("database").truncate();
    });
    it("Should insert a unit into Database", async () => {
      await Database.add({ name: "one" });
      const data = await db("database");
      expect(data).toBeDefined();
    });
    it("Should insert 2 units into Database", async () => {
      await Database.add({ name: "two" });
      await Database.add({ name: "three" });
      const data = await db("database");
      expect(data).toHaveLength(2);
    });
  });
  describe("delete", () => {
    beforeEach(async () => {
      await db("database").truncate();
    });
    it("Should delete a unit from DB", async () => {
      await Database.remove({ id: 1 });
      const data = await db("database");
      expect(data).toHaveLength(0);
    });
    it("Should delete 2 units from DB", async () => {
      await Database.remove({ id: 2 });
      await Database.remove({ id: 3 });

      const data = await db("database");
      expect(data).toHaveLength(0);
    });
  });
});
