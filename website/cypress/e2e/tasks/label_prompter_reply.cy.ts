describe("labeling prompter replies", () => {
  it("completes the current task on submit and on request shows a new task", () => {
    cy.signInWithEmail("cypress@example.com");
    cy.visit("/label/label_prompter_reply");

    cy.get('[data-cy="task"]')
      .invoke("attr", "data-task-type")
      .then((type) => {
        cy.log("Task type", type);

        // For specific task pages the no task available result is normal.
        if (type === undefined) return;

        cy.get('[data-cy="label-options"]').each((label) => {
          // Click the 4th option
          cy.wrap(label).find('[data-cy="radio-option"]').eq(3).click();
        });

        cy.get('[data-cy="review"]').click();

        cy.get('[data-cy="submit"]').click();
      });
  });
});

export {};
