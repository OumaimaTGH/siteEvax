context('login', () => {
    it('successfully loads', () => {
        cy.visit('http://localhost:3000/AppAdmin/login')
        // Fill the email
        cy.get('input[name="email"]').type('siwar@live.fr').should('have.value', 'siwar@live.fr');
  
        // Fill the password
        cy.get('input[name="password"]').type('azerty').should('have.value', 'azerty');
    
        // Locate and submit the form
        cy.get('button[name="submit"]').click();
      
        // Verify the app redirected you to the homepage
        cy.wait(2000);
        cy.visit('http://localhost:3000/AppAdmin/dashboard')

        //cy.visit('http://localhost:3000/AppAdmin/centresdevaccination')
        /*cy.get('button[name="add_center"]').click();

        cy.get('input[name="nom_centre"]').type('Centre manouba').should('have.value', 'Centre manouba');

        cy.get('select[name="gouvernorat"]').click()   
        cy.contains('Beja').click() 

        cy.get('input[name="password"]').type('azerty').should('have.value', 'azerty');

        cy.get('input[name="address"]').type('manouba').should('have.value', 'manouba');

        cy.get('input[name="postal_code"]').type('2021').should('have.value', '2021');

        cy.get('input[name="quantity"]').type('50').should('have.value', '50');*/

        //cy.get('button[name="delete_center"]').click();




      
     
    });
    
  

});