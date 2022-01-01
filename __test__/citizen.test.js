const supertest = require("supertest");
const app = require("../app");
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmY0OTJiZjQ1MzdkOTY0Y2VhMGRkMSIsImZ1bGxuYW1lIjoic2l3IGZsZW4iLCJlbWFpbCI6InNpd0BsaXZlLmZyIiwiaWF0IjoxNjM5OTM0NDEzLCJleHAiOjE2Mzk5MzgwMTN9.7Lzz2bHxmNfta2uSJx9b--QjuDDVg8jmzWuMyuyRSII"

describe("testing citizens", () => {
  it("get all citizen", async () => {
    const response = await supertest(app).get("/api/citizen").auth(token, { type: "bearer" })
    expect(response.status).toBe(200);
    console.log(response.body);
  });
});

describe("testing find citizen", () => {
  it("get single citizen", async () => {
    const response = await supertest(app).get("/api/citizen/61bc81237324bd46fa317cf9").auth(token, { type: "bearer" })
    expect(response.status).toBe(200);
    console.log(response.body);
  });
});
/*
describe("testing delete citizen", () => {
  it("delete citizen", async () => {
    const response = await supertest(app).delete("/api/citizen/61bf6975e163d456404c5e45").auth(token, { type: "bearer" })
    expect(response.status).toBe(200);
    console.log(response.body);
  });
});
*/
/*
describe("testing add citizen", () => {
  it("add citizen", async () => {
    const body  = {
        "cin":"14351378",
        "date_of_birth":"06/10/1997",
        "phone":"12614820",
        "email": "siw@live.fr",
        "firstname": "siwar",
        "lastname":"grati",
        "sexe":"f",
        "father_lastname":"mohamed",
        "grandfather_lastname":"youssef",
        "mother_firstname":"mansouri",
        "mother_lastname":"farida",
        "governorate":"kasserine",
        "municipality":"fousana",
        "delegation":"dachra",
        "positif_pcr": "false",
        "allergy":"false",
        "anticaogulant":"false",
       "hemostasis":"false",
        "pregnant":"false",
        "vaccinated":"false",
        "vaccinated_type":"false",
        "confirmed":"false",
        "authenticate_code":null,
        "operator":null
    }
    const response = await supertest(app)
    .post("/api/citizen")
    .send(body)
    .auth(token, { type: "bearer" })
    .expect(201)
    console.log(response.body);
  });
});*/

describe("testing update citizen", () => {
  it("update citizen", async () => {
    const body  = {
      "cin": "14587925",      
    }
    const response = await supertest(app)
    .put("/api/citizen/61bc81237324bd46fa317cf9")
    .send(body)
    .auth(token, { type: "bearer" })
    .expect(200)
    console.log(response.body);
  });
});


describe("test confirm account citizen", () => {
    it("confirm account citizen", async () => {
      const body  = {
        "confirmed":"true",      }
      const response = await supertest(app)
      .put("/api/citizen/61bc81237324bd46fa317cf9")
      .send(body)
      .auth(token, { type: "bearer" })
      .expect(200)
      console.log(response.body);
    });
  });

  describe("test vaccinated citizen", () => {
    it("vaccinated citizen", async () => {
      const body  = {
        "vaccinated":"ftruealse",
        "vaccinated_type":"pfizer",
        "authenticate_code":"111111111",
        "operator":"61bcf47f11770048806a4bb4"     }
      const response = await supertest(app)
      .put("/api/citizen/61bc81237324bd46fa317cf9")
      .send(body)
      .auth(token, { type: "bearer" })
      .expect(200)
      console.log(response.body);
    });
  });