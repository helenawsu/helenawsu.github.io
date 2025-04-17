<script>
    import Modal from './Modal.svelte'; // Import the Modal component
    export let showHotModal; // Use showHotModal to match the parent binding

    $: console.log("HotPeopleModal showHotModal:", showHotModal); // Debugging log
</script>

<Modal bind:showModal={showHotModal}>
    <h3 slot="header">
        A list of hot people
    </h3>

    <ul>
        <li><a href="https://www.linkedin.com/in/minrui-lu/" style="color: black;">LMR</a></li>
    </ul>
</Modal>
