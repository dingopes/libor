console.log('This would be the main JS file.');
if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += " no-touch";
}