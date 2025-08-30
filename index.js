

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
