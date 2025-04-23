document.addEventListener("DOMContentLoaded", function(){

    const downloadBtn = document.getElementById("downloadBtn");


    if(downloadBtn){ 
        downloadBtn.addEventListener("click", function(){
            const elemen = document.body;

            const content = {
                margin: 0.5,
                filename: "CV.pdf",
                image: {type: "jpeg",quality: 0.98},
                html2canvas: { scale: 2 },
                jsPDF: { unit: "in", format: "letter", orientation: "portrait"}
            };

            html2pdf().set(content).from(elemen).save();
    });

    }
});