<script>
</script>

<div class="circle-container">
    <div class="circle">
        <div class="content">
            <h2>Code</h2>

        </div>
    </div>
</div>

<style>
    .circle{
        background-color: #a5bd57;
    }
    .circle-container {
        cursor: pointer;
    }

    .circle p, h1 {
        /* margin: 1rem;  Remove default paragraph and heading margins */
        padding: 0;
        margin: 0rem;
        
    }
    h1 {
        font-size: 1.5rem;
    }
    p{
        font-size: 0.75rem;
        text-decoration: underline;
    }
    @media (hover: none) and (pointer: coarse) {

  .circle-container {
      min-width: 20vw; /* Apply min-width for screens smaller than 768px */
  }
  h1 {
    font-size: 0.375rem;
  }
  p {
    font-size: 0.375rem;
  }
}
</style>
