export default {

    showNotification: function (variant, bodyContent) {
        let title = variant;
        let delay = 30000;
        if(title == "success"){
            title ="success";
            delay = 5000;
        }else if(title == "danger"){
            title ="Error";
        }else if(title == "warning"){
            title ="Warning";
        }
        this.$bvToast.toast(bodyContent, {
            title: title,
            variant: variant,
            solid: true,
            autoHideDelay: delay,
        });
    },
    base64ToPdfAndOpenWindow: function (data, mimeType) {
        var byteCharacters = atob(data);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        var file = new Blob([byteArray], { type: mimeType + ';base64' });
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
    },
    loadStudent: function (student) {
        this.selectedPen = student[0].pen;
        this.selectedId = student[0].studentID;
        let path = 'student-profile';
        var currentRoute =  this.$route.path.split("/").slice(1)[0];

        this.$router.push({
          path: `/student-profile/${this.selectedPen}/${this.selectedId}`
        });
        //Used for reloading if on the same Student Profile page  
        if(path == currentRoute){
          location.reload();
        }
    },
}