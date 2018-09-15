Feature('Boilerplate');

Scenario('Boilerplate', async (I) => {
  await I.amOnPage('');

  I.see('Hello World');
});
