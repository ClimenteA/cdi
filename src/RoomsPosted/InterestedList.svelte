<script>

import Btn from "../Widgets/Btn/Btn.svelte"

import { copyToClipboard } from "../Utils/utils.js" 
import { current_user } from "../Utils/auth.js"

export let camera


let mailText = "COPIE EMAIL"
let mailIcon = "copy"
function copyMail() {
    copyToClipboard("emailul utilizator")
    mailText = "EMAIL COPIAT!"
    mailIcon = undefined
    setTimeout(() => {
        mailText = "COPIE EMAIL"
        mailIcon = "copy"
    }, 2500)    
}


let show_des = false
let iconDescription = "chevron-down"
function showDescription(){
    show_des = !show_des
    if (show_des) iconDescription = "chevron-down"
    else iconDescription = "chevron-up"     
}


</script>


<div class="px-3 md:px-6 mb-6">
    <h4 class="border-b-2 mb-6 md:text-sm text-gray-700 text-xs">
        Persoane interesate de anuntul postat
    </h4>
    
    <ul>
        <li>
            <div class="flex gap-2 items-center justify-between">
                <div class="flex gap-2 items-center">
                    <img class="h-12 w-12 object-cover rounded-full" src="{$current_user.photoURL}" alt="">
                    <span>{$current_user.displayName}</span>
                </div>
    
                <div class="flex gap-2 items-center">
                    
                    <Btn on:click={copyMail} text={mailText} icon={mailIcon}/>
                    <Btn on:click={showDescription} active={false} text="VEZI DESCRIERE" icon={iconDescription}/>
    
                    <button  class="bg-red-500 p-1 rounded-md text-white text-xs">
                        <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
            
            <p class:hidden={show_des} class="hidden border-t-2 border-b-2 mt-2 p-2">Descriere utilizator</p>

        </li>
    </ul>
</div>
