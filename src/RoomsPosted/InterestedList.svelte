<script>

import Btn from "../Widgets/Btn/Btn.svelte"

import { copyToClipboard } from "../Utils/utils.js" 
import { current_user } from "../Utils/auth.js"
import { db } from "../Utils/fire.js"

export let camera

async function interestedUsers() {
    
    let interestedList = []
    for (let uid of camera.interesati) {
        let interested = await db.collection("users").doc(uid).get()
        interestedList.push(interested.data())
    }
    console.log(interestedList)
    return interestedList
}


let mailText = "COPIAZA EMAIL"
let mailIcon = "copy"
function copyMail(email) {
    copyToClipboard(email)
    user_description = false
    mailText = "EMAIL COPIAT!"
    mailIcon = undefined
    setTimeout(() => {
        mailText = "COPIAZA EMAIL"
        mailIcon = "copy"
    }, 2500)    
}


let user_description = false
function showDescription(){
    user_description = !user_description     
}




</script>


<div class="px-3 md:px-6 mb-6">
    <h4 class="border-b-2 mb-6 md:text-sm text-gray-700 text-xs">
        Persoane interesate de anuntul postat
    </h4>
    
    <ul>

        {#await interestedUsers()}
            
            <p>Se incarca</p>
        
        {:then users}

            {#if users.length > 0}

                {#each users as interested}

                    <li>
                        <div class="flex flex-wrap gap-2 items-center justify-between">
                            <div class="flex gap-2 items-center">
                                <img class="h-12 w-12 object-cover rounded-full" src="{interested.foto}" alt="">
                                <span class="font-semibold text-md">{interested.name}</span>
                            </div>
                
                            <div class="flex gap-2 items-center">
                                
                                <Btn on:click={() => copyMail(interested.email)} active={false} text={mailText} icon={mailIcon}/>
                                
                                {#if user_description}
                                    <Btn on:click={showDescription} text="MAI MULT" icon="chevron-up"/>
                                {:else}
                                    <Btn on:click={showDescription} text="MAI MULT" icon="chevron-down"/>
                                {/if}
                
                            </div>
                        </div>
                        
                        {#if user_description}
                            <p class="border-b-2 mt-2 p-2 text-sm">
                                {interested.despre_mine}
                            </p>
                        {/if}

                    </li>

                {/each}
            {:else}
                <p>Nici o persoana interesata de anuntul postat</p>
            {/if}            
            
        {/await}

    </ul>
</div>
