<script>

import { db, fire } from "../Utils/fire.js"
import { current_user } from "../Utils/auth.js"

import Table from "../Widgets/Table/Table.svelte"
import Description from "./Description.svelte"

export let camera


let options = {day: 'numeric', month:'short', year:'numeric'}
let data_postarii = new Intl.DateTimeFormat('ro-RO', options).format(camera.data.toDate())





</script>



<article class="mx-auto max-w-2xl bg-white shadow-md md:p-4 mt-4 md:mt-6 p-2 rounded-md">
    
    <div class="flex md:flex-row flex-col-reverse justify-between">
        
        <div class="flex md:flex-row flex-col font-semibold">
            
            <span class="text-xl md:text-2xl">
                <span class="text-green-500">&euro;</span>{camera.buget}   
            </span>

            <span class="text-sm md:text-lg font-normal ml-4 break-words">{camera.locatie}</span>

        </div>

    </div>

    <Description descriere={camera.descriere} />
    <Table data={camera}/>    

</article>
