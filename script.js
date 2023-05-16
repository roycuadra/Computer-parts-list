$(document).ready(function() {
    // Sample data for computer parts
    var computerParts = [
      { name: "CPU", image: "assets/img/cpu.jpg", description: "Core i9-13900KS", size: 'cpu' },
      { name: "GPU", image: "assets/img/gpu 4090.jpg", description: "NVIDIA GeForce RTX 4090", size: 'gpu' },
      { name: "RAM", image: "assets/img/ram2.jpg", description: "Corsair Vengeance LPX 16GB", size: 'ram'  },
      { name: "Storage", image: "assets/img/samsung.jpg", description: "Samsung 900 Pro  1TB M.2 SSD",size: 'rom' },
      { name: "Motherboard", image: "assets/img/mb asus.jpg", description: "ASUS ROG Strix Z690-E Gaming",size: 'mb' },
      { name: "Power Supply", image: "assets/img/psu.jpg", description: "Seasonic Focus GX 1000W",size: 'psu' }
    ];

    // Generate HTML for each computer part
    var partsHTML = "";
    for (var i = 0; i < computerParts.length; i++) {
      var part = computerParts[i];
      partsHTML += '<div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">';
      partsHTML += '<div class="card">';
      partsHTML += '<img src="' + part.image + '" class="card-img-top ' + (part.size ? part.size : '') + '" alt="' + part.name + '">';
      partsHTML += '<div class="card-body">';
      partsHTML += '<h5 class="card-title">' + part.name + '</h5>';
      partsHTML += '<p class="card-text">' + part.description + '</p>';
      partsHTML += '</div>';
      partsHTML += '</div>';
      partsHTML += '</div>';
    }



    // Add the generated HTML to the partsList div
    $('#partsList').html(partsHTML);
  });