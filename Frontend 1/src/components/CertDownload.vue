<template>
  <div>
    <div id="certificate">
        <h6 id="id">Certificate ID:{{user._id}}</h6>
      <div class="certificate">
        <h3>This is to certify that</h3>
        <h1>{{user.name}}</h1>
        <h6>
          ____________________________________________________________________________________
        </h6>
        <h3>has successfully cleared the assessment for the skill</h3>
        <h2>{{user.course}}</h2>
      </div>
      <div id="date">
        <h4>{{user.date}}</h4>
        <h6>-------------------------</h6>
        <h5>Date & Time</h5>
      </div>
      <div id="sign">
        <img id="sign_pic" src="./sign.png" alt="Sign">
        <h6>_______________________________</h6>
        <h4>Director <h6>(FYND Academy)</h6></h4>
      </div>
    </div>
    <button @click="generatePDF" id="downloadButton"
      >Click Here to download</button
    >
  </div>
</template>
<script>
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import axios from "axios"
export default {
  name: "CertDownload",
  data(){
      return {
          user:null
      }
  },
  async created(){
    const response= await axios.get(`http://localhost:4000/certs/${localStorage.getItem("certId")}`);
    this.user=response.data.cert[0]
  },
  methods: {

    async generatePDF() {
      document.getElementById("downloadButton").innerHTML =
        "Currently downloading, please wait";

      //Downloading
      var downloading = document.getElementById("certificate");
      var doc = new jsPDF("l", "pt");

      await html2canvas(downloading, {
        allowTaint: true,
        useCORS: true,
        width: 950,
      }).then((canvas) => {
        doc.addImage(canvas.toDataURL("image/png"), "PNG", 5, 5, 850, 600);
      });
      doc.save("Document.pdf");

      document.getElementById("downloadButton").innerHTML = "click to download";
    },
  },
};
</script>

<style scoped>
* {
  margin: 0px;
  text-align: center;
  color: black;
}
#id{
    padding-top: 170px;
}
#certificate {
  height: 665px;
  width: 930px;
  background-image: url(bg.png);
  background-repeat: no-repeat;
}
.certificate {
  padding-top: 50px;
}
h1 {
  margin-top: 5px;
  color: red;
  font-size: 2.5em;
}
h2,
h3 {
  margin-top: 16px;
}
h2 {
  color: rgb(21, 214, 214);
}
#date {
  float: left;
  margin-left: 130px;
  margin-top: 100px;
}
#sign_pic{
    height: 45px;
}
#sign{
    float: right;
    margin-top: 60px;
    margin-right: 125px;
}
</style>