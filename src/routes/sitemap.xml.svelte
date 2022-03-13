<script context="module">
    export const load = async ({fetch}) => {
        const res = await fetch("sitemap.xml");

        return {
            props: {
                res,
            },
        };
    };
</script>

<script>
    export let res;
</script>

<textarea>{res}</textarea>