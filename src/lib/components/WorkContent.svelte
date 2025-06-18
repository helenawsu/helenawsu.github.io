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
                <button class="welcome-btn" on:click={openModal}>Work</button>
            {:else}
                <div class="circle">
        <div class="content">
                <h1>Work</h1>
            <br>
                <p>VPG Apps Intern </p>
                    <p> @ Apple</p>
                                <br>

                <p>AI SWE Intern </p><p> @ Labyrinth</p>
                <br>
                <p><a href="https://www.youtube.com/watch?v=4SiNQYElEmE">Acessible XR Research Assistant</a> </p>
                <p>@ Cornell Tech</p>
                        </div>
    </div>
            {/if}
            

</div>

<Modal bind:showModal>
    <span slot="header"><h2>Work</h2></span>
    <p>VPG Apps Intern @ Apple</p>
    <p>AI SWE Intern @ Labyrinth</p>
    <p>
        <a href="https://www.youtube.com/watch?v=4SiNQYElEmE">XR Research Assistant</a> @ Cornell Tech
    </p>
    
</Modal>

<style>
    .circle p, h1 {
        /* margin: 1rem;  Remove default paragraph and heading margins */
        margin: 0rem;
        padding: 0;
        
    }
    h1 {
        font-size: 1.5rem;
    }
    p{
        font-size: 0.75rem;
    }
        .welcome-btn {
        background: #8c975e;
        font-family: "Reddit Mono", monospace;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 4em;
        height: 4em;
        margin: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
    a { color: inherit; text-decoration: none; }
    @media (hover: none) and (pointer: coarse) {

  .circle-container {
      min-width: 30vw; /* Apply min-width for screens smaller than 768px */
  }
  h1 {
    font-size: 0.375rem;
  }
  p {
    font-size: 0.375rem;
  }
}


</style>