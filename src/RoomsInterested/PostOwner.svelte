<script>

import { db } from "../Utils/fire.js"

export let show_user
export let camera
export let interesat = false

function makeDate(value, short=true){
    if (short){
        return new Intl.DateTimeFormat('ro-RO', {day: 'numeric', month:'short'})
        .format(value.toDate())

    } else {
        return new Intl.DateTimeFormat('ro-RO', {day: 'numeric', month:'short', year:'numeric'})
        .format(value.toDate())
    }
}



async function getUserData() {
    try {
        let user_ref = await db.collection("users").doc(camera.uid).get()
        return user_ref.data()
    } catch (error) {
        console.error("", error)
    }
}
 
let despre_proprietar
getUserData().then(user_data => {
    despre_proprietar = user_data.despre_mine
})


</script>


<div on:click 
class:flex-col-reverse={show_user} 
class="cursor-pointer flex flex-row gap-2 items-center md:mt-0 mt-4 md:self-center self-end">
    <div class="flex flex-col flex-wrap">
        <span class="font-semibold text-sm">{camera.proprietar}</span>
        <span 
        class:text-center={show_user} 
        class:text-right={!show_user} 
        class="text-xs text-gray-700">
            {makeDate(camera.data, false)}
        </span>
    </div>

    <figure>
        <img 
        class:md:h-24={show_user} 
        class:md:w-24={show_user} 
        class="border-green-500 border-2 h-12 w-12 object-cover rounded-full" 
        src="{camera.foto}" 
        alt=""/>
    </figure>
</div>


{#if show_user}

    <div class="md:px-6 px-3 mt-4">  
        <p class="md:text-sm md:py-6 text-center text-gray-800 text-xs">
            {despre_proprietar}
        </p>
    </div>

    <div class="flex md:items-baseline justify-between px-6 border-t-2 mt-2 md:flex-row flex-col">

        <span class="flex flex-col-reverse md:flex-row mt-2 text-right">
            <button 
            class:bg-blue-500={!interesat}
            class:bg-gray-700={interesat}
            on:click={() => show_user = !show_user} 
            class="focus:outline-none lg:text-base md:text-sm md:mt-4 mt-1 outline-none px-4 py-2 rounded-md self-center table text-white text-xs">
                
                <svg class="inline mr-2 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                INAPOI LA ANUNT
            </button>
        </span>

        <slot></slot>

    </div>

{/if}
