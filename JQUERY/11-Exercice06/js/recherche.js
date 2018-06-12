// -- Initialisation de jQuery
$(function() {

    // -- 1. Je récupère la valeur saisie par mon utilisateur
    $('#search').on('change', function() {

        // -- 2. Je récupère la valeur saisie
        let search = $(this).val();
        // console.log($(this));
        // console.log(search);

        $('.resultat').slideUp();
        $('.resultat').empty();

        if( search.length > 0 )  {

            // -- 3. Récupérer la liste de Contacts depuis le Flux JSON
            $.getJSON('https://jsonplaceholder.typicode.com/users', function( contacts ) {

                console.log( contacts );
                
                // $('.resultat').empty();
                
                // -- 4. Parcourir mes contacts
                for( let i = 0 ; i < contacts.length ; i++ ) {
                    
                    // -- 5. Je récupère mon contact en cours dans la boucle
                    let contact = contacts[i];
                    let regex   = new RegExp( search, 'i' );
                    
                    // -- 6. Je souhaite vérifier si la variable " search " correspond à l'une des valeurs des propriétés ( username, email, phone, name ) de notre objet " contact ".
                    // if( contact.username ===  search || contact.name === search || 
                    //     contact.phone === search || contact.email === search ) {
                        
                        if( regex.test(contact.username) || regex.test(contact.name) || 
                        regex.test(contact.email) || regex.test(contact.phone) ) {

                        $(`
                            <div class="membre">
                                <div class="membre_informations">
                                    <p>Nom Complet : ${contact.name}</p>
                                    <p>Username : ${contact.username}</p>
                                    <p>Email : ${contact.email}</p>
                                    <p>Téléphone : ${contact.phone}</p>
                                </div>
                            </div>
                        `).appendTo('.resultat');

                    }


                } // for

                $('.resultat').slideDown();
    
            }); // -- $.getJSON()

        }

    }); // -- $.on(change)

});