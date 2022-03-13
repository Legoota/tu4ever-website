<script context="module">
    export const load = async ({fetch}) => {
        const res = await fetch("index.json");
        const data = await res.json();

        return {
            props: {
                data,
            },
        };
    };
</script>

<script>
    export let data;
</script>

<textarea>{JSON.stringify(data)}</textarea>