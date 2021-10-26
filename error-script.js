function errorThrown() {
    throw new Error('Crossorigin Error')
}

setTimeout(errorThrown, 1000);
setTimeout(errorThrown, 1000);
