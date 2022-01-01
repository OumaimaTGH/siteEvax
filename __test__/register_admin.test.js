const supertest = require("supertest");
const app = require("../app");
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmM3ZGNkYWE0NWNhMzUzMTMxNjQ1MSIsImZ1bGxuYW1lIjoieW91c3NlZiBtYW5zb3VyaSIsImVtYWlsIjoieW91c3NlZkBsaXZlLmZyIiwiaWF0IjoxNjM5OTM4NzE1LCJleHAiOjE2Mzk5NDIzMTV9.79K8qPzuMlMxdmQXhCJO1L2MkqXXGKsnYg_75hSaJAQ"

describe("testing register admin", () => {
    it("add register admin", async () => {
      const body  = {
        "email":"oumaima2@live.fr",
        "password": "azerty",
        "confirm": "azerty",
        "fullname":"oumai tagho",   
      }
      const response = await supertest(app)
      .post("/api/add__admin")
      .send(body)
      .auth(token, { type: "bearer" })
      .expect(201)
      console.log(response.body);
    });
  });