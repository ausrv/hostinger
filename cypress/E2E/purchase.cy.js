/// <reference types ="cypress" /> 

import { HomePage } from "../page_objects/home_page";
import { CartPage } from "../page_objects/cart_page";
import { getRandomEmail } from "../support/dataGenerating";
import { getRandomTextData } from "../support/dataGenerating";
import { getRandomNumber } from "../support/dataGenerating";

const homePage = new HomePage()
const cartPage = new CartPage()

beforeEach(() =>{
    homePage.navigateToHomePage()
    homePage.acceptCookies()
})

describe('Order plan', () =>{
    it('Order 24 months plan', () =>{
        homePage.addBusinessWebPlanToCart()
        cartPage.choosePeriod()
        cartPage.enterEmailAddress(getRandomEmail())
        cartPage.selectCardPayment()
        cartPage.fillCardData(getRandomTextData(10), getRandomNumber(16), getRandomNumber(4), getRandomNumber(3))
        cartPage.addCompanyDetails(getRandomTextData(10), getRandomTextData(15))
        cartPage.submitPayment()
        cartPage.assertError()
    })
})