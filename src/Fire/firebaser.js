import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
import "firebase/performance" // Optional
import "firebase/analytics" // Optional



export default class Firebaser {

    constructor(firebaseConfig, emulatorPort=5005) {
        firebase.initializeApp(firebaseConfig)
        this.FBS = firebase
        this.DB = firebase.firestore()
        this.AUTH = firebase.auth()
        this.BUCKET = firebase.storage()
        this.query_operators = ["<", "<=", "==", ">", ">=", "!=", "array-contains", "array-contains-any", "in", "not-in"]

        if (location.hostname === "localhost") {
            this.DB.settings({ host: `localhost:${emulatorPort}`, ssl: false })
        }
    }

    async add(collectionName, objData){
        if ("_id" in objData) {
            await this.DB.collection(collectionName).doc(objData._id).set(objData)
            return objData._id
        } else {
            let docRef = await this.DB.collection(collectionName).add(objData)
            await this.DB.collection(collectionName).doc(docRef.id).update({"_id": docRef.id})
            return docRef.id
        }   
    }

    async update(collectionName, objDataOld, objDataNew=undefined){
        if ("_id" in objDataOld) {
            await this.DB.collection(collectionName).doc(objDataOld._id).update(objDataOld)
            return objDataOld._id
        } else {
            if (objDataNew === undefined) throw("No '_id' or object to compare specified!")
            let docList = await this.find(collectionName, objDataOld)
            let updated_ids = []
            for (let doc of docList) {
                await this.DB.collection(collectionName).doc(doc._id).update(objDataNew)
                updated_ids.push(doc._id)
            }
            return updated_ids
        }
    }

    async get(collectionName, objId){
        let snap = await this.DB.collection(collectionName).doc(objId).get()
        return snap.data()
    }

    async find(collectionName, objDataOrId, comparison="=="){

        if (typeof(objDataOrId) === typeof('string')) {
            return this.get(collectionName, objDataOrId)
        }

        if (!this.query_operators.includes(comparison)) {
            throw("Only these query operators are accepted: " + this.query_operators.join(", "))
        }

        let ref = this.DB.collection(collectionName)

        let objData = objDataOrId
        for (const key in objData) {
            ref = ref.where(key, comparison, objData[key])
        }

        let snap = await ref.get()
        let data_list = [] 
        if (!snap.empty){
            snap.forEach(res => {
                data_list.push({"_id":res.id, ...res.data()})
            })
        }

        return data_list
    }

    async delete(collectionName, objDataOrId){

        if (typeof(objDataOrId) === typeof('string')) {
            let docID = objDataOrId
            await this.DB.collection(collectionName).doc(docID).delete() 
            return docID
        }

        let objData = objDataOrId
        let docList = await this.find(collectionName, objData)
        let deleted_ids = []
        for (let doc of docList) {
            await this.DB.collection(collectionName).doc(doc._id).delete()
            deleted_ids.push(doc._id)
        }
        return deleted_ids
    }
}



// authentification

// uploading files

// deleting files