document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const itemsPerPage = 5; // Number of items to show per page/group
    const items = document.querySelectorAll('.navbar li:not(.control)');
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    function updateNavItems() {
        items.forEach((item, index) => {
            item.style.display = 'none'; // Hide all items by default
            if (index >= currentIndex * itemsPerPage && index < (currentIndex + 1) * itemsPerPage) {
                item.style.display = 'block'; // Show only the current group of items
            }
        });
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalPages) % totalPages;
        updateNavItems();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalPages;
        updateNavItems();
    });

    updateNavItems(); // Initialize the navigation bar display
});

document.querySelectorAll('.icon').forEach(item => {
    item.addEventListener('click', event => {
      console.log('Icon clicked:', event.target.className);
      // Add any additional JavaScript actions here.
    });
  });


document.querySelectorAll('.square-image').forEach(image => {
  image.addEventListener('click', () => {
    console.log('Image clicked:', image.alt);
    // You can add more actions here if needed.
  });
}); 

// Define an example project details object
const projectDetails = {
  "Privacy-Preserving Machine Learning": {
      objective: "I am working with a PHD student to prove the concept of a physical side channel attack while wearing a VR headset using machine learning.",
      role: [
          "Assigned to devise a machine vision model to gather and predict the privacy data (keystrokes, passwords) of a VR user through actions "
      ],
      media: ["assets/Privacy-Preserving Machine Learning.png"],
      mediaLink: [""]
  },
  "AR Glasses": {
      objective: "This is a collaboration with MBA student to create a AR glasses from scratch. We want to create Augmented Reality (AR) glasses that enhances the real-world environment with virtual information and elements in a seamless and interactive way. Our goal is to create a product can perform the tasks of many different devices. ",
      role: [
          "Labeled dataset of 500 images and trained a custom marker detection model for AR glass using Tensor Flow, python and Edge impulse.",
          "Assigned to implement a small scale speech to text and NLP model for AR glasses"
      ],
      media: ["assets/Trained model.png", ""],
      mediaLink: ["https://youtube.com/shorts/tfXNxV9eIvs?si=2O0iPkD2oeySDnWO"]
  },
  "IEEE:IDEA Hacks": {
    objective: "The UCLA Idea Hack was a 36 hour event where groups of up to 5 people created a product that pertained to various event categories. My group of 5 designed Roshambot, an interactive AI agent with a Robotic to play Rock-Paper-Scissors to win a reward at the end. Over the course of a short 36 hours we managed to iterate through multiple mechanical designs, plan an electrical system, and code and integrate all components to create a cohesive product. And we got 3rd place overall out of 70 teams.",
    role: [
        "Coded machine vision algorithm and AI algorithm using OpenCV, python, and C++ ",
        "In charge of hardware components, wiring and powering the system  "
    ],
    media: ["assets/IEEEIDEAHacks12.png"],
    mediaLink: ["https://www.youtube.com/watch?v=AlyoRwPH7EA"]
  },
  "Jamming Robot": {
    objective: "In this I had to build a pipeline to find optimum tension and compressions of material for a soft robot. Using those information gained from the pipeline, I coded a jamming robot.",
    role: [
        "Developed pipeline to parse 1170 raw data files of tensions and compressions of a miniature soft robotic system.",
        "Increased the efficiency of data processing by 10 times using sorting algorithms and python scripting.",
        "Utilized processed data to increase the reliability by 25% of the miniature soft robotic system and calibrated the system to achieve maximum performance."
    ],
    media: ["assets/Graph of Compressions.png", "assets/Graph of Tensions.png"],
    mediaLink: [""]
  },
  "Foray: Manual and Autonomous Blimp": {
    objective: "FORAY is a project at UCLA LEMUR, a research lab, that involves the programming and manufacturing of Lighter-than-Air (LTA) robots like blimp. The goal of this project, in collaboration with the government, is to discover the most efficient way to control and to solve pragmatic problems involving these LTAs by placing LTA robots in a competition where they would catch green balls and shoot them to a goal.",
    role: [
        "Researched effective ways and created algorithms to make the LTA robot hover in front of a green ball with the use of vision processing and PID control.",
        "Programmed the LTA robots be controlled through manual and autonomous control with the help of PyGame.",
        "Found the best camera that enables the blimp to hover in front of the green ball efficiently (cameras used include OpenMV, ESP32 cam, and Nicla Vision).",
        "Performed unit tests for the whole LTA robot system.",
        "Created the project’s modularized source code version for easy debugging.",
        "Prototyped many iterations of mechanical parts using Solid works to design, 3D prints to assemble mechanisms for an autonomous blimp.",
        "In charge of wiring and soldering hardware components."
    ],
    media: ["assets/Blimp with the capturing mechanism.png", "assets/Motor Holder.png", "assets/Camera Holder.png","assets/Camera Holder1.png", "assets/ForayManual and Autonomous Blimp.png", "assets/ForayManual and Autonomous Blimp.png"],
    mediaLink: ["https://youtu.be/hYQEG7fZWvM", "https://youtu.be/CGRhT1U7Ahw", "https://youtu.be/PkY8R_U4FG4", "https://youtu.be/0T440hIb_TY", "https://youtu.be/lG5X5pIUnPE", "https://youtu.be/lG5X5pIUnPE"]
  },
  "Electrocardiogram": {
    objective: "Use concepts and techniques in electrical circuit design and analysis, cardiac electrophysiology, biophysics, microcontrollers, and computer programming to design, construct, and test circuit boards capable of measuring human electrocardiograms. Capture electrocardiogram data with microcontroller, with computer analysis and display.",
    role: [
        "Designed a single layer PCB using Eagle.",
        "Soldered through hole connections to PCB to connect two LCDs, Wi-Fi module and power source to make a compact self-sufficient ECG.",
        "Utilized SolidWorks software to design casing for ECG and developed those designs using 3D printing and laser cutting.",
        "Programmed LCDs, to display heart signals, heartbeat, and battery percentage (custom characters), and Wi-Fi module to transfer data to a database.",
        "Presented the project to a panel of judges to review based on functionality and won the best overall project in the class."
    ],
    media: ["assets/PCB Design.png", "assets/Electrocardiogram.png", "assets/Electrocardiogram Housing Side.png"], // Example with multiple images
    mediaLink: ["https://youtu.be/Yv0Ds5p7LYg", "https://youtu.be/Zxc6ROLk2cM", "https://youtu.be/aHW3AusMeDM"] // Corresponding links, empty if not applicable
  },
  "HAcK Competition: Manual and Autonomous Car": {
    objective: "HAcK was a competition, for UCLA transfer students, where we had to make a car with autonomous and manual control in a time frame of 48 hours. There were three tiers in this challenge: Control the car using Bluetooth, IR controller and fully autonomously.",
    role: [
        "Collaborated in a team of 3 to assemble an autonomous car with unloading mechanism.",
        "Utilized Solid works to make replica parts and FEA analysis feature to analyze some parts of the assembly of the robot car.",
        "Programmed manual override, control car using Bluetooth module and Remote controller, using Python and C based coding",
        "Utilize ultrasonic sensor and Reflective IR sensor to help the robot car drive through mazes autonomously.",
        "Built team website using CSS, Java Script, and Html, showcasing project overview and delivered a design review to a panel of judges."
    ],
    media: ["assets/CAD Design.png", "assets/Electrocardiogram HousingFront.png", "assets/Electrocardiogram HousingSide.png"],
    mediaLink: ["https://youtu.be/3L13fGZZM7I", "https://youtu.be/3L13fGZZM7I", "https://youtu.be/3L13fGZZM7I"]
  },
  "Programmable Robotic Car": {
    objective: "Use concepts like PID, unit testing and hardware debugging to program the car to navigate through a track following the black center line.",
    role: [
        "Calibrated eight sensors and processed those sensor data values to find optimal proportional component (Kd), derivative component (Kp) and speed for better steering through the track.",
        "Coded the car to follow a track using C based programming."
    ],
    media: ["assets/Programmable Car.png", "assets/Programmable Car in starting position.png"],
    mediaLink: ["https://youtu.be/wRxNcp-DHFI", "https://youtu.be/hjfLRNsFA5w"]
  },
  "Cost Effective 3D Modeling using Point Cloud": {
    objective: "Create a cost-effective way to reconstruct three dimensional objects using Azure Kinetic RGB-D sensor data and Open3d library.",
    role: [
        "Found a most effective method to reconstruct a three-dimensional scenery using RGB-D sensors, Python and Open3D Library.",
        "Identified and resolved existing errors in the Open 3D library and python interface.",
        "Experimented different approaches and functionalities existing in the Open3D library to perfect a object or scenery and reduce the processing time."
    ],
    media: ["assets/Mesh Models.png", "assets/Mesh Models1.png"],
    mediaLink: ["https://lh3.googleusercontent.com/SHeQ7nKP4aMHBU64OJGcmYzTN0jdVP5N8qAH7iPZJ_BRGZCWJIPEWogk1F_ocu0dUOmqXpAFalTQfn5g9fW5oxh33fH7BSjZd6FSrhoQUbtVPVO8s9oae2AwzqJqazHLHQ=w1280"]
  }
  // Define other projects similarly
};



