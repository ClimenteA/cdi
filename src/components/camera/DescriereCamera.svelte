<script>

import Table from "./Table.svelte"

export let descriere_camera
export let criterii_camera


</script>


<div class="px-3 md:px-6">
            
    <h4 class="font-semibold text-xs md:text-sm">
        Descriere
    </h4>
    
    <p class="mt-2 text-gray-800 text-xs md:text-sm">
        {descriere_camera}
        <!-- <span class="text-green-500 font-semibold cursor-pointer py-2">mai mult</span> -->
    </p>

    <Table data={criterii_camera}/>

</div>


