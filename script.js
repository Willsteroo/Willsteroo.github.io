$(document).ready(function(){
    var skillsBtn=$("#skillsBtn"),
        aboutBtn=$("#aboutBtn"),
        contactBtn=$("#contactBtn"),
        projectsBtn=$("#projectsBtn"),
        
        skills=$("#skills"),
        about=$("#about"),
        contact=$("#contact"),
        projects=$("#projects");
    
    function hidestuff(){
        skills.hide();
        about.hide();
        contact.hide();
        projects.hide();
    }
    function showstuff(){
        skills.show();
        about.show();
        contact.show();
        projects.show();
    }
    function hideButtons() {
        skillsBtn.hide();
        aboutBtn.hide();
        contactBtn.hide();
        projectsBtn.hide();
    }
    function showButtons() {
        skillsBtn.show();
        aboutBtn.show();
        contactBtn.show();
        projectsBtn.show();
    }
    
    skillsBtn.click(function () {
        hidestuff();
        skills.fadeIn(500);    
    });
    aboutBtn.click(function(){
        hidestuff();
        about.fadeIn(500);
    });
    contactBtn.click(function(){
        hidestuff();
        contact.fadeIn(500);
    });
    projectsBtn.click(function(){
        hidestuff();
        projects.fadeIn(500);
    });
    var w=window.innerWidth;
    if (w<1200){
        hideButtons();
        showstuff();
        $("#nav").hide();
    } else if (w>1200) {
        hidestuff();
        contact.show();
        showButtons();
    }
    
});