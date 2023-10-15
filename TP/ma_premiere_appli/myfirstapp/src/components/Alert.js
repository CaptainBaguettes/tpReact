function Alert(name, role){
    if(role === "enseignant_per"){
        role = "Enseignant Permanent";
    }else if(role ==="enseignant_ext"){
        role = "Enseignant Extérieur";
    }else if(role === "enseignant_con"){
        role = 'Enseignant Contractuel';
    }else{
        role = "Etudiant";
    }

    return( alert(`🎊 Bienvenue à ESGI Party ${name}, ${role} ! 🎊`));
};

export default Alert;