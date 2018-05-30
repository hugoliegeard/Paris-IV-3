    // -- Déclarer un Tableau Indexé.
    var monTableau = [];
    var myArray    = new Array;

    monTableau[0] = "Hugo";
    monTableau[1] = "Demmy";
    monTableau[2] = "Charlotte";

    console.log(monTableau); // -- Affiche toutes les données du tableau
    console.log(monTableau[1]); // -- Demmy
    console.log(monTableau[2]); // -- Charlotte

    var NosPrenoms = [ "Sylvain", "Wahib", "Marine", "Robin", "Julien", "Nicolas" ];
    console.log(NosPrenoms);

    // -- Déclarer et Affecter des valeurs à un Objet
    var Coordonnee = {
        prenom  : "Hugo",
        nom     : "LIEGEARD",
        age     : 28
    };

    console.log(Coordonnee);
    console.log(Coordonnee['prenom']);
    console.log(Coordonnee.nom);

    var AnnuaireDesApprenants = [
        
        ["Hugo", "LIEGEARD", "0783 97 15 15"],
        ["Charlotte", "MULLER", "XXXX XX XX XX"],
        { prenom: "Robin", nom: "TOURNIER", tel: "XXXX XX XX 89" },
        { prenom: "Nicolas", nom: "STAUDRE", tel: "0680 XX 18 XX" },
        
    ];

    console.log(AnnuaireDesApprenants);
    console.clear();

    //  -- Exemple avec un tableau 3D

    var Contacts = [
        {
            prenom: "Hugo",
            nom: "LIEGEARD",
            coordonnees: {
                email: "wf3@hl-media.fr",
                adresse: {
                    ville : "Ducos",
                    cp: 97224,
                    region: "Martinique",
                    pays: {
                        code: "FR",
                        nom: "France"
                    }
                },
                tel: {
                    fixe: "+ 596 596 108 328",
                    fax: "+596 596 108 632",
                    port: "+33 783 97 15 15"
                }
            }
        },
        {
            prenom: "Rodrigue",
            nom: "NOUEL",
            coordonnees: {
                email: "wellcommunication@gmail.com",
                adresse: {
                    ville : "Fort-de-France",
                    cp: 97200,
                    region: "Martinique",
                    pays: {
                        code: "FR",
                        nom: "France"
                    }
                },
                tel: {
                    fixe: "+ 596 596 XX XX XX",
                    fax: "",
                    port: "+596 696 07 04 34"
                }
            }
        },
        {
            prenom: "Robin",
            nom: "TOURNIER",
            coordonnees: {
                email: "robin.tournier@gmail.com",
                adresse: {
                    ville : "Paris",
                    cp: 75016,
                    region: "Ile-de-France",
                    pays: {
                        code: "FR",
                        nom: "France"
                    }
                },
                tel: {
                    fixe: "",
                    fax: "",
                    port: "+33 XX XX XX XX"
                }
            }
        },
    ];

    console.log(Contacts);
    console.log(Contacts[0].coordonnees.adresse.pays.nom);

/* -------------------------------
        AJOUTER UN ELEMENT
-------------------------------- */

var Couleurs = [ "Rouge", "Jaune", "Vert" ];
console.clear();

// -- Si je souhaite ajouter une couleur dans mon tableau
// -- Je fais appel à la fonction push()
console.log(Couleurs);

Couleurs.push("Orange");
Couleurs.unshift("Bleu");

console.log(Couleurs);

// -- NB : La function unshift() permet d'ajouter un ou plusieurs éléments en début de tableau.

/* --------------------------------------------
    RECUPERER ET SORTIR LE DERNIER ELEMENT
--------------------------------------------- */

/**
 * La fonction pop() me permet de supprimer un ou plusieurs éléments 
 * de mon tableau et d'en récupérer la valeur. Je peux accessoirement
 * récupérer cette valeur dans une variable.
 */

 var monDernierElement = Couleurs.pop();
 console.log(Couleurs);
 console.log(monDernierElement);

 /**
  * La même chose est possible avec le premier élément en utilisant shift()
  * La fonction splice() vous permet de faire sortir un ou plusieurs éléments.
  */
  