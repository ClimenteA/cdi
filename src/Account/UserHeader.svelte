<script>

import { current_user } from "../Utils/auth.js"

</script>


<header class="flex flex-col mt-12">

    <figure class="mx-auto">
        <img class="h-24 w-24 object-cover rounded-full" 
        src="{$current_user.photoURL}" alt="">
    </figure>

    <div class="flex flex-col items-center">
        <span class="font-semibold">
            {$current_user.displayName}
        </span>
        <span class="text-xs text-gray-700">
            {$current_user.email}
        </span>
    </div>

</header>