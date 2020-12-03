<script>

export let message = "Info message"
export let info = true

</script>


<div 
    class:border-green-500={info} class:border-red-500={!info} 
    class="absolute bg-blue-900 border-l-8 bottom-0 left-0 mb-4 ml-4 p-2 pr-4 rounded-r-md shadow-md text-right text-white w-48 z-20"
>
    
{message}

</div>

