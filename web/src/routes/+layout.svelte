<script lang="ts">
    import "ress";
    import "inter-ui/inter.css";
    import "$lib/scss/global.scss";

    const { children } = $props();
</script>

<svelte:options runes={true} />
{@render children?.()}