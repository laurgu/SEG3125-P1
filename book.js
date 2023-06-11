document.addEventListener('DOMContentLoaded', () => {
  const radioButtons = document.querySelectorAll('.stylist-select');
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', handleRadioButtonChange);
  });

  function handleRadioButtonChange() {

    const selectedStylist = document.querySelector('input[name="stylist-select"]:checked').id;
    const profilePic = document.getElementById('profile-pic');
    const summaryStylist = document.getElementById("summary-stylist");
    const stylistImages = {
      anyone:'',
      allison: 'images/Allison.jpg',
      harley: 'images/Harley.jpeg',
      kate: 'images/Kate.png',
      mark: 'images/Mark.jpeg',
      patrick: 'images/Patrick.jpeg',
      zoey: 'images/Zoey.png',
    };
    profilePic.src = stylistImages[selectedStylist] || 'images/default.jpg';
    const stylistName = document.getElementById('stylist-name');
    stylistName.textContent = selectedStylist === 'anyone' ? '' : selectedStylist.toUpperCase();
    const bio = document.getElementById('bio');
    const stylistBios = {
      allison: "Meet Allison, an intermediate hairstylist specializing in transformative color. With years of experience, she creates personalized looks that enhance each client's unique beauty. Book an appointment today and experience her skillful artistry.",
      harley: "Meet Harley, an experienced hairstylist specializing in stunning short hairstyles. With a keen eye for detail, he creates personalized cuts and styles that suit your features and personality. Book an appointment today and transform your short hair with Harley's expertise.",
      kate: "Meet Kate, a skilled hairstylist dedicated to bringing your hair visions to life. With a warm and personable approach, Kate values trust and open communication to ensure your satisfaction. Book an appointment today and experience their dedication to creating beautiful hairstyles that boost your confidence.",
      patrick: "Meet Mark, an experienced hairstylist known for intricate cuts and layered styles. With precision and expertise, Mark creates stunning transformations and keeps up with the latest trends. Book with Mark for a unique and sophisticated look.",
      zoey: "Meet Patrick, an experienced hair stylist specializing in color transformations. With a keen eye for detail, he creates personalized looks that accentuate your unique features. Book an appointment today and let him elevate your hair color to new heights.",
      mark: "Meet Mark, an experienced hairstylist known for intricate cuts and layered styles. With precision and expertise, Mark creates stunning transformations and keeps up with the latest trends. Book with Mark for a unique and sophisticated look."
    };
    bio.textContent = stylistBios[selectedStylist];
    profilePic.style.display = selectedStylist === 'anyone' ? 'none' : 'block';
    stylistName.style.display = selectedStylist === 'anyone' ? 'none' : 'block';
    bio.style.display = selectedStylist === 'anyone' ? 'none' : 'block';
    summaryStylist.textContent = summaryStylist.textContent = stylistName.textContent.charAt(0).toUpperCase() + stylistName.textContent.slice(1).toLowerCase();
  }
  
    const colorRadios = document.querySelectorAll('.color');
    const summaryColor = document.getElementById('summary-color');
  
    colorRadios.forEach((radio) => {
      radio.addEventListener('change', updateSelectedColor);
    });
  
    function updateSelectedColor() {
      let selectedColor = '';
  
      colorRadios.forEach((radio) => {
        if (radio.checked) {
          selectedColor = radio.nextElementSibling.textContent.charAt(0).toUpperCase() + radio.nextElementSibling.textContent.slice(1).toLowerCase();
          return;
        }
      });
  
      summaryColor.textContent = selectedColor;
    }
  
    const cutRadios = document.querySelectorAll('.cut');
    const summaryCut = document.getElementById('summary-cut');
  
    cutRadios.forEach((radio) => {
      radio.addEventListener('change', updateSelectedCut);
    });
  
    function updateSelectedCut() {
      let selectedCut = '';
  
      cutRadios.forEach((radio) => {
        if (radio.checked) {
          selectedCut = radio.nextElementSibling.textContent.charAt(0).toUpperCase() + radio.nextElementSibling.textContent.slice(1).toLowerCase();
          return;
        }
      });
  
      summaryCut.textContent = selectedCut;
    }
  
    const styleRadios = document.querySelectorAll('.style');
    const summaryStyle = document.getElementById('summary-style');
  
    styleRadios.forEach((radio) => {
      radio.addEventListener('change', updateSelectedStyle);
    });
  
    function updateSelectedStyle() {
      let selectedStyle = '';
  
      styleRadios.forEach((radio) => {
        if (radio.checked) {
          selectedStyle = radio.nextElementSibling.textContent.charAt(0).toUpperCase() + radio.nextElementSibling.textContent.slice(1).toLowerCase();
          return;
        }
      });
  
      summaryStyle.textContent = selectedStyle;
    }
    const timeButtons = document.querySelectorAll('.time-buttons');
    const summaryTime = document.getElementById('summary-time');
    
    timeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const selectedButton = button;
        const column = selectedButton.closest('.day');
    
        timeButtons.forEach(btn => {
          btn.classList.remove('selected');
        });
    
        selectedButton.classList.add('selected');
    
        const selectedTime = selectedButton.value;
    
        let date;
        if (column.classList.contains('day1')) {
          date = 6;
        } else if (column.classList.contains('day2')) {
          date = 7;
        } else if (column.classList.contains('day3')) {
          date = 8;
        } else if (column.classList.contains('day4')) {
          date = 9;
        } else if (column.classList.contains('day5')) {
          date = 10;
        } else if (column.classList.contains('day6')) {
          date = 11;
        } else if (column.classList.contains('day7')) {
          date = 12;
        } else if (column.classList.contains('day8')) {
          date = 13;
        }
    
        summaryTime.innerText = "June " + date + " 2023 at "+selectedTime;
      });
    });
    

    
const bookButton = document.getElementById('book-button');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementsByClassName('close')[0];
const summaryElement = document.getElementById('summary');

bookButton.addEventListener('click', () => {
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone-number").value;

  const summaryCut = document.getElementById("summary-cut").textContent;
  const summaryColor = document.getElementById("summary-color").textContent;
  const summaryStyle = document.getElementById("summary-style").textContent;
  const summaryTime = document.getElementById("summary-stylist").textContent;
  const summaryStylist = document.getElementById("summary-time").textContent;
  const summaryRequests = document.getElementById("comments").value;

  const modal = document.getElementById('modal');
  const nameElement = document.getElementById('name');
  const emailElement = document.getElementById('email');
  const phoneElement = document.getElementById('phone');
  const cutElement = document.getElementById('cut');
  const colorElement = document.getElementById('color');
  const styleElement = document.getElementById('style');
  const timeElement = document.getElementById('time');
  const stylistElement = document.getElementById('stylist');
  const allSet = document.getElementById("allset");
  const seeYou = document.getElementById("seeyou");
  const requests = document.getElementById("requests");
  
  // Assuming you have the values stored in variables
  nameElement.textContent = `${firstName} ${lastName}`;
  emailElement.textContent = email;
  phoneElement.textContent = phone;
  cutElement.textContent = summaryCut;
  colorElement.textContent = summaryColor;
  styleElement.textContent = summaryStyle;
  timeElement.textContent = summaryTime;
  stylistElement.textContent = summaryStylist;
  allSet.textContent = "You're all set! Here are your appointment details!";
  seeYou.textContent = "We can't wait to see you " + firstName + "!";
  
  if(summaryRequests === ""){
    requests.textContent = " None";
  }else{
  requests.textContent = summaryRequests;

  }
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

  
  });


