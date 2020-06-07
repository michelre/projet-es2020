/**
 * Dynamics imports
 */
/*import('./dynamic-import-module')
    .then(
        (module) => console.log(module.subtract(2, 1))
    ).catch(err => console.log(err))*/
import "regenerator-runtime/runtime.js";

(async function(){
    await new Promise((res) => setTimeout(() => res(), 5000))
    const {subtract} = await import('./dynamic-import-module')
    console.log(subtract(2, 1))
})()