<script>
    export let title
    export let image
    export let text
</script>

<div class="border-r-2 border-t-2 flex flex-col gap-4 items-center max-w-xs p-8 rounded-md">
    <h4 class="font-semibold text-base md:text-lg text-blue-900">{title}</h4> 
    <img class="h-10 md:h-12 lg:h-16" src="{image}" alt="">
    <p class="text-center text-sm md:text-base">{text}</p>
</div>