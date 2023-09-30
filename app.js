// New function	
  function displayImagesAndData() {
    const numImages = 6;
    const imageFolder = '/imgs/';
    const csvFile = './imgs/metadata.csv'; // Replace with the path to your CSV file
  
    // Fetch the CSV file
    fetch(csvFile)
      .then(response => response.text())
      .then(data => {
        const rows = data.split('\n');
        let htmlOutput = '';
  
        // Loop through the first six rows
        for (let i = 1; i <= numImages; i++) {
          const columns = rows[i].split(',');
          const title = columns[1]; 
          const webLink = columns[4]; 
          const imageUrl = `${imageFolder}${i}.jpeg`;
  
          // Create the HTML section for each image and data
          const htmlSection = `
              <div class="card">
                <img src="${imageUrl}" class="card-img-top" alt="">
                <div class="card-body">
                  <p class="card-text">
                    ${title}
                  </p>
                  <a href="${webLink}" target="_blank">Visit Website</a>
                </div> <!-- end of card div -->
              </div> <!-- end of card body -->
            </div> <!-- end of image-container -->
          `;
  
          htmlOutput += htmlSection;
        }
  
        // Append the HTML to a target element in your document
        const targetElement = document.getElementById('image-container'); 
        if (targetElement) {
          targetElement.innerHTML = htmlOutput;
        }
      })
      .catch(error => console.error('Error fetching CSV file:', error));
  }
  