<script src="js/bootstrap.bundle.min.js"></script>

<script>
    const btns = document.querySelectorAll('.nav-item')
    const barra = document.querySelector('.navbar-collapse')
    const cierre = new bootstrap.Collapse(barra, {
        toogle: true
    })
    btns.forEach((btn) => {
       btn.addEventlistener('click', () => {
           cierre.toogle()
       }) 
    });
</script>