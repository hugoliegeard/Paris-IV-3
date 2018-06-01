/* --
    CONSIGNE : 
    
    A partir du tableau fourni, vous devez mettre en place un système d'authentification. 
    Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, 
    et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue 
    avec son nom et prénom (document.write);
            
    En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.  
-- */

var BaseDeDonnees = [
    {'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'},
    {'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf3'},
    {'prenom':'Nathanael','nom':'DORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'}
];

// -- LesFlemards.js
function l(e) {
    console.log(e);
}

function w(f) {
    document.write(f);
}

// 1. Demander à l'utilisateur ces identifiants.
var emailUser = prompt("Rentrez votre Email", "<Saisissez votre email>");
var mdpUser   = prompt("votre mot de passe...", "<Saisissez votre mot de passe>");

/**
 * Vérifie et Identifie un Utilisateur dans le tableau BaseDeDonnées.
 * Retourne l'utilisateur s'il a été trouvé. Sinon Faux.
 * @param {*} emailUser 
 * @param {*} mdpUser 
 */
function connexion(emailUser, mdpUser){
    let IsEmailInArray = false;

    // -- On parcours le tableau d'utilisateurs
    for(let i =0; i < BaseDeDonnees.length; i++ ){

        // -- Si on trouve une correspondance etre l'email / mdp saisie par l'utilisateur et la BDD
        if( emailUser === BaseDeDonnees[i].email && mdpUser === BaseDeDonnees[i].mdp ){
            
            // -- L'email existe bien dans le tableau
            IsEmailInArray = true;

            // -- On retourne l'utilisateur
            return BaseDeDonnees[i]; 
        } 
    }
    return IsEmailInArray;
}

//  3. Si la fonction connexion retourne faux (false)
var monUtilisateur = connexion(emailUser, mdpUser);
if(!monUtilisateur){

    // -- J'affiche une alerte dans le navigateur
    alert ("Attention, email ou mot de passe incorrect")
}
else {

    // -- Sinon, tout va bien, je souhaite la bienvenue.
    w("Bonjour " + monUtilisateur.prenom + " " + monUtilisateur.nom);
    
}
