<script>

export let name
export let id = name
export let label = undefined
export let type = "text"
export let placeholder = ""
export let value = ""


function today() {
    let d = new Date()
    let currDate = d.getDate()
    let currMonth = d.getMonth()+1
    let currYear = d.getFullYear()
    return currYear + "-" + ((currMonth<10) ? '0'+currMonth : currMonth )+ "-" + ((currDate<10) ? '0'+currDate : currDate )
}

if (type === "date") {
    value = today()
}

</script>


<label for="{id}" class="mt-2">
    <span>
        {#if label}
            <span class="text-gray-700 md:text-sm text-xs">{label}</span>  
        {/if}         
        <slot></slot>
    </span>

    {#if type === "textarea"}
        <textarea bind:value {placeholder} {name} {id} required spellcheck="false" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' class="h-16 py-2 mt-1 px-3 rounded-md bg-white text-blue-900 md:text-sm text-xs w-full outline-none"></textarea>
    {:else}
        <input bind:value {placeholder} {name} {id} required spellcheck="false" class="h-8 mt-1 px-3 rounded-md bg-white text-blue-900 md:text-sm text-xs w-full outline-none">
    {/if}

</label>
