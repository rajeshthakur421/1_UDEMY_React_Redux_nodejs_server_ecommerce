https://www.geeksforgeeks.org/difference-between-debouncing-and-throttling/
https://medium.com/@amnah.k/debouncing-and-throttling-in-javascript-3c8f8cf5e645


function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Usage example
const onResize = () => {
    console.log('Window resized');
};

window.addEventListener('resize', debounce(onResize, 500));




