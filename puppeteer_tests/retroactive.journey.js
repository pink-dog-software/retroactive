Feature('Retroactive')

Scenario('Retroactive', async I => {
  await I.amOnPage('')

  I.see('Retroactive')
})
