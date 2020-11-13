<script>

import { current_user } from "../Utils/auth.js"

</script>


<header class="flex flex-col gap-2 items-center m-4 md:gap-4 md:m-0 md:pb-0 pb-2">

    <figure class="mt-10">
        <img class="border-green-500 border-2 h-24 w-24 object-cover rounded-full" 
        src="{$current_user.photoURL}" alt="">
    </figure>

    <div class="flex flex-col flex-wrap">
        <span class="font-semibold text-center">
            {$current_user.displayName}
        </span>
        <span class="text-xs text-gray-700">
            {$current_user.email}
        </span>
    </div>

</header>