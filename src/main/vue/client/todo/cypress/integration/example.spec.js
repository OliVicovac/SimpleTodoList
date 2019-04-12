const url = 'http://localhost:8080';

context('testing GUI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('Create todo test', () => {
    cy.get('#newTask').type('task')
    cy.get('#newDescription').type('description')
    cy.get('#createTodo').click()
  })

  it('Update todo test', () => {
    cy.get('updTaskId').type('todo_id')
    cy.get('#newTask').type('task')
    cy.get('#updDes').type('description')
    cy.get('#updateTodo').click()
  })

  it('Delete todo test', () => {
    cy.get('#delTask').type('task')
    cy.get('#deleteTodo').click()
  })
});
