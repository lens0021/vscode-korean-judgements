const menu = document.querySelector('.problem-menu');
const anchor = document.createElement('a');
const listItem = document.createElement('li');

anchor.href = '#';
anchor.innerHTML = 'VS Code';

anchor.addEventListener((e) => {
  // TODO
});

listItem.append(anchor);
menu.append(listItem);
