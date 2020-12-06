<script>

import Table from "../Widgets/Table/Table.svelte"
import Description from "./Description.svelte"
import Actions from "./Actions.svelte"

export let camera


let options = {day: 'numeric', month:'short', year:'numeric'}
let data_postarii = new Intl.DateTimeFormat('ro-RO', options).format(camera.data.toDate())


function stergeAnuntul(){
    console.log("sterge anuntul")
}


</script>



<article class="max-w-2xl bg-white md:p-4 mt-4 md:mt-6 mx-auto p-2 rounded-md"> 


    <div class="flex md:flex-row flex-col justify-between">
        
        <div class="font-semibold cursor-pointer">
            <span class="text-xl md:text-2xl text-green-500">&euro;</span>
            <span class="text-xl md:text-2xl">{camera.buget}</span>
            <span class="text-sm md:text-lg font-normal ml-2">{camera.locatie}</span>
        </div>

        <button on:click={stergeAnuntul} class="bg-red-500 focus:outline-none mb-2 mt-3 outline-none px-3 py-1 rounded-md self-center table text-white text-xs">
            STERGE
        </button>
    
    </div>

    <Description descriere={camera.descriere} />
    <Table data={camera}/>    
    <Actions data_liber={camera.liber} />

</article>