// Assuming projectDetails is defined as shown earlier

function updatePreview(projectName) {
  const details = projectDetails[projectName];

  // Update the project title in the Preview section
  document.querySelector('#preview h2').textContent = projectName;

  // Update the Objective in the Preview section
  document.querySelectorAll('#preview .subtitle h3')[0].nextElementSibling.textContent = details.objective;

  // Dynamically update the Role(s) in the Preview section
  const roleList = document.querySelectorAll('#preview .subtitle h3')[1].nextElementSibling;
  roleList.innerHTML = ''; // Clear existing content
  details.role.forEach(rolePoint => {
      if (rolePoint.trim()) { // Check if the rolePoint is not just empty spaces
          const point = document.createElement('p');
          point.innerHTML = rolePoint;
          roleList.appendChild(point);
      } else { // If an empty string or just spaces, insert a space or new paragraph for visual separation
          roleList.innerHTML += '<p>&nbsp;</p>'; // Adds visual space for empty strings
      }
  });

  // Update Media in the Preview section: Handling multiple media items
  const mediaContainer = document.querySelector('#preview .subtitle .sub-img');
  mediaContainer.innerHTML = ''; // Clear previous media items before updating

  if (details.media && details.media.length > 0) {
      details.media.forEach((mediaSrc, index) => {
          const mediaLinkElement = document.createElement('a');
          mediaLinkElement.href = (details.mediaLink && details.mediaLink[index]) ? details.mediaLink[index] : 'javascript:void(0);'; // Use specific link or fallback
          mediaLinkElement.target = '_blank';
          mediaLinkElement.style.display = 'flex';
          mediaLinkElement.style.justifyContent = 'center'; // Center the media

          const mediaImageElement = document.createElement('img');
          mediaImageElement.src = mediaSrc;
          mediaImageElement.alt = `${projectName} Preview ${index + 1}`;
          mediaImageElement.style.display = 'block';
          mediaImageElement.classList.add('project-preview'); // Apply any necessary styling classes

          mediaLinkElement.appendChild(mediaImageElement); // Add image to link
          mediaContainer.appendChild(mediaLinkElement); // Add link (with image) to container
      });
      mediaContainer.style.display = 'block'; // Ensure container is displayed if there are media items
  } else {
      mediaContainer.style.display = 'none'; // Hide container if no media items
  }
}








