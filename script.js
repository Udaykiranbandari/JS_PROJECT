const generateForm = document.querySelector(".generate-form");
    const imageGallery = document.querySelector(".image-gallery");

    const generateAiImage = async (userPrompt, userImgQuantity) => {
      const accessKey = "sx4mmuF6tvZfkXeg66hv9Wji728plvu2xnNqWeyGA0I"; 
      const url = `https://api.unsplash.com/search/photos?page=1&query=${userPrompt}&per_page=${userImgQuantity}&client_id=${accessKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch Unsplash images");

        const { results } = await response.json();
        console.log(results);

        const imgCardMarkup = results.map((img) => `
          <div class="img-card">
            <img src="${img.urls.small}" alt="${img.alt_description}" />
            <a href="#" class="download-btn">
           <img src="assets/download.svg" alt="download icon">
         </a>
           </div>
         `).join("");
        

        imageGallery.innerHTML = imgCardMarkup;

      } catch (error) {
        console.error("API Error:", error);
        alert(error.message);
      }
    };

    const handleFormSubmission = (e) => {
      e.preventDefault();
      const userPrompt = e.target[0].value;
      const userImgQuantity = e.target[1].value;

      imageGallery.innerHTML = `<p>Loading images...</p>`;
      generateAiImage(userPrompt, userImgQuantity);
    };
    

    generateForm.addEventListener("submit", handleFormSubmission);
