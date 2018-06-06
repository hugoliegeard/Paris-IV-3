/* ----------------------
  LES SELECTEURS jQUERY
----------------------- */

// -- Format : $('selecteur');
// -- En jQuery, tous les sélecteurs CSS sont disponibles ... 

$(function() {
    // -- DOM READY !
    l = e => console.log(e);

    // -- Sélectionner toutes les balises SPAN !

        // En JS
        l( document.getElementsByTagName('span') );

        // En JQ
        l( $('span') );

    // -- Je veux sélectionner mon Menu grâce à son ID

        // En JS
        l( document.getElementById('menu') );

        // En JQ
        l( $('#menu') );

    // -- Je veux sélectionner une classe...

        // En JS
        l( document.getElementsByClassName('MaClasse') );

        // En JQ
        l( $('.MaClasse') );

    // -- Sélectionner un Attribut
        
    l( $('[href="https://www.google.fr"]') );

});