import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
import "firebase/performance" // Optional
import "firebase/analytics" // Optional



export default class Firebaser {

    constructor(config, emulatorPort=5005) {
        firebase.initializeApp(config)
        this.FBS = firebase
        this.DB = firebase.firestore()
        this.AUTH = firebase.auth()
        this.BUCKET = firebase.storage()
        this.where_operators = ["<", "<=", "==", ">", ">=", "!=", "array-contains", "array-contains-any", "in", "not-in"]

        if (location.hostname === "localhost") {
            this.DB.settings({ host: `localhost:${emulatorPort}`, ssl: false })
        }
    }

    async add(collectionName, objData){
        let docRef = await this.DB.collection(collectionName).add(objData)
        return docRef.id
    }

    async update(collectionName, objId, objData){
        await this.DB.collection(collectionName).doc(objId).update(objData)
    }

    async get(collectionName, objId){
        let snap = await this.DB.collection(collectionName).doc(objId).get()
        return snap.data()
    }

    async find(collectionName, objDataOrId, comparison="=="){

        if (typeof(objDataOrId) === typeof('string')) {
            return this.get(collectionName, objDataOrId)
        }

        if (!this.where_operators.includes(comparison)) {
            throw "Only these operators are accepted: https://firebase.google.com/docs/firestore/query-data/queries#query_operators"
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
                data_list.push({id:res.id, ...res.data()})
            })
        }

        return data_list
    }

    async delete(collectionName, objId){
        await this.DB.collection(collectionName).doc(objId).delete()
    }




}



// authentification


// posting data

// updating data

// quering  data

// deleting data

// uploading files

// deleting files