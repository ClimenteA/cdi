<script>


import Btn from "../widgets/Btn/Btn.svelte"

let active = true
function toggle(){
    active = !active
}


</script>


<div class="flex flex-col gap-8">

<Btn bind:active on:click={toggle} text="toggle" icon="arrow-right"/>

<Btn text="cauta camera" icon="search"/>

<Btn text="inapoi" icon="arrow-left"/>

<Btn text="home" url="#/"/>

</div>
