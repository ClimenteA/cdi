<script>

import Firebaser from "./Fire/firebaser.js"

const firebaseConfig = {
    apiKey: "AIzaSyA7CZB5SY3BI5bgFBS0sO86l6OlgDN9BmY",
    authDomain: "cdi-firebase.firebaseapp.com",
    databaseURL: "https://cdi-firebase.firebaseio.com",
    projectId: "cdi-firebase",
    storageBucket: "cdi-firebase.appspot.com",
    messagingSenderId: "851561307188",
    appId: "1:851561307188:web:d1c00e1aaf818ee9b8fe61",
    measurementId: "G-YRBTWP52ZP"
}

const fbs = new Firebaser(firebaseConfig)

async function addSomeData() {

    let id = await fbs.add("testCollectionName", {"data": "sample data", "somedata": "another data"})
    console.log("Added docId", id)

    await fbs.update("testCollectionName", id, {"somedata": "changed data", "addedNewData": "value"})
    console.log("Updated docId", id)

    let docData = await fbs.find("testCollectionName", id)
    console.log("Document got by id:", docData)

    let uqid = await fbs.add("testCollectionName", {"unique": "sample data"})
    console.log("New doc added", uqid)

    let dataFound = await fbs.find("testCollectionName", {"unique": "sample data"}) 
    console.log("Doc list found from object: ", dataFound)
    
    await fbs.delete("testCollectionName", uqid)
    console.log("Deleted docId", uqid)

}


addSomeData()


</script>


