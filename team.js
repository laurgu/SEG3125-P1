document.addEventListener('DOMContentLoaded', () => {
    const allisonBtn = document.getElementById('view-allison');
    const allisonModal = document.getElementById('allison-modal');
    
  
    const harleyBtn = document.getElementById('view-harley');
    const harleyModal = document.getElementById('harley-modal');

    const kateBtn = document.getElementById('view-kate');
    const kateModal = document.getElementById('kate-modal');

    const patrickBtn = document.getElementById('view-patrick');
    const patrickModal = document.getElementById('patrick-modal');

    const markBtn = document.getElementById('view-mark');
    const markModal = document.getElementById('mark-modal');

    const zoeyBtn = document.getElementById('view-zoey');
    const zoeyModal = document.getElementById('zoey-modal');
  
    const closeModal = (modal) => {
      modal.style.display = 'none';
    };
  
    allisonBtn.addEventListener('click', () => {
      allisonModal.style.display = 'block';
    });
  
    const allisonCloseBtn = allisonModal.getElementsByClassName('close')[0];
    allisonCloseBtn.addEventListener('click', () => {
      closeModal(allisonModal);
    });
  
    harleyBtn.addEventListener('click', () => {
      harleyModal.style.display = 'block';
    });
  
    const harleyCloseBtn = harleyModal.getElementsByClassName('close')[0];
    harleyCloseBtn.addEventListener('click', () => {
      closeModal(harleyModal);
    });

    kateBtn.addEventListener('click', () => {
        kateModal.style.display = 'block';
      });
    
      const kateCloseBtn = kateModal.getElementsByClassName('close')[0];
      kateCloseBtn.addEventListener('click', () => {
        closeModal(kateModal);
      });

      markBtn.addEventListener('click', () => {
        markModal.style.display = 'block';
      });
    
      const markCloseBtn = markModal.getElementsByClassName('close')[0];
      markCloseBtn.addEventListener('click', () => {
        closeModal(markModal);
      });

      zoeyBtn.addEventListener('click', () => {
        zoeyModal.style.display = 'block';
      });
    
      const zoeyCloseBtn = zoeyModal.getElementsByClassName('close')[0];
      zoeyCloseBtn.addEventListener('click', () => {
        closeModal(zoeyModal);
      });

      patrickBtn.addEventListener('click', () => {
        patrickModal.style.display = 'block';
      });
    
      const patrickCloseBtn = patrickModal.getElementsByClassName('close')[0];
      patrickCloseBtn.addEventListener('click', () => {
        closeModal(patrickModal);
      });
  });
  