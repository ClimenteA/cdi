<script>

import Options from "../Widgets/Options/Options.svelte"
import { criterii_camera } from "../Stores/criterii-camera.js"

let dotari = criterii_camera.dotari



</script>


<Options name="Dotari" bind:data_list={dotari}/>