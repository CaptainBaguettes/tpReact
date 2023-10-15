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

function Container(){
    return (
    <div>
        <form className="formulaire" onSubmit={monnomsaffiche}>
            <div className="nameGuest">
                <input type="text" name='nom' defaultValue="Votre nom" />
            </div>
            <div>
            <label >
                Vous êtes :
                <select name="select">
                    <option value="etudiant">Etudiant</option>
                    <option value="enseignant_per">Enseignant permanent</option>
                    <option value="enseignant_con">Enseignant contractuel</option>
                    <option value="enseignant_ext">Intervenant externe</option>
                </select>
            </label>
            </div>
            
            <div className="signIn">
                <label>
                    S'enregistrer :
                </label>
                <input type="submit" value="Allons-y" />
            </div>
        </form>
    </div>)
}

export default Container;