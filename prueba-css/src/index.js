var arrayTest = [1, 2, 3, 3, 2, 1, 4];

document.getElementById("app").innerHTML = `

  <div class="home-page">
      <header class="home-header">
        <h1 class="home-title">Unique Element Challenge</h1>
        <img class="logo" src="./src/assets/logo.svg" alt="ancert logo" />
      </header>

      <main class="main-page-content">

        <section class="first-description-section">
              <h2 class="description-title">Target</h2>
              <p>Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</p>

              <h2 class="description-title">Considerations</h2>
              <ul class="description-list">
                <li>Values are duplicated only twice.</li>
                <li>There is only one non duplicate value.</li>
                <li>The non duplicate value can be placed anywhere on the array.</li>
                <li>The result must be an integer.</li>
              </ul>
        </section>

        <section class="results-section">
            <section class="top-grid-section">
              <h2>Test Data</h2>
              <div class="top-results">${arrayTest}</div>
            </section>
            
            <section class="bottom-grid-section">
              <div class="bottom-grid-left">
                <h2>Expected result</h2>
                <p class="bottom-result">4</p>
              </div>

              <div class="bottom-grid-right">
                <h2>Your Result</h2>
                <p class="bottom-result">4</p>
              </div>
            </section>
        </section>

    </main>  
  </div>
`;
