import url from 'url';

const myURL = new URL('https://example.org');
myURL.pathname = '/aboutus/home/contact';
myURL.search = 'knowldge';
myURL.username ='Sania003';
myURL.port = 3030
myURL.hash = '#fgh';
console.log(myURL);