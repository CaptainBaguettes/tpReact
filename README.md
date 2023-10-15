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

Dans un manque de temps afin que je puisse effectuer les autres Tps dans le temps disponible en cours, je n'ai pas pu effectuer la partie 4 . 5 . 6

##TP2

Dans ce TP je pu découvrir et appliquer les props. 
Comme pour le premier tp, la première partie était guidée. Et ensuite une partie libre dans laquelle il fallait modifié le TP 1.

Dans ce Tp j'ai pu retrouver le principe de props que je connais de vue.js, une props permet de passer des varibles / objets d'un composant parents à un composant enfant. 

Dans cette partie il était démandé d'utiliser les Hooks et les states local, cependant je n'ai pas vu d'endroit ou cela aurait pu être pertinent.

Une chose que ce Tp m'a appris ou confirmé, c'est que la partie visuel / créatif ce n'est pas fait pour moi, surtout le CSS 😁


## TP3

Dans ce Tp j'ai laissé de côté la partie React web pour passer sur la partie ReactNatif pour les applications mobile.

De plus en ce qui me concerne c'est la première fois que je fais une application mobil non web. 
Donc tout ce chapitre est une découverte pour moi, de la façon de concevoir une appli, les conséquences dans la façon de faire afin de réspecter les bonnes pratiques du développement mobile. 

Ce Tp était comme les deux premiers très guidé au début avec une partie libre, j'ai trouvé ce tp moins intéressant car quasiment rien de nouveau, ormi la liaison avec l'application mobil afin de voir le résultat en direct sur notre smartphone.

## Conclusion

Les Tps m'ont permis de découvrir et de voir les spécificités du frameworks React et du développement mobile, de plus la partie libre m'a permis de chercher des solutions et d'approufondir le cours en allant chercher sur internet et en essayant plusieurs choses.

Les trois tps me permettent d'appréhender plus facilement le projet en équipe.

Le seul petit point que j'aimerai soulever c'est que les tp 1 et 2 occupe la majorité du temps alors que la partie 3, celle que nous devons mettre en place pour le projet, est la plus petite des 3 et la partie libre se concentre uniquement sur le CSS.
