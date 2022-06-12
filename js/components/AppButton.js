export default {
      template:
          `<button class="bg-gray-200 hover:bg-gray-400 border rounded py-2 px-6 mx-3 disabled:cursor-not-allowed" :disabled="processing">
                          <slot />
                         </button>
                       `,
      data(){
        return {
          processing:false
        }
      }


}