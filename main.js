import { CartIcon, downArrow, LangIcon, LocationIcon, Logo, ProfileIcon, SearchIcon, WishIcon } from "./icons.js";
import ProductCard, { headerLinks } from "./Functions.js";

const locationBtn = LocationIcon();
const productCard = ProductCard();
const lang = LangIcon();

document.getElementById("root").appendChild(productCard);
document.getElementById('location').prepend(locationBtn)
document.getElementById('lang').innerHTML = `${lang} O'zbekcha`
document.querySelector('.logo').innerHTML = Logo()
document.querySelector('.searchBtn').innerHTML = SearchIcon()
document.querySelector('.signInBtn').innerHTML = `${ProfileIcon()} Kirish`
document.querySelector('.wishlistBtn').innerHTML = `${WishIcon()} Sevimlilar`
document.querySelector('.cartBtn').innerHTML = `${CartIcon()} Savat`
document.querySelector('.header-links').innerHTML = `${headerLinks.map((link)=> `<li>${link}</li>`).join('')}`
document.querySelector('.leftBtn').innerHTML = downArrow();
document.querySelector('.rightBtn').innerHTML = downArrow();
