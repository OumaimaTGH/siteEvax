describe("test e2e member",()=>{
    xit("first test ",()=>{
       expect(true).to.equal(true)
   }) 
  it("successfully loads",()=>{
      cy.visit("/")
   }) 
 it("add demande",()=>{
    cy.get('.posting_job > ul > :nth-child(2) > a').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-row > :nth-child(1) > .form-control').clear().type("member");
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-row > :nth-child(2) > .form-control').clear().type("2021-01-10");
    cy.wait(2000);
    cy.get(':nth-child(3) > .form-control').clear().type("member@gmail.com");
    cy.wait(2000);
    cy.get(':nth-child(4) > .form-row > :nth-child(1) > .form-control').clear().type("25417874");
    cy.wait(2000);
    cy.get(':nth-child(4) > .form-row > :nth-child(2) > .form-control').clear().type("student");
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-row > :nth-child(1) > .form-control').clear().type("123456");
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-row > :nth-child(2) > .form-control').clear().type("123456");
    cy.wait(2000);
    cy.get('.form-btn').click();
    cy.wait(2000);
    cy.get('.swal2-confirm').click();
    cy.wait(2000);

   })

   it("login admin and accept demande",()=>{
    cy.visit("/login")
    cy.get('#signin-email').clear().type("testadmin@gmail.com");
    cy.wait(2000);
    cy.get('#signup-password').clear().type("testadmin123");
    cy.wait(2000);
    cy.get('.form-btn').click();
    cy.wait(2000);
    cy.visit("/listeDemandes")
    cy.wait(2000);
    cy.get('[role="button2"] > .fas').click()
    cy.wait(2000);
    cy.get('.swal2-confirm').click();
    cy.wait(2000);
    cy.get('.swal2-confirm').click();
    cy.wait(2000);
   })
   it("liste memeber edit",()=>{
       cy.visit('/listmembers');
       cy.wait(2000);
       cy.get('.fa-edit').click();
       cy.wait(2000);
       cy.get(':nth-child(4) > .form-control').clear().type("25478471");
       cy.wait(2000);
       cy.get('.modal-footer > .btn-primary').click();
       cy.wait(2000);
       cy.get('.swal2-confirm').click();
       cy.wait(2000);
   })
}) 