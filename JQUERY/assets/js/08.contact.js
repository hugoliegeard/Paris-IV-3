// -- Initialisation de jQuery (DOM READY)
$(function() {
    
    // -- Déclaration de Variables
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    /**
     * Valider une adresse email
     */
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    /**
     * Valider un numéro de téléphone
     */
    var validateTel = tel => {
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        return telReg.test(tel);
    }

    /* --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon Formulaire
    $('#contact').on('submit', function(e) {

        // -- Voir le contenu de l'évènement
        console.log(e);
        console.log(CollectionDeContacts);

        // -- Stopper la redirection de la page
        e.preventDefault();

        // -- Récupération des champs à vérifier
        let prenom, nom, email, tel;
        nom     = $('#nom');
        prenom  = $('#prenom');
        email   = $('#email');
        tel     = $('#tel');

        // -- Vérification des informations...
        let mesInformationsSontValides = true;
        
        // -- Vérification du Prénom
        if( prenom.val().length === 0 ) {
            // -- Le champ est incorrect, car il n'a pas été rempli...
            mesInformationsSontValides = false;
        }

        // -- Vérification du Nom
        if( nom.val().length === 0 ) {
            // -- Le champ est incorrect, car il n'a pas été rempli...
            mesInformationsSontValides = false;
        }

        // -- Vérification du Tel
        if( !validateTel( tel.val() ) ) {
            mesInformationsSontValides = false;
        }

        // -- Vérification du Mail
        if( !validateEmail( email.val() ) ) {
            mesInformationsSontValides = false;
        }

        if(mesInformationsSontValides) {
            
            // -- Tous est correct, Préparation du Contact
            let Contact = {
                //cle       //valeur
                nom         : nom.val(),
                prenom      : prenom.val(),
                email       : email.val(),
                tel         : tel.val()
            };

            // -- Observons dans la console
            console.log(Contact);

            // -- Vérification avec EstCeQunContactEstPresent
            // -- Booleen qui indique la présence d'un contact dans ma collection
            let estPresent = false;

            // -- On parcourt le tableau à la recherche d'une correspondance
            for( let i = 0 ; i < CollectionDeContacts.length ; i++ ) {

                if (Contact.email === CollectionDeContacts[i].email) {
                    estPresent = true;
                    break;
                }

            }

            if(!estPresent) {
                
                // -- Ajouter un Contact dans le tableau de Contacts (CollectionDeContacts)
                CollectionDeContacts.push(Contact);

                // -- Mettre à jour le tableau HTML
                $('.aucuncontact').hide();
                $(`
                    <tr>
                        <td>${Contact.nom}</td>
                        <td>${Contact.prenom}</td>
                        <td>${Contact.email}</td>
                        <td>${Contact.tel}</td>
                    </tr>
                `).appendTo( $('#LesContacts > tbody') );

                // -- Réinitialiser le formulaire
                $('#contact')[0].reset();
                $('#contact').get(0).reset();
                $('#contact').trigger('reset');
                $('#contact .form-control').val('');
                document.getElementById('contact').reset();

                // -- Afficher une notification
               $('.alert-contact').fadeIn().delay(4000).fadeOut();

            } else {                    
                // -- Alerte si contact présent
                alert('ATTENTION\nCe contact est déjà présent !');
                $('#contact').get(0).reset();
            }

        } else {
            // -- Alerte si erreur dans l'un des champs
            alert('ATTENTION\nVeuillez bien remplir tous les champs.');
        }       

    });

}); // -- Fin de jQuery READY !