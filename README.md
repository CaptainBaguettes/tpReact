# compte rendu des tps
## TP1
Durant ce TP j'ai pu découvrir la façon de travailler avec React, de mon côté je suis assez familiarisé avec les frameworks JavaScript car en entreprise je travail avec VueJs, et côté personnel je travail avec Angular.
J'ai pu abordé ce TP de façon plus à l'aise sans perdre trop de temps à decouvir tous le framework et son language.
Durant le tp, les premières parties ont été guidées ce qui m'a permis de pratiquer et mieux appréhender ce nouveau language.

Concernant la partie libre du tp j'ai pu mettre en place différentes choses dont je suis plutot content :

```
function Guest (){
    return ["Gégé", "Beber", "Jean-marie", "Filou"];
}

export default Guest;

```

Dans ce composant j'ai externalisé la liste d'invité afin d'éviter la duplication du code, même si dans ce cas la particulièrement la liste devrait être récupéré d'une api donc ête implémenté dans un service. C'est ce que j'ai voulu reproduire ici.

DOnc pour pouvoir utiliser ça j'ai importer le composant dans ma page et utilisé afin de faire les différents filtres.

```
import Alert from "./Alert";
import Guest from "./Guest";

function monnomsaffiche(nameGuest) {
    nameGuest.preventDefault();
    let guest = Guest();
    let value = nameGuest.target['select'].value;
    let name = nameGuest.target['nom'].value;
    if(guest.includes(name)){
        Alert(name, value);
    }else{
        alert(`le nom : ${name} n'est pas dans la liste des invités`);
    }
}

```

##TP2
