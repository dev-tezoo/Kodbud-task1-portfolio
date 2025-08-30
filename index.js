

linksIcon = document.querySelector('.links-icon')
linksTab = document.querySelector('.link-tab')
arrowUp = document.querySelector('.arrow-up')

linksIcon.addEventListener('click', () => {
    linksTab.style.top = '100%';
    linksTab.style.opacity = '1';
    linksIcon.style.display = 'none';
    arrowUp.style.display = 'block';
});

arrowUp.addEventListener('click', () => {
    linksTab.style.top = '-900%';
    linksTab.style.opacity = '0';
    linksIcon.style.display = 'block';
    arrowUp.style.display = 'none';
});



day = document.querySelector('.day')
night = document.querySelector('.night')
body = document.querySelector('body')
page1Text = document.querySelector('.p1')
page1Text2 = document.querySelector('.p2')
card1 = document.querySelector('.page2-content')
card2 = document.querySelector('.page2-projects')
card3 = document.querySelector('.skill')

day.addEventListener('click', () => {
    body.style.backgroundColor = '#ffffff'
    body.style.color = '#000000'
    day.style.display = 'none'
    night.style.display = 'block'
    page1Text.style.color = '#414141'
    page1Text2.style.color = '#414141'
    card1.style.backgroundColor = '#4e4e4eff'
    card2.style.backgroundColor = '#4e4e4eff'
    card3.style.backgroundColor = '#4e4e4eff'
})

night.addEventListener('click', () => {
    body.style.backgroundColor = '#000000'
    body.style.color = '#ffffff'
    night.style.display = 'none'
    day.style.display = 'block'
    page1Text.style.color = '#7e7e7eff'
    page1Text2.style.color = '#7e7e7eff'
    card1.style.backgroundColor = '#000000'
    card2.style.backgroundColor = '#000000'
    card3.style.backgroundColor = '#000000'
})



submitBtn = document.querySelector('.form button')
submitBtn.addEventListener('click', (e) => {
    alert('Form submitted');
});