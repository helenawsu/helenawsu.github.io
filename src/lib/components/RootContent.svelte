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

<div class="root-container">
    <div class="root-circle">
        <div class="content">
            {#if isMobile}
                <button class="welcome-btn" on:click={openModal}>Welcome</button>
            {:else}
                <h1>Welcome</h1>
                <p>Helena Su is a third-year at UC Berkeley majoring in EECS and IEOR, with a interest in some stuff.</p>
                <p>Explore around!</p>
            {/if}
        </div>
    </div>
</div>

<Modal bind:showModal>
    <span slot="header"><h2>Welcome</h2></span>
    <p>Helena Su is a third-year at UC Berkeley majoring in EECS and IEOR, with a interest in some stuff.</p>
    <p>Explore around!</p>
</Modal>

<style>
    .root-container {
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1;
        border-radius: 50%;  
        width: 20vw; 
        padding: 0rem;
        z-index: 1;
    }

    a:link,       
    a:visited,    
    a:hover,       
    a:active {
        background-color: rgba(227, 116, 47);
        color: rgb(255, 255, 255);
        padding: 0.2em;
        border-radius: 0.3em;
        display: inline-block;
    }
    .root-circle {
        display: flex; 
        justify-content: center;
        align-items: center; 
        width: auto;  
        aspect-ratio: 1;
        background-color: #5baeac;
        border-radius: 50%;
        text-align: center;
    }
    h1{
        font-size: 1.5rem;
    }
    .welcome-btn {
        background: rgb(227, 116, 47,0);
        font-family: "Reddit Mono", monospace;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 5rem;
        height: 5rem;
        font-size: 1rem;
        cursor: pointer;
        margin: 0rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
    p {
        font-size: 1rem;
    }
    @media only screen and (max-width: 768px) {
            p {
        font-size: 1rem;
    }
        .root-container {
            width: 40vw;
        }
        h1 {
            font-size: 1rem;
        }
    }
</style>