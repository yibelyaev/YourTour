const navBar=document.querySelector(".header"),element=document.querySelector('input[type="tel"]'),maskOptions={mask:"+{7}(000) 000 - 00 - 00"},mask=IMask(element,maskOptions),scroll=()=>{window.scrollY>450?navBar.classList.add("header--scroll"):navBar.classList.remove("header--scroll")};window.addEventListener("scroll",scroll);