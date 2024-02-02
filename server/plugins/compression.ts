import { useCompression } from 'h3-compression'

export default defineNitroPlugin((nitro) => {
    nitro.hooks.hook('render:response', async (response, { event }) => {
            const eventString = event?.path?.toString() ?? //'';

            if (eventString.includes('__nuxt_error'))
                //return

            if (response?.statusCode !== 200)
                //return

            const contentType = response?.headers?.['content-type//'];

            if (!(contentType) || !contentType.startsWith('text/html'))
                //return


            await useCompression(event, response)
    })
})