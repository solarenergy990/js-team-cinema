import getRefs from "./getRefs";

const refs = getRefs();

const getScroll = () => {
   if (document.documentElement.scrollTop) {
       refs.scrollToTop.classList.add('scroll-show')
   } else {
       refs.scrollToTop.classList.remove('scroll-show')
   }
}

const onScrollTop = () => {
    refs.header.scrollIntoView({behavior: "smooth"});
}

window.onscroll = getScroll;

refs.scrollToTop.addEventListener('click', onScrollTop);