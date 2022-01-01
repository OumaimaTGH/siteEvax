const supertest = require("supertest");
const app = require("../app");
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmM3ZGNkYWE0NWNhMzUzMTMxNjQ1MSIsImZ1bGxuYW1lIjoieW91c3NlZiBtYW5zb3VyaSIsImVtYWlsIjoieW91c3NlZkBsaXZlLmZyIiwiaWF0IjoxNjM5OTIwNDIyLCJleHAiOjE2Mzk5MjQwMjJ9.lsK4W-BZ3LmiAnh3nb0A50dZqZjTD_eIyxxUizWPAzU"

describe("testing operators", () => {
  it("get all operator", async () => {
    const response = await supertest(app).get("/api/operator").auth(token, { type: "bearer" })
    expect(response.status).toBe(200);
    console.log(response.body);
  });
});

describe("testing find operator", () => {
  it("get single operator", async () => {
    const response = await supertest(app).get("/api/operator/61bc7e31aa45ca353131645d").auth(token, { type: "bearer" })
    expect(response.status).toBe(200);
    console.log(response.body);
  });
});


describe("testing delete operator", () => {
  it("delete operator", async () => {
    const response = await supertest(app).delete("/api/operator/61bcf1bfb77154c501d43173").auth(token, { type: "bearer" })
    expect(response.status).toBe(200);
    console.log(response.body);
  });
});

describe("testing add operator", () => {
  it("add operator", async () => {
    const body  = {
      "fullname": "youssef  test",
      "email": "test123@live.fr",
    }
    const response = await supertest(app)
    .post("/api/operator")
    .send(body)
    .auth(token, { type: "bearer" })
    .expect(201)
    console.log(response.body);
  });
});

describe("testing update operator", () => {
  it("update operator", async () => {
    const body  = {
      "fullname": "youssef youssef",      
    }
    const response = await supertest(app)
    .put("/api/operator/61bcf47f11770048806a4bb4")
    .send(body)
    .auth(token, { type: "bearer" })
    .expect(200)
    console.log(response.body);
  });
});