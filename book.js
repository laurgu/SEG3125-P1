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
      allison: "Meet Allison, an intermediate hair stylist specializing in transformative color. With a keen eye for detail and years of experience, she creates vibrant and personalized looks that bring out the unique beauty of each client. From bold transformations to subtle enhancements, Allison's expertise and dedication ensure exceptional results. Book an appointment today and experience her skillful artistry.",
      harley: "Meet Harley, an experienced hairdresser specializing in stunning short hairstyles. With a keen eye for detail, he creates personalized cuts and styles that suit your features and personality. From trendy bobs to chic pixie cuts, Harley stays up to date with the latest techniques for a modern and flattering look. Book an appointment today and transform your short hair with Harley's expertise.",
      kate: "Meet Kate, a passionate stylist on an exciting hairdressing journey. With a commitment to excellence, they bring curiosity to each client, understanding their unique needs. Constantly expanding their skills, Kate brings visions to life with precision and creativity. With a warm personality, they value trust and open communication. Book an appointment with Kate to experience their dedication and beautiful hairstyles that boost confidence.",
      mark: "Meet Mark, an experienced hairstylist known for his expertise in complicated cuts and heavy layering. With a keen eye for detail and a wealth of experience, Mark brings precision and finesse to every haircut he creates. His ability to transform hair with intricate techniques and create stunning layered styles sets him apart in the industry. Mark's dedication to client satisfaction and his passion for staying updated on the latest trends make him the go-to stylist for those seeking a unique and sophisticated look. Book an appointment with Mark today and experience his mastery in achieving beautifully crafted and layered hairstyles.",
      patrick: "Meet Patrick, an intermediate-level hair stylist who specializes in color transformations. With a passion for creativity and a keen eye for detail, he brings years of experience to his craft. Patrick's expertise in color theory and trends allows him to create personalized looks that accentuate his clients' unique features. Whether you're looking for a bold change or a subtle enhancement, Patrick's skillful techniques will deliver exceptional results. Book an appointment with Patrick today and let his intermediate-level expertise elevate your hair color to new heights.",
      zoey: "Meet Zoey, our talented hair stylist specializing in exquisite updos and elegant hairstyles. With a passion for creativity and attention to detail, she creates stunning masterpieces for special occasions, weddings, and formal events. From intricate braids to glamorous chignons, Zoey's artistic vision will make you feel confident and beautiful. Book an appointment today and let Zoey work her magic, leaving you with a breathtaking updo or a fabulous hairstyle that turns heads.",
   
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
  
  // Assuming you have the values stored in variables
  nameElement.textContent = `${firstName} ${lastName}`;
  emailElement.textContent = email;
  phoneElement.textContent = phone;
  cutElement.textContent = summaryCut;
  colorElement.textContent = summaryColor;
  styleElement.textContent = summaryStyle;
  timeElement.textContent = summaryTime;
  stylistElement.textContent = summaryStylist;
  allset.textContent = "You're all set! Here are your appointment details!";
  seeYou.textContent = "We can't wait to see you " + firstName + "!";
  
  // Display the modal
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

  
  });


