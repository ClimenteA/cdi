<script>

export let anunt

let show_user = false
function toggle() {
    show_user = !show_user
}


</script>





<div class:md:flex-col={show_user} class="flex md:flex-row flex-col justify-between">

    <div class="font-semibold cursor-pointer">
        <span class="text-xl md:text-2xl text-green-500">&euro;</span>
        <span class="text-xl md:text-2xl">{anunt.buget}</span>
        <span class="text-sm md:text-lg font-normal ml-2">{anunt.locatie}</span>
    </div>

    <div on:click={toggle} class:flex-col-reverse={show_user} class="border-b-2 cursor-pointer flex flex-row gap-2 items-center m-4 md:border-b-0 md:gap-4 md:m-0 md:pb-0 pb-2 self-center">
        <div class="flex flex-col flex-wrap">
            <span class="font-semibold">{anunt.postat_de}</span>
            <span class:text-center={show_user} class:text-right={!show_user} class="text-xs text-gray-700">
                {anunt.data_postarii}
            </span>
        </div>

        <figure>
            <img class:md:h-24={show_user} class:md:w-24={show_user} class="border-green-500 border-2 h-16 w-16 object-cover rounded-full" src="{anunt.foto_utilizator}" alt="">
        </figure>
    </div>

</div>

