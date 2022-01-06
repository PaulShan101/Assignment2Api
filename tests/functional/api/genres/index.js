import chai from "chai";
import request from "supertest";
const mongoose = require("mongoose");
import User from "../../../../api/users/userModel";
import api from "../../../../index";


describe("Users endpoint", () => {
    before(() => {
      mongoose.connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      db = mongoose.connection;
    });
  
    after(async () => {
      try {
        await db.dropDatabase();
      } catch (error) {
        console.log(error);
      }
    });
    beforeEach(async () => {
      try {
        await User.deleteMany();
        // Register two users
        await request(api).post("/api/users?action=register").send({
          username: "user1",
          password: "test1",
        });
        await request(api).post("/api/users?action=register").send({
          username: "user2",
          password: "test2",
        });
      } catch (err) {
        console.error(`failed to Load user test Data: ${err}`);
      }
    });
    afterEach(() => {
      api.close();
    });
    describe("GET /api/genres ", () => {
      it("should return the 4 genres and a status 200", (done) => {
        request(api)
          .get("/api/genres")
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end((err, res) => {
            expect(res.body).to.be.a("array");
            expect(res.body.length).to.equal(2);
        });
      });
    });
});