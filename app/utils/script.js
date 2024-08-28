export const ShowHideSideMenu = () => {
    const sideMenu = document.querySelector('#home #side-menu');

    sideMenu.classList.toggle('show-hidden')
}

export const loadMenu = () => {
    const menu = document.querySelector('#home #menu');
    menu.style.transform = 'translateY(0)';
}

export const loadHeaderTitle = () => {
    const title = document.querySelector('#home #header #header-content .title span');
    title.style.transform = 'translateX(0)'
}

export const loadHeaderDescription = () => {
    const description = document.querySelector('#home #header #header-content .description span');
    description.style.transform = 'translateX(0)'
}

export const loadHeaderButtonGroup = () => {
    const buttonGroup = document.querySelector('#home #header #header-content .button-group');
    buttonGroup.style.visibility = 'visible';
    buttonGroup.style.opacity = 1;
}

export const loadSlider = () => {
    const slider = document.querySelector('#home #header .splide');
    slider.style.visibility = 'visible';
    slider.style.opacity = 1;
}