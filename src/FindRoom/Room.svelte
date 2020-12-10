<script>

import { db, fire } from "../Utils/fire.js"
import { current_user } from "../Utils/auth.js"

import Table from "../Widgets/Table/Table.svelte"
import Description from "./Description.svelte"

export let camera


let options = {day: 'numeric', month:'short', year:'numeric'}
let data_postarii = new Intl.DateTimeFormat('ro-RO', options).format(camera.data.toDate())


let show_user = false
function toggle() {
    show_user = !show_user
}

</script>


<article class="min-w-2xl bg-white shadow-md md:p-4 mt-4 md:mt-6 mx-auto p-2 rounded-md">
    
    <div class="flex md:flex-row flex-col justify-between">
        
        <div class="font-semibold cursor-pointer">
            <span class="text-xl md:text-2xl text-green-500">&euro;</span>
            <span class="text-xl md:text-2xl">{camera.buget}</span>
            <span class="text-sm md:text-lg font-normal ml-2">{camera.locatie}</span>
        </div>


        <div on:click={toggle} class:flex-col-reverse={show_user} class="border-b-2 cursor-pointer flex flex-row gap-2 items-center m-4 md:border-b-0 md:gap-4 md:m-0 md:pb-0 pb-2 self-center">
            <div class="flex flex-col flex-wrap">
                <span class="font-semibold">{camera.proprietar}</span>
                <span class:text-center={show_user} class:text-right={!show_user} class="text-xs text-gray-700">
                    {data_postarii}
                </span>
            </div>
    
            <figure>
                <img class:md:h-24={show_user} class:md:w-24={show_user} class="border-green-500 border-2 h-16 w-16 object-cover rounded-full" src="{camera.foto}" alt="">
            </figure>
        </div>
    
    </div>

    <Description descriere={camera.descriere} />
    <Table data={camera}/>    

</article>
