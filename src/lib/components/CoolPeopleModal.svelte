<script>
    import Modal from './Modal.svelte'; // Import the Modal component
    export let showModal;
</script>

<Modal bind:showModal>
    <h3 slot="header">
        A list of cool people
    </h3>

    <ul>
        <li><a href="https://github.com/r2dev2" style="color: black;">r2dev2</a></li>
    </ul>
    <ul>
        <li><a href="https://www.linkedin.com/in/bryanzwu/" style="color: black;">sumguy</a></li>
    </ul>
    <ul>
        <li><a href="https://www.linkedin.com/in/karissa-ning-b743ab1bb/" style="color: black;">treehouse</a></li>
    </ul>
    <ul>
        <li><a href="https://www.linkedin.com/in/annabella-chow/" style="color: black;">choianna</a> </li>
    </ul>
</Modal>
