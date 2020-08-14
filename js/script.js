var btnSeeMore = document.querySelector('.btnSeeMore');
var resume = document.querySelector('.resume')

btnSeeMore.addEventListener('click', function(){
    resume.classList.add('resume-vm');
    btnSeeMore.classList.add('btnDisappear');
})


var contentDiscussion = document.querySelector('.content-discussion');
var newTopic = document.querySelector('.newTopic');
var btnNewTopic = document.querySelector('.btnNewTopic');

btnNewTopic.addEventListener('click', function(){
    contentDiscussion.classList.add('hide');
    newTopic.classList.remove('hide');
})


var expand = document.querySelector('.expand');
var topicExpanded = document.querySelector('.topic-expanded');

expand.addEventListener('click', function(){
    expand.classList.add('hide');
    topicExpanded.classList.remove('hide');
})