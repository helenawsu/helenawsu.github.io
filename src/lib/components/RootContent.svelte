<script>
</script>

<div class="circle-container">
    <div class="circle">
        <div class="content">
            <h1>Welcome to Helena's Website</h1>
            <p>explore around!</p>
        </div>
    </div>
</div>

<style>
    .circle-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%; 
        aspect-ratio: 1;
        width: max-content;
        padding: 0rem;
         
    }

    .circle {
        display: flex; 
        justify-content: center;
        align-items: center; 
        width: 70%;  
        aspect-ratio: 1;
        background-color: #1f77b4;
        border-radius: 50%;  /* Makes it a circle */
        text-align: center;
        color: white;
    }

    .circle p, .circle h1 {
        margin: 1rem;  /* Remove default paragraph and heading margins */
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center; /* Center the text inside the content div */
        margin: 0rem;
    }
</style>
