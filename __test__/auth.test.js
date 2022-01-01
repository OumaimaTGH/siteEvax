const supertest = require("supertest");
const app = require("../app");
describe("testing Login", () => {
    it("Login", async () => {
      const body  = {
        "email":"youssef@live.fr",
        "password": "azerty",  
      }
      const response = await supertest(app)
      .post("/api/secure__login")
      .send(body)
      .expect(201)
      console.log(response.body);
    });
  });