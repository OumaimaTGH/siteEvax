const supertest = require("supertest");
const app = require("../app");
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmM3ZGNkYWE0NWNhMzUzMTMxNjQ1MSIsImZ1bGxuYW1lIjoieW91c3NlZiBtYW5zb3VyaSIsImVtYWlsIjoieW91c3NlZkBsaXZlLmZyIiwiaWF0IjoxNjM5OTM4NzE1LCJleHAiOjE2Mzk5NDIzMTV9.79K8qPzuMlMxdmQXhCJO1L2MkqXXGKsnYg_75hSaJAQ"

describe("testing Pharmacies", () => {
    it("get all Pharmacies", async () => {
      const response = await supertest(app).get("/api/pharmacy").auth(token, { type: "bearer" })
      expect(response.status).toBe(200);
      console.log(response.body);
    });
  });
  describe("testing find pharmacy", () => {
    it("get single pharmacy", async () => {
      const response = await supertest(app).get("/api/pharmacy/61bc7e58aa45ca353131645f").auth(token, { type: "bearer" })
      expect(response.status).toBe(200);
      console.log(response.body);
    });
  });
  describe("testing add pharmacy", () => {
    it("add pharmacy", async () => {
      const body  = {
        "name_ar":"صوفارما",
        "name_fr": "SOpharma",
        "n_order": "11",
        "fix_tel":"00888888",
        "other_tel":"005555",
        "category":"AR50",
        "governorate":"Tunis",
        "municipality":"Tunis",
        "delegation":"Tunis",
        "addr_ar":"تونس1",
        "addr_fr":"Tunis1",
        "cin":"10013351",
        "date_of_birth":"05/12/1997",
        "firstname":"Taghouti",
        "lastname":"oum",
        "phone":"5888888",
        "email":"azerty@live.com",
        "fax":"3333333",      
      }
      const response = await supertest(app)
      .post("/api/pharmacy")
      .send(body)
      .auth(token, { type: "bearer" })
      .expect(201)
      console.log(response.body);
    });
  });
  describe("testing update pharmacy", () => {
    it("update pharmacy", async () => {
      const body  = {
        "name_ar":"صوفارما",
        "name_fr": "SOpharma",
        "n_order": "11",
        "fix_tel":"00888888",
        "other_tel":"005555",
        "category":"AR50",
        "governorate":"Tunis",
        "municipality":"Tunis",
        "delegation":"Tunis",
        "addr_ar":"تونس1",
        "addr_fr":"Tunis1",
        "cin":"10013351",
        "date_of_birth":"05/12/1997",
        "firstname":"Grati",
        "lastname":"siw",
        "phone":"5888888",
        "email":"azerty@live.com",
        "fax":"3333333",      
      }
      const response = await supertest(app)
      .put("/api/pharmacy/61bf575ee30b6c6d57770d42")
      .send(body)
      .auth(token, { type: "bearer" })
    });
  });
  describe("testing delete pharmacy", () => {
    it("delete pharmacy", async () => {
      const response = await supertest(app).del("/api/pharmacy/61bf65f7a9b8080018cd98a0").auth(token, { type: "bearer" })
      expect(response.status).toBe(200);
      console.log(response.body);
    });
  });