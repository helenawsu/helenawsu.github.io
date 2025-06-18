<script>
    import Modal from './Modal.svelte';
    import { onMount } from 'svelte';
    let showModal = false;
    let isMobile = false;

    function checkMobile() {
        isMobile = window.innerWidth < 768;
    }

    onMount(() => {
        checkMobile();
        window.addEventListener('resize', checkMobile);
    });

    function openModal() {
        showModal = true;
    }
</script>

<div class="circle-container">

            {#if isMobile}
                <button class="project-btn" on:click={openModal}>Project</button>
            {:else}
                <div class="circle">
        <div class="content">
                <h1>Project</h1>
                <br>
    <p><a href="https://github.com/helenawsu">Github</a></p>
        </div>
                </div>

            {/if}

</div>

<Modal bind:showModal>
    <span slot="header"><h2>Project</h2></span>
    <p><a href="https://github.com/helenawsu">Github</a> Look at my Github projects</p>
</Modal>

<style>

    .circle p, h1 {
        margin: 0rem;
    }
    h1 {
        font-size: 1.25rem;
    }
    p {
        font-size: 0.75rem;
    }
    a {
        text-decoration: underline;
        color: inherit;
    }
    .project-btn {
        background: #8c975e;
        font-family: "Reddit Mono", monospace;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        margin: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
            @media only screen and (max-width: 768px) {
            p {
        font-size: 1rem;
    }
}
    @media (hover: none) and (pointer: coarse) {
        .circle-container {
            min-width: 30vw;
        }
        h1 {
            font-size: 0.375rem;
        }
        p {
            font-size: 0.375rem;
        }
    }
</style>