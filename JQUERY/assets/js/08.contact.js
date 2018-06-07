// -- Initialisation de jQuery (DOM READY)
$(function() {
    
    // -- Déclaration de Variables
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
    function ajouterContact(UnContact) {}

    // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
    function reinitialisationDuFormulaire() {}

    // -- Affichage d'une Notification
    function afficheUneNotification() {}

    // -- Vérification de la présence d'un Contact dans Contacts
    function estCeQunContactEstPresent(UnEmail) {}

    // -- Vérification de la validité d'un Email
    // : https://paulund.co.uk/regular-expression-to-validate-email-address
    function validateEmail(email){}

    /* --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon Formulaire
    $('#contact').on('submit', function(e) {

        // -- Voir le contenu de l'évènement

        // -- Stopper la redirection de la page

        // -- Récupération des champs à vérifier

        // -- Vérification des informations...
        
        // -- Vérification du Prénom

        // -- Vérification du Nom

        // -- Vérification du Tel

        // -- Vérification du Mail

        if(...) {
            
            // -- Tous est correct, Préparation du Contact

            // -- Observons dans la console
            console.log(Contact);

            // -- Vérification avec EstCeQunContactEstPresent
            if(!estCeQunContactEstPresent(...) {
                
                // -- Ajout du Contact
                ajouterContact(Contact);

            } else {                    
                // -- Alert si contact présent
            }

        } else {
            // -- Alert si erreur dans l'un des champs
        }       

    });

}); // -- Fin de jQuery READY !