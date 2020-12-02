import { db, fire } from "../Utils/fire.jsfire.js"


function getSelected(selectedItems){

    let filtered_items = []
    selectedItems.forEach(obj => {
        if (obj.isChecked) {
            filtered_items.push(obj.text)
        }       
    })
    
    return filtered_items
}


async function saveRoom(event, current_user, dotari, facilitati, cerinte){

    let form_data = new FormData(event.target)
    form_data = Object.fromEntries(form_data)
    
    event.target.innerHTML = "Anuntul se salveaza..."

    form_data.buget = Number(form_data.buget)
    form_data.liber = fire.firestore.Timestamp.fromDate(new Date(form_data.liber))

    let owner = {
        proprietar: current_user.displayName,
        email: current_user.email,
        foto: current_user.photoURL,
        data: fire.firestore.FieldValue.serverTimestamp()
    }
    
    form_data = {
        ...form_data, 
        ...owner,
        dotari: getSelected(dotari),
        facilitati: getSelected(facilitati),
        cerinte: getSelected(cerinte),   
    }


    let anunt_ref = await db.collection("anunturi").add(form_data)
    let user_ref = await db.collection("users").where("uid", "==", current_user.uid).get()
    
    if (!user_ref.empty) {
        user_ref.forEach(doc => {
            const docRef = db.collection("users").doc(doc.id)
            docRef.update({
                anunturi_postate: fire.firestore.FieldValue.arrayUnion(anunt_ref)
            })
        })
    } else {
        await db.collection("users").add({
            about_me: "Sectiune necompletata.",
            uid: current_user.uid,
            anunturi_postate: fire.firestore.FieldValue.arrayUnion(anunt_ref)
        })  
    }

    event.target.innerHTML = "Gata..."
    console.log(form_data)

}




export {
    saveRoom
}