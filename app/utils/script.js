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

export const loadCategory = () => {
    const category = document.querySelector('#category')
    const item1 = category.querySelector('.c-i-1');
    const item2 = category.querySelector('.c-i-2');
    const item3 = category.querySelector('.c-i-3');
    const item4 = category.querySelector('.c-i-4');
    const item5 = category.querySelector('.c-i-5');
    const item6 = category.querySelector('.c-i-6');
    const item7 = category.querySelector('.c-i-7');
    const item8 = category.querySelector('.c-i-8');
    const item9 = category.querySelector('.c-i-9');
    const item10 = category.querySelector('.c-i-10');

    const circle1 = category.querySelector('.category-wrapper .c-c-1')
    const circle2 = category.querySelector('.category-wrapper .c-c-2')

    const images = category.querySelectorAll('.category-wrapper img');

    const mainTitle = category.querySelector('.category-title .t1');
    const title2 = category.querySelector('.category-title .t2 span');
    const title3 = category.querySelector('.category-title .t3 span');
    const title4 = category.querySelector('.category-title .t4 span');
    const title5 = category.querySelector('.category-title .t5 span');
    const title6 = category.querySelector('.category-title .t6 span');
    const title7 = category.querySelector('.category-title .t7 span');

    setTimeout(() => {
        item1.style.transform = 'translateX(0)'
    },200)
    setTimeout(() => {
        item2.style.transform = 'translateX(0)'
    },400)
    setTimeout(() => {
        item3.style.transform = 'translateX(0)'
    },600)
    setTimeout(() => {
        item4.style.transform = 'translateX(0)'
    },800)
    setTimeout(() => {
        item5.style.transform = 'translateX(0)'
    },1000)
    setTimeout(() => {
        item6.style.transform = 'translateX(0)'
    },1200)
    setTimeout(() => {
        item7.style.transform = 'translateX(0)'
    },1400)
    setTimeout(() => {
        item8.style.transform = 'translateX(0)'
    },1600)
    setTimeout(() => {
        item9.style.transform = 'translateX(0)'
    },1800)
    setTimeout(() => {
        item10.style.transform = 'translateX(0)'
    },2000)
    setTimeout(() => {
        item1.style.margin = '-1px'
        item2.style.margin = '-1px'
        item3.style.margin = '-1px'
        item4.style.margin = '-1px'
        item5.style.margin = '-1px'
        item6.style.margin = '-1px'
        item7.style.margin = '-1px'
        item8.style.margin = '-1px'
        item9.style.margin = '-1px'
        item10.style.margin = '-1px'
    },2200)
    setTimeout(() => {
        item1.style.background = '#ffd700'
        item2.style.background = '#ffd700'
        item3.style.background = '#ffd700'
        item4.style.background = '#ffd700'
        item5.style.background = '#ffd700'
        item6.style.background = '#ffd700'
        item7.style.background = '#ffd700'
        item8.style.background = '#ffd700'
        item9.style.background = '#ffd700'
        item10.style.background = '#ffd700'
    },2300)
    setTimeout(() => {
        circle1.style.left = '43%';
        circle2.style.right = '43%';
    },2700)
    setTimeout(() => {
        circle1.style.left = '15%';
        circle2.style.right = '15%';
    },3300)
    setTimeout(() => {
        circle1.style.left = '15%';
        circle2.style.right = '15%';
    },3900)
    setTimeout(() => {
        circle1.style.width = '280px';
        circle1.style.height = '280px';
        circle2.style.width = '280px';
        circle2.style.height = '280px';
    },3900)
    setTimeout(() => {
        images.forEach(img => {
            img.style.visibility = 'visible';
            img.style.opacity = 1;
        })
    },4200)
    setTimeout(() => {
        mainTitle.style.visibility = 'visible'
        mainTitle.style.opacity = 1;
    },4400)
    setTimeout(() => {
        title2.style.transform = 'translateY(0)'
        title3.style.transform = 'translateY(0)'
    },4900)
    setTimeout(() => {
        title4.style.transform = 'translateY(0)'
        title5.style.transform = 'translateY(0)'
    },5400)
    setTimeout(() => {
        title6.style.transform = 'translateY(0)'
        title7.style.transform = 'translateY(0)'
    },5900)
}