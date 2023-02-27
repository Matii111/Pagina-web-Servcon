function midScroll(event) {
    const viewportHeight = window.innerHeight;
    const middlePoint = (document.body.scrollHeight - viewportHeight) / 2;
    event.preventDefault();
    document.body.scrollTo({ top: middlePoint, behavior: 'smooth' }); // For Safari
    document.documentElement.scrollTo({ top: middlePoint, behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
}

export default midScroll;