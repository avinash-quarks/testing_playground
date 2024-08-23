import exp from 'constants';
import { test, expect } from '../../Utils/my-test';

test('Validate wait condition of button visibility', async({loadDelay})=>{

    await loadDelay.navigateToWaitConditionPage();
    await loadDelay.clickToVisibelBtn();
    expect(await loadDelay.waitForVisibleBtn()).toBe(true);
    expect(await loadDelay.validateVisibleBtnText()).toEqual('I just removed my invisibility cloak!!');
})

test('Validate wait condition of stop spinners', async({loadDelay}) => {

    await loadDelay.navigateToWaitConditionPage();
    await loadDelay.clickToStopSpinner();
    expect(await loadDelay.waitForStopSpinner()).toBe(true);
    expect(await loadDelay.validateSpinnerVisibility()).toEqual('Thank God that spinner is gone!');
})

test('Validate State of Enable Button', async({loadDelay,page}) => {

    await loadDelay.navigateToWaitConditionPage();
    await loadDelay.clickToEnableBtn();
    const buttonState = await loadDelay.waitForEnableBtn();
    expect(buttonState).toBe(true);
    expect(await loadDelay.validateEnabledBtnText()).toEqual('Yay! I am super active now!');
})