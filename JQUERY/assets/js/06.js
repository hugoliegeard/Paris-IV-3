/* --------------------------------
  LES SELECTEURS D'ENFANTS jQUERY
-------------------------------- */

$(function() {

    l = e => console.log(e);

    // -- Je souhaite selectionner toutes les divs de ma page
    l( $('div') );

    // -- Je souhaite sélectionner la balise nav de ma page
    l( $('#menu') );

    // -- Je souhaites tous les éléments descendants directs (enfants) qui sont dans "nav"
    l( $('#menu').children() );

    // -- Parmi ces descendants, uniquement l'éléments "ul"
    l( $('#menu').children('ul') );

    // -- Je souhaite récupérer tous les éléments "li" de mon "ul"
    l( $('#menu').children('ul').find('li') );

    // -- Je souhaite récupérer uniquement le 2ème élément de mes "li"
    l( $('#menu').find('li').eq(1) );

    // -- Je souhaite connaitre le voisin immédiat de mon "menu"
    l( $('#menu').next() );  
    l( $('#menu').next().next() );  // -- Le voisin du voisin
    l( $('#menu').prev() );  // -- Le voisin d'avant

    // -- LES PARENTS
    l( $('#menu').parent() );

});