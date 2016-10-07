console.log('JS funkcni.');

if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += " no-touch";
}