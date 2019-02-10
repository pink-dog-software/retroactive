require('./puppeteer_setup')
Feature('Retroactive')

Scenario('Retroactive', async I => {
  await I.amOnPage('')

  I.see('Retroactive')

  I.click('#list-header-add-0')
  I.waitForElement('#add-card-0')
  I.fillField('#add-card-text-0', 'this text will be cleared')
  I.click('#add-card-clear-button-0')
  I.seeInField('#add-card-text-0', '')
  I.fillField('#add-card-text-0', 'this text will be saved')
  I.click('#add-card-save-button-0')
  I.seeInField('#add-card-text-0', '')

  I.waitForElement('#retro-card-0-3')
  I.see('this text will be saved', '#retro-card-0-3')
  I.see('0', '#retro-card-0-3')

  I.click('#retro-card-0-3-likes')
  I.click('#retro-card-0-3-likes')
  I.see('2', '#retro-card-0-3')
})
