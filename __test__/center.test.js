const supertest = require("supertest");
const app = require("../app");
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmM3ZGNkYWE0NWNhMzUzMTMxNjQ1MSIsImZ1bGxuYW1lIjoieW91c3NlZiBtYW5zb3VyaSIsImVtYWlsIjoieW91c3NlZkBsaXZlLmZyIiwiaWF0IjoxNjM5OTIwNDIyLCJleHAiOjE2Mzk5MjQwMjJ9.lsK4W-BZ3LmiAnh3nb0A50dZqZjTD_eIyxxUizWPAzU"

describe("testing center", () => {
  it("get all center", async () => {
    const response = await supertest(app).get("/api/center").auth(token, { type: "bearer" })
    expect(response.status).toBe(200);
    console.log(response.body);
  });
});

describe("testing find center", () => {
  it("get single center", async () => {
    const response = await supertest(app).get("/api/center/61bc7e31aa45ca353131645d").auth(token, { type: "bearer" })
    expect(response.status).toBe(200);
    console.log(response.body);
  });
});


describe("testing delete center", () => {
  it("delete center", async () => {
    const response = await supertest(app).delete("/api/center/61bcf1bfb77154c501d43173").auth(token, { type: "bearer" })
    expect(response.status).toBe(200);
    console.log(response.body);
  });
});

describe("testing add center", () => {
  it("add center", async () => {
    const body  = {
      "name": "center monasti",
      "governorate": "monastir",
      "delegation":"sidi nasr",
      "municipality": "monastir",
      "address":"el omran",
      "postal_code":"5000",
      "quantity": "200",
    }
    const response = await supertest(app)
    .post("/api/center")
    .send(body)
    .auth(token, { type: "bearer" })
    .expect(201)
    console.log(response.body);
  });
});

describe("testing update center", () => {
  it("update center", async () => {
    const body  = {
      "name": "center monasti",
      "governorate": "monastir",
      "delegation":"sidi nasr",
      "municipality": "monastir",
      "address":"el omran",
      "postal_code":"5000",
      "quantity": "200",     
    }
    const response = await supertest(app)
    .put("/api/center/61bcf47f11770048806a4bb4")
    .send(body)
    .auth(token, { type: "bearer" })
    .expect(200)
    console.log(response.body);
  });
});