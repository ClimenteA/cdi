<script>

import Btn from "../Widgets/Btn/Btn.svelte"

import { current_user } from "../Utils/auth.js"

export let camera


console.log(camera)

</script>


<div class="px-3 md:px-6 mb-6">
    <h4 class="border-b-2 mb-6 md:text-sm text-gray-700 text-xs">
        Persoane interesate de anuntul postat
    </h4>
    
    <ul>
        <li class="flex gap-2 items-center justify-between">
            <div class="flex gap-2 items-center">
                <img class="h-12 w-12 object-cover rounded-full" src="{$current_user.photoURL}" alt="">
                <span>{$current_user.displayName}</span>
            </div>

            <div class="flex gap-2 items-center">
                <Btn text="COPIE EMAIL"/>
                <Btn active={false} text="VEZI DESCRIERE"/>
                <button  class="bg-red-500 p-1 rounded-md text-white text-xs">
                    <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </li>
    </ul>
</div>
