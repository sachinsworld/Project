<template>
<div class="page">
<NavBar/>
    <div>
        <div class="q_parent">
        <div id="q_text"> 
            <div id="text1" ><h1>Feel Free To Contact us <br> Your Website Needs</h1></div>
            <div id="text2"><h4>For more details you can connect us Social Media</h4></div>
            <div id="text3"><h3>For any enquiry, Call Us:   
                <img id="q_callbtn" src="data:image/png;base64,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" alt="call symbol">    
                12 1234 1234
            </h3></div>     
        </div>
        <div id="q_deadspace"></div>
         <div id="socialmedia">
            <a  href="https://www.facebook.com/"><img id="fb" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt=""></a>
            <a  href="https://www.instagram.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="" id="insta"></a>
            <a  href="https://twitter.com/"><img src="https://1000logos.net/wp-content/uploads/2021/04/Twitter-logo.png" alt="" id="twitter"></a>
            <a  href="https://www.linkedin.com/in/sachin-kumar-03064521b/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" id="li"></a>
        </div>
    </div>

    <div>
        <footer class="footer"><div>©Copyright 2023 All Rights Reserved.</div>
            <div>design:<span id="dname">Sachin Kumar</span></div>
        </footer>
    </div>
</div>
</div>
</template>


<script>
import NavBar from '../components/NavBar.vue'
export default {
    components:{
        NavBar
    }
}
</script>

<style scoped>
.q_parent{
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(49, 49, 49);
    background-color: rgba(215, 250, 239, 0.558); 
    /* background: rgb(6, 126, 126);  */
    padding: 8%;
    height: 60vh;
}


#q_callbtn{
    height: 20px;
    border: rgba(0, 255, 149, 0.176) solid 0.5px;
    border-radius: 100px;
}

#q_deadspace{
    flex-grow: 0.6;
}
#fb,#insta,#twitter,#li{
    padding: 5px;
    height: 80px;
    margin: 3px;
}
#socialmedia,.footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
#text1,#text2,#text3{
    margin:10px;
}

</style>