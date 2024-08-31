export const ShowHideSideMenu = () => {
    const sideMenu = document.querySelector('#side-menu');

    sideMenu.classList.toggle('show-hidden')
}

export const loadMenu = () => {
    const menu = document.querySelector('#menu');
    menu.style.transform = 'translateY(0)';
}

export const loadHeaderTitle = () => {
    const title = document.querySelector('#header #header-content .title span');
    title.style.transform = 'translateX(0)'
}

export const loadHeaderDescription = () => {
    const description = document.querySelector('#header #header-content .description span');
    description.style.transform = 'translateX(0)'
}

export const loadHeaderButtonGroup = () => {
    const buttonGroup = document.querySelector('#header #header-content .button-group');
    buttonGroup.style.visibility = 'visible';
    buttonGroup.style.opacity = 1;
}

export const loadSlider = () => {
    const slider = document.querySelector('#header .slider-container');
    slider.style.visibility = 'visible';
    slider.style.opacity = 1;
}