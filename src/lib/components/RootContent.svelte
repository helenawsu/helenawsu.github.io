<script>
</script>

<div class="root-container">
    <div class="root-circle">
        <div class="content">
            <h1>Welcome</h1>
            <p>Helena Su is a third-year at UC Berkeley majoring in EECS and IEOR, with a interest in some stuff.</p>
            <p>Explore around!</p>

        </div>
    </div>
</div>

<style>
    .root-container {
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1;
        border-radius: 50%;  
        /* idk why the below fix but it did */
        width: 20vw; 
        padding: 0rem;
        z-index: 1;
    }

    a:link,       
    a:visited,    
    a:hover,       
    a:active {
    background-color: rgb(227, 116, 47); /* Highlight color */
    color: rgb(255, 255, 255); /* Text color */
    padding: 0.2em; /* Adds some space around the text */
    border-radius: 0.3em; /* Rounded corners */
    display: inline-block; /* Ensures the padding and border-radius apply only to the text */
    }
    .root-circle {
        display: flex; 
        justify-content: center;
        align-items: center; 
        width: auto;  
        aspect-ratio: 1;
        background-color: #5baeac;
        border-radius: 50%;  /* Makes it a circle */
        text-align: center;
        
    }

    /* .circle p, .circle h1 {
        margin: 1rem;  
    } */
    h1{
        font-size: 1.5rem;
    }
    p {
        margin: .5rem;
    }
    @media only screen and (max-width: 768px) {

h1 {
  font-size: 1rem;
}
p {
  font-size: 0.625rem;
}
}
</style>
