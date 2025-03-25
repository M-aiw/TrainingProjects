document.querySelectorAll('.flip_Btn').forEach(button => {
    button.addEventListener('click', function () {
        this.closest('.card').classList.toggle('flipped');
    });
});
